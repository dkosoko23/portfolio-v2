import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-02',
  devtools: { enabled: false },
  css: ['@fontsource-variable/inter', '~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Adebowale O. | Full-Stack Developer & Product Designer',
      meta: [
        { name: 'description', content: 'Full-stack development and product design by Adebowale O. Explore healthcare platforms, SaaS interfaces, and responsive websites.' },
        { name: 'theme-color', content: '#f8f6f0' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});
