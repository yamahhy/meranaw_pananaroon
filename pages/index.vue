// index.vue
<template>
  <div class="main-content max-w-6xl mx-auto">
    <!-- Logo/Title with gradient -->
    <h1
      class="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent"
      :style="{
        backgroundImage: `linear-gradient(90deg, ${store.themeColors.primary}, ${store.themeColors.secondary}, ${store.themeColors.accent})`,
        letterSpacing: '1px',
      }"
    >
      PANANAROON
    </h1>

    <!-- Search Bar -->
    <div class="mb-8 max-w-xl mx-auto">
      <div class="relative">
        <input
          type="text"
          class="w-full border rounded-lg px-4 py-2 pr-10"
          placeholder="Search here..."
        />
        <button class="absolute right-2 top-2">
          <svg
            class="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Theme Categories Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="border rounded-lg p-4 hover:shadow-md transition-shadow text-center cursor-pointer"
        :class="[index % 2 === 0 ? 'text-yellow-600' : 'text-primary']"
      >
        {{ category }}
      </div>
    </div>

    <!-- Main Content Box -->
    <div class="bg-white p-6 rounded-lg shadow mb-8">
      <h2 class="text-2xl font-bold mb-4">Main Content</h2>
      <p>Your main page content goes here</p>
      <NuxtLink to="/" class="text-blue-600 hover:underline">
        Refresh Content
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import composables and components
import { useMainStore } from "~/stores";

const store = useMainStore();

// Sample categories
const categories = [
  "Family & Relationships",
  "Wisdom & Knowledge",
  "Work & Effort",
  "Character & Virtue",
  "Nature & Life",
  "Community & Society",
];

// Set page metadata
useHead({
  title: "Pananaroon - Meranaw Proverbs Collection",
});
</script>
