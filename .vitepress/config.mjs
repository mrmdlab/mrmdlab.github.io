import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MRMD | Rodent MRI and MRS in Singapore",
  description: "Magnetic Resonance Methods Development Laboratory Website",
  srcDir: "src",
  vite: {
    ssr: {
      noExternal: [ /^vuetify/ ],
    },
  }
})
