import React, { useState } from 'react';
import { Menu, X, Palette, Cuboid as Cube, Globe, ArrowRight, Github, Linkedin, Instagram, ChevronDown, Languages } from 'lucide-react';
import { Lightbox } from './components/Lightbox';
import { useLanguage } from './hooks/useLanguage';

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "graphic",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071",
      "https://images.unsplash.com/photo-1626785774625-8e8c1d8175c0?auto=format&fit=crop&q=80&w=2071",
      "https://images.unsplash.com/photo-1626785774789-4b6d65ad25b7?auto=format&fit=crop&q=80&w=2071"
    ],
    description: "Complete brand identity design for a tech startup"
  },
  {
    id: 2,
    title: "3D Product Visualization",
    category: "3d",
    images: [
      "https://images.unsplash.com/photo-1633899306328-c5e70574aaa3?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1633899306346-39f8e1a9fd9d?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1633899306364-9e3d8c4f8f4d?auto=format&fit=crop&q=80&w=2070"
    ],
    description: "Photorealistic 3D product renders for an electronics company"
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "web",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      "https://images.unsplash.com/photo-1460925895935-8c3b84c55142?auto=format&fit=crop&q=80&w=2015",
      "https://images.unsplash.com/photo-1460925895953-8c3b84c55156?auto=format&fit=crop&q=80&w=2015"
    ],
    description: "Full e-commerce website design and development"
  },
  {
    id: 4,
    title: "Logo Design",
    category: "logo",
    images: [
      "https://cdn.myportfolio.com/254f7732-c8c1-432d-a743-3015106fc23e/c41b6e9c-4430-4e00-8cc6-e4262ad7cdca_rw_1920.png?h=14ee6a20846b66ad1ece89dadcb2463b",
      "https://cdn.myportfolio.com/254f7732-c8c1-432d-a743-3015106fc23e/7f34f04a-764a-4ed7-82ca-528413074570_rw_1200.jpg?h=89fa84167bdbc14461b02711314040ca",
      "https://cdn.myportfolio.com/254f7732-c8c1-432d-a743-3015106fc23e/eccec8a2-cffe-4319-b7e1-dcd034cbf888_rw_1200.jpg?h=522f25131445a096655b7c69429e181d",
      "https://cdn.myportfolio.com/254f7732-c8c1-432d-a743-3015106fc23e/3e835581-bb39-4d6d-8fe2-359ef02e0cff_rw_1920.jpg?h=bc5bfc2ae706a3f981a44e4869179850"
    ],
    description: "Full e-commerce website design and development"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    initialIndex: number;
  }>({
    isOpen: false,
    images: [],
    initialIndex: 0
  });

  const { language, toggleLanguage, t } = useLanguage();

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openLightbox = (projectImages: string[], initialIndex: number = 0) => {
    setLightboxState({
      isOpen: true,
      images: projectImages,
      initialIndex
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Omar Ayesh</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="nav-link">{t.nav.work}</a>
              <a href="#about" className="nav-link">{t.nav.about}</a>
              <a href="#contact" className="nav-link">{t.nav.contact}</a>
              
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center px-2 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle language"
              >
                <Languages size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#work" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">{t.nav.work}</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">{t.nav.about}</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">{t.nav.contact}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?auto=format&fit=crop&q=80&w=2070')] opacity-5 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                Creating
                <br />
                <span className="gradient-text">Digital Magic</span>
                <br />
                That Inspires
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Multidisciplinary designer crafting memorable experiences through graphic design,
                3D art, and web design.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#work"
                  className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2069"
                alt="Abstract Design"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center flex-col">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <ChevronDown className="animate-bounce" size={24} />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Work</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A selection of my recent projects spanning graphic design, 3D art, and web design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-md transition-all duration-300 hover:shadow-lg`}
            >
              All Work
            </button>
            <button
              onClick={() => setActiveCategory('graphic')}
              className={`px-6 py-3 rounded-full flex items-center ${
                activeCategory === 'graphic'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-md transition-all duration-300 hover:shadow-lg`}
            >
              <Palette size={18} className="mr-2" /> Graphic Design
            </button>
            <button
              onClick={() => setActiveCategory('3d')}
              className={`px-6 py-3 rounded-full flex items-center ${
                activeCategory === '3d'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-md transition-all duration-300 hover:shadow-lg`}
            >
              <Cube size={18} className="mr-2" /> 3D Art
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-6 py-3 rounded-full flex items-center ${
                activeCategory === 'web'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-md transition-all duration-300 hover:shadow-lg`}
            >
              <Globe size={18} className="mr-2" /> Web Design
            </button>

            <button
              onClick={() => setActiveCategory('logo')}
              className={`px-6 py-3 rounded-full flex items-center ${
                activeCategory === 'logo'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-md transition-all duration-300 hover:shadow-lg`}
            >
              <Globe size={18} className="mr-2" /> Logo Design
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group card-hover bg-white rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(project.images)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                alt="Designer working"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 text-lg">
                I'm a multidisciplinary designer with over 5 years of experience in creating
                compelling digital experiences. My work spans across graphic design, 3D art,
                and web design, allowing me to bring a unique perspective to every project.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                I believe in creating designs that not only look beautiful but also solve
                real problems and deliver meaningful experiences to users.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
                  <Github size={28} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        initialIndex={lightboxState.initialIndex}
        onClose={closeLightbox}
      />
    </div>
  );
}

export default App;