<template>
  <div class="bg-main h-auto">
    <div class="flex justify-center md:py-32 py-20 leading-loose">
      <p
        class="lg:w-[60%] md:w-[65%] text-white w-[90%] lg:text-5xl md:text-4xl leading-loose text-2xl text-center"
        data-aos="fade-up"
      >
      Supply <span class="text-btn">Liquidity, Borrow Assets, Stake, Earn Yields.</span>  All With No More Interest Accruals. Borrowing Empowered, Capital Provision Rewarded
      </p>
    </div>
    <div class="flex items-center flex-col md:flex-row gap-10 lg:px-20 px-10 pb-32">
      <section class="">
        <div class="flex w-full justify-center items-center gap-5 lg:px-20 pt-5">
            <img src="@/assets/line.png" class=""> <h2 class="text-white md:text-2xl text-sm">Some of our Amazing Features</h2>
        </div>
        <div class="flex lg:px-20 lg:w-[100%] justify-center mx-auto grid-cols-1 flex-wrap gap-10  mt-10 text-white" >
          <section class="px-7 md:w-[42%]  py-6 md:py-5 lg:py-10 rounded-md border-2 border-btn" v-for="feature in features"
          data-aos="fade-up">
            <img :src="feature.img" data-aos-delay="300" data-aos="zoom-in">
            <h2 class="font-bold text-2xl my-5" data-aos-delay="400" data-aos="zoom-in">{{ feature.title }}</h2>
            <p class="text-gray-200" data-aos-delay="500" data-aos="zoom-in">{{ feature.body }}</p>
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
                title:'Liquid Staking',
                img:threedots,
                body:' Both supplier and borrower earn delegation rewards from ADA supplied as liquidity to loan pools and or as collateral to secure debts on top of protocol emitted yield',

            },
            {
                title:'Multi-Assets Collateral',
                img:search,
                body:'Create CDPs with a collection of different Cardano Native Tokens as collateral',
            },
            {
                title:'Multi-Assets Collateral',
                img:search,
                body:'Create CDPs with a collection of different Cardano Native Tokens as collateral',

            },
            ]
        }
    }
}
</script>
