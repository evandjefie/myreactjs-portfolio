import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FAQProps {
  isDark: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = faqRef.current?.children;
      if (children && children.length > 0) {
        const childArray = Array.from(children);
        gsap.from(childArray, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "Qu'est-ce qu'un MVP exactement ?",
      answer: "Un MVP (Minimum Viable Product) est une version simplifiée de votre application qui contient uniquement les fonctionnalités essentielles. C'est parfait pour tester votre idée sur le marché, attirer vos premiers utilisateurs et valider votre concept avant d'investir dans une version complète."
    },
    {
      question: "15 jours, c'est vraiment possible ?",
      answer: "Absolument ! Grâce à ma méthodologie éprouvée et mon expérience, je peux livrer un MVP fonctionnel en 15 jours. Je me concentre sur les fonctionnalités core de votre application en utilisant des technologies modernes et efficaces comme React, Flutter et Supabase."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Votre satisfaction est ma priorité. Si vous n'êtes pas satisfait du résultat, nous en discutons et je m'engage à faire les ajustements nécessaires. Mon objectif est que vous soyez fier de votre application et qu'elle réponde parfaitement à vos attentes."
    },
    {
      question: "L'application sera-t-elle responsive ?",
      answer: "Bien sûr ! Toutes mes applications sont conçues pour être parfaitement adaptées à tous les appareils : ordinateurs, tablettes et smartphones. Votre application offrira une expérience utilisateur optimale sur tous les écrans."
    },
    {
      question: "Puis-je faire évoluer mon MVP plus tard ?",
      answer: "Absolument ! Le MVP est conçu comme une base solide et évolutive. Une fois votre concept validé, nous pouvons facilement ajouter de nouvelles fonctionnalités, améliorer le design ou intégrer de nouveaux services selon vos besoins."
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer: "J'utilise des technologies modernes et éprouvées : Flutter pour les apps mobiles, React.js pour le web, Supabase pour la base de données, Django/Laravel pour le backend si nécessaire. Toutes ces technologies garantissent performance, sécurité et évolutivité."
    },
    {
      question: "L'assistance d'1 mois inclut quoi exactement ?",
      answer: "Pendant 1 mois après la livraison, je vous accompagne gratuitement : corrections de bugs, petites modifications, aide à la mise en ligne, formation à l'utilisation, et réponses à toutes vos questions. Vous n'êtes jamais seul !"
    },
    {
      question: "Comment se déroule le processus de développement ?",
      answer: "C'est très simple : 1) Vous me transmettez votre idée et vos besoins, 2) Je crée un cahier des charges détaillé, 3) Je développe votre MVP en 15 jours avec des points réguliers, 4) Je livre votre application et vous accompagne pendant 1 mois."
    },
    {
      question: "Pourquoi seulement 3 clients par mois ?",
      answer: "Pour garantir un accompagnement de qualité et personnalisé à chaque client. Je préfère me concentrer sur quelques projets et les réussir parfaitement plutôt que de prendre trop de clients et bâcler le travail."
    },
    {
      question: "Le prix inclut-il l'hébergement ?",
      answer: "Le développement est inclus dans le prix. Pour l'hébergement, je vous aide à choisir la meilleure solution selon vos besoins (gratuite ou payante) et je m'occupe de la mise en ligne. Les frais d'hébergement restent à votre charge mais sont généralement très abordables."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-green-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Questions Fréquentes
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Toutes les réponses à vos questions sur la création de votre MVP
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div ref={faqRef} className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className={`mb-4 rounded-xl shadow-lg overflow-hidden ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#19a89e] to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-white" size={20} />
                  </div>
                  <h3 className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className={`${isDark ? 'text-white' : 'text-gray-600'}`} size={24} />
                ) : (
                  <ChevronDown className={`${isDark ? 'text-white' : 'text-gray-600'}`} size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <div className="pl-14">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;