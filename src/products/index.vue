<template>
    <v-row>
        <v-col cols="3">
            <v-list density="compact" v-model:selected="active_prod" mandatory>
                <v-list-subheader>
                    <h2>Products</h2>
                </v-list-subheader>
                <v-list-item :href="`#${prod}`" variant="plain" color="primary" v-for="(prod, i) in products" :key="i"
                    :title="prod" :value="prod">
                </v-list-item>
            </v-list>
        </v-col>
        <v-col class="mt-8">
            <component :is="active_prod[0]"></component>
        </v-col>
    </v-row>
</template>

<script>
import bruker2bids from "./bruker2bids.md"
import Segmenthor from "./segmenthor.md"

export default {
    components: {
        bruker2bids,
        Segmenthor
    },
    created() {
        const path = window.location.href
        const hashtag = path.indexOf("#")
        if (hashtag !== -1) {
            this.active_prod[0] = path.substring(hashtag + 1)
        }
    },
    data() {
        return {
            active_prod: ["bruker2bids"],
            products: [
                "bruker2bids",
                "Segmenthor"
            ]
        }
    }
}
</script>