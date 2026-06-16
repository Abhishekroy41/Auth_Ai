import { useState, useEffect } from 'react'
import { SITE, NAV_LINKS } from '../../data/site'
import Icon from '../ui/Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`
            setActiveSection(id)
            // Update URL hash without causing a page jump
            if (window.location.hash !== id) {
              window.history.replaceState(null, '', id)
            }
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    // Observe all sections that have an ID
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const waHref = `https://wa.me/${SITE.whatsapp}?text=Hi%20AUTH%20AI%2C%20I%27d%20like%20to%20know%20more%20about%20your%20plans`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <style>
        {`
          @keyframes slide-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text-glow {
            background-size: 200% auto;
            animation: slide-gradient 3s linear infinite;
          }
        `}
      </style>
      {/* Announcement Bar */}
      <div className="bg-[#eef2ff] border-b border-[#e0e7ff] text-[#4f46e5] px-4 py-2.5 text-sm font-medium text-center relative overflow-hidden flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366f1] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4f46e5]"></span>
        </span>
        <span className="font-bold tracking-wide uppercase text-[10px] sm:text-xs px-2 py-0.5 bg-white rounded-md shadow-sm text-[#4338ca]">
          New Release
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-indigo-600 animate-text-glow font-bold text-xs sm:text-sm drop-shadow-sm tracking-wide">
          Deploy WhatsApp AI agents that capture, qualify & convert leads 24/7.
        </span>
        <a href="#services" className="font-bold underline decoration-2 underline-offset-2 hover:text-[#3730a3] transition-colors text-xs sm:text-sm ml-1">
          Explore Features &rarr;
        </a>
      </div>

      <div className="site-container">
        <div className="flex items-center h-16 gap-3">
          <a href="#home" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
            <span className="font-display font-extrabold text-slate-900 text-2xl tracking-tight">
              {'{'}Auth Ai{'}'}
            </span>
          </a>

          <nav className="hidden xl:flex items-center justify-center gap-5 flex-1 min-w-0 px-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === link.href
                    ? 'text-[#00e676]'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3 shrink-0 ml-auto">
            <a
              href={SITE.wadeskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              Login to WA CRM
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-wa text-white text-sm font-semibold hover:bg-wa-dark transition-colors shadow-sm whitespace-nowrap"
            >
              <Icon name="message-square" className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          <button
            className="xl:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'x' : 'menu'} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-slate-100 bg-white max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="site-container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'bg-[#eafff0] text-[#00c853]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={SITE.wadeskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Login to WA CRM ↗
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-wa text-white text-sm font-semibold"
              >
                <Icon name="message-square" className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
