<script setup lang="ts">
import type { Project } from '~/data/portfolio';

const props = defineProps<{ project: Project; priority?: boolean }>();
const activeIndex = ref(0);
const paused = ref(false);
const card = ref<HTMLElement>();
let timer: ReturnType<typeof setInterval> | undefined;
let observer: IntersectionObserver | undefined;
let motionQuery: MediaQueryList | undefined;
let visible = false;
let reducedMotion = false;

const stop = () => {
  if (timer) clearInterval(timer);
  timer = undefined;
};

const start = () => {
  stop();
  if (!visible || paused.value || reducedMotion || document.hidden || props.project.preview.length < 2) return;
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.project.preview.length;
  }, 6500);
};

const syncMotion = () => {
  reducedMotion = motionQuery?.matches ?? false;
  start();
};

watch(paused, start);

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  reducedMotion = motionQuery.matches;
  motionQuery.addEventListener('change', syncMotion);
  observer = new IntersectionObserver(([entry]) => {
    visible = entry?.isIntersecting ?? false;
    start();
  }, { threshold: 0.15 });
  if (card.value) observer.observe(card.value);
  document.addEventListener('visibilitychange', start);
});

onBeforeUnmount(() => {
  stop();
  observer?.disconnect();
  motionQuery?.removeEventListener('change', syncMotion);
  document.removeEventListener('visibilitychange', start);
});
</script>

<template>
  <article ref="card" class="project-card" @mouseenter="stop" @mouseleave="start" @focusin="stop" @focusout="start">
    <NuxtLink :to="`/projects/${project.slug}`" class="project-link" :aria-label="`View ${project.title}`">
      <div class="project-drift">
        <div v-for="(image, index) in project.preview" :key="image.src" class="image-layer" :class="{ 'is-active': index === activeIndex }" :aria-hidden="index !== activeIndex">
          <img class="image-mat" :src="image.src" alt="" :loading="priority && index === 0 ? 'eager' : 'lazy'" aria-hidden="true">
          <img class="image-shot" :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" :loading="priority && index === 0 ? 'eager' : 'lazy'" :fetchpriority="priority && index === 0 ? 'high' : 'auto'">
        </div>
      </div>
      <div class="card-scrim" />
      <div class="card-caption">
        <h2>{{ project.title }}</h2>
        <time :datetime="project.published">{{ project.date }}</time>
      </div>
      <span class="view-project">View project <SmallIcon name="arrow" /></span>
    </NuxtLink>
    <button v-if="project.preview.length > 1" class="slideshow-control" type="button" :aria-label="`${paused ? 'Play' : 'Pause'} ${project.title} preview`" :aria-pressed="paused" @click="paused = !paused">
      <SmallIcon :name="paused ? 'play' : 'pause'" />
    </button>
  </article>
</template>
