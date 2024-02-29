<template>
    <SnacksHeader/>
    <SnacksHeader2 style="margin-top: 50px"/>
<!-- <CaruseList/>-->
</template>

<script>
import SnacksHeader from "@/components/SnacksHeader.vue";
import SnacksHeader2 from "@/components/SnacksHeader2.vue";
// import CaruseList from "@/components/CaruseList.vue";

export default {
  name: 'App',
  components: {
      SnacksHeader2,
      // CaruseList,
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
  margin-top: 60px;
}
</style>
