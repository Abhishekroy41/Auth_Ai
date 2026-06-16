import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function BroadcastFeature() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white">
      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="animate-fade-up max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-4">
              Automate Customer Support with AI (Flawlessly)
            </h2>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed mb-10">
              Enjoy a limitless conversational experience on WhatsApp with Auth AI
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-sm">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Instant Replies, 24/7</h3>
                  <p className="text-slate-500 text-sm">Never miss a lead. Our AI agents respond instantly to queries, day or night!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-sm">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">High Conversion Rates</h3>
                  <p className="text-slate-500 text-sm">Turn conversations into conversions with smart AI workflows and follow-ups.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-sm">📅</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Automated Booking</h3>
                  <p className="text-slate-500 text-sm">Streamline your workflow, let AI schedule appointments automatically.</p>
                </div>
              </div>
            </div>

            <Button
              href="#contact"
              size="lg"
              className="bg-[#00e676] hover:bg-[#00c853] text-white shadow-lg shadow-[#00e676]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-xl font-bold text-base border-none inline-flex items-center gap-2"
            >
              Start for FREE
              <Icon name="arrow-right" className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
             {/* Green Gradient Background Shape */}
            <div className="absolute top-10 right-0 bottom-0 left-10 bg-gradient-to-b from-[#00e676]/20 to-white rounded-3xl -z-10"></div>
            
            {/* The Image Container */}
            <div className="relative rounded-2xl w-full h-[400px] sm:h-[600px] mt-8 lg:mt-0">
               {/* Main Background Image - slightly offset to the top-right */}
               <div className="absolute top-0 right-0 w-[85%] sm:w-[80%] h-full flex justify-end items-start z-10">
                 <img src={`${import.meta.env.BASE_URL}outer-home/Gemini_Generated_Image_6vvuav6vvuav6vvu-removebg-preview.png`} alt="Auth AI Chat Mockup" className="w-full h-auto object-contain drop-shadow-2xl rounded-xl" />
               </div>
               
               {/* Floating Overlap Image - anchored to bottom-left to balance the composition */}
               <div className="absolute bottom-0 left-0 w-[60%] sm:w-[50%] z-20">
                 <div className="relative group">
                   <img src={`${import.meta.env.BASE_URL}outer-home/Gemini_Generated_Image_c9hj4xc9hj4xc9hj-removebg-preview.png`} alt="Campaign Manager" className="w-full h-auto object-contain drop-shadow-2xl filter contrast-105 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-4" />
                 </div>
               </div>
            </div>
            

          </div>

        </div>
      </div>
    </section>
  )
}
