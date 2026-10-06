import imageManifest from './images.json';

export interface PortfolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  published: string;
  role: string;
  summary: string;
  description: string[];
  technicalSections: {
    title: string;
    paragraphs: string[];
  }[];
  skills: string[];
  source: string;
  images: PortfolioImage[];
  preview: PortfolioImage[];
  website?: { label: string; url: string };
}

export const profile = {
  name: 'Adebowale O.',
  upwork: 'https://www.upwork.com/freelancers/~01e4ba09ea64b47de5',
};

const projectImages = (slug: string, title: string): PortfolioImage[] => imageManifest
  .filter(image => image.project === slug)
  .map(image => ({
    src: image.file,
    alt: `${title} — portfolio screen ${image.index}`,
    width: image.width,
    height: image.height,
  }));

const defineProject = (project: Omit<Project, 'images' | 'preview'>, previewOrder: number[] = [0, 1, 2]): Project => {
  const images = projectImages(project.slug, project.title);
  return {
    ...project,
    images,
    preview: previewOrder.map(index => images[index]).filter((image): image is PortfolioImage => !!image),
  };
};

export const projects: Project[] = [
  defineProject({
    slug: 'healthcare-dashboard',
    title: 'Zelohub — Healthcare Communication SaaS',
    date: 'Jun 2026',
    published: '2026-06-08',
    role: 'Full-Stack Developer · Application UI & Communication Workflows',
    summary: 'A healthcare communication workspace connecting patient conversations, contact context, and day-to-day practice workflows.',
    description: [
      'Zelohub brings communication and patient context into one application workspace. The product includes a public-facing website and application interfaces for messages, voice calls, tools, settings, and account management.',
      'My focus was the connected product experience: moving from a conversation list into a patient-specific workspace while retaining the information needed to act. The interface is organized around application state and repeatable workflows, not isolated pages.',
    ],
    technicalSections: [
      {
        title: 'Conversation state and patient context',
        paragraphs: [
          'The messaging workspace combines a conversation list, an active conversation, and a patient profile. Each region has its own responsibility, but all three need to agree on the selected person and conversation.',
          'That relationship is the central engineering concern: selecting a conversation changes the message context and the supporting profile together. Treating those as coordinated views of the same workflow helps avoid a screen that displays the right messages beside the wrong patient information.',
        ],
      },
      {
        title: 'Reusable application structure',
        paragraphs: [
          'Persistent navigation separates messages, voice calls, tools, settings, and account controls. Inside the workspace, conversation rows, contact information, tags, and message actions form recurring interface patterns.',
          'These patterns provide clear component boundaries: application navigation, list items, workspace content, and contextual details. The technical value is a structure that can accommodate different communication tasks without duplicating the entire interface for each one.',
        ],
      },
      {
        title: 'Workflow boundaries and integration concerns',
        paragraphs: [
          'Patient context includes contact information, consent indicators, tags, and an EMR entry point. These controls describe different responsibilities: identifying the person, understanding their communication context, and moving into a related clinical workflow.',
          'These workflows call for clear separation between the application UI and the services behind it. A conversation view handles selection and composition; a messaging service handles delivery; access to patient information requires server-side authorization. Keeping those responsibilities separate makes integration failures and permission constraints easier to represent in the interface.',
        ],
      },
    ],
    skills: ['Application Workflows', 'Frontend Architecture', 'State Coordination', 'Reusable UI', 'Communication Interfaces'],
    source: `${profile.upwork}?p=2063995163748773888`,
  }, [3, 0, 6]),
  defineProject({
    slug: 'provider-platform',
    title: 'Healthcare Provider Discovery Platform',
    date: 'Aug 2025',
    published: '2025-08-20',
    role: 'Full-Stack Developer · Frontend, Backend & Database Architecture',
    summary: 'A full-stack search platform combining Nuxt, Node.js, and PostgreSQL/PostGIS to find and evaluate healthcare providers.',
    description: [
      'I built the application across the frontend, backend, database, and search layers. Patients can search for doctors and healthcare organizations, narrow the results, inspect locations, and evaluate provider profiles and reviews.',
      'The technical challenge was to turn a complex healthcare directory into a connected application: search results, map locations, filters, and provider detail pages all need to describe the same underlying records.',
    ],
    technicalSections: [
      {
        title: 'Frontend, API, and database ownership',
        paragraphs: [
          'I implemented the Vue/Nuxt frontend, Node.js backend, APIs, and PostgreSQL database architecture. The application spans provider and organization discovery, detailed profiles, reviews, and responsive interfaces.',
          'That scope required thinking beyond individual screens. A provider can appear in a search result, on a map, and on a profile page; those surfaces need a consistent representation of the provider and their locations. Working across the stack let me connect the interface requirements directly to the API and database work.',
        ],
      },
      {
        title: 'Geospatial search with PostgreSQL and PostGIS',
        paragraphs: [
          'I built geospatial search with PostgreSQL and PostGIS so discovery could account for location alongside the other search criteria. Location is part of finding a relevant provider, rather than a separate map added after the results.',
          'The interface combines location input, provider results, and a map. The engineering problem is to preserve the relationship between a provider, their practice locations, and the geographic area the user is searching.',
        ],
      },
      {
        title: 'Fuzzy matching, filtering, and provider ranking',
        paragraphs: [
          'I implemented fuzzy name matching, advanced filtering, and provider ranking. These address different parts of discovery: approximate names help users find a record, filters narrow the eligible results, and ranking determines their order.',
          'A useful search experience has to balance those concerns. An approximate name match is not the same thing as a relevant provider, so the product also exposes structured criteria and profile information that help users evaluate the result.',
        ],
      },
      {
        title: 'Connected application workflows',
        paragraphs: [
          'The frontend covers provider search, provider profiles, a universal search modal, organization pages, a provider feed, and mobile layouts. I worked on the application as a connected set of workflows, including the transition from discovering a provider to inspecting their details.',
          'The project demonstrates full-stack ownership through concrete features: database-backed discovery, API integration, location-aware results, and an interface that makes those capabilities usable.',
        ],
      },
    ],
    skills: ['Vue / Nuxt', 'Node.js', 'PostgreSQL', 'PostGIS', 'API Development', 'Search & Ranking'],
    source: `${profile.upwork}?p=1958359103121174528`,
  }),
  defineProject({
    slug: 'figma-studies',
    title: 'Complete Orthopedics — Healthcare Website',
    date: 'May 2026',
    published: '2026-05-26',
    role: 'Full-Stack Developer · Healthcare Web Experience',
    summary: 'A healthcare website that organizes treatment information, patient resources, and appointment entry points into a coherent browsing experience.',
    description: [
      'Complete Orthopedics brings together care categories, treatment information, patient resources, and contact actions. The development challenge is to make a large body of medical service content navigable without overwhelming the patient.',
      'My focus was the public website: navigation by type of care, service content, and appointment calls to action. Those parts share a reusable page structure while supporting different patient needs.',
    ],
    technicalSections: [
      {
        title: 'Content structure and care navigation',
        paragraphs: [
          'The site separates conditions, patient resources, insurance information, and appointment access. Care categories such as hip, spine, knee, shoulder, and foot and ankle give patients a route into the relevant content.',
          'From an engineering perspective, that hierarchy defines the page and navigation model. A care category, an informational page, and an appointment action serve different purposes and should remain understandable as the site grows.',
        ],
      },
      {
        title: 'Reusable page composition',
        paragraphs: [
          'Care selection, service information, testimonials, provider information, and calls to action recur across the website. Each has a distinct content shape and layout responsibility, giving the frontend clear component boundaries.',
          'The implementation concern is to keep content and layout responsibilities separate: the same section structure should support different care content without forcing every page into a single inflexible template.',
        ],
      },
      {
        title: 'Appointment and contact entry points',
        paragraphs: [
          'Appointment, telephone, and contact controls connect informational browsing to a next action. They need to be discoverable within the content hierarchy and usable when the page is viewed on a smaller screen.',
          'An appointment entry point is also a system boundary. The public website can direct a patient toward scheduling, while appointment availability, booking confirmation, and clinical records belong to the scheduling system behind it.',
        ],
      },
    ],
    skills: ['Frontend Architecture', 'Content Structure', 'Component Composition', 'Responsive Navigation', 'Patient Workflows'],
    source: `${profile.upwork}?p=2059409978865201152`,
  }),
  defineProject({
    slug: 'amyntor-cloud',
    title: 'Amyntor Cloud — Cloud Security Website',
    date: 'Jun 2025',
    published: '2025-06-17',
    role: 'Full-Stack Developer · B2B Website & Service Pages',
    summary: 'A responsive B2B website structured around cloud services, reusable page layouts, and clear inquiry paths.',
    description: [
      'Amyntor Cloud needed a website that explains its cloud security and consulting services while giving prospective customers a clear path to an inquiry. The work spans the homepage, individual service pages, company information, and mobile layouts.',
      'The technical focus is a maintainable website structure: common navigation, repeatable service-page sections, flexible content layouts, and calls to action that remain useful across screen sizes.',
    ],
    technicalSections: [
      {
        title: 'Service pages as a repeatable system',
        paragraphs: [
          'Cloud security, cloud migration, cost optimization, and cloud engineering require different explanations, but share a common page structure. The portfolio shows service introductions, supporting information, platform references, and contact prompts.',
          'The engineering challenge is reuse without losing the differences between services. A shared section structure can keep layout behavior consistent while allowing each page to carry its own content and supporting imagery.',
        ],
      },
      {
        title: 'Responsive layout and content hierarchy',
        paragraphs: [
          'The desktop and mobile screens preserve the service narrative while changing the arrangement of navigation, text, and imagery. The smaller layout has to maintain reading order and keep the inquiry action within reach.',
          'This is a frontend composition problem: establish the order in the document, let sections adapt to available width, and avoid tying essential information to a desktop-only arrangement.',
        ],
      },
      {
        title: 'Service discovery and inquiry workflows',
        paragraphs: [
          'The site moves visitors from a service overview toward an inquiry. Its technical responsibility is to present the right service context and make that next step clear across the public pages.',
          'A service page needs to work as a direct entry point as well as part of the main navigation. Its introduction establishes context, the supporting sections explain the offering, and the inquiry prompt provides a next step. Shared navigation and footer structures connect those standalone pages back to the wider site.',
        ],
      },
    ],
    skills: ['Web Development', 'Reusable Page Layouts', 'Responsive Frontend', 'Service Navigation', 'Content Architecture'],
    source: 'https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1935024049678000128',
    website: { label: 'amyntorcloud.com', url: 'https://amyntorcloud.com' },
  }),
  defineProject({
    slug: 'windsor-education',
    title: 'Windsor — Study Abroad Application Website',
    date: 'Feb 2023',
    published: '2023-02-07',
    role: 'Full-Stack Developer · Content & Application Workflows',
    summary: 'A study-abroad website connecting destination discovery, educational guidance, and an application form.',
    description: [
      'Windsor Educational Services helps African students explore study options and apply to schools abroad. The website connects landing and destination pages, supporting guidance, and an application interface.',
      'The technical focus is the handoff from reading to acting: visitors need enough context to choose a destination, understand the next step, and move into the form without losing the thread of their application.',
    ],
    technicalSections: [
      {
        title: 'Destination content and navigation',
        paragraphs: [
          'The website includes a landing experience, destination information, about content, and an application form. Those surfaces represent a progression from exploration to a concrete request.',
          'The engineering concern is to give destination content a consistent structure and make the application path discoverable from relevant pages. That structure helps keep the experience coherent as destinations or supporting information change.',
        ],
      },
      {
        title: 'Application forms as a product workflow',
        paragraphs: [
          'The application interface turns interest into information the service can act on. Field grouping, labels, instructions, and the next action all contribute to whether a visitor understands what to provide.',
          'Form handling involves several distinct states: entering information, correcting invalid fields, submitting, and receiving a response. The frontend needs to preserve the applicant’s input when a request fails, while the receiving service needs to validate the submitted data independently. Separating these responsibilities gives the workflow clear success and recovery paths.',
        ],
      },
      {
        title: 'Responsive composition and reusable sections',
        paragraphs: [
          'Destination content, statistics, guidance, and application prompts recur throughout the screens. A component-based approach lets those sections share layout behavior while presenting different information.',
          'The smaller-screen experience needs to preserve the reading sequence and form usability. Content can stack vertically, but labels, instructions, and application actions must retain their relationship. The technical aim is to support the complete journey on a phone, from destination research through the application interface.',
        ],
      },
    ],
    skills: ['Web Development', 'Application Forms', 'Content Architecture', 'Responsive Frontend', 'Workflow Design'],
    source: 'https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1622877509182799872',
    website: { label: 'windsor-edu.netlify.app', url: 'https://windsor-edu.netlify.app' },
  }),
  defineProject({
    slug: 'bookstore',
    title: 'E-book Commerce & Paystack Checkout',
    date: 'Feb 2023',
    published: '2023-02-07',
    role: 'Full-Stack Developer · Storefront & Payment Integration',
    summary: 'An e-book storefront with product pages, responsive checkout, and an integrated Paystack payment flow.',
    description: [
      'I built an e-commerce website that connects an author’s public presence with the practical steps of buying an e-book: discovering the catalog, choosing a title, entering checkout information, and paying through Paystack.',
      'My work covered the storefront and the payment integration, alongside the responsive product and checkout interfaces. The focus was a usable purchase journey across desktop, tablet, and mobile.',
    ],
    technicalSections: [
      {
        title: 'From product discovery to checkout',
        paragraphs: [
          'The site connects landing pages and book pages to a checkout flow. Those pages have different responsibilities: the landing page introduces the author and catalog, the book page gives the buyer product context, and checkout collects the information needed to continue the purchase.',
          'I handled both the website implementation and the purchase interface. The portfolio includes the landing page, a tablet book page, and a mobile checkout form, showing the same commerce journey across multiple screen sizes.',
        ],
      },
      {
        title: 'Paystack payment integration',
        paragraphs: [
          'I integrated Paystack into the purchase flow so buyers could move from the storefront into payment. This made the project a commerce application with a third-party integration, rather than a catalog of static book pages.',
          'The important application boundary is the handoff between the site’s checkout and the payment provider. Product selection and checkout context need to remain understandable to the buyer as they move into that external payment step.',
        ],
      },
      {
        title: 'Responsive product and form interfaces',
        paragraphs: [
          'I implemented layouts for desktop, tablet, and mobile, including the checkout form. The narrower experience still needs to make the selected book, required information, and next action clear without the space available on a desktop page.',
          'This work combines frontend implementation with an external payment integration: the product pages establish what is being purchased, while the checkout carries the user through the transaction journey.',
        ],
      },
    ],
    skills: ['Full-Stack Development', 'Paystack Integration', 'E-commerce', 'Checkout Workflows', 'Responsive Frontend'],
    source: 'https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1622883035002159104',
  }, [0, 1, 2]),
];

export const reviews = [
  {
    project: 'Kids Club Vue Calculator',
    date: 'June 2025',
    quote: 'Adebowale works quickly on projects',
    rating: '5.0',
  },
  {
    project: 'Vue.js Calculators · Payment & Amortization Schedules',
    date: 'May 2025',
    quote: 'very responsive to questions, requests and feedback',
    rating: '5.0',
  },
  {
    project: 'Certifications and JCO',
    date: '2024–2025',
    quote: 'Debo was reliable, communicative, and highly skilled.',
    rating: '5.0',
  },
];
