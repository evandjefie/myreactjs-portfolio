import React, { useEffect, useRef } from 'react';
import { ExternalLink, Palette, FileText, Zap, Scale, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface PortfolioProps {
  isDark: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const children = projectsRef.current?.children;
      if (children && children.length > 0) {
        const childArray = Array.from(children);
        gsap.set(childArray, { autoAlpha: 0, y: 40 });

        gsap.fromTo(
          childArray,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 85%",
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "IALONNI",
      category: "Site web",
      type: "dev",
      icon: FileText,
      description: "Site vitrine d'une agence spécialisée en solutions d'intelligence artificielle",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      url:"https://ialonni.com"
    },    
    {
      title: "TchamsAi",
      category: "App web",
      type: "dev",
      icon: Zap,
      description: "Générateur de contenu intelligent spécialisé en marketing digital basé sur Gemini et conçu avec Lovable (React, Supabase)",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      url:"https://tchamsai.evanform.com"
    },
    {
      title: "YuconsultJuris",
      category: "Site web",
      type: "dev",
      icon: Scale,
      description: "Assistant IA spécialisé en droit ivoirien et OHADA pour consultations juridiques",
      image: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=600",
      url:"https://yuconsultjuris.com/"
    },
    {
      title: "Barakoo",
      category: "App web & mobile",
      type: "dev",
      icon: Wrench,
      description: "App web & mobile de mise en relation entre client et artisan (electricien, peintre, frigoriste, plombier, etc)",
      image: "https://images.pexels.com/photos/8486929/pexels-photo-8486929.jpeg?auto=compress&cs=tinysrgb&w=600",
      url:"https://barakoo.ialonni.com"
    },
    {
      title: "Mafaci",
      category: "App web",
      type: "dev",
      icon: FileText,
      description: "Application web complète pour la génération et la gestion des devis et factures",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      url:"https://mafaci.evanform.com"
    },    
    {
      title: "Edjverse",
      category: "Identité Visuelle",
      type: "design",
      icon: Palette,
      description: "Création d'identité visuelle complète",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/4938fc209509443.6700a46591778.png",
      url: "https://www.behance.net/gallery/209509443/EDJVERSE-Identit-Visuelle"
    },
    {
      title: "Hossaman Service",
      category: "Identité Visuelle",
      type: "design",
      icon: Palette,
      description: "Création d'identité visuelle complète pour une structure fournissant du personnel pour les services à domicile et en entreprise tel que le nettoyage, l la cuisine, l'assistance aux personnes agées et tout-petit (nounous), etc...",
      image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/2c70f0232935869.Y3JvcCwxMDgwLDg0NCwwLDExNw.png",
      url: "https://www.behance.net/gallery/232935869/HOSSAMAN-SERVICES-Identit-Visuelle"
    },
    {
      title: "CeZo app",
      category: "Identité Visuelle",
      type: "design",
      icon: Palette,
      description: "Création d'identité visuelle complète pour une application web qui permet de gamifier le nettoyage des lieux de vie. L’utilisateur prend des photos avant/après ou filme ses actions (balayage, ramassage de déchets). L’IA vérifie l’effort réel et attribue un score. Les scores cumulés donnent accès à des bonus : Mo internet, crédit d\’appel, bons de réduction.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/ee6ea7231540077.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
      url: "https://www.behance.net/gallery/231540077/CeZo-Cleaning-Visual-identity"
    },
    {
      title: "For You Brand",
      category: "Identité Visuelle",
      type: "design",
      icon: Palette,
      description: "Création d'identité visuelle complète pour une styliste modéliste.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/add2e3208994969.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
      url: "https://www.behance.net/gallery/208994969/FYB-Identit-Visuelle"
    },
    {
      title: "IBH",
      category: "Identité Visuelle",
      type: "design",
      icon: Palette,
      description: "Branding et identité visuelle d'une app de composition musicale basée sur l'IA",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_316/c7b33c219940935.67bdfacb79cd0.png",
      // image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/add2e3208994969.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
      url: "https://www.behance.net/gallery/219940935/IBH-Brand-guidelines"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'dev':
        return 'from-[#19a89e] to-blue-500';
      case 'design':
        return 'from-[#19a89e] to-blue-500';
      case 'devops':
        return 'from-[#19a89e] to-blue-500';
      default:
        return 'from-[#19a89e] to-blue-500';
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Mes Réalisations
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez quelques projets que j'ai réalisés pour mes clients
          </p>
          <div className="w-20 h-1 bg-[#19a89e] mx-auto rounded-full"></div>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white'
            }`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  {/* <div className={`w-10 h-10 bg-[#19a89e] ${getTypeColor(project.type)} rounded-lg flex items-center justify-center`}>
                    <project.icon className="text-white" size={20} />
                  </div> */}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <button className="flex items-center space-x-2 text-[#19a89e] text-sm font-medium hover:text-[#16968c] transition-colors">
                  <a 
                  href={`${project.url}`}
                  className='flex items-center space-x-2'
                  >
                    <span>
                      Voir le projet
                    </span>
                    <ExternalLink size={16} />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;