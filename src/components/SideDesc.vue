<template>
    <v-col cols="5">
        <h1 class="text-h4">{{ pnt.title }}</h1>
        <p class="ubuntu">{{ pnt.description }}</p>
        <div class="d-flex justify-end ma-6">
            <v-btn v-if="pnt.contact" theme="dark" @click="$router.push('/contact')">Contact Us</v-btn>
        </div>
    </v-col>
</template>

<script setup>
import { defineProps } from 'vue';

const props=defineProps(["pnt"])
</script>