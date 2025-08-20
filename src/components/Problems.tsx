import React, { useEffect, useRef } from 'react';
import { TrendingDown, Frown , AlarmClockMinus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProblemProps {
  isDark: boolean;
}

const Problem: React.FC<ProblemProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (problemsRef.current) {
        const cards = Array.from(problemsRef.current.children);
        gsap.set(cards, { autoAlpha: 0, y: 40 });

        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => {
              gsap.to(card, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.08,
                ease: "power3.out"
              });
            },
            once: true
          });
        });
      }

      if (guaranteeRef.current) {
        gsap.fromTo(
          guaranteeRef.current,
          { autoAlpha: 0, scale: 0.9 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: guaranteeRef.current,
              start: "top 85%",
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: TrendingDown,
      title: "Voir ton idée stagner dans un carnet ou un dossier oublié ?",
      // description: "Assez de fonctionnalités pour attirer tes premiers utilisateurs, valider ton idée et commencer à générer des revenus."
    },
    {
      icon: AlarmClockMinus,
      title: "Perdre du temps à chercher des développeurs trop chers ou peu réactifs ?",
      // description: "Directement par ton audience pour valider ton concept rapidement"
    },
    {
      icon: Frown,
      title: "Regarder d'autres lancer exactement ce que tu avais en tête avant toi ?",
      // description: "Sans dépenser une fortune en développement complet"
    },
  ];

  return (
    <section id="problems" ref={sectionRef} className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Tu en as marre de :
          </h2>
          <div className="w-20 h-1 bg-[#19a89e] mx-auto rounded-full"></div>
        </div>

        <div ref={problemsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 ">
          {problems.map((problem, index) => (
            <div key={index} className={`problem-card p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#19a89e] rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {problem.title}
                  </h3>
                  {/* <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {problem.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
            isDark ? 'text-red-500' : 'text-red-600'
          }`}>
            Arrête de rêver ton app, construis-la dès maintenant !
          </h3>
          {/* <p className={`text-lg ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Tu me transmets les grandes lignes de ton idée. Je gère la réalisation de A à Z.
          </p> */}
        </div>

        {/* <div ref={guaranteeRef} className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl shadow-2xl ${
            isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-r from-green-50 to-blue-50'
          }`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#19a89e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  Assistance gratuite pendant 1 mois
                </h4>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Tu es guidé, accompagné, et jamais seul.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#19a89e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  Satisfaction garantie
                </h4>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  On en discute si tu n'es pas satisfait. Mon objectif est que tu sois fier de ton application.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Problem;