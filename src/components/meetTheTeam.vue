<template>
  <div class="bg-content text-gray-100 py-10" id="developers">
    <h1 class="text-center text-4xl font-semibold">Meet Our Partners</h1>
    <section class="flex justify-center gap-20 flex-wrap">
        <div v-for="partner of partners" class="max-w-[20rem] md:min-w-[25rem] px-10 py-5 my-10 shadow-xl">
           
                <img :src="partner.img" alt="">
                <article class="">
                    <p class="pt-5">
                    {{ partner.description }}
                </p>
                <a :href="partner.link" target="_blank" class="bg-main py-3 rounded-md px-5 mt-10 inline-block hover:scale-105 transition-all">
                    Learn More
                </a>
                </article>
               
        </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue"
import os from '../assets/os.png';
import  saib from '../assets/saib.png'

 const partners= ref([
    {
        link:'https://osmiumdao.io',
        img:os,
        description:"The groundbreaking Cardano investment DAO, has shifted its focus to developing community products and ensuring a sustainable treasury. This strategic evolution reflects the organization's commitment to innovation and fostering growth within the Cardano ecosystem."
    },
    {
        link:'https://osmiumdao.io/',
        img:saib,
        description:'SAIB, led by CEO Clark Alesna, is a leading blockchain developer prioritizing decentralized technology for cutting-edge applications. The company is dedicated to delivering top-notch blockchain solutions uniquely designed for the Cardano ecosystem.'
    },
 ])
</script>
