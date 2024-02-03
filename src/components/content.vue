<template>
  <div class="bg-content h-auto">
    <div class="flex justify-center md:py-32 py-20 leading-loose">
      <p
        class="lg:w-[55%] md:w-[65%] text-white xl:text-6xl w-[90%] lg:text-5xl md:text-4xl text-2xl text-center"
        data-aos="fade-up"
      >
        Build sustainable businesses and establish business partnerships with
        people around the world
      </p>
    </div>
    <div class="flex items-center flex-col md:flex-row gap-10 lg:px-20 px-10 pb-32">
      <section
      class="md:basis-1/4 basis-0"
      data-aos="zoom-In" data-aos-delay="300"
      ><img src="@/assets/L_B.png" /></section>
      <section class="md:basis-3/4 basis-0">
        <div class="flex w-full items-center gap-5 lg:px-20 pt-5">
            <img src="@/assets/line.png" class=""> <h2 class="text-white md:text-2xl text-sm">Some of our Amazing Features</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2  gap-10  mt-10 text-white" >
          <section class="px-7 w-[100%] py-6 md:py-5 lg:py-10 rounded-md border-2 border-gray-300" v-for="feature in features"
          data-aos="fade-up">
            <img :src="feature.img" data-aos-delay="300" data-aos="zoom-in">
            <h2 class="font-bold text-2xl my-5" data-aos-delay="400" data-aos="zoom-in">{{ feature.title }}</h2>
            <p class="text-secondary" data-aos-delay="500" data-aos="zoom-in">{{ feature.body }}</p>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import check from '../assets/check.png';
import threedots from '../assets/threedots.png';
import search from '../assets/search.png';
import pointer from '../assets/pointer.png';
export default{
    data(){
        return{
            features:[
            {
                title:'Zero Interest Rate ',
                img:check,
                body:'Borrow at 0% interest, experience financial flexibility and enjoy hassle-free repayments.'
            },
            {
                title:'Cashback To Borrowers',
                img:pointer,
                body:'Unveil a world where borrowing not only meets your needs but also enriches your walletd. Turning every loan into a refined and rewarding financial choice'
            },
            {
                title:'Lorem ipsom',
                img:threedots,
                body:'Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus est non purus nunc sed tristique. Vitae vitae diam fermentum condimentum.',

            },
            {
                title:'Lorem ipsom',
                img:search,
                body:'Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus est non purus nunc sed tristique. Vitae vitae diam fermentum condimentum.',

            },
            ]
        }
    }
}
</script>
