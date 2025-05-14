// components/SideBar.vue
<template>
  <div class="bg-white w-64 shadow-lg h-full overflow-auto">
    <!-- Close button for mobile -->
    <div class="flex justify-end p-2 lg:hidden">
      <button @click="uiStore.closeSideBar()" class="p-2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Sidebar Header -->
    <div class="p-4 border-b">
      <h1 class="text-xl font-bold text-primary">PANANAROON</h1>
    </div>

    <!-- Navigation Links -->
    <nav class="p-4">
      <NuxtLink
        to="/"
        class="block py-2 hover:text-primary flex items-center"
        @click="uiStore.closeSideBar()"
      >
        <HomeIcon class="w-5 h-5 mr-2" />
        Back to Main
      </NuxtLink>

      <!-- About Section -->
      <div class="mt-6">
        <h2 class="text-lg font-bold text-primary">About</h2>
        <p class="mt-2 text-sm">
          Pananaroon is a digital collection of Meranaw proverbs dedicated to
          preserving and sharing the rich cultural wisdom of the Meranaw people
          of Mindanao, Philippines. Our mission is to document, translate, and
          explain these valuable sayings for future generations.
        </p>
      </div>

      <!-- Ethical Principles -->
      <div class="mt-6">
        <h2 class="text-lg font-bold text-primary">Ethical Principles</h2>
        <p class="mt-2 text-sm">
          This project adheres to ethical research principles including proper
          attribution to cultural sources, respect for intellectual property of
          indigenous knowledge, and commitment to accurate translations and
          interpretations of proverbs in their cultural context.
        </p>
      </div>

      <!-- Resources -->
      <div class="mt-6">
        <h2 class="text-lg font-bold text-primary">Resources</h2>
        <p class="mt-2 text-sm">
          Our collection draws from oral traditions, academic studies, and
          contributions from Meranaw elders and scholars. We continually expand
          our database through ethical research partnerships with local
          communities.
        </p>
      </div>

      <!-- Contributors -->
      <div class="mt-6">
        <h2 class="text-lg font-bold text-primary">Contributors</h2>
        <p class="mt-2 text-sm">
          This project is made possible through the contributions of Meranaw
          cultural bearers, linguists, anthropologists, and digital preservation
          specialists dedicated to safeguarding indigenous knowledge.
        </p>
      </div>

      <!-- Contact -->
      <div class="mt-6">
        <h2 class="text-lg font-bold text-primary">Contact</h2>
        <p class="mt-2 text-sm">
          To contribute proverbs, suggest corrections, or learn more about this
          cultural preservation initiative, please contact us at
          preservation@pananaroon.org.
        </p>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useUIStore } from "~/stores/uiStore";
import { HomeIcon } from "lucide-vue-next";

const uiStore = useUIStore();
</script>
