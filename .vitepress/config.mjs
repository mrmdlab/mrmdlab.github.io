import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MRMD | Rodent MRI and MRS in Singapore",
  description: "Magnetic Resonance Methods Development Laboratory Website",
  head: [
    ['meta',{name:"google-site-verification",content:"oeAEWYC-uhhbV_-2271KRAy8S2uevVRAHtwH-E2NL_I"}],
    ['meta',{name:"keywords",content:"rodent, mouse, rat, mri, singapore, preclinical, magnetic resonance, MR, mrmd, magnetic resonance methods development,新加坡,大鼠,小鼠,磁共振"}] 
  ],
  sitemap: {
    hostname: 'https://mrmdlab.github.io'
  },
  srcDir: "src",
  vite: {
    ssr: {
      noExternal: [ /^vuetify/ ],
    },
  }
})
