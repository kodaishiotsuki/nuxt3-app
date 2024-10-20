export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/style.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Nuxt 3 basic",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
      link: [{ rel: "icon", href: "/icon.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
