import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      mdi: ["*"], // (Default) Loads entire Material Design Icon set
      ic:["*"], // Loads only Material Design Icon's "account" SVG
    },
  })],
});
