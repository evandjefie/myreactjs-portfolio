import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react'

const ServiceCarousel: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [serviceFilter, setServiceFilter] = useState<'all' | 'dev' | 'design' | 'marketing'>('all');

  const services = [
    { title: "Je vais créer une bannière web pour votre boutique en ligne", category: 'design', description: 'Bannière responsive pour mettre en avant vos offres', link: 'https://forms.gle/your-form-1' },
    { title: "Je vais concevoir un FLYER / AFFICHE / POSTER professionnel pour votre activité", category: 'design', description: 'Affiches print & digitales prêtes à imprimer', link: 'https://forms.gle/your-form-2' },
    { title: "Je vais créer un logo Minimaliste pour booster votre image de marque", category: 'design', description: 'Logo vectoriel, déclinaisons et guide d\'usage', link: 'https://forms.gle/your-form-3' },
    { title: "Je vais vectoriser ton logo", category: 'design', description: "Vectorisation et nettoyage d\'un logo existant", link: 'https://forms.gle/your-form-4' },
    { title: "Je vais créer des visuels professionnels pour vos reseaux sociaux", category: 'marketing', description: 'Pack de visuels optimisés pour Instagram, Facebook, LinkedIn', link: 'https://forms.gle/your-form-5' },
    { title: "Je vais créer une couverture Ebook/Livre Unique et professionnel", category: 'design', description: 'Couverture 2D / 3D pour ebooks et livres numériques', link: 'https://forms.gle/your-form-6' },
    { title: "Je vais créer ta boutique en ligne", category: 'dev', description: 'Boutique clé en main (produits, paiement, livraison)', link: 'https://forms.gle/your-form-7' },
    { title: "Je vais concevoir ton tunnel de vente", category: 'marketing', description: 'Tunnel optimisé pour convertir vos visiteurs en clients', link: 'https://forms.gle/your-form-8' }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4 max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-2">
          <button onClick={() => setServiceFilter('all')} className={`px-3 py-1 rounded-full text-sm font-medium ${serviceFilter === 'all' ? 'bg-[#19a89e] text-white' : isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>Tous</button>
          <button onClick={() => setServiceFilter('dev')} className={`px-3 py-1 rounded-full text-sm font-medium ${serviceFilter === 'dev' ? 'bg-[#19a89e] text-white' : isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>Dev</button>
          <button onClick={() => setServiceFilter('design')} className={`px-3 py-1 rounded-full text-sm font-medium ${serviceFilter === 'design' ? 'bg-[#19a89e] text-white' : isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>Design</button>
          <button onClick={() => setServiceFilter('marketing')} className={`px-3 py-1 rounded-full text-sm font-medium ${serviceFilter === 'marketing' ? 'bg-[#19a89e] text-white' : isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>Marketing</button>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => { if (carouselRef.current) carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' }); }} className="p-2 rounded-full bg-white/10 hover:bg-white/20"><ChevronLeft size={20} /></button>
          <button onClick={() => { if (carouselRef.current) carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' }); }} className="p-2 rounded-full bg-white/10 hover:bg-white/20"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div ref={carouselRef} className="flex space-x-4 overflow-x-auto no-scrollbar py-2 px-4 snap-x snap-center">
        {services.filter(s => serviceFilter === 'all' ? true : s.category === serviceFilter).map((s, idx) => (
          <div key={idx} className={`min-w-[72%] sm:min-w-[260px] max-w-[320px] group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 snap-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-[#19a89e] opacity-20`}></div>
              <div className="p-4">
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>{s.title}</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{s.description}</p>
              </div>
            </div>
            <div className="p-4 border-t">
              <a href={s.link} target="_blank" rel="noreferrer" className="text-[#19a89e] hover:text-[#16968c] font-medium flex items-center space-x-2">
                <span>Remplir le formulaire</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;