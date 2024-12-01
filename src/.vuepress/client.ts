import { defineClientConfig } from 'vuepress/client';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css';
import "./styles/flags.css";

import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

export default defineClientConfig({
  enhance({ app }) {
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
     });
  },
  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
  },
})