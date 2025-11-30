import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="text-center md:text-left">
            <h5 className="text-xl font-serif text-white mb-2">
              sinnes<span className="text-primary font-light">magnet</span>
            </h5>
            <p className="text-sm">Massivholzmöbel Dresden</p>
          </div>

          <div className="text-center md:text-left text-sm space-y-2">
            <p className="text-white">Tischlermeister Till Epple</p>
            <p>Am Eiswurmlager 21, 01189 Dresden</p>
            <p>Tel: 0351 861 91 81</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-sm">
             <a href="#impressum" className="hover:text-white transition-colors">Impressum</a>
             <a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Tischleratelier Sinnesmagnet. Alle Rechte vorbehalten.
        </div>
        
        {/* Placeholder Legal Sections - usually separate pages, here inline for single page app structure */}
        <div className="mt-12 space-y-8 text-xs text-stone-600 max-w-4xl mx-auto border-t border-stone-800 pt-8 opacity-50">
           <div id="impressum">
             <h6 className="font-bold text-stone-500 mb-2">Impressum (Platzhalter)</h6>
             <p>[Hier müssen die gesetzlich vorgeschriebenen Angaben gemäß § 5 TMG stehen. Name, Anschrift, Kontakt, USt-IdNr., zuständige Kammer, etc.]</p>
           </div>
           <div id="datenschutz">
             <h6 className="font-bold text-stone-500 mb-2">Datenschutz (Platzhalter)</h6>
             <p>[Hier muss die Datenschutzerklärung gemäß DSGVO stehen. Informationen zu Datenerhebung, Kontaktformular, Cookies, etc.]</p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;