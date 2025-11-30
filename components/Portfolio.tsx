import React, { useState } from 'react';
import { PROJECTS, CATEGORIES } from '../constants';
import { Project, ProjectCategory } from '../types';
import { X, ArrowRight } from 'lucide-react';
import Button from './Button';
import ImageWithFallback from './ImageWithFallback';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  // Function to handle "Request Similar" from modal
  const handleRequestSimilar = (categoryValue: string) => {
    setSelectedProject(null);
    const formSection = document.getElementById('kontakt');
    const select = document.getElementById('project-type') as HTMLSelectElement;
    
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      if (select) {
        select.value = categoryValue;
      }
    }
  };

  return (
    <section id="werkschau" className="py-20 bg-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Möbel &amp; Werkschau</h2>
          
          {/* Filter Bar - Horizontal Scroll on mobile */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.value as ProjectCategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.value
                    ? 'bg-stone-800 text-white shadow-md'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl bg-stone-200 aspect-[4/3] mb-4">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-stone-800" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-stone-900 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-stone-500 uppercase tracking-wider mt-1">{project.categoryLabel}</p>
              <p className="text-sm text-stone-400 mt-1">{project.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white text-stone-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="md:w-1/2 h-64 md:h-auto bg-stone-100">
              <ImageWithFallback 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-3xl font-serif text-stone-900 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-stone-900 mb-3">Besonderheiten:</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-stone-100">
                <p className="text-sm text-stone-500 mb-4 italic">
                  Jedes Möbelstück ist ein Unikat. Lassen Sie sich inspirieren.
                </p>
                <Button 
                  fullWidth 
                  onClick={() => handleRequestSimilar(selectedProject.category)}
                >
                  Ähnliches Projekt anfragen
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;