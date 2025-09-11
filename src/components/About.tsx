import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Palette, 
  Server, 
  Award,
  // Tech stack icons
  Smartphone,
  Globe,
  Database,
  FileCode,
  Layers,
  Container,
  GitBranch,
  Settings,
  Box,
  BarChart3,
  Activity,
  // Design tools icons
  Figma,
  PenToolIcon,
  Pen
  , ExternalLink, ChevronLeft, ChevronRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCarousel from './ServiceCarousel';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (skillsRef.current) {
        const cards = Array.from(skillsRef.current.children);
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

      if (stackRef.current) {
        gsap.fromTo(
          stackRef.current,
          { autoAlpha: 0, scale: 0.9 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stackRef.current,
              start: "top 85%",
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Développeur FullStack",
      description: "Création d'applications web et mobile complètes"
    },
    {
      icon: Palette,
      title: "Designer",
      description: "Graphisme et Identités visuelles"
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Automatisation via CI/CD, IaC et mise en œuvre du monitoring applicatif"
    }
  ];

  const stacks = [
    { name: "Flutter", icon: Smartphone },
    { name: "React.js", icon: Globe },
    { name: "Supabase", icon: Database },
    { name: "Django", icon: FileCode },
    { name: "Laravel", icon: Layers },
    { name: "Docker", icon: Container },
    { name: "Kubernetes", icon: GitBranch },
    { name: "Jenkins", icon: Settings },
    { name: "Vagrant", icon: Box },
    { name: "Prometheus", icon: BarChart3 },
    { name: "Grafana", icon: Activity },
    { name: "Figma", icon: Figma },
    { name: "Canva", icon: Pen },
    { name: "Illustrator", icon: PenToolIcon }
  ];

  const achievements = [
    { category: "Développement", projects: ["Mafaci", "Tchamsai", "Yuconsult", "Barakoo Mobile App"] },
    { category: "Design", projects: ["Identité visuelle Edjverse", "Identité visuelle IBH", "Logos et affiches"] },
    { category: "DevOps", projects: ["Système de monitoring", "Pipeline GitOps"] }
  ];

  return (
    <section id="about" ref={sectionRef} className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Photo Section */}
          <div className="mb-8 relative mx-auto" style={{ width: '340px', height: '360px' }}>
            <div className={`absolute inset-0 rounded-2xl ${
              isDark ? 'bg-gradient-to-r from-[#19a89e] to-blue-500' : 'bg-gradient-to-r from-[#19a89e] to-blue-500'
            }`} style={{ transform: 'rotate(-3deg)' }}></div>
            <div className={`relative w-full h-full rounded-2xl overflow-hidden border-4 ${
              isDark ? 'border-gray-800' : 'border-white'
            }`}>
              <img
                src="/evandjefie_fb_new.png"
                alt="Evans DJEFIE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Je suis Evan DJEFIE
          </h2>
          <p className={`text-lg max-w-3xl mx-auto mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            J'aide les entrepreneurs à structurer, automatiser et faire grandir leur business grâce à des solutions digitales personnalisées et des identités visuelles percutantes
          </p>
          <div className="w-20 h-1 bg-[#19a89e] mx-auto rounded-full"></div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <div key={index} className={`p-6 rounded-xl text-center shadow-lg transition-all duration-300 hover:shadow-xl ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-[#19a89e] rounded-full flex items-center justify-center mx-auto mb-4">
                <skill.icon className="text-white" size={32} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {skill.title}
              </h3>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

  {/* Tech Stack */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Mes Technologies
          </h3>
          <div ref={stackRef} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {stacks.map((tech, index) => (
              <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                isDark ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-800 shadow-md'
              }`}>
                <tech.icon size={16} className="text-[#19a89e]" />
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Autres Services Carousel (moved from Contact) */}
        {/* <div className="mb-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
            Autres Services
          </h3>
          <ServiceCarousel isDark={isDark} />
        </div> */}
      </div>
    </section>
  );
};

export default About;