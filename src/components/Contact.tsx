import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, ToggleLeft, ToggleRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 50,
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
    <section id="contact" ref={sectionRef} className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#014a74]'
          }`}>
            Prêt à lancer ton projet ?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Contacte-moi dès maintenant pour discuter de ton idée et réserver ta place
          </p>
          <div className="w-20 h-1 bg-[#19a89e] mx-auto rounded-full"></div>
        </div>

        <div ref={formRef} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-[#014a74]'
              }`}>
                Contacte-moi
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#19a89e] rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Email
                    </p>
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      elishadjefie@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#19a89e] rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Téléphone
                    </p>
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      +225 0160125373
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#19a89e] rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Localisation
                    </p>
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Abidjan, Deux-plateaux, Les Perles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4">
                  <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Contact Direct
                  </span>
                  <button
                    onClick={() => setShowServices(!showServices)}
                    className="text-[#19a89e] hover:text-[#16968c] transition-colors"
                  >
                    {showServices ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                  </button>
                  <span className={`${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Autres Services
                  </span>
                </div>
              </div>

              <div className={`p-8 rounded-xl shadow-lg ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
              }`}>
                {!showServices ? (
                  <form className="space-y-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-white' : 'text-gray-700'
                      }`}>
                        Nom complet
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#19a89e] ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="Ton nom complet"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-white' : 'text-gray-700'
                      }`}>
                        Email
                      </label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#19a89e] ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="ton@email.com"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-white' : 'text-gray-700'
                      }`}>
                        Décris ton projet
                      </label>
                      <textarea
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#19a89e] ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="Explique-moi ton idée d'application en quelques lignes..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#19a89e] hover:bg-[#16968c] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Envoyer ma demande</span>
                      <Send size={20} />
                    </button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <h3 className={`text-xl font-semibold text-center mb-6 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Autres Services
                    </h3>
                    <div className="space-y-4">
                                            <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfA0vBEUVYVcCg9gN06_ikYLY2JuS3REQI4hbmpQNFzPJdSgg" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' 
                            : 'bg-white border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div>
                          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            Formulaire de contact
                          </h4>
                          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Remplissez notre formulaire détaillé
                          </p>
                        </div>
                        <ExternalLink className={isDark ? 'text-white' : 'text-gray-800'} size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;