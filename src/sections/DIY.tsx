import { useEffect, useRef } from 'react';
import { Printer, Download, ExternalLink, Box, Cable, Monitor, Usb } from 'lucide-react';

const components = [
  {
    icon: Monitor,
    name: 'Waveshare 4" DPI LCD',
    description: '4-inch IPS display, 800×480, GPIO connection',
    link: 'https://www.waveshare.com/4inch-dpi-lcd-c.htm',
    required: true,
  },
  {
    icon: Cable,
    name: 'GPIO Ribbon Cable',
    description: '40-pin flat cable for display connection',
    link: 'https://a.aliexpress.com/_Ev4mzva',
    required: true,
  },
  {
    icon: Usb,
    name: 'USB-C Extension',
    description: 'For easy access to power port',
    link: 'https://a.aliexpress.com/_EwM6PS8',
    required: true,
  },
  {
    icon: Box,
    name: 'Raspberry Pi 4',
    description: '2GB+ RAM recommended',
    link: 'https://www.raspberrypi.com/products/raspberry-pi-4-model-b/',
    required: true,
  },
];

const DIY = () => {
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
    <section id="diy" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] bg-[#1a1a1a] mb-6">
            <Printer className="w-4 h-4 text-[#00ff41]" />
            <span className="text-xs tracking-[0.3em] text-[#666]">BUILD YOUR OWN</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-4">
            3D Print Your <span className="text-[#00ff41] terminal-glow">Reminor</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            Want to build the exact setup from the photo? Download the 3D printable case
            and follow our bill of materials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: 3D Preview */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff41]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00ff41]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00ff41]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ff41]" />

              <div className="border-2 border-[#333] bg-[#0a0a0a] overflow-hidden">
                <div className="bg-[#1a1a1a] px-3 py-2 flex items-center justify-between border-b border-[#333]">
                  <span className="text-[10px] text-[#666]">BAMBU LAB STUDIO — 3D PREVIEW</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  </div>
                </div>
                <img
                  src="/upload/Reminior3dview.png"
                  alt="Reminor 3D printable case preview"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="/upload/ReminorCase.3mf"
                download="ReminorCase.3mf"
                className="btn-terminal-primary flex items-center justify-center gap-2 flex-1"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD .3MF FILE
              </a>
            </div>
            <p className="text-xs text-[#666] mt-3 text-center">
              Ready to print. Tested on Bambu Lab printers. PLA recommended.
            </p>
          </div>

          {/* Right: Bill of Materials */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="border border-[#333] bg-[#0a0a0a]">
              <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#333]">
                <span className="text-[#00ff41] font-mono text-sm">BILL OF MATERIALS</span>
              </div>

              <div className="divide-y divide-[#333]">
                {components.map((component, index) => (
                  <a
                    key={index}
                    href={component.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 hover:bg-[#1a1a1a] transition-colors group"
                  >
                    <div className="w-10 h-10 border border-[#333] group-hover:border-[#00ff41] flex items-center justify-center flex-shrink-0 transition-colors">
                      <component.icon className="w-5 h-5 text-[#666] group-hover:text-[#00ff41] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono text-sm group-hover:text-[#00ff41] transition-colors">
                          {component.name}
                        </span>
                        <ExternalLink className="w-3 h-3 text-[#666] group-hover:text-[#00ff41] transition-colors" />
                      </div>
                      <p className="text-xs text-[#666] mt-1">{component.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-4 border-t border-[#333] bg-[#0d0d0d]">
                <div className="flex items-center gap-2 text-xs text-[#666]">
                  <span className="w-2 h-2 bg-[#00ff41] rounded-full" />
                  <span>All links are affiliate-free suggestions</span>
                </div>
              </div>
            </div>

            {/* Assembly Note */}
            <div className="mt-6 border border-[#333] bg-[#0a0a0a] p-4">
              <div className="flex items-start gap-3">
                <div className="text-[#ffbd2e] text-lg">!</div>
                <div>
                  <div className="text-white font-mono text-sm mb-1">Assembly Tips</div>
                  <p className="text-xs text-[#666] leading-relaxed">
                    Connect the display via GPIO ribbon cable. Route the USB-C extension
                    through the case opening for easy power access. Flash Raspberry Pi OS Lite
                    and follow the Reminor install guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIY;
