<script setup lang="ts">
import { profile } from '~/data/portfolio';

useSeoMeta({
  title: 'About | Adebowale O.',
  description: 'Meet Adebowale O., a full-stack developer and product designer based in Frisco, Texas, with more than eight years of experience.',
});

const services = [
  ['Build & improve', 'Web apps, SaaS products, dashboards, and internal tools — from a new feature to a complete product.'],
  ['Design & implement', 'Responsive interfaces, design systems, and precise Figma-to-code implementation.'],
  ['Connect & stabilize', 'APIs, databases, authentication, payments, bug fixes, and production readiness.'],
];
</script>

<template>
  <main id="main-content" class="reading" tabindex="-1">
    <div class="reading-content">
      <NuxtLink to="/#work" class="back-link"><SmallIcon name="back" />Back to work</NuxtLink>
      <div class="flex items-start justify-between gap-6">
        <div>
          <p class="eyebrow mb-4">About me</p>
          <h2>Good design.<br>Thoughtful engineering.</h2>
        </div>
        <img src="/images/adebowale.jpeg" alt="Adebowale O." width="80" height="80" class="mt-1 size-20 shrink-0 rounded-full object-cover max-sm:hidden">
      </div>
      <p class="lead mt-8">I’m Adebowale, a full-stack developer and product designer based in Frisco, Texas.</p>
      <p class="mt-5">Over the past eight years, I’ve worked on web applications, SaaS products, dashboards, and responsive interfaces. I bring design and engineering together, so the details that matter in a design survive all the way into the finished product.</p>
      <p class="mt-5">I work with existing applications as well as new ideas: understanding what’s there, identifying what needs to improve, and turning that into useful progress. My experience spans frontend and backend development, product design, databases, and integrations.</p>

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
        <p class="mt-4">Vue · Nuxt · TypeScript · JavaScript · Node.js · PostgreSQL · REST APIs · Tailwind CSS · Python · Figma</p>
      </section>

      <section class="section-rule" aria-labelledby="experience-heading">
        <h3 id="experience-heading">Experience</h3>
        <div class="mt-5 flex flex-wrap justify-between gap-2">
          <strong class="font-medium">Designer &amp; Project Manager · GiG Software Systems</strong>
          <span class="text-xs text-[#726f7c]">Dec 2016 – May 2022</span>
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
