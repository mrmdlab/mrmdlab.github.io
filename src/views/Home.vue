<template>
  <h2 id="title">MRMD | Magnetic Resonance Methods Development</h2>
  <text-introduction/>
</template>

<script>
import TextIntroduction from '@/components/TextIntroduction.md'

export default {
  components:{
    TextIntroduction
  }
}
</script>

<style>
#title{
  text-align: center;
  font-family: 'Courier New';
  margin-bottom: 20px;
  margin-top: 10px;
}

@font-face {
  font-family: Ubuntu;
  src: url("@/assets/Ubuntu-Regular.ttf");
}

p {
  margin-top: 7px;
  margin-bottom: 7px;
  text-align: justify;
  font-family: Ubuntu;
}
</style>
