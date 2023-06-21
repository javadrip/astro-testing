import { defineConfig } from "astro/config";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "vqhz93qr",
      dataset: "production",
      apiVersion: "2023-06-06",
      useCdn: true,
    }),
  ],
});
