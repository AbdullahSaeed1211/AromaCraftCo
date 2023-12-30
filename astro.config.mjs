import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import vercelStatic from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["github.com", "avatars.githubusercontent.com"]
  },
  integrations: [tailwind(), icon({
    include: {
      mdi: ["*"],
      // (Default) Loads entire Material Design Icon set
      ic: ["*"] // Loads only Material Design Icon's "account" SVG
    }
  })],
  output: "static",
  adapter: vercelStatic()
});