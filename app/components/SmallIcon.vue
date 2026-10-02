<script setup lang="ts">
defineProps<{ name: 'work' | 'about' | 'reviews' | 'mail' | 'arrow' | 'back' | 'close' | 'pause' | 'play' }>();
</script>

<template>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'work'">
      <rect x="3" y="7" width="18" height="14" rx="3" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a21 21 0 0 0 18 0M10 12h4" />
    </template>
    <template v-else-if="name === 'about'">
      <circle cx="12" cy="7" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" />
    </template>
    <template v-else-if="name === 'reviews'">
      <path d="M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 0 1-1-4V9a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7Z" />
      <path d="M7 8h10M7 12h6" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m3 6 9 7 9-7" />
    </template>
    <path v-else-if="name === 'arrow'" d="M5 19 19 5M5 5h14v14" />
    <path v-else-if="name === 'back'" d="m12 5-7 7 7 7M5 12h15" />
    <path v-else-if="name === 'close'" d="m6 6 12 12M6 18 18 6" />
    <path v-else-if="name === 'pause'" d="M9 5v14M15 5v14" />
    <path v-else d="m8 5 11 7-11 7Z" />
  </svg>
</template>
