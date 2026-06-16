import { INDUSTRIES } from '../../data/site'
import SectionHead from '../ui/SectionHead'

export default function Industries() {
  return (
    <section id="industries" className="section-block bg-slate-50">
      <div className="site-container">
        <div className="reveal">
          <SectionHead
            eyebrow="Who We Serve"
            title="Built for businesses across India"
            subtitle="From clinics to coaching institutes, builders to boutiques — we tailor our systems to how your industry actually finds and serves customers."
          />
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {INDUSTRIES.map((name) => (
            <div
              key={name}
              className="bg-white border border-slate-100 rounded-xl px-3 py-3.5 text-center text-sm text-slate-700 font-medium hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 transition-all duration-150 cursor-default leading-snug"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
