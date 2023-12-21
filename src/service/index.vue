<template>
    <v-row>
        <v-col cols="4">
            <v-list mandatory v-model:selected="active_service" v-model:opened="opened_groups" open-strategy="multiple">
                <v-list-group v-for="(group, name) in services" :key="name" :value="name">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :title="group.title"></v-list-item>
                    </template>
                    <v-list-item variant="plain" v-for="service in group.items" :key="service" :title="service"
                        :value="service" color="primary">
                    </v-list-item>
                </v-list-group>
                <v-list-item title="How to collaborate" value="How to collaborate"></v-list-item>
            </v-list>
        </v-col>
        <v-col class="mt-4">
            <Collaborate class="ubuntu ml-4" v-if="active_service[0]=='How to collaborate'"/>
            <template v-else>
                <h2>Result</h2>
                <p class="ubuntu">{{ service_detail.result }}</p>
                <h2>Description</h2>
                <p class="ubuntu">{{ service_detail.description }}</p>
                <h2>Examples</h2>
                <v-expansion-panels>
                    <v-expansion-panel v-for="ex in service_detail.examples" :key="ex.name" :title="ex.name">
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
                                    <p class="caption">*example images shown here have been slightly distorted due to JPEG
                                        and GIF compression.</p>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
        </v-col>
    </v-row>
</template>

<script>
import Collaborate from '/components/collaborate.md'

export default {
    components:{
        Collaborate
    },
    computed: {
        service_detail() {
            return this.details[this.active_service[0]]
        }
    },
    data() {
        return {
            opened_groups: ["imaging", "analysis"],
            active_service: ["rodent structural MRI"],
            services: {
                imaging: {
                    title: "Imaging & Spectroscopy",
                    items: [
                        // "rodent spectoscopy",
                        "rodent structural MRI",
                        "rodent brain functional MRI",
                        // "rodent brain diffusion MRI",
                    ]
                },
                analysis: {
                    title: "Analysis",
                    items: [
                        // Are we able to analyze human data? Maybe not for now
                        // "rodent spectoscopy analysis",
                        // "rodent resting state fMRI",
                        // "rodent fiber tractography",
                        // "rodent DTI",
                    ]
                }
            },
            details: {
                "rodent structural MRI": {
                    result: "NIfTI data in BIDS arrangement",
                    description: "With the ability to visualize the anatomical structures with high resolution, structural MRI allows researchers to investigate abnormalities in different organs. Due to the non-invasive nature, it's also possible to monitor the structural changes longitudinally.",
                    examples: [
                        {
                            name: "Monitor mouse brain tumor development",
                            description: "Monitor the development of mouse brain tumor longitudinally in experimental and control groups. The image was shot 11 days after the inoculation of tumor cells.",
                            photo: import("/assets/examples/Monitor mouse brain tumor development.jpg"),
                            gif: import("/assets/examples/Monitor mouse brain tumor development.gif"),
                            params: {
                                "scan duration": "2.0 min",
                                "averages": "3",
                                "field strength": "11.7T",
                                "orientation": "coronal",
                                "slice gap": "0 mm",
                                "image size": "192 x 256 x 20",
                                "resolution": "0.078 x 0.078 x 0.5 mm",
                                "field of view": "15 x 20 x 10 mm",
                                "condition": "in vivo",
                                "sequence": "TurboRARE",
                                "dimension": "2D",
                                "effective TE": "25.0 ms",
                                "TR": "1625.5 ms",
                                "echo train length": "8",
                                "flip angle": "90",
                                "gating": "None"
                            },
                        },
                        {
                            name: "Monitor mouse liver tumor development",
                            description: "Monitor the development of mouse liver tumor longitudinally. The image was shot with respiration gating.",
                            photo: import("/assets/examples/Monitor mouse liver tumor development.jpg"),
                            gif: import("/assets/examples/Monitor mouse liver tumor development.gif"),
                            params: {
                                "scan duration": "6.5 min",
                                "averages": "2",
                                "field strength": "9.4T",
                                "orientation": "axial",
                                "slice gap": "0 mm",
                                "image size": "256 x 256 x 35",
                                "resolution": "0.156 x 0.156 x 1 mm",
                                "field of view": "40 x 40 x 35 mm",
                                "condition": "in vivo",
                                "sequence": "FLASH",
                                "dimension": "2D",
                                "TE": "2.7 ms",
                                "TR": "414.1 ms",
                                "echo train length": "1",
                                "flip angle": "50",
                                "gating": "respiration"
                            },
                        },
                    ]
                },
                "rodent brain functional MRI": {
                    result: "NIfTI data in BIDS arrangement, including a high-resolution anatomical T2W image and a low-resolution functional BOLD image.",
                    description: "As a valuable technique in preclinical science, resting state fMRI provides insights into the functional connectivity of the brain by capturing spontaneous low-frequency fluctuations in the blood oxygen level-dependent (BOLD) signal.",
                    examples: [
                        {
                            name: "Rat brain resting state fMRI",
                            description: "Investigate the functional connectivity of the rat brain at resting state. The rat is intubated before it's positioned in the scanner.",
                            photo: import("/assets/examples/Rat brain resting state fMRI.jpg"),
                            gif: import("/assets/examples/Rat brain resting state fMRI.gif"),
                            params: {
                                "scan duration": "15.0 min",
                                "averages": "1",
                                "field strength": "9p4",
                                "orientation": "axial",
                                "slice gap": "0 mm",
                                "image size": "64 x 64 x 30 x 900",
                                "resolution": "0.391 x 0.391 x 0.5 mm",
                                "field of view": "25 x 25 x 15 mm",
                                "condition": "in vivo",
                                "sequence": "EPI",
                                "dimension": "2D",
                                "effective TE": "15.0 ms",
                                "TR": "1000.0 ms",
                                "echo train length": "64",
                                "flip angle": "53",
                                "gating": "None",
                            },
                        },
                    ]
                },
                // "rodent brain diffusion MRI": {
                //     result: "NIfTI data in BIDS arrangement, including bval and bvec files",
                //     description: "",
                //     examples: [
                //         {
                //             name: "Mouse brain DWI",
                //             description: "",
                //             photo: import("/assets/examples/.jpg"),
                //             gif: import("/assets/examples/.gif"),
                //             params: {
                //                 "scan duration": "",
                //                 "averages": "",
                //                 "field strength": "",
                //                 "orientation": "",
                //                 "slice gap": "",
                //                 "image size": "",
                //                 "resolution": "",
                //                 "field of view": "",
                //                 "condition": "in vivo",
                //                 "sequence": "",
                //                 "dimension": "2D",
                //                 "TE": "",
                //                 "effective TE": "",
                //                 "TR": "",
                //                 "echo train length": "",
                //                 "flip angle": "",
                //                 "gating": "None",
                //             },
                //         },
                //     ]
                // },
            }
        }
    },
    created() {
        for (const detail of Object.values(this.details)) {
            detail.examples.forEach(ex => {
                ex.photo.then(module => {
                    ex.photo = module.default
                })
                ex.gif.then(module => {
                    ex.gif = module.default
                })
            })
        }
    }
}
</script>

params: {
    "scan duration": "",
    "averages": "",
    "field strength": "",
    "orientation": "",
    "slice gap": "",
    "image size": "",
    "resolution": "",
    "field of view": "",
    "condition": "in vivo",
    "sequence": "",
    "dimension": "2D",
    "TE": "",
    "effective TE": "",
    "TR": "",
    "echo train length":"",
    "flip angle":"",
    "gating": "None",
}