import { defineStore } from "pinia";
import { themeColors, sidebarContent } from "~/utils/constants";

export const useMainStore = defineStore("main", {
  state: () => ({
    selectedProverb: null as any,
    SideBarOpen: false,
    themeColors,
    sidebarContent,
    count: 0,
    isSideBarOpen: false,
  }),
  actions: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen;
    },
    closeSideBar() {
      this.isSideBarOpen = false;
    },
    increment() {
      this.count++;
    },
    closeProverbModal() {
      this.selectedProverb = null;
    },
    toggleSidebar() {
      this.SideBarOpen = !this.SideBarOpen;
    },
  },
});
