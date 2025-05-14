// stores/index.js
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    themeColors: {
      primary: "#7b1212",
      secondary: "#c17c11",
      accent: "#e8b923",
    },
    proverbs: [],
  }),

  actions: {
    // Actions for handling proverbs data
    async fetchProverbs() {
      // This would be replaced with actual API call in production
      this.proverbs = [
        {
          id: 1,
          original: "Sample Meranaw proverb text",
          translation: "English translation of the proverb",
          explanation: "Cultural context and explanation",
          category: "Wisdom & Knowledge",
        },
        // More proverbs would be added here
      ];
    },
  },
});
