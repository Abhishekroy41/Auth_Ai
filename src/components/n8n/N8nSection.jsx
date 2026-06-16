import React from 'react'
import videoSrc from './videos/real_estate.mp4'
import imgTracker from './Images/finance_tracker_.png'
import imgExecution from './Images/finance_tracker_execution.png'

export default function N8nSection() {
  return (
    <section className="py-20 lg:py-32 bg-white text-slate-900 overflow-hidden relative border-y border-slate-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-brand-600 font-medium text-sm mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            Case Study: AI Finance Tracker
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0f172a]">
            Complex Automations, <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-500">Powered by n8n</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            See how we use n8n to build powerful, custom AI workflows. Our AI Finance Tracker automatically categorizes expenses, updates sheets, and sends real-time WhatsApp alerts.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Video Demo */}
          <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-slate-200 bg-white p-2">
               {/* Browser/Window Header Mockup */}
               <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 mb-2 bg-slate-50 rounded-t-xl">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="ml-4 text-xs font-mono text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-md shadow-sm">
                   ai-real-estate-demo.mp4
                 </div>
               </div>
               
               {/* Video Player */}
               <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video relative border border-slate-100">
                 <video 
                   src={videoSrc} 
                   controls 
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                   className="w-full h-full object-cover"
                 >
                   Your browser does not support the video tag.
                 </video>
               </div>
            </div>
          </div>

          {/* Right Side: Workflow Images & Features */}
          <div className="lg:col-span-5 space-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Image 1 */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 group bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm">
               <p className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                 <span className="text-orange-500">⚡</span> n8n Workflow Design
               </p>
               <div className="rounded-lg overflow-hidden border border-slate-100 bg-slate-50">
                 <img src={imgTracker} alt="n8n Finance Tracker Workflow" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 group bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm">
               <p className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                 <span className="text-brand-500">🟢</span> Live Execution Tracking
               </p>
               <div className="rounded-lg overflow-hidden border border-slate-100 bg-slate-50">
                 <img src={imgExecution} alt="n8n Workflow Execution" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-4 pt-4 px-2">
              {[
                'Seamless integration with WhatsApp & Google Sheets',
                'Advanced AI categorization of financial data',
                '100% automated real-time tracking workflows'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-brand-600 fill-none stroke-current stroke-[3]" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">{feature}</p>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}
