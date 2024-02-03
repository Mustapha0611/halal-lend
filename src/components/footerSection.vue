<template>
  <main class="bg-main text-white">
    <section>
      <h2 class="text-center lg:py-20 py-10 text-4xl lg:text-5xl">News Letter</h2>
      <p class="text-center md:text-2xl lg:px-44 md:px-20 px-5 text-secondary">To get the gist right in your email and lots more, input your email click on the subscirbe button</p>
    </section>
    <section>
        <formInput />
        <socials />
    </section>
  </main>
</template>
<script>
import formInput from './formInput.vue';
import socials from './socials.vue';
export default{
    name:'footerSection',
    components:{
        formInput,
        socials
    }
}
</script>
