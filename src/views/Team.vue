<template>
    <v-row>
        <v-col cols="3">
            <v-list density="compact" v-model:selected="active_id" mandatory>
                <v-list-subheader>
                    <h2>Team</h2>
                </v-list-subheader>
                <v-list-item variant="plain" v-for="i in people.length" :key="i - 1" :title="people[i - 1].name"
                    :value="i - 1" color="primary">
                </v-list-item>
            </v-list>
        </v-col>

        <v-col class="mt-8">
            <v-row>
                <v-col cols="3">
                    <v-img :src="active_imgUrl"></v-img>
                </v-col>
                <v-col>
                    <h3>{{ active_person.position }}</h3>
                    <a :href="`mailto:` + active_person.email">
                        <v-icon size="small" icon="mdi-email-outline"></v-icon>{{ active_person.email }}
                    </a>
                    <p class="ubuntu mt-2 text-justify">{{ active_person.description }}</p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    computed: {
        active_person() {
            const result = this.people[this.active_id[0]]
            if (typeof (result.imgUrl) != "string") {
                result.imgUrl().then(module => {
                    result.imgUrl = module.default
                })
            }
            return result
        },
        active_imgUrl() {
            return typeof (this.active_person.imgUrl) == 'string' ? this.active_person.imgUrl : ''
        }
    },
    data() {
        return {
            active_id: [0],
            people: [
                {
                    name: "LEE Kuan Jin",
                    position: "group leader",
                    imgUrl: () => import("@/assets/LKJ.webp"),
                    email: "lee_kuan_jin@imcb.a-star.edu.sg",
                    description: "Dr. Lee obtained his PhD in Magnetic Resonance Imaging from the University of Sheffield in 2003. He did postdoctoral research at the Academic Unit of Radiology at the University of Sheffield, and then in Jürgen Hennig's Magnetic Resonance laboratory at the University Medical Center, Freiburg.Dr Lee worked at Siemens Healthcare before establishing MRMD in 2014."
                },
                {
                    name: "TEO Xing Qi",
                    position: "Senior Research Officer",
                    imgUrl: () => import("@/assets/TXQ.webp"),
                    email: "teo_xing_qi@imcb.a-star.edu.sg",
                    description: "todo"
                },
                {
                    name: "Isaac HUEN",
                    position: "Senior Scientist",
                    imgUrl: () => import("@/assets/LKJ.webp"),
                    email: "isaac_huen@imcb.a-star.edu.sg",
                    description: "todo"
                },
                {
                    name: "FENG Haosheng",
                    position: "Research Officer",
                    imgUrl: () => import("@/assets/FHS.webp"),
                    email: "feng_haosheng@imcb.a-star.edu.sg",
                    description: "Haosheng graduated from Southern University of Science and Technology as a Biomedical Engineering bachelor in 2022. As the youngest member in the team, Haosheng has been learning MRI theory, experiments and best practices from his friendly colleagues diligently. His contribution in software engineering is also appreciated by the team."
                },
                {
                    name: "Paul CASSIDY",
                    position: "Principal Scientist ",
                    imgUrl: () => import("@/assets/Paul.webp"),
                    email: "paul_cassidy@imcb.a-star.edu.sg",
                    description: "todo"
                },
            ],
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #257CB7;
}
</style>