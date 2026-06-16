import { WHY_CARDS } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import Card from '../ui/Card'
import Icon from '../ui/Icon'

export default function Why() {
  return (
    <section id="why" className="section-block bg-slate-50">
      <div className="site-container">
        <div className="reveal">
          <SectionHead
            eyebrow="Why AUTH AI"
            title="Built for how Tier 3 businesses actually grow"
            subtitle="No agencies-within-agencies, no jargon — just the systems that get your phone ringing and your WhatsApp pinging."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CARDS.map((card, i) => (
            <div key={card.title} className="reveal" style={{ '--reveal-delay': `${i * 80}ms` }}>
              <Card className="p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6">
                  <Icon name={card.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-xl mb-3">{card.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{card.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
