<template>
    <v-row>
        <v-col cols="3">
            <v-list density="compact" v-model:selected="active_id" mandatory>
                <v-list-subheader>
                    <h2>Team</h2>
                </v-list-subheader>
                <v-list-item variant="plain" v-for="(person,i) in people" :key="i" :title="person.name"
                    :value="i" color="primary">
                </v-list-item>
            </v-list>
        </v-col>
    
        <v-col class="mt-8">
            <v-row>
                <v-col cols="3">
                    <v-img :src="active_person.imgUrl"></v-img>
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
        return this.people[this.active_id[0]]
    }
},
data() {
    return {
        active_id: [0],
        people: [
            {
                name: "LEE Kuan Jin",
                position: "group leader",
                imgUrl: import("/assets/photos/LKJ.webp"),
                email: "lee_kuan_jin@imcb.a-star.edu.sg",
                description: "Dr. Lee obtained his PhD in Magnetic Resonance Imaging from the University of Sheffield in 2003. He did postdoctoral research at the Academic Unit of Radiology at the University of Sheffield, and then in Jürgen Hennig's Magnetic Resonance laboratory at the University Medical Center, Freiburg.Dr Lee worked at Siemens Healthcare before establishing MRMD in 2014."
            },
            {
                name: "TEO Xing Qi",
                position: "Senior Research Officer",
                imgUrl: import("/assets/photos/TXQ.webp"),
                email: "teo_xing_qi@imcb.a-star.edu.sg",
                description: "Xing Qi is an accomplished MRI researcher specializing in preclinical imaging for animal studies. With over a decade of expertise in MRI techniques for small animal research, she acts as a bridge between preclinical discoveries and advancements in human healthcare. Holding bachelor's degree with first class honours in biomedical sciences, her passion lies in pioneering MRI methodologies to extract crucial insights from animal models, directly impacting clinical outcomes."
            },
            {
                name: "ONG Qunxiang",
                position: "Senior Scientist",
                imgUrl: import("/assets/photos/Qunxiang.webp"),
                email: "ong_qunxiang@imcb.a-star.edu.sg",
                description: "todo"
            },
            {
                name: "Isaac HUEN",
                position: "Senior Scientist",
                imgUrl: import("/assets/photos/LKJ.webp"),
                email: "isaac_huen@imcb.a-star.edu.sg",
                description: "todo"
            },
            {
                name: "Paul CASSIDY",
                position: "Principal Scientist",
                imgUrl: import("/assets/photos/Paul.webp"),
                email: "paul_cassidy@imcb.a-star.edu.sg",
                description: "Dr. Cassidy obtained his DPhil in Radio-Frequency Coil Design for Magnetic Resonance from the University of Oxford in 2002. He did postdoctoral research establishing instrumentation for preclinical MRI at the University of Oxford and then left academia and worked in the MRI industry in the UK, Canada, and Australia. He rejoined academia as a Lecturer in Biomedical Engineering at Griffith University, Gold Coast, Australia, before joining MRMD in 2014."
            },
            {
                name: "FENG Haosheng",
                position: "Research Officer",
                imgUrl: import("/assets/photos/FHS.webp"),
                email: "feng_haosheng@imcb.a-star.edu.sg",
                description: "Haosheng graduated from Southern University of Science and Technology as a Biomedical Engineering bachelor in 2022. As the youngest member in the team, Haosheng has been learning MRI theory, experiments and best practices from his friendly colleagues diligently. His contribution in software engineering is also appreciated by the team."
            },
        ],
    }
},
created() {
    this.people.forEach(person => {
        person.imgUrl.then(module => {
            person.imgUrl = module.default
        })
    })
}
}
</script>

<style scoped>
a {
text-decoration: none;
color: #257CB7;
}
</style>