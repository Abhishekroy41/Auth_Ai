import { useState } from 'react'
import { FAQS } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import Icon from '../ui/Icon'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`bg-white border rounded-xl overflow-hidden transition-colors duration-150 ${open ? 'border-brand-200' : 'border-slate-100'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-slate-900 text-sm sm:text-base">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${open ? 'bg-brand-100 text-brand-600 rotate-45' : 'bg-slate-100 text-slate-500'}`}>
          <Icon name="plus" className="w-3.5 h-3.5" />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-block bg-white">
      <div className="site-container site-container--narrow">
        <div className="reveal text-center">
          <SectionHead
            eyebrow="Common Questions"
            title="Frequently asked questions"
            subtitle="Everything you need to know before getting started."
            center
          />
        </div>
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <div key={item.q} className="reveal" style={{ '--reveal-delay': `${i * 60}ms` }}>
              <FAQItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
