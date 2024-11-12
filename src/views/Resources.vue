<template>
    <v-row>
        <v-col cols="3">
            <v-list density="compact" v-model:selected="active_prod" mandatory>
                <v-list-subheader>
                    <h2>Products</h2>
                </v-list-subheader>
                <v-list-item :href="`#${name}`" variant="plain" color="primary" v-for="(prod, name, i) in products" :key="i"
                    :title="name" :value="prod">
                </v-list-item>
            </v-list>
        </v-col>
        <v-col class="mt-8">
            <component :is="active_prod[0]"></component>
        </v-col>
    </v-row>
</template>

<script>
import Segmenthor from "@/components/ProdSegmenthor.vue"
import bruker2bids from "@/components/ProdBids.vue"
export default {
    components: { Segmenthor, bruker2bids },
    data() {
        return {
            active_prod: [Segmenthor],
            products: { Segmenthor, bruker2bids }
        }
    },
    mounted() {
        const path = window.location.href
        const hashtag = path.indexOf("#")
        if (hashtag !== -1) {
            this.active_prod[0] = this.products[path.substring(hashtag + 1)]
        }
    }
}

</script>
