import { Code, Mail, Phone, MapPin, Linkedin, Github, Youtube } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-12 ${
      isDark ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-900 text-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#19a89e] rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white">
                Evan DJEFIE
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Développeur FullStack, Designer et DevOps. J'aide les entrepreneurs à créer leurs applications innovantes et à développer leur présence digitale.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span className="text-sm">elishadjefie@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com/in/evan-djefie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#19a89e] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="http://github.com/evandjefie/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#19a89e] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.youtube.com/@evandjefie1007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#19a89e] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#19a89e] transition-colors">Développement Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#19a89e] transition-colors">Applications Mobile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#19a89e] transition-colors">Design UI/UX</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#19a89e] transition-colors">DevOps</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span className="text-sm">+237 6XX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">Abidjan, Deux-plateau, Les Perles</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Evan DJEFIE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;