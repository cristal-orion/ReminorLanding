import { useEffect, useRef } from 'react';
import { Cpu } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] bg-[#1a1a1a] mb-6">
            <Cpu className="w-4 h-4 text-[#00ff41]" />
            <span className="text-xs tracking-[0.3em] text-[#666]">USE CASE</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-4">
            The Perfect <span className="text-[#00ff41] terminal-glow">Desk Companion</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            Reminor runs beautifully on minimal hardware. From a Raspberry Pi to a full server—your
            diary stays with you, offline, no subscriptions required.
          </p>
        </div>

        {/* Image with description */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
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
            </div>

            {/* Caption */}
            <div className="mt-6 text-center border border-[#333] bg-[#0d0d0d] p-4">
              <p className="text-[#888] text-sm">
                A dedicated journaling device running 24/7 on your desk.
                Write your thoughts on a <span className="text-[#00ff41]">Raspberry Pi 4</span> with
                a custom 4" display—offline, private, always ready.
              </p>
              <div className="flex justify-center gap-6 mt-4 text-xs text-[#666]">
                <span>Under 5W power</span>
                <span>•</span>
                <span>No internet required</span>
                <span>•</span>
                <span>Your hardware, your rules</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
