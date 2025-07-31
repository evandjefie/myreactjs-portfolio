import React, { useEffect, useRef } from 'react';
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
  Activity
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const skillsChildren = skillsRef.current?.children;
      if (skillsChildren && skillsChildren.length > 0) {
        const skillsArray = Array.from(skillsChildren);
        gsap.from(skillsArray, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        });
      }

      const stackChildren = stackRef.current?.children;
      if (stackChildren && stackChildren.length > 0) {
        const stackArray = Array.from(stackChildren);
        gsap.from(stackArray, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 80%",
          }
        });
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
      description: "Interfaces utilisateur modernes et identités visuelles"
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Déploiement et monitoring d'applications"
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
    { name: "Grafana", icon: Activity }
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
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <div key={index} className={`p-6 rounded-xl text-center shadow-lg transition-all duration-300 hover:shadow-xl ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#19a89e] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* Achievements */}
        <div>
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Mes Réalisations
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-lg ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
              }`}>
                <div className="flex items-center mb-4">
                  <Award className="text-[#19a89e] mr-2" size={24} />
                  <h4 className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {achievement.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {achievement.projects.map((project, projectIndex) => (
                    <li key={projectIndex} className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      • {project}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;