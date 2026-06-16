export default function Eyebrow({ children, center = false }) {
  return (
    <div className={`items-center gap-2 mb-4 ${center ? 'flex justify-center w-full' : 'inline-flex'}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 ring-4 ring-brand-100 block" />
      <span className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-600">
        {children}
      </span>
    </div>
  )
}
