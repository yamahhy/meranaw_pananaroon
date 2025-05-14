// default.vue
<template>
  <div class="min-h-screen bg-white flex">
    <!-- Sidebar - hidden by default on mobile -->
    <div
      class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform duration-300 transform"
      :class="{
        '-translate-x-full': !uiStore.isSideBarOpen,
        'translate-x-0': uiStore.isSideBarOpen,
      }"
    >
      <div class="p-4">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-xl font-bold">PANANAROON</h1>
          <button @click="uiStore.closeSideBar()" class="md:hidden">
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

        <!-- Sidebar content -->
        <div>
          <NuxtLink
            to="/"
            class="flex items-center text-blue-600 hover:underline mb-4"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Main
          </NuxtLink>

          <div class="mb-6">
            <h2 class="font-bold mb-2">About</h2>
            <p class="text-sm">
              Pananaroon is a digital collection of Meranaw proverbs dedicated
              to preserving and sharing the rich cultural wisdom of the Meranaw
              people of Mindanao, Philippines.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="font-bold mb-2">Ethical Principles</h2>
            <p class="text-sm">
              This project adheres to ethical research principles including
              proper attribution to cultural sources, respect for intellectual
              property of indigenous knowledge, and commitment to accurate
              translations.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="font-bold mb-2">Resources</h2>
            <p class="text-sm">
              Our collection draws from oral traditions, academic studies, and
              contributions from Meranaw elders and scholars.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="font-bold mb-2">Contributors</h2>
            <p class="text-sm">
              This project is made possible through the contributions of Meranaw
              cultural bearers, linguists, anthropologists, and digital
              preservation specialists.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="font-bold mb-2">Contact</h2>
            <p class="text-sm">
              To contribute proverbs, suggest corrections, or learn more about
              this cultural preservation initiative, please contact us at
              preservation@pananaroon.org.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content area -->
    <div
      class="flex-1 min-h-screen transition-all duration-300"
      :class="{ 'pl-64': uiStore.isSideBarOpen && !isMobile }"
    >
      <!-- Hamburger menu button -->
      <button
        class="fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-lg"
        @click="uiStore.toggleSideBar()"
        v-if="isMobile || !uiStore.isSideBarOpen"
      >
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
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Page content -->
      <div class="p-4">
        <NuxtPage />
      </div>
    </div>

    <!-- Proverb Modal -->
    <ProverbModal v-if="uiStore.isProverbModalOpen" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useUIStore } from "~/stores/uiStore";

const uiStore = useUIStore();
const isMobile = ref(false);

// Check if device is mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (isMobile.value) {
    uiStore.closeSideBar();
  } else {
    uiStore.openSideBar();
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
