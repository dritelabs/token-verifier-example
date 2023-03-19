// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.css",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["nuxt-iron-session"],
  session: {
    cookieName: "yourapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});
