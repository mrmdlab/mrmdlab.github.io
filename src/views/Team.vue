<template>
    <v-row class="my-4 justify-center" v-for="p in people" :key=p.name>
        <v-col cols="3">
            <v-img :src="p.imgUrl" max-height="70%"></v-img>
            <p class="text-center">{{ p.name }}</p>
        </v-col>
        <v-col cols="6">
            <h3>{{ p.position }}</h3>
            <a :href="`mailto:` + p.email">
                <v-icon size="small" icon="mdi-email-outline"></v-icon>{{ p.email }}
            </a>
            <p class="ubuntu mt-2 text-justify">{{ p.description }}</p>
        </v-col>
    </v-row>
    <h1 class="text-h3 text-center mb-5">Internship</h1>
    <v-row class="justify-center">
        <v-col cols="2"></v-col>
        <v-col cols="6">
            <v-table>
                <tbody>
                    <tr v-for="(group, i) in intern_groups" :key="'g' + i">
                        <td v-for="p in group" :key="p.name">
                            {{ p.name }}
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            people: [
                {
                    name: "ONG Qunxiang",
                    position: "Platform Lead",
                    imgUrl: import("@/assets/photos/QX.webp"),
                    email: "ong_qunxiang@imcb.a-star.edu.sg",
                    description: "Dr. Ong obtained his PhD in Chemistry from Stanford University in 2018 in Bianxiao Cui lab. He did postdoctoral research at the Department of Comparative Medicine in Yale University under Prof Xiaoyong Yang and the Laboratory of Metabolic Medicine in IMCB under Prof Han Weiping. He is a multidisciplinary scientist who uses light and magnetic fields to probe intricate insights into biology."
                },
                {
                    name: "Paul CASSIDY",
                    position: "Platform Manager",
                    imgUrl: import("@/assets/photos/Paul.webp"),
                    email: "paul_cassidy@imcb.a-star.edu.sg",
                    description: "Dr. Cassidy obtained his DPhil in Radio-Frequency Coil Design for Magnetic Resonance from the University of Oxford in 2002. He did postdoctoral research establishing instrumentation for preclinical MRI at the University of Oxford and then left academia and worked in the MRI industry in the UK, Canada, and Australia. He rejoined academia as a Lecturer in Biomedical Engineering at Griffith University, Gold Coast, Australia, before joining MRI platform in 2014."
                },
                {
                    name: "LEE Kuan Jin",
                    position: "Technical Consultant",
                    imgUrl: import("@/assets/photos/LKJ.webp"),
                    email: "lee_kuan_jin@imcb.a-star.edu.sg",
                    description: "Dr. Lee obtained his PhD in Magnetic Resonance Imaging from the University of Sheffield in 2003. He did postdoctoral research at the Academic Unit of Radiology at the University of Sheffield, and then in Jürgen Hennig's Magnetic Resonance laboratory at the University Medical Center, Freiburg. Dr Lee worked at Siemens Healthcare before joining MRI platform in 2014."
                },
                {
                    name: "TEO Xing Qi",
                    position: "Lab Manager",
                    imgUrl: import("@/assets/photos/TXQ.webp"),
                    email: "teo_xing_qi@imcb.a-star.edu.sg",
                    description: "Xing Qi is an accomplished MRI researcher specializing in preclinical imaging for animal studies. With over a decade of expertise in MRI techniques for small animal research, she acts as a bridge between preclinical discoveries and advancements in human healthcare. Holding bachelor's degree with first class honours in biomedical sciences, her passion lies in pioneering MRI methodologies to extract crucial insights from animal models, directly impacting clinical outcomes."
                },
                // {
                //     name: "FENG Haosheng",
                //     position: "Research Officer",
                //     imgUrl: import("@/assets/photos/FHS.webp"),
                //     email: "feng_haosheng@imcb.a-star.edu.sg",
                //     description: "Haosheng graduated from Southern University of Science and Technology as a Biomedical Engineering bachelor in 2022. As the youngest member in the team, Haosheng has been learning MRI theory, experiments and best practices from his friendly colleagues diligently. His contribution in software engineering is also appreciated by the team."
                // },
                {
                    name: "Alicia TAN",
                    position: "Research Officer",
                    imgUrl: import("@/assets/photos/Alicia.webp"),
                    email: "alicia_tan@imcb.a-star.edu.sg",
                    description: "Alicia graduated from NUS Life sciences with a Bachelor in Science. She is a research officer with vast hands-on experience performing clerical and laboratory work to advance research goals. As an integral member of the Han Weiping group, Alicia is both adept at experimentation and data analysis in neurological and MRI studies."
                },
            ],
            interns: [
                { name: "LIM Hui Jun" },
                { name: "KONG Zheng Yao" },
                { name: "Pheobe Edeline LEE Yu Ying" },
                { name: "WONG Yu Qing" },
                { name: "ZHU Chengan" },
                { name: "Harry ZHONG" },
                { name: "LIU Xinyue" },
            ]
        }
    },
    computed: {
        intern_groups() {
            const len = Math.floor(this.interns.length / 2) * 2
            const result = []
            let i = 0
            while (i < len) {
                result.push([this.interns[i], this.interns[i + 1]])
                i += 2
            }
            if (i < this.interns.length) {
                result.push([this.interns[i]])
            }
            return result
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

.v-table td {
    border-bottom: none !important;
}
</style>
