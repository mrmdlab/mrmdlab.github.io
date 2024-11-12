<template>
  <v-row id="slogan" class="d-flex flex-column justify-space-around align-center">
    <h1 class="text-h3 mt-8">MRI Platform and Probe Development</h1>
    <div id="desc" class="text-justify ubuntu font-weight-bold">
      <p>IMCB Magnetic Resonance Imaging (MRI) platform provides a comprehensive pipeline for non-invasive live imaging of rodents, providing structural and functional information with high spatiotemporal resolution. We are powered by two ultra high field MRI scanners at 9.4T and 11.7T respectively, and at the same time, we provide expertise in hyperpolarized 13C metabolic flux imaging, which includes novel hyperpolarizable probe development for bespoke applications.</p>
    </div>
    <v-btn size="large" @click="$router.push('/service')" theme="dark">Learn More</v-btn>
  </v-row>
  <v-row class="align-center" v-for="(pnt, i) in points" :key="i">
    <template v-if="i % 2 == 0">
      <side-desc :pnt="pnt"></side-desc>
      <side-photo :pnt="pnt"></side-photo>
    </template>
    <template v-else>
      <side-photo :pnt="pnt"></side-photo>
      <side-desc :pnt="pnt"></side-desc>
    </template>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
import SidePhoto from '@/components/SidePhoto.vue';
import SideDesc from '@/components/SideDesc.vue';

const points = ref([
  {
    title: "State-of-the-art equipments",
    description: "Our facility boasts two Bruker MR scanners, with field strengths of 9.4T and 11.7T",
    photo: import("@/assets/photos/scanner.jpg")
  },
  {
    title: "First-rate imaging service",
    description: "Boost your research with our professional imaging of different modalities and sequences",
    photo: import("@/assets/photos/mouse brain.jpg")
  },
  {
    title: "Analysis with speed, rigor and reproducibility",
    description: "Our commitment extends beyond data acquisition. We specialize in the meticulous collection of high-quality MRI and MRS data, ensuring the reliability and accuracy of our findings",
    photo: import("@/assets/photos/LCModel.jpg")
  },
  {
    title: "Conducive environment for groundbreaking research",
    description: "Situated near Buona Vista MRT station, we invite researchers to explore the vast potential of MR in unraveling the mysteries of biological structures and functions. You are always welcome to have a lab tour here.",
    photo: import("@/assets/photos/group.jpg"),
    contact: true
  },
])
points.value.forEach((pnt) => {
  pnt.photo.then((module => {
    pnt.photo = module.default
  }))
})
</script>

<style scoped>
#slogan {
  background: url("@/assets/photos/homepage background.jpg");
  background-size: cover;
  height: 90vh;
}

#desc {
  max-width: 50%;
  font-size: 13pt;
}

.photo {
  height: 85vh;
}
</style>
