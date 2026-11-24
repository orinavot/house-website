import type { Dictionary } from './en';

/**
 * Français — DRAFT, pending native review.
 *
 * Verbatim from Ori's French site (housepersonal.com): the hero sentence,
 * the service names and lists (services_fr.php) and the About text
 * (about_fr.php) — only quotes, apostrophes and French spacing are typographic.
 * Interface labels are working translations. Never use « nous / notre / nos ».
 *
 * French typography: U+00A0 before : ; ? ! and inside « » (no U+202F in the fonts).
 */
const nb = ' ';

export const fr: Dictionary = {
  meta: {
    title: 'HOUSE Gestion de Propriété Sur mesure — Tel Aviv',
    description: `Un service de gestion de propriété à Tel Aviv, soigneusement conçu pour prendre soin de votre «${nb}maison israélienne quand vous n’y êtes pas${nb}». Entretien, réparations, rénovations et arrangements avant votre visite depuis 2010.`,
  },

  a11y: {
    skip: 'Aller au contenu',
    primaryNav: 'Navigation principale',
    footerNav: 'Pied de page',
    language: 'Langue',
    currentLanguage: 'langue actuelle',
    openMenu: 'Menu',
    closeMenu: 'Fermer',
    homeLink: 'HOUSE Gestion de Propriété Sur mesure, accueil',
    whatsappFloat: 'Envoyer un message WhatsApp',
    expand: 'Afficher le détail',
  },

  nav: {
    services: 'Services',
    about: 'À propos',
    contact: 'Contact',
  },

  hero: {
    title: { lead: 'HOUSE', rest: 'Gestion de Propriété Sur mesure' },
    continuation: {
      before:
        'Une forme de service de gestion de propriété soigneusement conçue pour prendre soin de votre ',
      emphasis: `«${nb}maison israélienne quand vous n’y êtes pas${nb}»`,
      after: '.',
    },
    meta: 'Tel Aviv · Depuis 2010',
    cta: 'Prendre contact',
    whatsapp: 'WhatsApp',
    imageAlt:
      'Un salon lumineux ouvert sur une terrasse avec un olivier et une piscine, face aux tours de Tel Aviv et à la mer.',
  },

  services: {
    label: 'Services',
    items: {
      maintenance: {
        title: 'Entretien',
        list: [
          'Inspections d’ensemble hebdomadaires',
          'Services de nettoyage',
          'Prise en charge du courrier',
          'Prise en charge des factures et des paiements (charges municipales, assurance, pourvoyeurs de services, etc.)',
        ],
      },
      repairs: {
        title: 'Réparations, ameublement et rénovations',
        list: [
          'Programmation et inspection des pourvoyeurs de services',
          'Services de réparation pour l’électricité, la plomberie, l’air conditionné et les systèmes de communication',
          'Besoins concernant la piscine, le spa et le jardinage',
          'Programmation de la fourniture du mobilier, l’installation et le montage des meubles',
          `Décoration d’intérieur et services architecturaux${nb}: relevés, dessins techniques, photographies détaillées, plans en 3D, etc.`,
          'Inspection de la construction adaptée aux exigences du client et des décorateurs (locaux ou internationaux)',
        ],
      },
      previsit: {
        title: 'Arrangements avant votre visite',
        list: [
          'Nettoyage et rangement de la maison',
          'Changement de literie, de serviettes de toilette et de linge de maison',
          'Arrangements floraux',
          'Prise en charge depuis l’aéroport',
          'Achats à l’épicerie',
          'Réservations de tours, de billets, de restaurant ou autres services',
        ],
      },
      accounting: {
        title: 'Comptabilité et autres',
        list: [
          `Rapports financiers mensuels${nb}: services, réparations, taxes municipales, etc.`,
          'Représentation du client au tribunal',
        ],
      },
    },
    imageAlt:
      'Une entrée en pierre baignée de lumière, avec un olivier et des lattes de bois, ouverte sur un salon et la skyline de Tel Aviv.',
  },

  about: {
    label: 'À propos',
    heading: 'HOUSE Gestion de Propriété Sur mesure a été fondée en 2010 par Ori Navot.',
    continuation:
      'Ori est titulaire d’un diplôme de décorateur d’intérieur (2003) de la prestigieuse Ecole Shenkar de technologie et conception. Ori Navot possède un studio de décoration d’intérieur fournissant des services pour un éventail complet de besoins de décoration d’intérieur, de construction, d’ameublement et de conception du chez-soi.',
    paragraphs: [
      'Suite à un grand projet de rénovation qu’il dirigea dans une très belle maison à Tel Aviv appartenant à une famille française, il se rendit compte du besoin grandissant des propriétaires de se reposer sur des professionnels fiables pour prendre soin de leur résidence secondaire.',
      'L’équipe d’Ori s’enorgueillit d’un groupe talentueux d’experts allant des décorateurs d’intérieur et fournisseurs de services spécialisés aux conseillers juridiques.',
    ],
    secondImageAlt:
      'Un séjour en béton en double hauteur avec un long canapé en lin, un mur de livres et de plantes et une grande toile bleue.',
    imageAlt:
      'Une terrasse en pierre avec canapés bas sous une pergola en bois, une piscine à débordement et la skyline de Tel Aviv au bord de la mer.',
  },

  contact: {
    label: 'Contact',
    heading: 'Coordonnées',
    phoneLabel: 'Téléphone et WhatsApp',
    emailLabel: 'E-mail',
    whatsapp: 'Écrire sur WhatsApp',
  },

  footer: {
    tagline: 'Gestion de Propriété Sur mesure',
    location: 'Tel Aviv, Israël',
    areas: 'le centre de Tel Aviv · Neve Tzedek · boulevard Rothschild · le front de mer · la vieille ville de Jaffa',
    areasNote: 'Nos principaux secteurs d’expertise, avec des services disponibles dans d’autres lieux.',
    navHeading: 'Pages',
    contactHeading: 'Coordonnées',
    languageHeading: 'Langue',
    rights: 'Tous droits réservés.',
    imagery: 'Images à titre d’illustration.',
  },

  draftNotice: 'Traduction provisoire, en cours de relecture.',
};
