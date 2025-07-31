import React, { useEffect, useRef } from 'react';
import { CheckCircle, Rocket, Users, DollarSign, Zap, Shield, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SolutionProps {
  isDark: boolean;
}

const Solution: React.FC<SolutionProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = benefitsRef.current?.children;
      if (children && children.length > 0) {
        const childArray = Array.from(children);
        gsap.from(childArray, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        });
      }

      gsap.from(guaranteeRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: guaranteeRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: Rocket,
      title: "Une version MVP de ton application, livrée en 15 jours",
      description: "Assez de fonctionnalités pour attirer tes premiers utilisateurs, valider ton idée et commencer à générer des revenus."
    },
    {
      icon: Users,
      title: "Une application fonctionnelle et testable",
      description: "Directement par ton audience pour valider ton concept rapidement"
    },
    {
      icon: DollarSign,
      title: "Un MVP pour tester rapidement ton concept",
      description: "Sans dépenser une fortune en développement complet"
    },
    {
      icon: CheckCircle,
      title: "Une solution claire à un problème réel",
      description: "Dans ta communauté avec une approche centrée utilisateur"
    },
    {
      icon: Zap,
      title: "Une base prête pour évoluer",
      description: "Vers une application complète selon tes besoins futurs"
    },
    {
      icon: Clock,
      title: "Un gros gain de temps",
      description: "Oublie les mois de développement interminables"
    }
  ];

  return (
    <section id="solutions" ref={sectionRef} className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Ce que tu obtiens concrètement :
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#19a89e] to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Et surtout : tu n'as presque rien à faire.
          </h3>
          <p className={`text-lg ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Tu me transmets les grandes lignes de ton idée. Je gère la réalisation de A à Z.
          </p>
        </div>

        <div ref={guaranteeRef} className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl shadow-2xl ${
            isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-r from-green-50 to-blue-50'
          }`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        </div>
      </div>
    </section>
  );
};

export default Solution;