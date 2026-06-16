import { useState } from 'react'
import Icon from '../ui/Icon'

const useCases = [
  {
    id: 'delivery',
    title: '100% Campaign Delivery Rate',
    description: 'Ensure every promotional broadcast reaches your customers instantly without fail. Say goodbye to dropped messages and maximize your marketing reach.',
    badgeIcon: 'send',
    badgeText: 'Auth AI',
    imagePlaceholder: 'Campaign Delivery Image',
    imageColor: 'bg-green-50'
  },
  {
    id: 'templates',
    title: 'Interactive Message Templates',
    description: 'Use rich media, quick replies, and engaging Call-to-Action (CTA) buttons. Pre-approved WhatsApp templates that drive 3x more conversions.',
    badgeIcon: 'message-square',
    badgeText: 'Auth AI',
    imagePlaceholder: 'Message Templates Image',
    imageColor: 'bg-blue-50'
  },
  {
    id: 'automation',
    title: 'Smart AI Auto-Replies 24/7',
    description: 'Let our intelligent AI agents handle all campaign replies instantly. Never let a warm lead go cold, whether it is day or night.',
    badgeIcon: 'bot',
    badgeText: 'Auth AI',
    imagePlaceholder: 'AI Automation Image',
    imageColor: 'bg-purple-50'
  },
  {
    id: 'analytics',
    title: 'Real-Time Campaign Analytics',
    description: 'Track exactly how your campaigns perform. Get detailed reports on Sent, Delivered, Read, and Replied metrics instantly on your dashboard.',
    badgeIcon: 'bar-chart',
    badgeText: 'Auth AI',
    imagePlaceholder: 'Analytics Image',
    imageColor: 'bg-orange-50'
  },
  {
    id: 'greentick',
    title: 'Verified WhatsApp Green Tick',
    description: 'Build immediate trust with your audience. Get your business officially verified on WhatsApp with the coveted green tick badge.',
    badgeIcon: 'check-circle',
    badgeText: 'Auth AI',
    imagePlaceholder: 'Green Tick Image',
    imageColor: 'bg-emerald-50'
  },
  {
    id: 'integration',
    title: 'Seamless CRM Integrations',
    description: 'Connect your WhatsApp campaigns directly with your existing CRM and marketing stack for a completely unified workflow.',
    badgeIcon: 'link',
    badgeText: 'Auth AI',
    imagePlaceholder: 'Integration Image',
    imageColor: 'bg-indigo-50'
  }
]


export default function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id)

  const activeCase = useCases.find(c => c.id === activeTab)

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white">
      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content (Accordion) */}
          <div className="flex flex-col animate-fade-up">
            {useCases.map((useCase) => {
              const isActive = activeTab === useCase.id;
              
              return (
                <div 
                  key={useCase.id} 
                  className="border-b border-slate-100 last:border-0"
                >
                  <button
                    onClick={() => setActiveTab(useCase.id)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <h3 className={`font-display text-xl sm:text-2xl font-bold transition-colors ${isActive ? 'text-brand-600' : 'text-[#0f172a] group-hover:text-brand-600/80'}`}>
                      {useCase.title}
                    </h3>
                    <div className={`shrink-0 ml-4 transition-transform duration-300 ${isActive ? 'text-brand-600' : 'text-slate-300 group-hover:text-brand-600/50'}`}>
                      {isActive ? (
                        <Icon name="arrow-down" className="w-6 h-6" />
                      ) : (
                        <Icon name="arrow-right" className="w-6 h-6" />
                      )}
                    </div>
                  </button>
                  
                  {/* Expanded Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-500 text-base leading-relaxed pr-8">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image Container */}
          <div className="relative animate-fade-up lg:sticky lg:top-24" style={{ animationDelay: '0.15s' }}>
            <div className={`relative rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center transition-colors duration-500 ${activeCase.imageColor}`}>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-500">
                   <Icon name={activeCase.badgeIcon} className="w-4 h-4" />
                </div>
                <span className="font-bold text-slate-800 text-sm">{activeCase.badgeText}</span>
              </div>

              {/* Main Dashboard Image */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-white/40 mb-12 sm:mb-8 transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={`${import.meta.env.BASE_URL}Images/authai_dashboard.png`} 
                  alt="Auth AI Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Secondary Image */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-8 w-3/4 sm:w-3/5 shadow-2xl rounded-xl overflow-hidden border-4 border-white transform rotate-3 hover:rotate-0 hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 bg-white z-10">
                <img 
                  src={`${import.meta.env.BASE_URL}Images/authai_dashboard1.png`} 
                  alt="Auth AI Interface Detail" 
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
