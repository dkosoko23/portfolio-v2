import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-02',
  devtools: { enabled: false },
  css: ['@fontsource-variable/inter', '~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Adebowale O. | Full-Stack Developer · SaaS & Web Apps',
      meta: [
        { name: 'description', content: 'Full-stack development by Adebowale O. Explore web applications, APIs, PostgreSQL/PostGIS search, payment integrations, and responsive frontends.' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});
