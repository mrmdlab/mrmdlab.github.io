<template>
  <v-app>
    <v-app-bar density="compact" elevation="1">
      <v-app-bar-title @click="$router.push('/')">IMCB MRI</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-btn variant="plain" @click="$router.push('/team')">Team</v-btn>
        <v-btn variant="plain" @click="$router.push('/service')">Service</v-btn>
        <v-btn variant="plain" @click="$router.push('/pricing')">Pricing</v-btn>
        <v-btn variant="plain" @click="$router.push('/resources')">Pesources</v-btn>
        <v-btn variant="plain" @click="$router.push('/publications')">Publications</v-btn>
        <v-btn variant="plain" @click="$router.push('/contact')">Contact</v-btn>
        <v-btn variant="plain" @click="$router.push('/about')">About</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container :fluid="fluid">
        <router-view />
      </v-container>
    </v-main>
    <v-footer class="bg-grey-lighten-3 justify-center">
      <span class="mr-4">© 2023 Magnetic Resonance Methods Development</span>
      <a href="https://github.com/mrmdlab" target="_blank">
        <img src="@/assets/github-mark.svg" height="30">
      </a>
    </v-footer>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route=useRoute()
const fluid = computed(()=>{
  return route.path=='/'?true:false
})
</script>

<style scoped>
.v-app-bar-title:hover {
  cursor: pointer;
}
</style>
