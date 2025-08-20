import React, { useEffect, useRef } from 'react';
import { Star, Clock, Users, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface PricingProps {
  isDark: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(pricingRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Prix exceptionnel
          </h2>
          <div className="w-20 h-1 bg-[#19a89e] mx-auto rounded-full"></div>
        </div>

        <div ref={pricingRef} className="max-w-2xl mx-auto">
          <div className={`relative p-8 rounded-2xl shadow-2xl ${
            isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50'
          }`}>
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                OFFRE LIMITÉE
              </div>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <p className="text-green-500 font-semibold text-lg">
                  À partir de
                </p>                
                <div className="flex items-end justify-center">
                  <span className={`text-6xl font-bold ${
                    isDark ? 'text-white' : 'text-[#014a74]'
                  }`}>
                    299
                  </span>
                  <span className={`mb-5 text-2xl ml-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    $
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className={`text-md ml-2 mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    ~= 160.000 Fcfa
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className={`text-3xl line-through ${
                    isDark ? 'text-red-500' : 'text-red-400'
                  }`}>
                    1999 $
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -80%
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className={`text-md ml-2 mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    ~= 1.100.000 Fcfa
                  </span>
                </div>
                  {/* <span className={`text-md ml-2 mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    ~= 160.000 Fcfa
                  </span> */}
                <p className="text-green-500 font-semibold text-lg">
                  Une économie de 600 000 Fcfa !
                </p>
              </div>

              <div className="flex items-center justify-center md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="text-[#19a89e]" size={20} />
                  <span className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Livraison 21 jours
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-[#19a89e]" size={20} />
                  <span className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    3 places seulement
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-[#19a89e]" size={20} />
                  <span className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Support inclus
                  </span>
                </div>
              </div>

              <div className={`p-6 rounded-lg mb-8 ${
                isDark ? 'bg-red-900/30 border border-red-500' : 'bg-red-50 border border-red-200'
              }`}>
                <p className={`text-lg font-semibold ${
                  isDark ? 'text-red-300' : 'text-red-600'
                }`}>
                  ⚠️ Attention : Offre valable uniquement ce mois-ci
                </p>
                <p className={`text-sm mt-2 ${
                  isDark ? 'text-red-400' : 'text-red-500'
                }`}>
                  Je ne prends que 3 clients maximum pour garantir un accompagnement de qualité.
                </p>
              </div>

              {/* <button className="w-full bg-[#19a89e] hover:bg-[#16968c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <a href="https://take.app/fr/edjverse/p/cmd4ls97d002ric04rjcxl14n">
                Réserver Ma Place Maintenant
                </a>
              </button> */}
              <a 
                href="https://take.app/fr/edjverse/p/cmd4ls97d002ric04rjcxl14n"
                className='w-full bg-[#19a89e] hover:bg-[#16968c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                Réserver Ma Place Maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;