import logo from '../assets/evandjefie-logo1.png';
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-bgShade py-28 md:px-12 px-4">
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20'>
              <div className="text-white font-bold text-lg cursor-pointer">
                <img src={logo} alt="" className="h-10 " />
              </div>
              <div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
                <Link activeClass="active" smooth={true} spy={true} offset={-100} 
                  to="home"
                  className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
                >
                  Home
                </Link>
                <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="skills" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">
                  Skills
                </Link>
                <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="about" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
                  
                  About me
                </Link>
                <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="portfolio" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
                  
                  Portfolio
                </Link>
                <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="testimonials" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
                  Testimonials
                </Link>
              </div>
              <div className='flex items-center gap-4 ml-4'>
                <a href='https://www.linkedin.com/in/evan-djefie/'>
                  <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
                <a href='mailto:evandjefie10@gmail.com'>
                  <MdEmail className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
                <a href='https://github.com/evandjefie'>
                  <FaGithub className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
                <a href='https://twitter.com/EvanDjefie'>
                  <FaTwitter className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
                <a href='https://youtube.com/@evandjefie1007'>
                  <FaYoutube className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
              </div>
            </div>
            <hr />
            <div className='mt-10 flex flex-col md:flex-row items-center justify-center gap-8'>
                <p>© 2023 Evan DJÉFIÉ</p>
            </div>
        </div>
    );
};

export default Footer;