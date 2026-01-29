import { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'DOCS', href: '#docs' },
    { label: 'GITHUB', href: 'https://github.com/cristal-orion/Reminor' },
    { label: 'DOCKER', href: '#docker' },
    { label: 'MEMVID', href: '#memvid' },
  ];

  return (
    <header className="bg-[#0a0a0a] border-b border-[#333] z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[7rem] md:min-h-[8rem] pb-3">
          {/* Logo ASCII - più compatto */}
          <a href="#" className="group">
            <pre className="font-ascii text-[#00ff41] text-[10px] sm:text-xs leading-tight terminal-glow select-none">
{`██████╗ ███████╗███╗   ███╗██╗███╗   ██╗ ██████╗ ██████╗ 
██╔══██╗██╔════╝████╗ ████║██║████╗  ██║██╔═══██╗██╔══██╗
██████╔╝█████╗  ██╔████╔██║██║██╔██╗ ██║██║   ██║██████╔╝
██╔══██╗██╔══╝  ██║╚██╔╝██║██║██║╚██╗██║██║   ██║██╔══██╗
██║  ██║███████╗██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝`}
            </pre>
            <div className="text-[9px] sm:text-[10px] text-[#666] tracking-[0.2em] mt-0.5">
              SELF-HOSTED TERMINAL DIARY
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-widest text-[#666] hover:text-[#00ff41] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00ff41] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://github.com/cristal-orion/Reminor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal-primary flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              GITHUB STAR
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#00ff41] p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#333]">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm tracking-widest text-[#666] hover:text-[#00ff41] transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/cristal-orion/Reminor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal-primary flex items-center justify-center gap-2 mt-2"
            >
              <Star className="w-4 h-4" />
              GITHUB STAR
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
