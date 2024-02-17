<template>
  <div class="text-gray-100 py-10 scroll-m-10" id="developers">
    <h1 class="text-center text-4xl font-semibold">Developers</h1>
    <section class="flex justify-center">
      <Splide
        :options="options"
        class="flex justify-center md:w-[50%] lg:w-[35%] w-[86%] py-10"
      >
        <SplideSlide class="w-full max-h[400px] px-10 py-5 my-10 shadow-xl">
          <span
            target="_blank"
            class="mt-10 flex justify-center hover:scale-105 transition-all"
          >
            <img src="../assets/saib.png" alt="saib logo" />
          </span>
          <article class="">
            <p class="pt-5 italic">
              SAIB, led by CEO
              <a
                href="http://github.com/Mercurial"
                target="_blank"
                class="text-blue-300 underline"
                >Clark Alesna</a
              >
              , is a leading blockchain developer prioritizing decentralized
              technology for cutting-edge applications. The company is dedicated
              to delivering top-notch blockchain solutions uniquely designed for
              the Cardano ecosystem.
            </p>
            <button
              class="bg-btn py-3 font-semibold rounded-md px-5 mt-10 inline-block hover:scale-105 transition-all"
            >
              <a
                href="https://github.com/Mercurial"
                target="_blank"
                class="hover:scale-105 transition-all"
              >
                Learn More</a
              >
            </button>
          </article>
        </SplideSlide>
        <SplideSlide class="w-full max-h[400px] px-10 py-5 my-10 shadow-xl">
          <span
            target="_blank"
            class="mt-10 flex justify-center hover:scale-105 transition-all"
          >
            <img src="../assets/os.png" alt="os logo" />
          </span>

          <article class="">
            <p class="pt-5 italic">
              "The groundbreaking Cardano investment DAO, has shifted its focus
              to developing community products and ensuring a sustainable
              treasury. This strategic evolution reflects the organization's
              commitment to innovation and fostering growth within the Cardano
              ecosystem.
            </p>
            <button
              class="bg-btn py-3 font-semibold rounded-md px-5 mt-10 inline-block hover:scale-105 transition-all"
            >
              <a
                href="https://osmiumdao.io"
                target="_blank"
                class="hover:scale-105 transition-all"
              >
                Learn More</a
              >
            </button>
          </article>
        </SplideSlide>
      </Splide>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
let show = ref(false);
const showText1 = () => {
  show.value = !show.value;
};
let show2 = ref(false);
const showText2 = () => {
  show2.value = !show2.value;
};
const options = {
  type: "loop",
  perPage: 1,
  rewind: true,
  autoplay: true,
  pagination: false,
  interval: 3000,
  arrows: false,
};
</script>
<style scoped>
.show {
  max-height: 300px;
  transition: max-height 0.2s linear;
}
</style>
