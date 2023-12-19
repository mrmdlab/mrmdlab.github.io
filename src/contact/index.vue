<template>
    <v-row>
        <v-col cols="8" class="text-center">
            <v-img height="90%" :src="biopolis" alt="Biopolis sign" />
            <p>"Biopolis sign" by Kelman Chiang from SG photobank</p>
        </v-col>
        <v-col cols="4" class="d-flex flex-column justify-center ubuntu">
            <p class="mb-4">If you are interested in collaboration, you are welcome to have a lab tour.</p>
            <h2>Address</h2>
            11 Biopolis Way, #01-02 Helios, Singapore 138667
            <h2>Email</h2>
            mrmd@imcb.a-star.edu.sg
        </v-col>
    </v-row>
</template>

<script setup>
import biopolis from '/assets/photos/Biopolis sign.jpg'
</script>