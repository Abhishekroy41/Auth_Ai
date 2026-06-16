import { PROCESS_STEPS } from '../../data/site'
import SectionHead from '../ui/SectionHead'

export default function Process() {
  return (
    <section id="process" className="section-block bg-white">
      <div className="site-container">
        <div className="reveal">
          <SectionHead
            eyebrow="How It Works"
            title="From first chat to fully running, in days not months"
            subtitle="A simple, structured onboarding so you know exactly what's happening and when."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="reveal" style={{ '--reveal-delay': `${i * 80}ms` }}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-11 h-11 rounded-xl bg-brand-600 text-white font-display font-bold text-sm flex items-center justify-center mb-5">
                  {step.num}
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
