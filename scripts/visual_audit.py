"""Capture full-page visual audit screenshots at multiple scroll positions."""
import os
import json
from playwright.sync_api import sync_playwright

URL = "http://localhost:5174/"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "screenshots")
VIEWPORTS = [
    ("desktop", 1280, 800),
    ("mobile", 375, 812),
]

os.makedirs(OUT_DIR, exist_ok=True)

def capture_audit():
    results = {"url": URL, "viewports": {}}

    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, width, height in VIEWPORTS:
            page = browser.new_page(viewport={"width": width, "height": height})
            page.goto(URL, wait_until="networkidle", timeout=60000)
            page.wait_for_timeout(2000)  # allow animations to settle

            vp_data = {
                "width": width,
                "height": height,
                "page_height": page.evaluate("document.documentElement.scrollHeight"),
                "screenshots": [],
            }

            # Top of page (above fold)
            top_path = os.path.join(OUT_DIR, f"{name}_top.png")
            page.screenshot(path=top_path, full_page=False)
            vp_data["screenshots"].append({"scroll": 0, "path": top_path})

            # Full page screenshot
            full_path = os.path.join(OUT_DIR, f"{name}_full.png")
            page.screenshot(path=full_path, full_page=True)
            vp_data["screenshots"].append({"scroll": "full", "path": full_path})

            # Scroll through page in viewport-sized steps
            scroll_height = page.evaluate("document.documentElement.scrollHeight")
            step = height
            scroll_y = step
            idx = 1
            while scroll_y < scroll_height:
                page.evaluate(f"window.scrollTo(0, {scroll_y})")
                page.wait_for_timeout(500)
                scroll_path = os.path.join(OUT_DIR, f"{name}_scroll_{idx}.png")
                page.screenshot(path=scroll_path, full_page=False)
                vp_data["screenshots"].append({"scroll": scroll_y, "path": scroll_path})
                scroll_y += step
                idx += 1

            # Check for horizontal overflow
            overflow = page.evaluate("""
                () => {
                    const body = document.body;
                    const html = document.documentElement;
                    return Math.max(body.scrollWidth, html.scrollWidth) > window.innerWidth;
                }
            """)
            vp_data["horizontal_overflow"] = overflow

            # Collect element visibility issues
            issues = page.evaluate("""
                () => {
                    const issues = [];
                    const selectors = ['h1','h2','h3','p','a','button','img','section','nav'];
                    const seen = new Set();
                    for (const sel of selectors) {
                        document.querySelectorAll(sel).forEach(el => {
                            if (seen.has(el)) return;
                            seen.add(el);
                            const rect = el.getBoundingClientRect();
                            const style = window.getComputedStyle(el);
                            const text = (el.innerText || el.alt || el.tagName).slice(0, 80);
                            const opacity = parseFloat(style.opacity);
                            const visibility = style.visibility;
                            const display = style.display;
                            const overflow = style.overflow;
                            const color = style.color;
                            const bg = style.backgroundColor;
                            const fontSize = style.fontSize;
                            const fontFamily = style.fontFamily;
                            const zIndex = style.zIndex;
                            const transform = style.transform;

                            // Check if element is in DOM but invisible
                            if (display === 'none') return;
                            if (visibility === 'hidden') {
                                issues.push({type: 'visibility_hidden', tag: el.tagName, text, selector: sel});
                            }
                            if (opacity === 0) {
                                issues.push({type: 'opacity_zero', tag: el.tagName, text, selector: sel});
                            }
                            // Off-screen content that's not intentionally hidden
                            if (rect.width > 0 && rect.height > 0 && rect.top > window.innerHeight * 3 && el.tagName !== 'SCRIPT') {
                                // only flag if near viewport during scroll - skip for now
                            }
                            // Text too small on mobile
                            if (window.innerWidth < 500 && parseFloat(fontSize) < 12 && el.innerText && el.innerText.trim()) {
                                issues.push({type: 'small_text', tag: el.tagName, text, fontSize, selector: sel});
                            }
                            // Zero size visible elements with content
                            if (rect.width === 0 && rect.height === 0 && el.innerText && el.innerText.trim().length > 0 && display !== 'none') {
                                issues.push({type: 'zero_size', tag: el.tagName, text, selector: sel});
                            }
                            // Overflow hidden with clipped text
                            if (overflow === 'hidden' && el.scrollHeight > el.clientHeight + 5 && el.clientHeight > 0 && el.innerText && el.innerText.trim()) {
                                issues.push({type: 'text_clipped', tag: el.tagName, text, scrollH: el.scrollHeight, clientH: el.clientHeight, selector: sel});
                            }
                        });
                    }
                    return issues.slice(0, 50);
                }
            """)
            vp_data["dom_issues"] = issues

            results["viewports"][name] = vp_data
            page.close()

        browser.close()

    audit_path = os.path.join(OUT_DIR, "visual-audit-results.json")
    with open(audit_path, "w") as f:
        json.dump(results, f, indent=2)
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    capture_audit()
