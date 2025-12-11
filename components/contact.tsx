import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2, MapPinIcon } from 'lucide-react';
import { IMAGES } from '../data';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const mapsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Am+Eiswurmlager+21,+01189+Dresden&travelmode=driving';

  const handleOpenMap = () => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-wood-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          
          {/* Contact Info & Map Image */}
          <div className="bg-stone-900 text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-6">Kontaktieren Sie uns</h2>
              <p className="text-stone-300 mb-8">
                Haben Sie Fragen oder eine Idee für ein Projekt? Schreiben Sie uns oder kommen Sie in der Werkstatt vorbei.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-wood-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">Werkstatt & Büro</h3>
                    <p className="text-stone-300">Am Eiswurmlager 21<br/>01189 Dresden</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-wood-400 flex-shrink-0" />
                  <a href="mailto:info@sinnesmagnet-tischlerei.de" className="text-stone-300 hover:text-white transition-colors">
                    info@sinnesmagnet-tischlerei.de
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-wood-400 flex-shrink-0" />
                  <a href="tel:+493511234567" className="text-stone-300 hover:text-white transition-colors">
                    0351 / 123 45 67
                  </a>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleOpenMap}
              className="mt-12 relative z-10 w-full group cursor-pointer"
              aria-label="Route in Google Maps planen"
            >
              <div className="relative h-56 md:h-64 rounded-xl overflow-hidden border border-stone-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={IMAGES.contact}
                  alt="Karte Dresden"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPinIcon className="w-8 h-8 text-wood-600" />
                    </div>
                    <span className="bg-white/90 text-stone-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg">
                      Route planen
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-wood-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          </div>

          {/* Form */}
          <div className="p-10 lg:p-14 bg-white">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Projektanfrage</h3>
            
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-2">Nachricht gesendet!</h4>
                <p className="text-stone-600">Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Ihr Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-wood-500 focus:border-wood-500 outline-none transition-all"
                    placeholder="Vor- und Nachname"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">E-Mail Adresse *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-wood-500 focus:border-wood-500 outline-none transition-all"
                      placeholder="max@muster.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Telefon (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-wood-500 focus:border-wood-500 outline-none transition-all"
                      placeholder="Für Rückfragen"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-stone-700 mb-1">Worum geht es?</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-wood-500 focus:border-wood-500 outline-none transition-all"
                  >
                    <option>Bitte wählen...</option>
                    <option>Esstisch / Couchtisch</option>
                    <option>Einbauschrank / Regal</option>
                    <option>Bett / Schlafzimmer</option>
                    <option>Küche</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Ihre Nachricht *</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-wood-500 focus:border-wood-500 outline-none transition-all"
                    placeholder="Erzählen Sie uns kurz von Ihrer Idee..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white font-medium rounded-lg transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Nachricht absenden <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;