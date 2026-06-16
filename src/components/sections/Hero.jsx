import { SITE, NAV_LINKS } from '../../data/site'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Eyebrow from '../ui/Eyebrow'

function ChatMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-100 to-emerald-50 opacity-70 blur-xl"
      />

      <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-brand-700 px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center font-display font-bold text-white text-sm shrink-0">
            A
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold leading-none truncate">AUTH AI Assistant</p>
            <p className="text-brand-200 text-xs mt-0.5">● Online · replies instantly</p>
          </div>
        </div>

        <div className="px-4 py-4 flex flex-col gap-3 min-h-[280px] justify-end bg-brand-50">
          <div className="chat-bubble-1 self-start max-w-[85%] bg-white rounded-2xl rounded-tl-sm px-3 py-2.5 shadow-sm">
            <p className="text-slate-700 text-sm leading-snug">
              Hi! Do you have any appointment slots tomorrow evening?
            </p>
            <span className="block text-right text-slate-400 font-mono text-[10px] mt-1">10:42 AM</span>
          </div>

          <div className="chat-bubble-2 self-start bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1.5">
            <span className="typing-dot w-2 h-2 rounded-full bg-slate-400 block" />
            <span className="typing-dot w-2 h-2 rounded-full bg-slate-400 block" />
            <span className="typing-dot w-2 h-2 rounded-full bg-slate-400 block" />
          </div>

          <div className="chat-bubble-3 self-end max-w-[90%] bg-brand-600 rounded-2xl rounded-tr-sm px-3 py-2.5 shadow-sm">
            <p className="text-white text-sm leading-snug">
              Yes! We have 5:30 PM and 7:00 PM open tomorrow. Want me to book one for you?
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['Book 5:30 PM', 'Book 7:00 PM', 'Talk to a person'].map((opt) => (
                <span
                  key={opt}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-white/30 text-white/90"
                >
                  {opt}
                </span>
              ))}
            </div>
            <span className="block text-right text-white/60 font-mono text-[10px] mt-1">10:42 AM ✓✓</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=Hi%20AUTH%20AI%2C%20I%27d%20like%20a%20free%20consultation`

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-32 sm:pb-36 lg:pt-12 lg:pb-48">
      {/* Background with Dot Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#eafaf1] via-white to-slate-50"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-dot-pattern"
      />

      <div className="site-container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content (Text) */}
          <div className="animate-fade-up text-center lg:text-left lg:col-span-5 xl:col-span-6 z-10">
            <div className="flex justify-center lg:justify-start mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dcfce7]/50 border border-[#bbf7d0] text-[#166534] font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                AI Growth Partner · Tier 2 & Tier 3 India
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.05] tracking-tight mb-4">
              Run your business. <span className="text-brand-600">Let {'{ AUTH AI }'}</span> run the internet side of it.
            </h1>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              One team handles your Google presence, content, ads and SEO — while our AI replies to every WhatsApp enquiry in seconds, day and night, so no lead ever goes cold.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <Button
                href={waHref}
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#00e676] hover:bg-[#00c853] text-white shadow-lg shadow-[#00e676]/30 hover:shadow-xl hover:shadow-[#00e676]/40 hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-xl font-bold text-base border-none flex items-center gap-2 justify-center"
              >
                <Icon name="message-square" className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
              <Button href="#services" variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-700 bg-white shadow-sm border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                See all services
              </Button>
            </div>

            {/* Badges / Location */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <Icon name="shield-check" className="w-4 h-4 text-brand-500 shrink-0" />
                Meta Official Partner
              </span>
              <span className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <Icon name="map-pin" className="w-4 h-4 text-brand-500 shrink-0" />
                Dhanbad, Jharkhand — built for Bharat
              </span>
            </div>
          </div>

          {/* Right Content (Mockup & Badges) */}
          <div className="animate-fade-up w-full lg:col-span-7 xl:col-span-6 relative mt-12 lg:mt-0" style={{ animationDelay: '0.15s' }}>
            
            {/* Floating Badge 1 (Sent) */}
            <div className="absolute -top-6 lg:top-12 -left-4 lg:-left-12 bg-white rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 z-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
               <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                 <span className="text-xl">📊</span>
               </div>
               <div>
                 <p className="font-bold text-slate-800 text-sm">1,240 Sent</p>
                 <p className="text-[10px] text-slate-500">Campaign delivered</p>
               </div>
            </div>

            {/* Floating Badge 2 (Read Rate) */}
            <div className="absolute -bottom-8 lg:bottom-16 left-4 lg:left-0 bg-white rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 z-20 animate-fade-up" style={{ animationDelay: '0.6s' }}>
               <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                 <span className="text-xl">📈</span>
               </div>
               <div>
                 <p className="font-bold text-slate-800 text-sm">98% Read Rate</p>
                 <p className="text-[10px] text-slate-500">vs 22% email avg</p>
               </div>
            </div>

            {/* Floating Badge 3 (Bot Active) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-8 bg-white rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-3 z-20 animate-fade-up" style={{ animationDelay: '0.8s' }}>
               <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                 <span className="text-xl">🤖</span>
               </div>
               <div>
                 <p className="font-bold text-slate-800 text-sm">Bot Active</p>
                 <p className="text-[10px] text-slate-500">24/7 auto-reply</p>
               </div>
            </div>

            {/* Mockup Container */}
            <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto z-10">
              {/* Soft glow behind phone */}
              <div aria-hidden="true" className="absolute -inset-10 bg-[#00e676] opacity-10 blur-3xl rounded-full pointer-events-none"></div>
              
              <div className="relative bg-[#efeae2] rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-[#1e1e1e]">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-[#1e1e1e] rounded-b-xl w-32 mx-auto z-20"></div>
                
                <div className="bg-[#005c4b] px-4 pt-10 pb-3 flex items-center gap-3 shadow-md z-10 relative">
                  <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center font-display font-bold text-white text-lg shrink-0">
                    P
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-[15px] font-semibold leading-none truncate mb-1">Auth Ai Bot</p>
                    <p className="text-white/80 text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      online
                    </p>
                  </div>
                </div>

                <div className="px-3 py-5 flex flex-col gap-3 min-h-[400px] justify-start bg-[#efeae2] bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover bg-center">
                  
                  <div className="self-start max-w-[85%] bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm relative">
                    <p className="text-slate-800 text-[13px] leading-snug">
                      👋 Hi! Welcome to <span className="font-bold">Auth Ai</span>. How can I help?
                    </p>
                    <span className="block text-right text-slate-400 text-[9px] mt-1">10:01 AM</span>
                  </div>

                  <div className="self-end max-w-[85%] bg-[#d9fdd3] rounded-xl rounded-tr-sm px-3 py-2 shadow-sm relative">
                    <p className="text-slate-800 text-[13px] leading-snug">
                      I want to send a bulk campaign
                    </p>
                    <span className="block text-right text-slate-500 text-[9px] mt-1">10:02 AM ✓✓</span>
                  </div>

                  <div className="self-start w-full max-w-[90%] bg-white rounded-xl rounded-tl-sm p-3 shadow-sm relative">
                    <p className="font-bold text-[#005c4b] text-[13px] flex items-center gap-1.5 mb-1">
                      <span>📊</span> Campaign Report
                    </p>
                    <p className="text-slate-500 text-[11px] mb-2">Diwali Offer 2024</p>
                    <div className="flex justify-between border-t border-slate-100 pt-2">
                      <div className="text-center">
                        <p className="font-bold text-[#00a884] text-sm">5,200</p>
                        <p className="text-[9px] text-slate-400">Sent</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-[#00a884] text-sm">5,088</p>
                        <p className="text-[9px] text-slate-400">Delivered</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-[#00a884] text-sm">4,916</p>
                        <p className="text-[9px] text-slate-400">Read</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-[#00a884] text-sm">612</p>
                        <p className="text-[9px] text-slate-400">Replied</p>
                      </div>
                    </div>
                  </div>

                  <div className="self-start max-w-[85%] bg-white rounded-xl rounded-tl-sm px-3 py-2 shadow-sm relative">
                    <p className="text-slate-800 text-[13px] leading-snug">
                      ✅ Your campaign is live! <br/>5,200 messages delivered.
                    </p>
                    <span className="block text-right text-slate-400 text-[9px] mt-1">10:04 AM</span>
                  </div>
                  
                  <div className="self-start bg-white rounded-xl rounded-tl-sm px-4 py-2.5 shadow-sm flex gap-1.5 mt-auto">
                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate-400 block" />
                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate-400 block" />
                    <span className="typing-dot w-1.5 h-1.5 rounded-full bg-slate-400 block" />
                  </div>
                </div>
                
                {/* Chat Input Bar */}
                <div className="bg-[#f0f2f5] px-3 py-2.5 flex items-center gap-2 relative z-10">
                  <div className="flex-1 bg-white rounded-full px-4 py-2 text-[13px] text-slate-400 border border-transparent">
                    Type a message...
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#005c4b] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" style={{ transform: 'translateX(-1px)' }}>
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    </svg>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
