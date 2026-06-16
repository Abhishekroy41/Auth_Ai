import { SITE } from '../../data/site'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Eyebrow from '../ui/Eyebrow'

const CONTACT_ITEMS = [
  { icon: 'phone',   label: SITE.whatsappDisplay,        sub: 'Call or WhatsApp' },
  { icon: 'mail',    label: SITE.email,                  sub: 'Email us anytime' },
  { icon: 'map-pin', label: SITE.location,               sub: 'Serving businesses pan-India' },
  { icon: 'clock',   label: SITE.hours,                  sub: 'WhatsApp support hours' },
]

export default function Contact() {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=Hi%20AUTH%20AI%2C%20I%27d%20like%20to%20get%20started`

  return (
    <section id="contact" className="section-block bg-slate-50">
      <div className="site-container site-container--narrow">
        <div className="reveal bg-white border border-slate-100 rounded-3xl shadow-sm p-8 sm:p-12 lg:p-14 text-center">
          <Eyebrow center>Get Started</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ready to put your business on autopilot?
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
            Tell us about your business on WhatsApp — we'll get back to you within the hour.
          </p>

          <Button
            href={waHref}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-ring"
          >
            <Icon name="message-square" className="w-5 h-5" />
            Chat on WhatsApp
          </Button>

          <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                  <Icon name={item.icon} className="w-4 h-4" />
                </div>
                <p className="font-semibold text-slate-900 text-xs text-center leading-snug">{item.label}</p>
                <p className="text-slate-400 text-xs text-center">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
