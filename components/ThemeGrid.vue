<!-- components/ThemeGrid.vue -->
<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
  >
    <div
      v-for="theme in filteredThemes"
      :key="theme.id"
      class="border rounded-md p-6 cursor-pointer hover:shadow-md transition-shadow"
      :style="{ borderColor: theme.borderColor }"
      @click="selectTheme(theme)"
    >
      <h2
        class="text-xl font-medium text-center"
        :style="{ color: theme.textColor }"
      >
        {{ theme.name }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "~/stores";
import type { Theme } from "~/types";

const store = useMainStore();
const filteredThemes = computed(() => store.filteredThemes);

const selectTheme = (theme: Theme) => {
  store.selectTheme(theme);
};
</script>
