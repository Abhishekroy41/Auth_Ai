import { RESULTS } from '../../data/site'

export default function Results() {
  return (
    <section id="results" className="py-14 sm:py-16 bg-brand-700">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {RESULTS.map((r, i) => (
            <div
              key={r.figure}
              className="reveal text-center"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-2 leading-none">
                {r.figure}
              </div>
              <p className="text-brand-200 text-sm leading-snug">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
