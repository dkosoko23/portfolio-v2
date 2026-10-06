<script setup lang="ts">
import { profile } from '~/data/portfolio';

const route = useRoute();
const year = new Date().getFullYear();
</script>

<template>
  <div class="portfolio-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="portfolio-grid">
      <div class="sidebar-wrap">
        <aside class="sidebar" aria-label="About Adebowale">
          <div>
            <NuxtLink to="/" class="identity" aria-label="Adebowale O. home">
              <h1 class="name">Adebowale O.</h1>
            </NuxtLink>
            <p class="role">Full-Stack Developer · SaaS &amp; Web Apps</p>
            <ul class="metrics">
              <li><strong class="metric-number">8+</strong> years building and improving digital products</li>
              <li><strong class="metric-number">100%</strong> job success on Upwork</li>
              <li><strong class="metric-number">4.9★</strong> client rating, <strong class="metric-number">23</strong> completed jobs</li>
            </ul>

            <nav class="nav-links" aria-label="Main navigation">
              <NuxtLink to="/#work" :aria-current="route.path === '/' || route.path.startsWith('/projects/') ? 'page' : undefined"><SmallIcon name="work" />Work</NuxtLink>
              <NuxtLink to="/about" :aria-current="route.path === '/about' ? 'page' : undefined"><SmallIcon name="about" />About</NuxtLink>
              <NuxtLink to="/reviews" :aria-current="route.path === '/reviews' ? 'page' : undefined"><SmallIcon name="reviews" />Client Words</NuxtLink>
              <a :href="profile.upwork" class="contact-link" target="_blank" rel="noopener noreferrer"><SmallIcon name="mail" />Reach Out<span class="sr-only"> on Upwork (opens in a new tab)</span></a>
            </nav>
          </div>

          <div class="bio">
            <h2 class="eyebrow">Who am I?</h2>
            <p>I build web applications across the frontend, backend, and database: SaaS products, search platforms, dashboards, and integrations.</p>
            <p>Based in Frisco, Texas. Working with clients everywhere.</p>
            <p class="font-medium">Have a product to build or improve? <a :href="profile.upwork" target="_blank" rel="noopener noreferrer">Let’s talk.</a></p>
          </div>
        </aside>
      </div>

      <NuxtPage />

      <footer class="site-footer">
        <nav class="mobile-footer-nav" aria-label="Main navigation">
          <NuxtLink to="/#work" :aria-current="route.path === '/' || route.path.startsWith('/projects/') ? 'page' : undefined">Work</NuxtLink>
          <NuxtLink to="/about" :aria-current="route.path === '/about' ? 'page' : undefined">About</NuxtLink>
          <NuxtLink to="/reviews" :aria-current="route.path === '/reviews' ? 'page' : undefined">Client Words</NuxtLink>
        </nav>
        <p>Client work remains the property of its owners.</p>
        <p>© {{ year }} Adebowale O.</p>
        <a :href="profile.upwork" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5">Upwork <SmallIcon name="arrow" /></a>
      </footer>
    </div>
    <NuxtRouteAnnouncer />
  </div>
</template>
