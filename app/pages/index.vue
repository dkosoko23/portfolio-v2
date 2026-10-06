<script setup lang="ts">
import { projects } from '~/data/portfolio';

useSeoMeta({
  title: 'Adebowale O. | Full-Stack Developer · SaaS & Web Apps',
  description: 'Full-stack development by Adebowale O. Explore web applications, APIs, PostgreSQL/PostGIS search, payment integrations, and responsive frontends.',
});
</script>

<template>
  <main id="main-content" class="project-stack" tabindex="-1">
    <h2 id="work" class="sr-only">Selected work</h2>
    <ProjectCard v-for="(project, index) in projects" :key="project.slug" :project="project" :priority="index === 0" />
  </main>
</template>
