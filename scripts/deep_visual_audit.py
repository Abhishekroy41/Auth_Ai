"""Deep visual audit - scroll entire page to trigger reveals, then check invisible content."""
import json
import os
from playwright.sync_api import sync_playwright

URL = "http://localhost:5174/"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "screenshots")

REVEAL_CHECK = """
() => {
  const issues = [];
  const vw = window.innerWidth;

  // Elements still hidden after full scroll
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    const text = (el.textContent || '').trim().slice(0, 80);
    if (text.length > 5 && rect.height > 10) {
      let section = 'unknown';
      const parent = el.closest('section[id]');
      if (parent) section = parent.id;
      issues.push({
        type: 'stuck_reveal_hidden',
        severity: 'critical',
        section,
        text,
        opacity: getComputedStyle(el).opacity,
        height: Math.round(rect.height)
      });
    }
  });

  // Zero-opacity visible content (not reveal)
  document.querySelectorAll('section *').forEach(el => {
    const style = getComputedStyle(el);
    const opacity = parseFloat(style.opacity);
    const rect = el.getBoundingClientRect();
    const text = (el.textContent || '').trim();
    if (opacity === 0 && text.length > 10 && rect.height > 20 && !el.classList.contains('reveal')) {
      const section = el.closest('section[id]')?.id || 'unknown';
      issues.push({ type: 'opacity_zero', severity: 'high', section, text: text.slice(0, 60) });
    }
  });

  // Chat animation - messages invisible at snapshot
  ['.msg-1', '.msg-2', '.typing-wrap'].forEach(sel => {
    const el = document.querySelector(sel);
    if (el) {
      const opacity = parseFloat(getComputedStyle(el).opacity);
      issues.push({ type: 'chat_animation_state', severity: 'info', element: sel, opacity,
        note: 'Cyclic animation - content fades in/out by design' });
    }
  });

  // Process connector overlap
  const connectors = document.querySelectorAll('#process .absolute');
  connectors.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    issues.push({ type: 'process_connector', index: i, width: rect.width, height: rect.height,
      left: rect.left, right: rect.right });
  });

  // Horizontal overflow
  const overflow = document.documentElement.scrollWidth > vw;
  if (overflow) {
    issues.push({ type: 'horizontal_overflow', scrollWidth: document.documentElement.scrollWidth, vw });
  }

  // Check contrast on results section
  document.querySelectorAll('#results p').forEach(p => {
    const color = getComputedStyle(p).color;
    issues.push({ type: 'results_label_color', color, text: p.textContent.trim() });
  });

  // Mobile hamburger size
  const burger = document.querySelector('header button[aria-label="Toggle menu"]');
  if (burger) {
    const r = burger.getBoundingClientRect();
    issues.push({ type: 'hamburger_size', width: r.width, height: r.height });
  }

  // FAQ plus icon touch target
  const faqBtns = document.querySelectorAll('#faq button');
  faqBtns.forEach((btn, i) => {
    const r = btn.getBoundingClientRect();
    const icon = btn.querySelector('span.flex-shrink-0');
    const ir = icon ? icon.getBoundingClientRect() : null;
    issues.push({ type: 'faq_button', index: i, btnH: r.height, iconW: ir?.width, iconH: ir?.height });
  });

  // Industries grid text overflow
  document.querySelectorAll('#industries .grid > div').forEach(el => {
    if (el.scrollWidth > el.clientWidth + 2) {
      issues.push({ type: 'industry_text_overflow', text: el.textContent.trim(),
        scrollW: el.scrollWidth, clientW: el.clientWidth });
    }
  });

  // Testimonial quote mark overlap
  const quotes = document.querySelectorAll('#testimonials blockquote');
  quotes.forEach((q, i) => {
    const mark = q.querySelector('span.absolute');
    const text = q.querySelector('span.relative');
    if (mark && text) {
      const mr = mark.getBoundingClientRect();
      const tr = text.getBoundingClientRect();
      if (mr.bottom > tr.top + 20) {
        issues.push({ type: 'quote_mark_overlap', index: i });
      }
    }
  });

  // Section background mismatches
  const appBg = getComputedStyle(document.querySelector('.min-h-screen')).backgroundColor;
  issues.push({ type: 'app_bg', color: appBg });

  return issues;
}
"""

def scroll_and_audit(page, name):
    scroll_height = page.evaluate("document.documentElement.scrollHeight")
    vh = page.viewport_size["height"]
    # Slow scroll to trigger all intersection observers
    steps = max(20, scroll_height // 100)
    for i in range(steps + 1):
        y = int((scroll_height - vh) * i / steps)
        page.evaluate(f"window.scrollTo(0, {y})")
        page.wait_for_timeout(80)
    page.wait_for_timeout(800)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(300)

    # Screenshot after full reveal cycle
    page.screenshot(path=os.path.join(OUT_DIR, f"{name}-after-full-scroll-top.png"))

    # Scroll to process section
    page.evaluate("document.getElementById('process')?.scrollIntoView({block:'center'})")
    page.wait_for_timeout(600)
    page.screenshot(path=os.path.join(OUT_DIR, f"{name}-process-section.png"))

    # Scroll to about+contact
    page.evaluate("document.getElementById('about')?.scrollIntoView({block:'start'})")
    page.wait_for_timeout(600)
    page.screenshot(path=os.path.join(OUT_DIR, f"{name}-about-contact.png"))

    return page.evaluate(REVEAL_CHECK)

with sync_playwright() as p:
    browser = p.chromium.launch()
    results = {}
    for name, vp in [("desktop", {"width": 1280, "height": 800}), ("mobile", {"width": 375, "height": 812})]:
        page = browser.new_page(viewport=vp)
        page.goto(URL, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(1000)
        results[name] = scroll_and_audit(page, name)
        page.close()
    browser.close()

print(json.dumps(results, indent=2))
with open(os.path.join(OUT_DIR, "deep-audit.json"), "w") as f:
    json.dump(results, f, indent=2)
