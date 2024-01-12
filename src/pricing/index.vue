<template>
    <v-row>
        <v-col cols="4">
            <v-card>
                <v-card-item class="text-center">
                    <v-card-title>IMCB</v-card-title>
                    <v-card-subtitle>Labs under Institute of Molecular and Cell Biology</v-card-subtitle>
                </v-card-item>
                <v-card-text class="px-8">
                    Completely free of charge!<br>
                    However, in case of concurrent projects, your study will be of lower priority 😞
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="4">
            <v-card>
                <v-card-item class="text-center">
                    <v-card-title>A*STAR except IMCB</v-card-title>
                    <v-card-subtitle>Labs within A*STAR but outside IMCB</v-card-subtitle>
                </v-card-item>
                <v-card-text class="px-8">
                    
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="4">            
            <v-card>
                <v-card-item class="text-center">
                    <v-card-title>External</v-card-title>
                    <v-card-subtitle>
                        Companies and labs outside A*STAR
                    </v-card-subtitle>
                </v-card-item>
                <v-card-text class="px-8">
                    <!-- <pricing-external></pricing-external> -->
                    The cost per hour can vary from S$700 to S$1400 depending on factors included but not necessarily limited to as follows
                    <v-expansion-panels multiple>
                        <v-expansion-panel v-for="(text,title,i) in pricing_factors" :key="i" :title="title" :text="text"></v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
// import PricingExternal from './external.md'
const pricing_factors={
    difficulty:"If the experiment involves complicated processes like intubation and tail vein injection, the charge will be higher.",
}
</script>