import React from 'react';
import ImageWithFallback from './ImageWithFallback';

const Workshop: React.FC = () => {
  return (
    <section id="tischlerei" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
               <ImageWithFallback 
                 src="/image_4.jpg" 
                 alt="Massivholz Hocker im Innenhof" 
                 className="rounded-2xl w-full h-64 object-cover"
               />
               <ImageWithFallback 
                 src="/image_2.jpg" 
                 alt="Couchtische auf Kopfsteinpflaster" 
                 className="rounded-2xl w-full h-64 object-cover mt-8"
               />
             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Die Tischlerei</h2>
            <h3 className="text-xl text-stone-500 mb-6">Im historischen Felsenkeller Dresden</h3>
            
            <div className="prose prose-stone text-stone-600 leading-relaxed">
              <p className="mb-4">
                Unser Atelier befindet sich im traditionsreichen Areal des Felsenkellers in Dresden-Plauen. 
                Wo früher Bier lagerte, entsteht heute feinstes Handwerk. Die Verbindung von alten Gemäuern und 
                moderner Holzbearbeitung prägt die Atmosphäre unserer Arbeit.
              </p>
              <p className="mb-4">
                <strong>Tischlermeister Till Epple</strong> gründete Sinnesmagnet mit der Vision, das klassische 
                Handwerk wieder stärker mit zeitgemäßem Design zu verknüpfen. Wegwerfmöbel gibt es genug. 
                Wir bauen Stücke, die Sie ein Leben lang begleiten – und vielleicht sogar die nächste Generation.
              </p>
              <p>
                Neben dem klassischen Bankraum für Feinarbeiten verfügen wir über einen modernen Maschinenpark 
                und einen Außenbereich, der besonders für die Bearbeitung großer Robinienstämme für Spielplatzbauten genutzt wird.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workshop;