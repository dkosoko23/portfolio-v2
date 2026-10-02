<script setup lang="ts">
import { profile, reviews } from '~/data/portfolio';

useSeoMeta({
  title: 'Client Words | Adebowale O.',
  description: 'Client feedback on design, development, communication, and collaboration with Adebowale O.',
});
</script>

<template>
  <main id="main-content" class="reading" tabindex="-1">
    <div class="reading-content">
      <NuxtLink to="/#work" class="back-link"><SmallIcon name="back" />Back to work</NuxtLink>
      <p class="eyebrow mb-4">Client words</p>
      <h2>Good work starts with<br>good collaboration.</h2>
      <p class="lead mt-7">A few words from the people I’ve worked with.</p>
      <div class="mt-10 flex flex-col">
        <figure v-for="review in reviews" :key="review.project" class="border-t border-[#dbdadf] py-8">
          <div class="mb-5 flex items-center justify-between gap-4 text-xs text-[#726f7c]">
            <span :aria-label="`${review.rating} out of 5 stars`" class="tracking-widest text-accent">★★★★★ <span class="ml-2 tracking-normal">{{ review.rating }}</span></span>
            <span>{{ review.date }}</span>
          </div>
          <blockquote class="max-w-[38ch] text-[clamp(20px,2vw,28px)] leading-relaxed tracking-tight">“{{ review.quote }}”</blockquote>
          <figcaption class="mt-6 text-xs text-[#5c5965]">{{ review.project }} · Upwork client</figcaption>
        </figure>
      </div>
      <a :href="profile.upwork" target="_blank" rel="noopener noreferrer" class="text-link mt-5 inline-flex items-center gap-2">Read the full feedback on Upwork <SmallIcon name="arrow" /></a>
    </div>
  </main>
</template>
