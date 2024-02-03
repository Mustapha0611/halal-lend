<script>
import headerSection from './components/headerSection.vue';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default{
  components:{
    headerSection,
  },
  mounted(){
    AOS.init()
  }
}
</script>

<template>
  <main>
    <headerSection />
    <RouterView />
  </main>
</template>

<style>
/* @import url("\../node_modules/hover.css/css/hover-min.css"); */
 *{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
 }
 html{
  scroll-behavior: smooth;
 }
</style>
