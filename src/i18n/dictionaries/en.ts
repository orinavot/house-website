/**
 * English — base language and source of truth.
 *
 * Content rules (agreed with the client):
 * - The hero is Ori's original opening sentence, verbatim.
 * - Service lists and the About text are word for word from Ori's current
 *   site (housepersonal.com). Never add, drop or rephrase an item.
 * - HOUSE is one person: never write in the first-person plural
 *   (we / our / us) — in any language.
 * - No hours, no full office address, no portrait.
 */
export const en = {
  meta: {
    title: 'HOUSE Personal Property Management — Tel Aviv',
    description:
      'A one of a kind property management service in Tel Aviv, carefully designed to take care of your Israeli “home away from home”. Maintenance, repairs, renovations and pre-visit arrangements since 2010.',
  },

  a11y: {
    skip: 'Skip to content',
    primaryNav: 'Primary',
    footerNav: 'Footer',
    language: 'Language',
    currentLanguage: 'current language',
    openMenu: 'Menu',
    closeMenu: 'Close',
    homeLink: 'HOUSE Personal Property Management, home',
    whatsappFloat: 'Send a WhatsApp message',
    expand: 'Show details',
  },

  nav: {
    services: 'Services',
    about: 'About',
    contact: 'Contact',
  },

  hero: {
    /** H1 is set on two lines: lead, then rest. With the continuation it reads as one sentence. */
    title: { lead: 'HOUSE', rest: 'Personal Property Management' },
    continuation: {
      before: 'One of a kind property management service, carefully designed to take care of your Israeli ',
      emphasis: '“home away from home”',
      after: '.',
    },
    meta: 'Tel Aviv · Since 2010',
    cta: 'Get in touch',
    whatsapp: 'WhatsApp',
    imageAlt:
      'A bright living room open to a terrace with an olive tree and a pool, looking out over Tel Aviv’s towers to the sea.',
  },

  services: {
    label: 'Services',
    /** Category names, then the original lists, verbatim. */
    items: {
      maintenance: {
        title: 'Maintenance',
        list: [
          'Comprehensive weekly inspections',
          'House cleaning services',
          'Mail handling',
          'Bill & payment handling (municipal, insurance, service providers, etc.)',
        ],
      },
      repairs: {
        title: 'Repairs, Furnishings & Renovations',
        list: [
          'Scheduling and supervising service providers',
          'Repair services for electrical, plumbing, air conditioning and communication systems',
          'Pool, spa and gardening needs',
          'Scheduling furniture delivery, installation and mounting',
          'Interior design and architectural services: surveys, technical drawings, detailed photography, 3D mapping, etc.',
          'Construction supervision tailored to the requirements of the client’s architects and designers (local or international)',
        ],
      },
      previsit: {
        title: 'Pre-Visit Arrangements',
        list: [
          'House cleaning and organizing',
          'Bed, towel and linen changing (upon request)',
          'Flower arrangements (upon request)',
          'Airport pickup (upon request)',
          'Grocery shopping (upon request)',
          'Tours, tickets, restaurant reservations and other services (upon request)',
        ],
      },
      accounting: {
        title: 'Accounting & Other',
        list: ['Monthly financial reports: services, repairs, municipal fees, etc.', 'Legal representation (upon request)'],
      },
    },
    imageAlt:
      'A light-filled stone hallway with an olive tree and wooden slats, opening onto a living room and the Tel Aviv skyline.',
  },

  about: {
    label: 'About',
    /**
     * Ori's About page, verbatim. The first sentence is split in two: the
     * heading ends at "Navot" and the paragraph continues the same sentence.
     */
    heading: 'HOUSE Personal Property Management was founded in 2010 by Ori Navot.',
    continuation:
      'Ori was awarded a Bachelor of Design (2003) by Tel Aviv’s prestigious Shenkar College of Engineering and Design. Ori is the owner of an interior design studio catering to a complete range of interior design, construction, furniture and home styling needs.',
    paragraphs: [
      'Following to a major renovation project he conducted in a beautiful Tel Aviv town house owned by a French family, Ori became aware of home owners’ growing need for a trusted professional to take care of their second home.',
      'Ori’s team boasts a talented group of experts ranging from home designers and skilled service providers to legal counselors.',
    ],
    secondImageAlt:
      'A double-height concrete living room with a long linen sofa, a wall of books and plants, and a large blue painting.',
    imageAlt:
      'A stone terrace with low sofas under a timber pergola, an infinity pool and the Tel Aviv skyline across the sea.',
  },

  contact: {
    label: 'Contact',
    heading: 'Contact details',
    phoneLabel: 'Telephone & WhatsApp',
    emailLabel: 'Email',
    whatsapp: 'Message on WhatsApp',
  },

  footer: {
    tagline: 'Personal Property Management',
    location: 'Tel Aviv, Israel',
    areas: 'Neve Tzedek · Rothschild Boulevard · the seafront · central Tel Aviv',
    areasNote: 'Properties in Ramat Gan, Givatayim and Herzliya are also managed on request.',
    navHeading: 'Pages',
    contactHeading: 'Contact information',
    languageHeading: 'Language',
    rights: 'All rights reserved.',
    imagery: 'Images are illustrative.',
  },

  draftNotice: '',
};

/** Every other language must provide exactly this shape. */
export type Dictionary = typeof en;
