<!-- pages/theme/[id].vue -->
<template>
  <div class="w-full max-w-4xl mt-8">
    <button
      @click="closeThemeView"
      class="mb-6 text-gray-700 hover:text-gray-900"
    >
      &larr; Back to Categories
    </button>

    <h2
      class="text-2xl font-bold mb-6 text-center"
      :style="{ color: store.selectedTheme?.textColor }"
    >
      {{ store.selectedTheme?.name }}
    </h2>

    <div class="grid gap-4">
      <div
        v-for="proverb in store.selectedTheme?.proverbs"
        :key="proverb.id"
        class="p-4 border rounded-md cursor-pointer transition-colors hover:bg-gray-50"
        :style="{ borderColor: store.selectedTheme?.borderColor }"
        @click="selectProverb(proverb)"
      >
        <h3
          class="font-bold text-lg"
          :style="{ color: store.themeColors.primary }"
        >
          {{ proverb.title }}
        </h3>
        <p class="text-gray-600 italic">{{ proverb.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import { useMainStore } from "~/stores";
import { themes } from "~/utils/constants";

const store = useMainStore();
const route = useRoute();
const router = useRouter();

const closeThemeView = () => {
  router.push("/");
};

const selectProverb = (proverb) => {
  store.selectProverb(proverb);
};

onMounted(() => {
  const themeId = parseInt(route.params.id as string);
  const theme = themes.find((t) => t.id === themeId);

  if (!theme) {
    router.push("/");
    return;
  }

  store.selectTheme(theme);
});

// Set page metadata using useHead composable
useHead(() => ({
  title: store.selectedTheme
    ? `${store.selectedTheme.name} - Pananaroon`
    : "Pananaroon",
}));
</script>
