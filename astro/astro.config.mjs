import { defineConfig } from "astro/config";
import sanity from "astro-sanity";
import image from "@astrojs/image";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "vqhz93qr",
    dataset: "production",
    apiVersion: "2023-06-06",
    useCdn: true
  }), image(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});