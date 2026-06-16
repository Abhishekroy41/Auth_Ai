import { SITE, NAV_LINKS } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="site-container py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" className="flex items-center mb-4">
              <span className="font-display font-extrabold text-white text-2xl tracking-tight">
                {'{'}Auth Ai{'}'}
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              {SITE.tagline}
            </p>
            <img src="/Images/meta-partner.png" alt="Meta Business Partner" className="h-16 opacity-90 hover:opacity-100 transition-opacity mix-blend-screen invert grayscale brightness-200" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.wadeskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {year} AUTH AI. All rights reserved.</span>
          <span>Meta Official Partner · {SITE.email}</span>
        </div>
      </div>
    </footer>
  )
}
