import { TESTIMONIALS } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import Card from '../ui/Card'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-block bg-slate-50">
      <div className="site-container">
        <div className="reveal">
          <SectionHead
            eyebrow="Trusted By Businesses Like Yours"
            title="What our clients say"
            subtitle="Real feedback from business owners who put their online presence on autopilot with AUTH AI."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="reveal" style={{ '--reveal-delay': `${i * 80}ms` }}>
              <Card className="p-7 h-full flex flex-col gap-5" hover={false}>
                <blockquote className="text-slate-700 leading-relaxed flex-1 relative">
                  <span className="absolute -top-1 -left-1 text-5xl font-serif text-brand-200 leading-none select-none">
                    "
                  </span>
                  <span className="relative pl-5 block">{t.quote}</span>
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-display font-bold flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
