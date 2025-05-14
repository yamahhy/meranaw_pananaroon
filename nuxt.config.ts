// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  typescript: {
    shim: false,
    strict: true,
  },
  css: ["@/assets/css/main.css", "@/assets/css/variables.css"],
  devServer: {
    port: 3000,
    host: "localhost",
  },
});
