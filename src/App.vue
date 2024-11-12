<template>
  <v-app>
    <v-app-bar density="compact" elevation="1" class="px-10">
      <v-app-bar-title @click="$router.push('/')">IMCB MRI</v-app-bar-title>
      <template #append>
        <v-btn v-for="tab in tabs" :key="tab.name" :class="{ 'text-primary': isActive(tab.path) }" @click="$router.push(tab.path)">
          {{ tab.name }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container :fluid="fluid">
        <router-view />
      </v-container>
    </v-main>
    <v-footer class="bg-grey-lighten-3 justify-center">
      <span class="mr-4">© 2024 Magnetic Resonance Methods Development</span>
      <a href="https://github.com/mrmdlab" target="_blank">
        <img src="@/assets/github-mark.svg" height="30">
      </a>
    </v-footer>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const fluid = computed(() => {
  return route.path == '/' ? true : false
})

function isActive(path) {
  return route.path === path
}

const tabs = [
  { name: "Team", path: "/team" },
  { name: "Service", path: "/service" },
  // { name: "Pricing", path: "/pricing" },
  { name: "Resources", path: "/resources" },
  // { name: "Publications", path: "/publications" },
  { name: "Contact", path: "/contact" },
  // { name: "About", path: "/about" },
]
</script>

<style scoped>
.v-app-bar-title:hover {
  cursor: pointer;
}
</style>
