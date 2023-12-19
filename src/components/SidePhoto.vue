<template>
    <v-col cols="7">
        <v-img class="photo" :src="pnt.photo"></v-img>
    </v-col>
</template>

<script setup>
defineProps(["pnt"])
</script>

<style scoped>
.photo {
    height: 85vh;
}
</style>