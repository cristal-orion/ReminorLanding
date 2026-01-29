import { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Memvid from './sections/Memvid';
import Demo from './sections/Demo';
import Hardware from './sections/Hardware';
import DIY from './sections/DIY';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center space-y-4">
          <pre className="font-ascii text-[#00ff41] text-xs sm:text-sm terminal-glow">
{`██████╗ ███████╗███╗   ███╗██╗███╗   ██╗ ██████╗ ██████╗ 
██╔══██╗██╔════╝████╗ ████║██║████╗  ██║██╔═══██╗██╔══██╗
██████╔╝█████╗  ██╔████╔██║██║██╔██╗ ██║██║   ██║██████╔╝
██╔══██╗██╔══╝  ██║╚██╔╝██║██║██║╚██╗██║██║   ██║██╔══██╗
██║  ██║███████╗██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝`}
          </pre>
          <div className="font-mono text-xs text-[#666]">
            <span className="text-[#00ff41]">BOOTING SYSTEM...</span>
          </div>
          <div className="w-64 h-1 bg-[#1a1a1a] mx-auto overflow-hidden">
            <div className="h-full bg-[#00ff41] animate-[loading_1.5s_ease-out_forwards]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono noise">
      <Header />
      <main>
        <Hero />
        <Features />
        <Memvid />
        <Demo />
        <Hardware />
        <DIY />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
