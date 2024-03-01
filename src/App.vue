<template>
    <SnacksHeader/>
 <CaruseList/>
</template>

<script>
import SnacksHeader from "@/components/SnacksHeader.vue";
import CaruseList from "@/components/CaruseList.vue";

export default {
  name: 'App',
  components: {
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
