<template>
    <SnacksHeader/>
 <CaruseList/>

    <CaramelPopcornSlider/>
  <ReadyPopcornSlider/>
  <CornSticksSlider/>
<!--    <ReadyPopcornSlider/>-->

  <ContactForm style="margin-top: 50px"/>
</template>

<script>
import SnacksHeader from "@/components/SnacksHeader.vue";
import CaruseList from "@/components/CaruseList.vue";
import ContactForm from "@/components/ContactForm.vue";
import CaramelPopcornSlider from "@/components/caramel-popcorn/CaramelPopcornSlider.vue";
import ReadyPopcornSlider from "@/components/ready-popcorn/ReadyPopcornSlider.vue";
import CornSticksSlider from "@/components/corn-sticks/CornSticksSlider.vue";
// import ReadyPopcornSlider from "@/components/ready-popcorn/ReadyPopcornSlider.vue";

export default {
  name: 'App',
  components: {
      CornSticksSlider,
      ReadyPopcornSlider,
      // ReadyPopcornSlider,
      CaramelPopcornSlider,
      ContactForm,
      CaruseList,
      SnacksHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
