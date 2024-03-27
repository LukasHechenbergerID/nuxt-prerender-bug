// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { prerender: true },
    "/pageWithBiggerPayload": { prerender: true },
  },
  devtools: { enabled: true },
});
