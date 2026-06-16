import { SITE, ABOUT_STATS } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function About() {
  return (
    <section id="about" className="section-block bg-slate-50">
      <div className="site-container grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left */}
        <div className="reveal">
          <SectionHead
            eyebrow="About AUTH AI"
            title="We handle everything. You just run your business."
            center={false}
          />
          <div className="space-y-5 text-slate-500 text-base sm:text-lg leading-relaxed">
            <p>
              AUTH AI is a <strong className="text-slate-800 font-semibold">Meta Official Partner</strong> based in Dhanbad, Jharkhand, helping Tier 2 and Tier 3 businesses across India get found online, capture every lead, and follow up automatically — without hiring an in-house digital team.
            </p>
            <p>
              We work in the language and rhythm of local markets, because that's where we're from too. From a clinic in a district town to a builder with multiple sites, every plan is built around how your customers actually search, ask and decide.
            </p>
            <p>
              Every AUTH AI plan runs on <strong className="text-slate-800 font-semibold">WA Desk</strong>, our own WhatsApp CRM — log in anytime to see conversations, leads and reports in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button
              href={SITE.wadeskUrl}
              variant="brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
              <Icon name="external-link" className="w-3.5 h-3.5" />
            </Button>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Right stats */}
        <div className="reveal grid sm:grid-cols-2 gap-5 sm:gap-6">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.title}
              className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
                <Icon name={stat.icon} className="w-6 h-6" />
              </div>
              <p className="font-display font-bold text-slate-900 text-base sm:text-lg mb-2">{stat.title}</p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{stat.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
