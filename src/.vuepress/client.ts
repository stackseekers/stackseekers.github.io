import { defineClientConfig } from 'vuepress/client';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css';
import "./styles/flags.css";

export default defineClientConfig({
  enhance({ app }) {
    app.use(PrimeVue, {
        // Default theme configuration
        theme: {
            preset: Aura
        }
     });
  },
})