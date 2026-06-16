export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white border border-slate-100 rounded-2xl shadow-sm ${
        hover ? 'hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
