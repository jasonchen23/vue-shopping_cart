<template>
  <Navbar />
  <!-- <Items /> -->
  <router-view/>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue'
// import Items from '@/components/ItemsComponent.vue'
export default {
  components: {
    Navbar,
    // Items
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
