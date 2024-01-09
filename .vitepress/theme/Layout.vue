<template>
  <v-app>
    <v-app-bar density="compact" elevation="1" class="px-10">
      <v-app-bar-title><a href="/" :class="{ 'text-primary': isActive('/') }">MRMDLab</a></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="tab in tabs" :key="tab.name" :class="{ 'text-primary': isActive(tab.path) }" :href="tab.path">{{ tab.name
      }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container :fluid="fluid">
        <Content />
      </v-container>
    </v-main>

    <v-footer class="bg-grey-lighten-3 justify-center">
      <span class="mr-4">© 2023 Magnetic Resonance Methods Development</span>
      <a href="https://github.com/mrmdlab" target="_blank">
        <img src="/assets/github-mark.svg" height="30">
      </a>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const fluid = computed(() => {
  return route.path == '/' ? true : false
})

const tabs = [
  { name: "Products", path: "/products/" },
  { name: "Service", path: "/service/" },
  { name: "Pricing", path: "/pricing/" },
  { name: "Team", path: "/team/" },
  { name: "Contact", path: "/contact/" },
]

function isActive(path) {
  return route.path === path
}
</script>

<style scoped>
.v-app-bar-title:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black
}
</style>