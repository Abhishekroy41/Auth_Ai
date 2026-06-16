import { SITE } from '../../data/site'

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: [
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "Process", href: "#process" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Register Now", href: SITE.wadeskUrl },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Refund Policy", href: "#" },
    ]
  }
];

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 text-slate-600 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-to-b from-blue-100/60 to-transparent blur-3xl opacity-80 pointer-events-none"></div>
      
      <div className="site-container py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between">
          
          {/* Left Brand & Info */}
          <div className="flex flex-col items-start max-w-sm">
            <div className="text-sm text-slate-500 font-medium mb-6 space-y-2">
              <p>© {year} AUTH AI. All rights reserved.</p>
              <p className="flex items-center gap-1.5">
                Made with <span className="text-red-500">❤️</span> in India
              </p>
            </div>

            <img 
              src={`${import.meta.env.BASE_URL}Images/meta-partner.png`} 
              alt="Meta Business Partner" 
              className="h-20 mb-6 object-contain hover:scale-105 transition-transform duration-300 mix-blend-multiply opacity-90" 
            />

            <a href="#home" className="inline-block transition-transform hover:opacity-80">
              <span className="font-display font-extrabold text-slate-900 text-3xl tracking-tight">
                {'{'}Auth Ai{'}'}
              </span>
            </a>
          </div>

          {/* Right Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 w-full lg:w-auto">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
