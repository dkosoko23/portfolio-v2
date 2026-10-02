<script setup lang="ts">
import { projects } from '~/data/portfolio';

useSeoMeta({
  title: 'Adebowale O. | Full-Stack Developer & Product Designer',
  description: 'Selected product design and development work by Adebowale O.: healthcare platforms, SaaS dashboards, and responsive websites.',
});
</script>

<template>
  <main id="main-content" class="project-stack" tabindex="-1">
    <h2 id="work" class="sr-only">Selected work</h2>
    <ProjectCard v-for="(project, index) in projects" :key="project.slug" :project="project" :priority="index === 0" />
  </main>
</template>
