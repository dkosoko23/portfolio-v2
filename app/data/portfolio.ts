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
    title: 'SaaS Dashboard for Healthcare',
    date: 'Jun 2026',
    published: '2026-06-08',
    role: 'UI/UX & Product Designer',
    summary: 'Brand development and product interface design for a healthcare SaaS platform.',
    description: [
      'I developed the visual brand, excluding the logo, and designed the product interfaces for this healthcare SaaS project.',
      'The portfolio brings together the public website and application screens, showing how the visual system carries across the product.',
    ],
    skills: ['Product Design', 'UI/UX Design', 'Prototyping', 'Brand Development'],
    source: `${profile.upwork}?p=2063995163748773888`,
  }, [3, 0, 6]),
  defineProject({
    slug: 'provider-platform',
    title: 'Healthcare Provider Discovery Platform',
    date: 'Aug 2025',
    published: '2025-08-20',
    role: 'Lead UI/UX Designer & Product Manager · Full-Stack Development',
    summary: 'Making complex healthcare data easier to search, compare, and understand.',
    description: [
      'I designed and developed a healthcare discovery platform for finding doctors and healthcare organizations across the United States. My work covered UI/UX, the frontend and backend, database architecture, APIs, and search.',
      'The platform brings together advanced filters, geospatial search using PostgreSQL and PostGIS, fuzzy name matching, provider ranking, profiles, and reviews. Vue, Nuxt, and Node.js support the responsive experience.',
    ],
    skills: ['Vue / Nuxt', 'Node.js', 'PostgreSQL / PostGIS', 'Figma', 'Google Cloud', 'CI/CD'],
    source: `${profile.upwork}?p=1958359103121174528`,
  }),
  defineProject({
    slug: 'figma-studies',
    title: 'Healthcare Website & Interface Design',
    date: 'May 2026',
    published: '2026-05-26',
    role: 'UI/UX Design & Prototyping',
    summary: 'A selection of healthcare interfaces and responsive layouts designed in Figma.',
    description: [
      'This collection presents the interface designs published in my Figma portfolio, including the Complete Orthopedics website and its treatment and care navigation.',
    ],
    skills: ['Figma', 'UI/UX Design', 'Prototyping'],
    source: `${profile.upwork}?p=2059409978865201152`,
  }),
  defineProject({
    slug: 'amyntor-cloud',
    title: 'Amyntor Cloud — Cloud Security Website',
    date: 'Jun 2025',
    published: '2025-06-17',
    role: 'UX Designer & Visual Lead',
    summary: 'A responsive website that makes cloud security services clear and approachable.',
    description: [
      'I led the UX and UI design for Amyntor Cloud, a B2B cloud security company. The goal was to help prospective clients understand the services and find a clear next step.',
      'I designed modular layouts for desktop and mobile, with a visual language centered on security and clarity. The work includes the homepage, cloud service pages, about page, and responsive mobile designs.',
    ],
    skills: ['UI/UX Design', 'Web Design', 'Figma', 'Design Handoff'],
    source: 'https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1935024049678000128',
    website: { label: 'amyntorcloud.com', url: 'https://amyntorcloud.com' },
  }),
  defineProject({
    slug: 'windsor-education',
    title: 'Windsor — A Clearer Path to Studying Abroad',
    date: 'Feb 2023',
    published: '2023-02-07',
    role: 'UX/UI Designer',
    summary: 'Helping African students move from exploring study destinations to applying.',
    description: [
      'I led the UX and UI design for Windsor Educational Services, a website helping African students apply to schools abroad.',
      'The design brings together destination pages, an approachable application form, and information that helps students make their next decision. Clarity and trust guided the experience from the first visit to the application.',
    ],
    skills: ['UI/UX Design', 'Prototyping', 'Figma', 'Design Handoff'],
    source: 'https://www.upwork.com/freelancers/~01e4ba09ea64b47de5?p=1622877509182799872',
    website: { label: 'windsor-edu.netlify.app', url: 'https://windsor-edu.netlify.app' },
  }),
  defineProject({
    slug: 'bookstore',
    title: 'An Online Bookstore with a Personal Identity',
    date: 'Feb 2023',
    published: '2023-02-07',
    role: 'Independent Designer & Full-Stack Developer',
    summary: 'An author’s personal brand, e-book storefront, and checkout in one cohesive experience.',
    description: [
      'I designed and developed an e-commerce website that presents a client’s e-books alongside his personal brand.',
      'The project combines a bold visual identity, book and landing pages, responsive layouts, and a Paystack payment integration. I designed the checkout to make the purchase flow straightforward on desktop, tablet, and mobile.',
    ],
    skills: ['UI/UX Design', 'Full-Stack Development', 'Adobe XD', 'Prototyping', 'Payments'],
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
