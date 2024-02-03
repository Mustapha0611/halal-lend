<template>
  <div class="bg-content text-gray-100 py-10" id="developers">
    <h1 class="text-center text-4xl font-semibold">Meet Our Partners</h1>
    <section class="flex justify-center gap-20 flex-wrap">
        <div v-for="partner of partners" class="max-w-[20rem] min-w-[20rem] my-10 shadow-xl hover:scale-110 transition-all">
            <a :href="partner.link" class="p-10 block">
                <img :src="partner.img" alt="">
                <p class="py-10">
                    {{ partner.description }}
                </p>
            </a>
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
        description:'OsmiumDAO is the first investment DAO on Cardano. Initially focused on investing in Cardano Native Tokens, the DAO has pivoted into building products to support its DAO community and foster a more sustainable treasury. '
    },
    {
        link:'https://osmiumdao.io/',
        img:saib,
        description:' SAIB is at the forefront of blockchain development, with a focus on harnessing decentralized technology to craft, develop, and launch cutting-edge applications. Led by its CEO Clark Alesna, the company is committed to delivering top-notch blockchain solutions uniquely designed for the Cardano ecosystem.'
    },
 ])
</script>
