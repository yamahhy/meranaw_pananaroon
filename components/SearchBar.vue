<!-- components/SearchBar.vue -->
<template>
  <div class="w-full max-w-2xl mb-12 relative">
    <div
      class="flex items-center border rounded-md"
      :style="{ borderColor: store.themeColors.primary }"
    >
      <input
        type="text"
        placeholder="Search here..."
        class="w-full p-3 rounded-l-md focus:outline-none"
        :value="searchQuery"
        @input="updateSearch($event.target.value)"
      />
      <button
        class="bg-white p-3 rounded-r-md"
        :style="{ color: store.themeColors.primary }"
      >
        <client-only>
          <SearchIcon size="20" />
        </client-only>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "~/stores";
import { Search as SearchIcon } from "lucide-vue-next";

const store = useMainStore();

const searchQuery = computed(() => store.searchQuery);

const updateSearch = (value: string) => {
  store.updateSearchQuery(value);
};
</script>
