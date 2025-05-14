<template>
  <div
    v-if="store.selectedProverb"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <div
      class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <div class="p-6">
        <div class="flex justify-between items-start">
          <h3
            class="text-2xl font-bold"
            :style="{ color: store.themeColors.primary }"
          >
            {{ store.selectedProverb.title }}
          </h3>
          <button
            @click="store.closeProverbModal"
            class="p-2 rounded-full hover:bg-gray-100"
          >
            <client-only>
              <XIcon
                size="24"
                :style="{ color: store.themeColors.secondary }"
              />
            </client-only>
          </button>
        </div>

        <div class="mt-6 space-y-4">
          <div>
            <h4 class="text-sm font-semibold text-gray-500">
              ORIGINAL PROVERB
            </h4>
            <p class="text-lg italic font-medium mt-1">
              {{ store.selectedProverb.content }}
            </p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-gray-500">TRANSLATION</h4>
            <p class="mt-1">{{ store.selectedProverb.translation }}</p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-gray-500">EXPLANATION</h4>
            <p class="mt-1">{{ store.selectedProverb.explanation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";
import { X as XIcon } from "lucide-vue-next";

const store = useMainStore();
</script>
