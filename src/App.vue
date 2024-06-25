<template>
  <NavbarApp />
  <JumbotronHome />
  <!-- <ProductHome/> -->
  <router-view />
  <FooterApp />
</template>
<script>
  import NavbarApp from './components/NavbarApp.vue'
  import FooterApp from './components/FooterApp.vue'

  export default {
    name: 'App',
    components: {
      NavbarApp,
      FooterApp,
    }

  }

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>