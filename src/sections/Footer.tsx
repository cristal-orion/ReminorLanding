import { Star, GitFork } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'DOCUMENTATION', href: 'https://github.com/cristal-orion/Reminor#readme' },
    { label: 'PRIVACY POLICY', href: '#' },
    { label: 'GITHUB ISSUES', href: 'https://github.com/cristal-orion/Reminor/issues' },
    { label: 'CHANGELOG', href: 'https://github.com/cristal-orion/Reminor/blob/main/CHANGELOG.md' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#333]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#00ff41] flex items-center justify-center">
              <span className="text-[#00ff41] font-ascii text-lg">R</span>
            </div>
            <span className="font-mono text-white tracking-wider">REMINOR OS</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest text-[#666] hover:text-[#00ff41] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666]">
            <div className="flex items-center gap-4">
              <span>© {currentYear} REMINOR.</span>
              <span>OPEN SOURCE.</span>
              <span>MIT LICENSE.</span>
              <span className="text-[#00ff41]">PRIVACY FIRST.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/cristal-orion/Reminor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#00ff41] transition-colors"
              >
                <Star className="w-3 h-3" />
                <span>2.4K STARS</span>
              </a>
              <a
                href="https://github.com/cristal-orion/Reminor/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#00ff41] transition-colors"
              >
                <GitFork className="w-3 h-3" />
                <span>180 FORKS</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ASCII Art Decoration */}
      <div className="border-t border-[#1a1a1a] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <pre className="font-ascii text-[8px] sm:text-[10px] text-[#1a1a1a] text-center select-none overflow-hidden">
{`╔══════════════════════════════════════════════════════════════════════════════════╗
║  REMINOR OS v2.4 - PERSONAL KNOWLEDGE RETRIEVAL SYSTEM - SELF-HOSTED TERMINAL   ║
║  YOUR THOUGHTS. YOUR SERVER. YOUR PRIVACY.                                      ║
╚══════════════════════════════════════════════════════════════════════════════════╝`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
