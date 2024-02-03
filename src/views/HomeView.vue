<script>
import hero from '../components/hero.vue';
import content from '../components/content.vue';
import footerSection from '../components/footerSection.vue';
import meetTheTeam from '../components/meetTheTeam.vue';
export default {
  components: {
   hero,
   content,
   meetTheTeam,
   footerSection
   }
}
</script>

<template>
  <main class="-z-10">
    <hero />
    <content />
    <meetTheTeam />
    <footerSection />
  </main>
</template>
