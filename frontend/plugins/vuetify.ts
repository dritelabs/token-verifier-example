import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//import "@mdi/font/css/materialdesignicons.css";
//import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      variations: {
        colors: ["primary", "secondary"],
        lighten: 10,
        darken: 10,
      },
    },
    // ssr: true,
  });

  nuxtApp.vueApp.use(vuetify);
});
