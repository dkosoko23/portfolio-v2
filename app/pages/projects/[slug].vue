<script setup lang="ts">
import { projects } from '~/data/portfolio';
import type { PortfolioImage } from '~/data/portfolio';

const route = useRoute();
const project = projects.find(item => item.slug === route.params.slug);
if (!project) throw createError({ statusCode: 404, statusMessage: 'Project not found' });

const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
const heroImage = project.preview[0] ?? project.images[0];
const sections = project.technicalSections.map(section => ({
  ...section,
  images: section.imageIndices
    .map(index => project.images[index])
    .filter((image): image is PortfolioImage => !!image),
}));
const lightbox = ref<HTMLDialogElement>();
const selectedImage = ref<PortfolioImage>();
let previousOverflow = '';
let opener: HTMLElement | null = null;

const closeImage = () => lightbox.value?.close();
const restorePage = () => {
  document.body.style.overflow = previousOverflow;
  selectedImage.value = undefined;
  opener?.focus();
};

const openImage = async (image: PortfolioImage, event: MouseEvent) => {
  opener = event.currentTarget as HTMLElement;
  selectedImage.value = image;
  await nextTick();
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  lightbox.value?.showModal();
};

onBeforeUnmount(() => {
  if (lightbox.value?.open) {
    document.body.style.overflow = previousOverflow;
    lightbox.value.close();
  }
});

useSeoMeta({
  title: `${project.title} | Adebowale O.`,
  description: project.summary,
});
</script>

<template>
  <main id="main-content" class="reading case-study" tabindex="-1">
    <nav class="case-study-back" aria-label="Project navigation">
      <NuxtLink to="/#work" class="case-study-back-link shadow-xl"><SmallIcon name="back" />All work</NuxtLink>
    </nav>
    <header class="case-study-hero">
      <img
        v-if="heroImage"
        class="case-study-hero-image"
        :src="heroImage.src"
        :width="heroImage.width"
        :height="heroImage.height"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
      >
      <div class="case-study-heading">
        <p class="eyebrow mb-4">Project case study</p>
        <h2>{{ project.title }}</h2>
      </div>
    </header>
    <div class="case-study-body">
      <div class="reading-content">
        <p class="lead">{{ project.summary }}</p>
        <dl class="detail-meta">
          <div><dt class="eyebrow mb-2">My role</dt><dd>{{ project.role }}</dd></div>
          <div><dt class="eyebrow mb-2">Technical focus</dt><dd>{{ project.skills.join(' · ') }}</dd></div>
        </dl>
        <div class="space-y-4"><p v-for="paragraph in project.description" :key="paragraph">{{ paragraph }}</p></div>
        <div class="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a :href="project.source" class="text-link inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">View on Upwork <SmallIcon name="arrow" /></a>
          <a v-if="project.website" :href="project.website.url" class="text-link inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">{{ project.website.label }} <SmallIcon name="arrow" /></a>
        </div>
      </div>
      <section
        v-for="(section, index) in sections"
        :key="section.title"
        class="case-study-section"
        :aria-labelledby="`technical-section-${index}`"
      >
        <div class="reading-content section-rule">
          <h3 :id="`technical-section-${index}`">{{ section.title }}</h3>
          <div class="mt-4 space-y-4">
            <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
        <div class="case-study-images">
          <button
            v-for="image in section.images"
            :key="image.src"
            type="button"
            class="gallery-image"
            :aria-label="`Enlarge ${image.alt}`"
            @click="openImage(image, $event)"
          >
            <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" loading="lazy">
          </button>
        </div>
      </section>
      <NuxtLink v-if="nextProject" :to="`/projects/${nextProject.slug}`" class="reading-content section-rule flex items-center justify-between gap-6">
        <div><span class="eyebrow">Next project</span><h3 class="mt-2">{{ nextProject.title }}</h3></div>
        <SmallIcon name="arrow" />
      </NuxtLink>
    </div>
    <dialog ref="lightbox" class="image-dialog" aria-label="Expanded portfolio image" @close="restorePage" @click="event => { if (event.target === lightbox) closeImage(); }">
      <button type="button" class="dialog-close" autofocus @click="closeImage"><SmallIcon name="close" />Close</button>
      <img v-if="selectedImage" :src="selectedImage.src" :alt="selectedImage.alt" :width="selectedImage.width" :height="selectedImage.height">
    </dialog>
  </main>
</template>
