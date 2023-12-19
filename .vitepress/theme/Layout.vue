<template>
   <v-app>
    <v-app-bar density="compact" elevation="1">
      <v-app-bar-title @click="go('/')">MRMDLab</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-btn variant="plain" @click="go('/products/')">Products</v-btn>
        <v-btn variant="plain" @click="go('/service/')">Service</v-btn>
        <v-btn variant="plain" @click="go('/pricing/')">Pricing</v-btn>
        <v-btn variant="plain" @click="go('/team/')">Team</v-btn>
        <v-btn variant="plain" @click="go('/contact/')">Contact</v-btn>
      </template>
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
import { useRouter, useRoute } from 'vitepress'
import { computed } from 'vue'

const { go } = useRouter()
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