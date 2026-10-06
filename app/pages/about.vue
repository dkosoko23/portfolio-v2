<script setup lang="ts">
import { profile } from '~/data/portfolio';

useSeoMeta({
  title: 'About | Adebowale O.',
  description: 'Adebowale O. is a full-stack developer in Frisco, Texas, building web applications with Vue, Nuxt, Node.js, PostgreSQL, and APIs.',
});

const services = [
  ['Build & improve', 'Web apps, SaaS products, dashboards, and internal tools — from a new feature to a complete product.'],
  ['Connect the stack', 'APIs, database-backed features, authentication, payments, search, and third-party integrations.'],
  ['Debug & extend', 'Bug fixes, refactoring, responsive frontend implementation, and production readiness for existing applications.'],
];
</script>

<template>
  <main id="main-content" class="reading" tabindex="-1">
    <div class="reading-content">
      <NuxtLink to="/#work" class="back-link"><SmallIcon name="back" />Back to work</NuxtLink>
      <div class="flex items-start justify-between gap-6">
        <div>
          <p class="eyebrow mb-4">About me</p>
          <h2>From interface<br>to database.</h2>
        </div>
        <img src="/images/adebowale.jpeg" alt="Adebowale O." width="80" height="80" class="mt-1 size-20 shrink-0 rounded-full object-cover max-sm:hidden">
      </div>
      <p class="lead mt-8">I’m Adebowale, a full-stack developer based in Frisco, Texas. I build and improve the systems behind web products.</p>
      <p class="mt-5">My work spans Vue and Nuxt interfaces, Node.js backends, PostgreSQL databases, APIs, and third-party integrations. I connect the user-facing workflow to the application logic and data it depends on.</p>
      <p class="mt-5">With more than eight years of experience, I work on both new products and existing codebases: adding features, fixing bugs, refactoring, and preparing applications for production. My product design background helps me catch usability issues while I’m implementing the engineering.</p>

      <section class="section-rule" aria-labelledby="engineering-heading">
        <h3 id="engineering-heading">Engineering in practice</h3>
        <p class="mt-4">For a healthcare provider platform, I worked across the Nuxt frontend, Node.js backend, database architecture, and APIs. The feature set includes PostgreSQL/PostGIS geospatial search, fuzzy name matching, filtering, and provider ranking.</p>
        <NuxtLink to="/projects/provider-platform" class="text-link mt-4 inline-flex items-center gap-2">Explore the search platform <SmallIcon name="arrow" /></NuxtLink>
        <p class="mt-6">For an e-book storefront, I combined product pages, responsive checkout, and Paystack integration to connect the browsing experience to a real purchase flow.</p>
        <NuxtLink to="/projects/bookstore" class="text-link mt-4 inline-flex items-center gap-2">Explore the commerce project <SmallIcon name="arrow" /></NuxtLink>
      </section>

      <section class="section-rule" aria-labelledby="help-heading">
        <h3 id="help-heading">How I can help</h3>
        <dl class="mt-6 grid gap-7">
          <div v-for="[title, description] in services" :key="title" class="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
            <dt class="font-semibold">{{ title }}</dt>
            <dd class="leading-7 text-[#36333f]">{{ description }}</dd>
          </div>
        </dl>
      </section>

      <section id="stack" class="section-rule" aria-labelledby="stack-heading">
        <h3 id="stack-heading">Tools I work with</h3>
        <p class="mt-4">Vue · Nuxt · React · Next.js · TypeScript · JavaScript · Node.js · Go · PostgreSQL · REST APIs · Tailwind CSS · Python · Figma</p>
      </section>

      <section class="section-rule" aria-labelledby="experience-heading">
        <h3 id="experience-heading">Experience</h3>
        <div class="mt-5 flex flex-wrap justify-between gap-2">
          <strong class="font-medium">Designer &amp; Project Manager · GiG Software Systems</strong>
        </div>
        <p class="mt-3">Led the design and development of web projects and coordinated developers across a range of client engagements.</p>
      </section>

      <div class="section-rule">
        <h3>Let’s make useful things.</h3>
        <p class="mt-3">Have an application, a Figma file, or a technical problem in mind?</p>
        <a :href="profile.upwork" target="_blank" rel="noopener noreferrer" class="text-link mt-5 inline-flex items-center gap-2">Start a conversation on Upwork <SmallIcon name="arrow" /></a>
      </div>
    </div>
  </main>
</template>
