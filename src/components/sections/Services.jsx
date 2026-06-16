import { SERVICE_GROUPS } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import Icon from '../ui/Icon'

function ServiceCard({ icon, title, body }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-6 sm:p-7 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group h-full">
      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-100 transition-colors">
        <Icon name={icon} className="w-6 h-6" />
      </div>
      <h4 className="font-display font-semibold text-slate-900 text-lg mb-2">{title}</h4>
      <p className="text-slate-500 text-base leading-relaxed">{body}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-block bg-white">
      <div className="site-container">
        <div className="reveal">
          <SectionHead
            eyebrow="What We Do"
            title="Everything your business needs online — in one place"
            subtitle="From Google presence and content to AI automation, ads and infrastructure — 17 services covering the full digital journey, delivered by one team."
          />
        </div>

        <div className="space-y-10">
          {SERVICE_GROUPS.map((group, gi) => (
            <div key={group.label} className="reveal" style={{ '--reveal-delay': `${gi * 60}ms` }}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-display font-semibold text-slate-700 text-lg sm:text-xl">{group.label}</h3>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.services.map((s) => (
                  <ServiceCard key={s.title} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
