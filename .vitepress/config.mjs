import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MRMD | Mouse and Rat MRI in Singapore",
  description: "Magnetic Resonance Methods Development Laboratory Website",
  head: [
    ['meta', { name: "google-site-verification", content: "oeAEWYC-uhhbV_-2271KRAy8S2uevVRAHtwH-E2NL_I" }],
    ['meta', { name: "keywords", content: "rodent, mouse, rat, mri, mrs, singapore, preclinical, magnetic resonance, MR, mrmd, magnetic resonance methods development,新加坡,大鼠,小鼠,磁共振" }],
    ['link', { rel: "icon", href: "/favicon.ico" }],
  ],
  sitemap: {
    hostname: 'https://mrmdlab.github.io'
  },
  srcDir: "src",
  vite: {
    ssr: {
      noExternal: [/^vuetify/],
    },
  }
})
