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
    "question": "Qu'est‑ce qu'un MVP exactement ?",
    "answer": "Un MVP (Minimum Viable Product) est une version simplifiée de votre application, qui contient **juste les fonctionnalités essentielles**. Le but est de tester rapidement votre idée sur le marché, d’attirer vos premiers utilisateurs, de recueillir des retours, et de valider votre concept avant d’investir dans une version complète avec toutes les fonctionnalités et finitions."
  },
  {
    "question": "31 jours, c'est vraiment possible ?",
    "answer": "Oui — mais **selon le type de projet** et sa complexité. Pour des apps relativement simples (LMS, QCM, bien‑être, suivi d’humeur, recettes, etc.), un MVP en ~31 jours est réaliste, surtout si on utilise des outils vibecoding / no‑code / low‑code. \n\nEn revanche, pour des apps plus complexes (transport avec géolocalisation temps réel, fintech avec paiement ou transferts réels, marketplace multi‑vendeurs, infrastructure lourde, forte conformité réglementaire, etc.), le délai sera **prolongé**, car ces éléments introduisent des phases supplémentaires (intégrations, sécurité, conformité, optimisation, tests poussés, etc.)."
  },
  {
    "question": "Quels types d'apps nécessitent généralement plus de temps que 31 jours ?",
    "answer": "Voici quelques exemples de projets qui dépassent souvent 30‑31 jours pour un MVP, et pourquoi :\n\n‑ **Applications de fintech / banque** : vérification KYC, sécurité des transactions, conformité légale, intégration avec des services financiers externes. \n‑ **Transport à la Uber** : géolocalisation en temps réel, suivi véhicule, matching client/conducteur, optimisation de trajet, traitement temps réel. \n‑ **Marketplace multi‑vendeurs** : gestion des profils vendeurs, catalogues multiples, paiement entre différentes parties, logistique, frais, retours. \n‑ **Applications avec infrastructure lourde / back‑end complexe** : streaming, IA fortement intégrée, données en temps réel, services à haute disponibilité, etc.\n\nCes fonctions additionnelles demandent plus de temps pour la conception, le développement, les tests, la sécurité et la mise en production."
  },
  {
    "question": "Le vibecoding, c’est génial pour aller vite… mais les bugs et failles, on en fait quoi ?",
    "answer": "Excellente question. Le vibecoding accélère fortement les phases de développement, mais il ne dispenses pas de garantir la robustesse et la sécurité. \n\nVoici ce que je fais pour minimiser les risques :\n‑ Tests unitaires et tests d’intégration dès que possible. \n‑ Phases de QA / contrôle qualité, même simples, sur les fonctionnalités essentielles. \n‑ Utilisation de composants / services éprouvés (bibliothèques, API externes fiables) pour les parties sensibles. \n‑ Si des fonctionnalités critiques (paiement, sécurité, gestion de données personnelles) sont impliquées, prévoir des audits ou validations spécifiques. \n‑ Garantie / assistance après livraison pour corriger les bugs imprévus.\n\nSi le projet est de type complexe (fintech, transport réel, etc.), j’inclus explicitement ces phases supplémentaires dans le calendrier prévu."
  },
  {
    "question": "Que se passe‑t‑il si je ne suis pas satisfait ?",
    "answer": "Votre satisfaction est ma priorité. Si le MVP ne correspond pas à vos attentes, nous en discutons ensemble, et je m’engage à faire les ajustements nécessaires (dans le cadre des fonctionnalités prévues au MVP). Si des modifications majeures ou nouvelles sont demandées, celles‑ci feront l’objet d’une estimation supplémentaire. L’objectif est toujours que vous soyez fier de votre application finale."
  },
  {
    "question": "Puis‑je faire évoluer mon MVP plus tard ?",
    "answer": "Absolument ! Le MVP est pensé comme une **base évolutive**. Après validation de l’idée, on peut ajouter de nouvelles fonctionnalités, améliorer le design, renforcer la sécurité, optimiser la performance, etc. Chaque version ultérieure part du socle déjà livré, ce qui permet de réduire la durée et le coût des évolutions."
  },
  {
    "question": "L'assistance d'1 mois inclut quoi exactement ?",
    "answer": "Durant le mois qui suit la livraison, vous bénéficiez gratuitement de : corrections de bugs liés aux fonctionnalités déjà livrées, petites modifications (dans le périmètre du MVP), aide pour la mise en ligne / publication, formation à l’utilisation de l’outil, réponses à vos questions utilisateurs. \n\nSi des besoins hors scope ou des modifications importantes apparaissent, ils seront évalués séparément."
  },
  {
    "question": "Comment se déroule le processus de développement ?",
    "answer": "Voici le déroulé typique :\n1) Vous me transmettez votre idée, vos besoins, votre public cible. \n2) On fait un cadrage / cahier des charges simplifié : quelles sont les fonctionnalités essentiels, quels sont celles qu’on pourrait repousser. \n3) On valide le design / les maquettes. \n4) Développement en mode itératif sur ~31 jours selon complexité, avec des points de contrôle réguliers. \n5) Livraison du MVP + phase de test / retour d’expérience. \n6) Assistance d’un mois pour garantir que les choses fonctionnent comme prévu.\n\nSi l’app est plus complexe, on ajoute des jalons supplémentaires pour les tests de sécurité, les intégrations externes et la conformité."
  },
  {
    "question": "Combien de clients maximum par période de développement et pourquoi ?",
    "answer": "Je limite à **3 clients par mois** (ou un nombre compatible selon calendrier) pour garantir un **accompagnement personnalisé**, la qualité du produit, et pour permettre de consacrer le temps nécessaire à chaque projet (notamment les phases de test, sécurité, correctifs). Un projet complexe doit recevoir autant d’attention qu’un projet simple, sinon des détails importants risquent d’être négligés."
  },
  {
    "question": "Le prix inclut‑il l’hébergement et les infrastructures techniques nécessaires ?",
    "answer": "Le prix de développement inclut la livraison de l’application, mais **pas toujours tous les frais d’infrastructure** (hébergement, certificats, services externes, etc.). Je vous aide à choisir les meilleures options, mais les frais récurrents (serveurs, base de données, stockage, services tiers payants) restent à votre charge. Pour les apps complexes, ces coûts peuvent être plus élevés — nous les estimons dès le cadrage."
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
          <div className="w-20 h-1 bg-[#19a89e] mx-auto rounded-full"></div>
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
                  <div className="w-10 h-10 bg-[#19a89e] rounded-lg flex items-center justify-center flex-shrink-0">
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