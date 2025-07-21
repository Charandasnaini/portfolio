import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Star, Download, Menu, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Build a Spotify Connected App",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    link: "#",
    tags: ["Node", "Express", "React", "Spotify API"],
    type: "course"
  },
  {
    id: 2,
    title: "Spotify Profile",
    description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    link: "#",
    stars: 688,
    tags: ["React", "Express", "Spotify API", "Heroku"],
    type: "project"
  },
  {
    id: 3,
    title: "Halcyon Theme",
    description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    link: "#",
    installs: "100k+",
    tags: ["VS Code", "Sublime Text", "Atom", "iTerm"],
    type: "theme"
  },
  {
    id: 4,
    title: "brittanychiang.com (v4)",
    description: "Fourth iteration of my personal website built with React and styled with Tailwind CSS.",
    image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    link: "#",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    type: "website"
  }
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://codepen.io", label: "CodePen" },
  { icon: ExternalLink, href: "https://instagram.com", label: "Instagram" },
  { icon: ExternalLink, href: "https://goodreads.com", label: "Goodreads" }
];

const navigationItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' }
];

function App() {
  const [activeSection, setActiveSection] = useState('projects');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Node': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Express': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'Spotify API': 'bg-green-400/20 text-green-400 border-green-400/30',
      'Heroku': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'TypeScript': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
      'Tailwind CSS': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'VS Code': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      'Sublime Text': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Atom': 'bg-green-500/20 text-green-300 border-green-500/30',
      'iTerm': 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    };
    return colors[tag] || 'bg-slate-500/20 text-slate-300 border-slate-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-300">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700/80 transition-all duration-300"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className={`
          fixed lg:sticky top-0 left-0 h-screen w-80 lg:w-96 p-8 lg:p-12 
          bg-slate-900/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none
          border-r border-slate-800 lg:border-none
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-4 leading-tight">
                Brittany Chiang
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-slate-400 mb-6">
                Front End Engineer
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
            </div>

            {/* Navigation */}
            <nav className="mb-auto">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        flex items-center gap-4 text-sm font-bold tracking-widest transition-all duration-300 group
                        ${activeSection === item.id ? 'text-slate-200' : 'text-slate-500 hover:text-slate-300'}
                      `}
                    >
                      <div className={`
                        h-px transition-all duration-300
                        ${activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-12 group-hover:bg-slate-400'}
                      `} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-500 hover:text-slate-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(148,163,184,0.3)]"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-24">
              <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                <p>
                  Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a student-led design studio.
                </p>
                <p>
                  My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.
                </p>
                <p>
                  When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-24">
              <h2 className="text-2xl font-bold text-slate-200 mb-12">Experience</h2>
              <div className="space-y-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4" />
                  <div className="relative p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="text-sm text-slate-500 font-mono min-w-[120px]">
                        2018 — PRESENT
                      </div>
                      <div>
                        <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors duration-300">
                          Senior Frontend Engineer · Upstatement
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js'].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-24">
              <h2 className="text-2xl font-bold text-slate-200 mb-12">Featured Projects</h2>
              <div className="space-y-12">
                {projects.map((project) => (
                  <div key={project.id} className="group relative">
                    <div className="absolute inset-0 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4" />
                    <div className="relative">
                      <a href={project.link} className="block">
                        <div className="flex flex-col sm:flex-row gap-6 p-4">
                          {/* Project Image */}
                          <div className="sm:w-48 flex-shrink-0">
                            <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700 group-hover:border-slate-600 transition-colors duration-300">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>

                          {/* Project Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors duration-300 text-lg">
                                {project.title}
                              </h3>
                              <ExternalLink size={16} className="text-slate-400 group-hover:text-teal-300 transition-colors duration-300" />
                            </div>

                            <p className="text-slate-400 leading-relaxed mb-4">
                              {project.description}
                            </p>

                            {/* Stats */}
                            {project.stars && (
                              <div className="flex items-center gap-1 mb-4 text-slate-400">
                                <Star size={16} className="fill-current" />
                                <span className="text-sm">{project.stars}</span>
                              </div>
                            )}

                            {project.installs && (
                              <div className="flex items-center gap-1 mb-4 text-slate-400">
                                <Download size={16} />
                                <span className="text-sm">{project.installs} Installs</span>
                              </div>
                            )}

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className={`px-3 py-1 text-xs rounded-full border ${getTagColor(tag)}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-slate-500 text-sm">
              <p>
                Loosely designed in <span className="text-slate-400">Figma</span> and coded in{' '}
                <span className="text-slate-400">Visual Studio Code</span> by yours truly. Built with{' '}
                <span className="text-slate-400">React</span> and{' '}
                <span className="text-slate-400">Tailwind CSS</span>, deployed with{' '}
                <span className="text-slate-400">Netlify</span>. All text is set in the{' '}
                <span className="text-slate-400">Inter</span> typeface.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;