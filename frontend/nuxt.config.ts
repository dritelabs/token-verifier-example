// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [],
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  modules: ["nuxt-iron-session", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  session: {
    cookieName: "yourapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});
