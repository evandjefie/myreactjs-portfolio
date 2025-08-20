import React, { useEffect, useRef } from 'react';
import { ChevronDown, Zap, Clock, Trophy } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-[#014a74]'
            }`}
          >
            CRÉE ENFIN TON{' '}
            <span className="bg-[#19a89e] bg-clip-text text-transparent">
              APPLICATION INNOVANTE
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className={`text-xl md:text-2xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            VERSION EXPRESS EN 21 jourS
          </p>

          <div ref={ctaRef} className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="text-yellow-500" size={20} />
                <span className={isDark ? 'text-white' : 'text-gray-800'}>MVP Rapide</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="text-green-500" size={20} />
                <span className={isDark ? 'text-white' : 'text-gray-800'}>21 jours</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Trophy className="text-orange-500" size={20} />
                <span className={isDark ? 'text-white' : 'text-gray-800'}>Garantie</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="bg-[#19a89e] hover:bg-[#16968c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center">
                Commencer Mon Projet
              </a>
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 ${
                isDark 
                  ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                  : 'border-[#014a74] text-[#014a74] hover:bg-[#014a74] hover:text-white'
              }`}>
                <a href="#portfolio">Voir les Réalisations</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={isDark ? 'text-white' : 'text-gray-800'} size={32} />
      </div>
    </section>
  );
};

export default Hero;