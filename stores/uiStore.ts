// stores/uiStore.js
import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({
    isSideBarOpen: false, // Default to closed
    selectedProverb: null,
    isProverbModalOpen: false,
  }),

  actions: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen;
    },

    openSideBar() {
      this.isSideBarOpen = true;
    },

    closeSideBar() {
      this.isSideBarOpen = false;
    },

    selectProverb(proverb) {
      this.selectedProverb = proverb;
      this.isProverbModalOpen = true;
    },

    closeProverbModal() {
      this.isProverbModalOpen = false;
    },
  },
});
