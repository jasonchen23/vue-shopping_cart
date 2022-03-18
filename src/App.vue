<template>
  <Navbar /> <!-- navbar因為每個頁面都會用到，故將其作成component並放在最上層-->
  <router-view/> <!-- 頁面抽換之位置-->
  <Footer /> <!-- Footer因為每個頁面都會用到，故將其作成component並放在最上層-->
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import Footer from '@/components/FooterComponent.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
