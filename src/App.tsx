import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  MessageSquare,
  Megaphone,
  Code2,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Training & Facilitation',
      description:
        'We engage clients to discover, create, explore, and apply learning insights in their working environment.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Marketing & Sales',
      description:
        'We create unified environments for your products and services to drive repetitive sales and profits.',
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Event Organizing',
      description:
        'We organize and manage events in a unique Namibian way, ensuring profitable success.',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Software Engineering',
      description:
        'We design and develop custom software solutions to streamline your business processes and enhance productivity.',
    },
  ];

  const portfolioItems = [
    {
      title: 'Training at Carel Auto Repairs',
      description:
        'Conducted training sessions to enhance employee skills and productivity.',
      image: '/carel.jpg',
      details: {
        Client: 'Carel Auto Repairs',
        Duration: '4 days',
        Services: 'Training',
        Results: 'Improved employee performance',
      },
    },
    {
      title: 'Marketing for Cubita Guest House',
      description:
        'Developed and implemented marketing strategies to increase bookings.',
      image: '/cubita.jpg',
      details: {
        Client: 'Cubita Guest House',
        Duration: '5 days',
        Services: 'Marketing',
        Results: 'Increased bookings by 30%',
      },
    },
    {
      title: 'Team Building at Pupkewitz Mega-build',
      description:
        'Facilitated team-building exercises to improve team cohesion and productivity.',
      image: '/pupkewitz.jpg',
      details: {
        Client: 'Pupkewitz Mega-build',
        Duration: '3 months',
        Services: 'Team Building',
        Results: 'Enhanced team collaboration',
      },
    },
    {
      title: 'Capacity building at Oniipa Town Council',
      description:
        'Facilitated Capacity building facilitation exercises to improve team cohesion and productivity.',
      image: '/oniipa.jpg',
      details: {
        Client: 'Oniipa Town Council',
        Duration: '1 month',
        Services: 'Capacity Building',
        Results: 'Enhanced team collaboration',
      },
    },
    {
      title: 'Training for Oshana LRC 2019',
      description:
        'Conducted training sessions to enhance Learners Representative skills and Leadership.',
      image: '/oshanalrc.jpg',
      details: {
        Client: 'Oshana LRC',
        Duration: '3 days',
        Services: 'Training',
        Results: 'Enhance LRC Leadership Skills',
      },
    },
    {
      title: 'Training for AMTA Ongwediva',
      description:
        'Conducted training sessions to enhance employee skills and productivity.',
      image: '/amta.jpg',
      details: {
        Client: 'AMTA Ongwediva',
        Duration: '3 days',
        Services: 'Training',
        Results: 'Improved employee performance',
      },
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/share/1EEge1wkj4/',
      label: 'Facebook',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/blessinginfotainment?igsh=MXVkaWFmbG1odnpibw==',
      label: 'Instagram',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: '#',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      url: '#',
      label: 'Twitter',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img
              src="/logo.png"
              alt="Blessing Infotainment Logo"
              className="h-12"
            />

            {/* Desktop Menu - Now pushed to the right */}
            <div className="hidden md:flex items-center space-x-12">
              <div className="flex space-x-8">
                {['home', 'services', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-gray-600 hover:text-blue-600 capitalize transition-colors relative
                      ${activeSection === item ? 'text-blue-600' : ''}
                      group`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300
                      ${activeSection === item ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`} />
                  </button>
                ))}
              </div>

              {/* Social Icons - Desktop */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {['home', 'services', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-gray-600 hover:text-blue-600 capitalize py-2 transition-colors relative
                      ${activeSection === item ? 'text-blue-600' : ''}`}
                  >
                    {item}
                    {activeSection === item && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600" />
                    )}
                  </button>
                ))}
                {/* Social Icons - Mobile */}
                <div className="flex space-x-6 pt-4 border-t">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/main.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
            Blessing Infotainment
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
            Empowering businesses through innovative solutions, comprehensive
            training, and strategic consulting services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full 
                font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full 
                font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to meet your needs and
            drive success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Work
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Explore some of our recent projects and success stories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(item)}
                className="group relative overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                    <button className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300">
                      View Details <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <p>blessinginfotainment@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <p>+264 81 709 5881 / 065 227025</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <p>P.O Box 536, Oshakati, Namibia</p>
                </div>
              </div>
              <div className="pt-6 border-t">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                    focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                    focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />
              </div>
              <div>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                    focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="training">Training</option>
                  <option value="consultation">Consultation</option>
                  <option value="marketing">Marketing</option>
                  <option value="development">Development</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                    focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 
                  rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Blessing Infotainment is your trusted partner for business growth
                and innovation. We provide comprehensive solutions that drive
                success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['home', 'services', 'portfolio', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-white capitalize transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Blessing Infotainment. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(selectedProject.details).map(([key, value]) => (
                  <div key={key} className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">{key}</p>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;