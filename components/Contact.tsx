import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Esstisch',
    timeframe: '',
    message: '',
    callback: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        projectType: 'Esstisch',
        timeframe: '',
        message: '',
        callback: false
      });
      // Scroll to success message
      const successMsg = document.getElementById('success-message');
      if (successMsg) successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, callback: e.target.checked }));
  };

  return (
    <section id="kontakt" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Kontakt & Anfrage</h2>
              <p className="text-stone-600 leading-relaxed">
                Wir freuen uns darauf, von Ihrer Idee zu hören. Je mehr Details Sie uns bereits im Vorfeld nennen 
                (Maße, Holzart, Nutzung), desto präziser können wir Sie beraten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900">Adresse</h4>
                  <p className="text-stone-600">
                    Tischleratelier Sinnesmagnet<br/>
                    Im Felsenkeller Dresden<br/>
                    Am Eiswurmlager 21<br/>
                    01189 Dresden
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Am+Eiswurmlager+21+01189+Dresden" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium mt-2 inline-block hover:underline"
                  >
                    Route in Google Maps öffnen
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-stone-900">Telefon</h4>
                  <p className="text-stone-600">
                    <a href="tel:+493518619181" className="hover:text-primary transition-colors">+49 351 861 91 81</a> <br/>
                    <a href="tel:+4917622399470" className="hover:text-primary transition-colors">+49 176 22 39 94 70</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-stone-900">E-Mail</h4>
                  <a href="mailto:epple@sinnesmagnet.de" className="text-stone-600 hover:text-primary transition-colors">
                    epple@sinnesmagnet.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900">Erreichbarkeit</h4>
                  <p className="text-stone-600 text-sm">
                    Mo–Fr: 9:00 – 17:00 Uhr telefonisch.<br/>
                    <span className="font-medium text-primary">Werkstattbesuche bitte nur nach Terminvereinbarung</span>, 
                    da wir oft auf Montage oder in Kundengesprächen sind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden">
            {success ? (
              <div id="success-message" className="flex flex-col items-center justify-center h-full text-center py-12 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-4">Vielen Dank!</h3>
                <p className="text-stone-600 max-w-md">
                  Wir haben Ihre Anfrage erhalten. Tischlermeister Till Epple oder ein Mitglied des Teams wird sich in der Regel innerhalb von 1–2 Werktagen bei Ihnen melden.
                </p>
                <Button onClick={() => setSuccess(false)} variant="outline" className="mt-8">
                  Neue Anfrage
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700">Ihr Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700">E-Mail-Adresse *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700">Telefonnummer (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+49 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project-type" className="block text-sm font-medium text-stone-700">Art des Projekts</label>
                    <select
                      id="project-type"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="Esstisch">Tisch / Esstisch</option>
                      <option value="Schrank">Schrank / Sideboard</option>
                      <option value="Einbaumöbel">Einbaumöbel / Regal</option>
                      <option value="Bett">Bett / Hochbett</option>
                      <option value="Küche">Küche</option>
                      <option value="Büro">Büro / Praxis</option>
                      <option value="Kindergarten">Kindergarten / Spielmöbel</option>
                      <option value="Garten">Garten / Außenbereich</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="timeframe" className="block text-sm font-medium text-stone-700">Gewünschter Zeitraum</label>
                  <input
                    type="text"
                    id="timeframe"
                    name="timeframe"
                    value={formState.timeframe}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="z.B. Sommer 2024 oder so bald wie möglich"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700">Ihre Nachricht / Projektbeschreibung *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-y"
                    placeholder="Beschreiben Sie kurz Ihre Wünsche..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="callback"
                    name="callback"
                    checked={formState.callback}
                    onChange={handleCheckbox}
                    className="w-5 h-5 text-primary border-stone-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="callback" className="text-sm text-stone-600 cursor-pointer">
                    Ich bitte um einen telefonischen Rückruf.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  size="lg" 
                  disabled={isSubmitting}
                  className={isSubmitting ? 'opacity-70' : ''}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage absenden'}
                </Button>
                
                <p className="text-xs text-stone-400 text-center mt-4">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Kontaktaufnahme zu.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;