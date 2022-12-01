import "@mdi/font/css/materialdesignicons.css";
import "bootstrap";
import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import { registerGlobalComponents } from "./registerGlobalComponents";
import { router } from "./router";
import VueSupabase from "vue-supabase";
import { supabaseUrl } from "./env";

const root = createApp(App);
registerGlobalComponents(root);

root
  .use(router)
  .use(VueSupabase, {
    supabaseUrl: supabaseUrl,
    supabaseKey: supabaseKey,
    supabaseOptions: {},
  })
  .mount("#app");
