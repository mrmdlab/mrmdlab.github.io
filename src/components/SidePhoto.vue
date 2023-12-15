<template>
    <v-col cols="7">
        <v-img class="photo" :src="pnt.photo"></v-img>
    </v-col>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(["pnt"])
</script>