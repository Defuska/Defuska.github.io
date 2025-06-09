// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Defuska.github.io",
  base: "/defuska",

  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});
