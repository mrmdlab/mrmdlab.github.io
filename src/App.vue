<template>
  <v-app>
    <v-app-bar density="compact" elevation="1">
      <v-app-bar-title @click="$router.push('/')">MRMDLab</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-btn variant="plain" @click="$router.push('/service')">Service</v-btn>
        <v-btn variant="plain" @click="$router.push('/pricing')">Pricing</v-btn>
        <v-btn variant="plain" @click="$router.push('/contact')">Contact</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>

<style scoped>
.v-app-bar-title:hover {
  cursor: pointer;
}
</style>
