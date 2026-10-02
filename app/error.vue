<script setup lang="ts">
defineProps<{ error: { statusCode: number; statusMessage?: string } }>();
</script>

<template>
  <main class="grid min-h-screen place-items-center bg-paper p-8">
    <div class="max-w-md">
      <p class="eyebrow">{{ error.statusCode }}</p>
      <h1 class="mt-4 text-4xl font-medium tracking-tight">{{ error.statusCode === 404 ? 'This page isn’t here.' : 'Something went wrong.' }}</h1>
      <p class="mt-5 leading-7">You can head back to the portfolio to explore the work.</p>
      <button class="text-link mt-7" type="button" @click="clearError({ redirect: '/' })">Back to work</button>
    </div>
  </main>
</template>
