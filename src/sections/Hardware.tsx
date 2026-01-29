import { useEffect, useRef } from 'react';
import { Cpu, Wifi, Battery, Lock } from 'lucide-react';

const Hardware = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] bg-[#1a1a1a] mb-6">
                <Cpu className="w-4 h-4 text-[#00ff41]" />
                <span className="text-xs tracking-[0.3em] text-[#666]">HARDWARE SETUP</span>
              </div>
              <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Your Digital Journal,<br />
                <span className="text-[#00ff41] terminal-glow">Anywhere.</span>
              </h2>
              <p className="text-[#888] leading-relaxed">
                Reminor runs beautifully on minimal hardware. From a Raspberry Pi Zero to a full server, 
                your diary stays with you. No internet required. No subscriptions. Just pure, 
                self-hosted privacy.
              </p>
            </div>

            <div className="reveal space-y-4" style={{ transitionDelay: '0.2s' }}>
              {[
                { 
                  icon: Cpu, 
                  title: 'Raspberry Pi Compatible', 
                  desc: 'Runs smoothly on Pi 3, 4, and Zero 2 W. Perfect for a dedicated journaling device.' 
                },
                { 
                  icon: Wifi, 
                  title: 'Offline First', 
                  desc: 'No internet connection needed. Your data never leaves your local network unless you want it to.' 
                },
                { 
                  icon: Battery, 
                  title: 'Low Power Consumption', 
                  desc: 'Under 5W typical usage. Keep it running 24/7 without worrying about electricity costs.' 
                },
                { 
                  icon: Lock, 
                  title: 'Physical Security', 
                  desc: 'Your diary lives on hardware you control. Unplug it, move it, lock it in a safe.' 
                },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 p-4 border border-[#333] bg-[#0d0d0d] hover:border-[#00ff41] transition-colors group"
                >
                  <div className="w-10 h-10 border border-[#333] group-hover:border-[#00ff41] flex items-center justify-center flex-shrink-0 transition-colors">
                    <item.icon className="w-5 h-5 text-[#666] group-hover:text-[#00ff41] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-mono mb-1">{item.title}</h3>
                    <p className="text-sm text-[#888]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="border border-[#333] bg-[#0d0d0d] p-4">
                <div className="text-xs text-[#666] mb-2">RECOMMENDED SPECS</div>
                <div className="font-mono text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#888]">CPU:</span>
                    <span className="text-[#00ff41]">ARM Cortex-A53 (4× 1.4GHz)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">RAM:</span>
                    <span className="text-[#00ff41]">1GB LPDDR2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">STORAGE:</span>
                    <span className="text-[#00ff41]">16GB microSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">DISPLAY:</span>
                    <span className="text-[#00ff41]">4" LCD (optional)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-[#333]" />
              <div className="absolute -inset-8 border border-[#1a1a1a]" />
              
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff41]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00ff41]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00ff41]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ff41]" />

              {/* Image Container */}
              <div className="relative border-2 border-[#333] bg-[#0d0d0d] overflow-hidden">
                <img
                  src="/upload/Senza titolo (6000 x 4000 px).png"
                  alt="Reminor running on Raspberry Pi with 4-inch display"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] to-transparent p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#00ff41]">● LIVE SYSTEM</span>
                    <span className="text-[#666]">RPI4 + 4" LCD</span>
                  </div>
                </div>

                {/* Scanlines Overlay */}
                <div className="absolute inset-0 scanlines pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-sm text-[#888]">
                  Reminor running on a Raspberry Pi 4 with custom 4" display
                </p>
                <p className="text-xs text-[#666] mt-1">
                  Perfect desk companion for daily journaling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
