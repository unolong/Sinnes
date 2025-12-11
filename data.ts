import { Project, Testimonial, ServiceItem, ProcessStep } from './types';

/**
 * BILDVERWALTUNG
 * Alle Galerie-Bilder befinden sich im Ordner `gallery/` im Projekt-Root.
 * Um Bilder zu aktualisieren:
 * 1. Ersetze oder füge neue JPG-Dateien in gallery/ hinzu (z.B. gallery/tisch-1.jpg)
 * 2. Aktualisiere die imageUrl-Pfade unten (z.B. 'gallery/mein-bild.jpg')
 *
 * Die Bilder werden automatisch im Browser geladen und sind Teil des lokalen Projekts.
 */

export const GALLERY_ITEMS: Project[] = [
  {
    id: '1',
    title: 'Essgruppe „Knotenpunkt“ aus Knorreiche"',
    category: 'Tische',
    description: 'Ein robuster Esstisch aus Knorreiche mit Baumkante, geölt für Langlebigkeit.',
    fullDescription: 'Knotenpunkt ist eine kompakte Essgruppe aus charakterstarker Knorreiche mit Tisch, Bank und Hockern – reduziert im Design, robust für den Alltag.',
    imageUrl: 'gallery/tisch-1.jpg',
    tags: ['Knorreiche', 'Baumkante', 'Geölt', 'Massivholztisch'],
  },
  {
    id: '2',
    title: 'Hochbett „Baumsteg"',
    category: 'Betten',
    description: 'Schwebendes Hochbett aus Eiche mit naturbelassener Leiter aus Robinie und Stauraum im Bereich darunter.',
    fullDescription: 'Baumsteg ist ein massiv gebautes Hochbett aus Eiche mit skulpturaler Robinienleiter, das den Raum darunter frei nutzbar macht und echtes Baumhaus-Gefühl ins Zimmer holt.',
    imageUrl: 'gallery/bett-1.jpg',
    tags: ['Eiche', 'Robinie', 'Hochbett'],
  },
  {
    id: '3',
    title: 'Einbauküche „Eichenwinkel“',
    category: 'Küchen',
    description: 'U-förmige Massivholzküche aus Eiche mit breiten Arbeitsplatten und viel Stauraum.',
    fullDescription: 'Eichenwinkel ist eine maßgefertigte Einbauküche aus massiver Eiche, die warme Holzoptik, robuste Arbeitsflächen und klare Linien zu einem alltagstauglichen Küchenraum verbindet.',
    imageUrl: 'gallery/kueche-1.jpg',
    tags: ['Eiche', 'Massivholzküche', 'Maßanfertigung'],
  },
  {
    id: '4',
    title: 'Doppelbett „Kirschraum“ mit Schubkästen',
    category: 'Betten',
    description: 'Massives Doppelbett aus europäischem Kirschbaum mit markantem Kopfteil, großzügen Schubkästen unter der Liegefläche und seitlichen, schwebenden Ablagen.',
    fullDescription: 'Kirschraum ist ein großzügiges Doppelbett aus europäischem Kirschbaum, das klare Linien mit viel Stauraum in den Schubkästen und einer warmen, ruhigen Ausstrahlung verbindet.',
    imageUrl: 'gallery/bett-2.jpg',
    tags: ['Kirschbaum', 'Massivholzbett', 'Stauraum'],
  },
  {
    id: '5',
    title: 'Gartenbank „Rebenblick“ aus Esche',
    category: 'Außenbereich',
    description: 'Zeitlose Gartenbank aus heller Esche mit ergonomischer Sitzfläche und klaren Linien – gemacht für lange Sommerabende im Grünen..',
    fullDescription: 'Rebenblick ist eine stabile Gartenbank aus massivem Eschenholz, die mit ihrer bequemen Form und warmen Ausstrahlung jeden Garten in einen Lieblingsplatz verwandelt.',
    imageUrl: 'gallery/garten-1.jpg',
    tags: ['Esche', 'Outdoor', 'Wetterfest'],
  },
  {
    id: '6',
    title: 'Couchtisch „Apfelkern“ mit Ablage',
    category: 'Tische',
    description: 'Kompakter Couchtisch aus lebendig gemasertem Apfelbaum mit seitlichen Fächern für Zeitungen und Bücher.',
    fullDescription: 'Apfelkern ist ein moderner Couchtisch aus massivem Apfelbaumholz mit markanter Streifenmaserung und integrierten Ablagen, der Ordnung schafft und gleichzeitig zum Blickfang im Wohnzimmer wird.',
    imageUrl: 'gallery/tisch-2.jpg',
    tags: ['Apfelbaum', 'Couchtisch', 'Ablage'],
  },
   {
    id: '7',
    title: 'Wohnwand „Linienwerk“ aus Eiche',
    category: 'Schränke & Regale',
    description: 'Modulares Ensemble aus zwei hohen Regalen und einem breiten Lowboard mit Schubladen. Bietet viel Stauraum für Bücher, Geschirr oder Technik bei klarer, ruhiger Gestaltung.',
    fullDescription: 'Linienwerk ist eine maßgefertigte Wohnwand aus massiver Eiche, die offene Regale und großzügige Schubkästen zu einem schlanken, wohnlichen Stauraumsystem verbindet.',
    imageUrl: 'gallery/schrank-3.jpg',
    tags: ['Wohnwand', 'Eiche', 'TV- & Stauraummöbel'],
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Maßgefertigte Tische',
    description: 'Vom massiven Esstisch bis zum filigranen Couchtisch. Wir fertigen Ihr Unikat passend zu Ihrem Raum.',
    iconName: 'Table',
  },
  {
    id: '2',
    title: 'Schränke & Regale',
    description: 'Intelligente Stauraumlösungen, Einbauschränke für Dachschrägen und repräsentative Bibliotheken.',
    iconName: 'Cabinet',
  },
  {
    id: '3',
    title: 'Betten & Schlafräume',
    description: 'Metallfreie Massivholzbetten für gesunden Schlaf. Zirbe, Eiche oder Buche nach Ihrem Wunsch.',
    iconName: 'Bed',
  },
  {
    id: '4',
    title: 'Küchen & Essbereiche',
    description: 'Langlebige Küchen aus Vollholz. Robust, hygienisch und mit modernster Technik ausgestattet.',
    iconName: 'Utensils',
  },
  {
    id: '5',
    title: 'Objekt & Praxis',
    description: 'Empfangstresen, Wartezimmer und Büromöbel, die Kompetenz und Wärme ausstrahlen.',
    iconName: 'Trees', // Using Trees as abstraction for "Environment"
  },
  {
    id: '6',
    title: 'Individuelle Projekte',
    description: 'Sie haben eine Skizze oder eine vage Idee? Wir setzen auch ungewöhnliche Wünsche um.',
    iconName: 'Hammer',
  },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Familie R.',
    text: 'Wir haben ein kleines Einfamilienhaus saniert und hatten die wilde Idee, aus alten Balken und Dielen der vormaligen Küche (heute Bad) eine Küche bauen zu lassen. Herr Epple war die allerbeste Wahl für unser Projekt.',

    // TODO: eigenes Bild: imageUrl: '/testimonials/kunde1.jpg'
  },
  {
    id: '2',
    name: 'Familie C.',
    text: 'Klare Weiterempfehlung. Sowohl Beratung als auch Produkt extraklasse. Bei der Beratung hat uns insbesondere gefallen, dass Herr Epple sich super einbringt und Vorschläge unterbreitet, die aber stets an den eigenen Vorstellungen orientiert sind. Insgesamt eine äußerst angenehme und unkomplizierte Abwicklung. Vielen Dank!',
 
    // TODO: eigenes Bild: imageUrl: '/testimonials/kunde2.jpg'
  },
  {
    id: '3',
    name: 'Familie S.',
    text: 'Professionell, kreativ, mit viel Herzblut und Feinsinn!Herr Epple hat für und mit uns unsere besondere Küche geplant und gebaut. Wir hätten niemand besseren finden können, um die Planung auszuarbeiten und alles mit viel Liebe zum Detail herzustellen und zu montieren.',
    // Kein Bild hier, um Fallback-Design zu testen (Standard-Icon)
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Beratung',
    description: 'Wir besprechen Ihre Wünsche, messen vor Ort auf und wählen erste Hölzer aus.'
  },
  {
    number: '02',
    title: 'Entwurf',
    description: 'Sie erhalten detaillierte Zeichnungen und ein Angebot für Ihr individuelles Möbelstück.'
  },
  {
    number: '03',
    title: 'Auswahl',
    description: 'Sie suchen sich "Ihr" Holz direkt bei uns aus. Jedes Brett ist einzigartig.'
  },
  {
    number: '04',
    title: 'Fertigung',
    description: 'In unserer Dresdner Werkstatt entsteht Ihr Möbel in präziser Handarbeit.'
  },
  {
    number: '05',
    title: 'Montage',
    description: 'Wir liefern und bauen fachgerecht bei Ihnen auf. Sauber und pünktlich.'
  }
];

export const IMAGES = {
  hero: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  // TODO: eigenes Bild: hero: '/hero/werkstatt-bg.jpg'
  about: 'gallery/till.jpg',
  // TODO: eigenes Bild: about: '/team/meister.jpg'
  materials: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
  // TODO: eigenes Bild: materials: '/materials/holzstruktur.jpg'
  contact: 'gallery/maps.jpg',
  // TODO: eigenes Bild: contact: '/contact/dresden-karte.jpg'
};