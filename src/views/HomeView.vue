<script>
import hero from '../components/hero.vue';
import content from '../components/content.vue';
import footerSection from '../components/footerSection.vue';
import meetTheTeam from '../components/meetTheTeam.vue';
import faq from '../components/faq.vue';
export default {
  components: {
   hero,
   content,
   meetTheTeam,
   faq,
   footerSection
   }
}
</script>

<template>
  <main class="-z-10">
    <hero />
    <content />
    <faq />
    <meetTheTeam />
    <footerSection />
  </main>
</template>
