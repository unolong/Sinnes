import { Project, FaqItem, ServiceItem, ProcessStep } from './types';
import { 
  Table, 
  Archive, 
  Library, 
  Bed, 
  Utensils, 
  Briefcase, 
  Baby, 
  Trees,
  MessageSquare,
  PenTool,
  Ruler,
  Hammer,
  Truck
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Start', href: '#start' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Werkschau', href: '#werkschau' },
  { label: 'Philosophie', href: '#philosophie' },
  { label: 'Tischlerei', href: '#tischlerei' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const CATEGORIES: { id: string; label: string; value: string }[] = [
  { id: 'all', label: 'Alle', value: 'all' },
  { id: 'tables', label: 'Tische & Couchtische', value: 'tables' },
  { id: 'cabinets', label: 'Schränke & Sideboards', value: 'cabinets' },
  { id: 'built-in', label: 'Einbaumöbel & Regale', value: 'built-in' },
  { id: 'beds', label: 'Betten', value: 'beds' },
  { id: 'kitchens', label: 'Küchen', value: 'kitchens' },
  { id: 'office', label: 'Büro & Praxis', value: 'office' },
  { id: 'kids', label: 'Kindergarten', value: 'kids' },
  { id: 'outdoor', label: 'Garten & Außen', value: 'outdoor' },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: <Table className="w-6 h-6" />,
    title: 'Tische & Couchtische',
    description: 'Massive Esstische, Couchtische und Beistelltische, die zum Mittelpunkt des Raumes werden.',
    linkCategory: 'tables'
  },
  {
    icon: <Archive className="w-6 h-6" />,
    title: 'Schränke & Sideboards',
    description: 'Eleganter Stauraum, maßgefertigt für Ihre Nischen und Bedürfnisse.',
    linkCategory: 'cabinets'
  },
  {
    icon: <Library className="w-6 h-6" />,
    title: 'Einbaumöbel & Regale',
    description: 'Passgenaue Bibliotheken, Einbauschränke und Regalsysteme für optimale Raumnutzung.',
    linkCategory: 'built-in'
  },
  {
    icon: <Bed className="w-6 h-6" />,
    title: 'Betten & Hochbetten',
    description: 'Metallfreie Massivholzbetten für einen gesunden und erholsamen Schlaf.',
    linkCategory: 'beds'
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Küchen aus Massivholz',
    description: 'Langlebige Küchenzeilen und Kochinseln, natürlich behandelt und robust.',
    linkCategory: 'kitchens'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Büro- & Praxismöbel',
    description: 'Repräsentative Empfangstheken, Schreibtische und Akustiklösungen für den Arbeitsalltag.',
    linkCategory: 'office'
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: 'Kindergarten- & Spielmöbel',
    description: 'Hochebenen, Spielpodeste und kindgerechte Möbel, oft aus robuster Robinie.',
    linkCategory: 'kids'
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: 'Garten & Außenbereich',
    description: 'Wetterfeste Gartenmöbel, Terrassen und Rankgerüste, die natürlich altern.',
    linkCategory: 'outdoor'
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Esstisch Ensemble',
    category: 'tables',
    categoryLabel: 'Tische',
    image: '/image_5.jpg',
    description: 'Ein massiver Esstisch mit passender Bank und Hockern, perfekt abgestimmt auf den Außenbereich im historischen Innenhof.',
    details: 'Eiche massiv, Dresden-Plauen',
    features: ['Massive Bohlen', 'Passende Sitzbank', 'Wetterbeständige Ölung']
  },
  {
    id: '2',
    title: 'Maßgefertigte Wohnwand',
    category: 'built-in',
    categoryLabel: 'Einbaumöbel',
    image: '/image_8.jpg',
    description: 'Großzügiges Regalsystem mit integriertem TV-Bereich und Stauraum, eingepasst um eine Zimmertür.',
    details: 'Nussbaum, Privatwohnung',
    features: ['Raumhohe Anpassung', 'Integrierte Türüberbauung', 'Edle Nussbaum-Fronten']
  },
  {
    id: '3',
    title: 'Design-Couchtische',
    category: 'tables',
    categoryLabel: 'Tische',
    image: '/image_2.jpg',
    description: 'Ein Satz aus zwei minimalistischen Couchtischen mit klaren Linien und handwerklicher Präzision.',
    details: 'Kirschbaum, Dresden',
    features: ['Schlichte Zargenkonstruktion', 'Unterschiedliche Höhen', 'Fein geschliffene Oberfläche']
  },
  {
    id: '4',
    title: 'Home Office & Vitrine',
    category: 'office',
    categoryLabel: 'Büro',
    image: '/image_6.jpg',
    description: 'Kombination aus höhenverstellbarem Schreibtisch und einer eleganten Vitrine mit Glasböden.',
    details: 'Esche mit Kern, Arbeitszimmer',
    features: ['Höhenverstellbares Gestell', 'Vitrinen mit Glasfachböden', 'Integrierte Kabelführung']
  },
  {
    id: '5',
    title: 'Rollcontainer & Schreibtisch',
    category: 'office',
    categoryLabel: 'Büro',
    image: '/image_7.jpg',
    description: 'Massiver Schreibtisch mit passendem Rollcontainer. Funktionale Schubladen mit hochwertigen Auszügen.',
    details: 'Buche massiv, Dresden',
    features: ['Vollauszüge', 'Gezinkte Schubladen', 'Rollen für Flexibilität']
  },
  {
    id: '6',
    title: 'Hocker & Beistelltisch',
    category: 'tables',
    categoryLabel: 'Kleinmöbel',
    image: '/image_4.jpg',
    description: 'Robuster Hocker mit klassischer Schlitz-und-Zapfen-Verbindung, vielseitig einsetzbar.',
    details: 'Eiche, Felsenkeller',
    features: ['Traditionelle Verbindungen', 'Kompakte Maße', 'Zeitloses Design']
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Kennenlernen & Beratung',
    description: 'Wir besprechen Ihre Wünsche, den Raum und die Funktionen. Gerne bei Ihnen vor Ort oder in unserer Werkstatt.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: 'Entwurf & Angebot',
    description: 'Sie erhalten eine handgezeichnete Skizze oder 3D-Visualisierung sowie ein transparentes Festpreisangebot.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: 'Feinplanung',
    description: 'Wir wählen gemeinsam das konkrete Holz aus (Maserung, Farbe) und legen die letzten Details fest.',
    icon: <Ruler className="w-6 h-6" />
  },
  {
    title: 'Fertigung',
    description: 'In unserer Werkstatt entsteht Ihr Möbelstück in Handarbeit mit viel Liebe zum Detail.',
    icon: <Hammer className="w-6 h-6" />
  },
  {
    title: 'Lieferung & Montage',
    description: 'Wir liefern das Möbelstück persönlich und montieren es fachgerecht und sauber bei Ihnen.',
    icon: <Truck className="w-6 h-6" />
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Wie läuft ein typisches Projekt ab und wie lange dauert es?',
    answer: 'Nach der ersten Beratung und Beauftragung liegt die Lieferzeit je nach Auftragslage und Umfang meist zwischen 6 und 12 Wochen. Wir halten Sie während der Fertigung auf dem Laufenden.'
  },
  {
    question: 'Wieviel kostet ein maßgefertigtes Massivholzmöbel?',
    answer: 'Da jedes Stück ein Unikat ist, variieren die Preise. Ein individueller Esstisch beginnt meist bei ca. 1.800€, Einbauschränke werden nach Kubikmeter und Aufwand kalkuliert. Wir erstellen Ihnen gerne ein unverbindliches Angebot.'
  },
  {
    question: 'Mit welchen Holzarten arbeiten Sie?',
    answer: 'Vorwiegend heimische Hölzer wie Eiche, Esche, Ahorn, Buche, Erle, Kirsche und Nussbaum. Für den Außenbereich nutzen wir gerne die sehr widerstandsfähige Robinie.'
  },
  {
    question: 'Bieten Sie auch Möbel für Kindergärten an?',
    answer: 'Ja, wir haben viel Erfahrung im Bau von Hochebenen, Spielpodesten und kindgerechten Möbeln für Kitas, Schulen und Waldorf-Einrichtungen, selbstverständlich unter Beachtung der geltenden Sicherheitsnormen.'
  },
  {
    question: 'Wie pflege ich ein geöltes Massivholzmöbel?',
    answer: 'Ein feuchtes Tuch (ohne aggressive Reiniger) reicht meist aus. Je nach Beanspruchung sollte die Oberfläche alle 1-2 Jahre leicht nachgeölt werden. Wir geben Ihnen dazu eine genaue Anleitung und Pflegemittel mit.'
  },
  {
    question: 'In welchem Umkreis arbeiten Sie?',
    answer: 'Unser Fokus liegt auf Dresden und dem Umland (Radebeul, Pirna, Meißen, Sächsische Schweiz). Bei größeren Projekten sind wir auch sachsenweit tätig.'
  }
];