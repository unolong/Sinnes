import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { Category, Project } from '../types';

/**
 * Bilder werden aus dem gallery/-Ordner geladen.
 * Pfade werden von data.ts bereitgestellt (relative Pfade, z.B. 'gallery/tisch-1.jpg')
 */

const CATEGORIES: Category[] = ['Alle', 'Tische', 'Schränke & Regale', 'Betten', 'Küchen', 'Außenbereich'];
const MAX_EXAMPLES = 6;

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'Alle' || item.category === activeCategory
  );

  const displayedItems =
    activeCategory === 'Alle'
      ? filteredItems.slice(0, MAX_EXAMPLES)
      : filteredItems;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Unsere Werkschau</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Jedes Stück ein Unikat. Entdecken Sie eine Auswahl unserer bisherigen Projekte aus Dresden und Umgebung. In der Ansicht „Alle" zeigen wir eine Auswahl – wählen Sie eine Kategorie, um weitere Projekte zu sehen.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-wood-600 text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(item)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-sm aspect-[4/3] bg-stone-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="pt-4 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-wood-600 uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-wood-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm line-clamp-3 mb-3 flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white text-stone-800 transition-colors z-10"
              aria-label="Schließen"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-stone-200">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <span className="text-wood-600 font-semibold uppercase tracking-wider text-sm mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                  {selectedProject.title}
                </h3>
                <div className="prose prose-stone mb-6 text-stone-600">
                  <p>{selectedProject.fullDescription || selectedProject.description}</p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-stone-100">
                  <h4 className="text-sm font-bold text-stone-900 mb-3">Details & Materialien:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-wood-50 text-wood-800 rounded-full text-sm font-medium border border-wood-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedProject(null)}
                    className="block w-full text-center px-6 py-3 bg-stone-900 text-white font-medium rounded-lg hover:bg-wood-600 transition-colors"
                  >
                    Ähnliches Projekt anfragen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;