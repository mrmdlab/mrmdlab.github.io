<template>
    <v-row>
        <v-col cols="4">
            <v-list mandatory v-model:selected="active_service" v-model:opened="opened_group" open-strategy="multiple">
                <v-list-group value="imaging">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" title="Imaging & Spectroscopy"></v-list-item>
                    </template>
                    <v-list-item variant="plain" v-for="i in services.imaging.length" :key="i - 1"
                        :title="services.imaging[i - 1]" :value="i - 1" color="primary">
                    </v-list-item>
                </v-list-group>
                <v-list-group value="analysis">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" title="Analysis"></v-list-item>
                    </template>
                    <v-list-item variant="plain" v-for="i in services.analysis.length" :key="i - 1"
                        :title="services.analysis[i - 1]" :value="i - 1 + 100" color="primary">
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-col>
        <v-col class="mt-4">
            <h2>Specification</h2>
            <v-table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, key, i) in default_spec" :key="i">
                        <td>{{ key }}</td>
                        <td class="text-green monospace">{{ value }}</td>
                    </tr>
                </tbody>
            </v-table>
            <h2>Result</h2>
            NIfTI data in BIDS arrangement
            <h2>Description</h2>
            <h2>Examples</h2>
            <v-expansion-panels>
                <v-expansion-panel v-for="ex in examples" :key="ex.name" :title="ex.name">
                    <v-expansion-panel-text>
                        <v-row>
                            <v-col cols="6">
                                <v-img :src="ex.photo"></v-img>
                            </v-col>
                            <v-col cols="6">
                                <v-img :src="ex.gif"></v-img>
                            </v-col>

                            <v-col>
                                <h4>Description</h4>
                                <p>{{ ex.description }}</p>
                                <v-table>
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, key, i) in ex.params" :key="i">
                                            <td>{{ key }}</td>
                                            <td class="text-green monospace">{{ value }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                                <p class="caption">*scan duration doesn't include time for preparation (induction of
                                    anesthesia, tune and match, animal positioning, etc)</p>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            opened_group: ["imaging", "analysis"],
            active_service: [0],
            default_spec: {
                subject: "rat | mouse",
                "field strength": "9.4T | 11.7T",
                organ: "brain | liver"
            },
            services: {
                imaging: [
                    "rodent spectoscopy",
                    "rodent structural MRI",
                    "rodent brain functional MRI",
                    "rodent brain diffusion MRI",
                ],
                analysis: [
                    // Are we able to analyze human data? Maybe not for now
                    "rodent spectoscopy analysis",
                    "rodent resting state fMRI",
                    "rodent fiber tractography",
                    "rodent DTI",
                ]
            },
            examples: [
                {
                    name: "Monitor mouse brain tumor development",
                    description: "Monitor the development of mouse brain tumor longitudinally in experiment and control groups. The image was shot (three weeks?) after inoculation.",
                    photo: import("@/assets/examples/Monitor mouse brain tumor development.jpg"),
                    gif: import("@/assets/examples/Monitor mouse brain tumor development.gif"),
                    params: {
                        "scan duration": "2.0 min",
                        "field strength": "11.7T",
                        "orientation": "coronal",
                        "slice gap": "0 mm",
                        "image size": "192 x 256 x 20",
                        "resolution":"0.078mm x 0.078mm x 0.5mm",
                        "field of view":"15mm x 20mm x 10mm",
                        "condition":"in vivo",
                        "sequence": "TurboRARE",
                        "dimension":"2D",
                        "TE": "25.0 ms",
                        "TR": "1625.5 ms"
                    },
                },
                {
                    name: "Monitor mouse liver tumor development",
                    description: "Monitor the development of mouse liver tumor longitudinally.",
                    photo: import("@/assets/examples/Monitor mouse liver tumor development.jpg"),
                    gif: import("@/assets/examples/Monitor mouse liver tumor development.gif"),
                    params: {
                        "orientation": "axial"
                    },
                },
            ]
        }
    },
    created() {
        this.examples.forEach(ex => {
            ex.photo.then(module => {
                ex.photo = module.default
            })
            ex.gif.then(module => {
                ex.gif = module.default
            })
        })
    }
}
</script>