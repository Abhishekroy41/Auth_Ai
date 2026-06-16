import Eyebrow from './Eyebrow'

export default function SectionHead({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 sm:mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-lg sm:text-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
