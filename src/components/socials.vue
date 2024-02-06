<template>
  <main>
    <div class="flex justify-center gap-5 items-center mt-10">
      <img src="../assets/line.png" alt="" />
      <h2 class="md:text-3xl text-xl" data-aos="fade-up">Social Media</h2>
    </div>
    <div>
      <h2
        class="text-secondary text-center md:text-5xl my-10 text-2xl px-2"
        data-aos="fade-up"
       
      >
        Our Social Media Handles
      </h2>
      <section class="flex justify-center gap-3 md:gap-5 pb-20">
        <div v-for="social in socials">
          <a
            :href="social.link"
            class="flex items-center justify-center md:gap-3 gap-2 py-1 px-2 md:px-4 md:text-base text-xs rounded-lg border-secondary"
            ><span>{{ social.name }}</span
            ><img :src="social.img" alt=""
          /></a>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import discord from "../assets/discord.svg";
export default {
  data() {
    return {
      socials: [
        {
          name: "Twitter",
          img: twitter,
          link:'https://x.com/halalend_?t=b65R_dXgt6rjwGAWZktsvQ&s=09'
        },
        {
          name: "Github",
          img: github,
          link:'https://github.com/Halalend'
        },
        {
          name: "Discord",
          img: discord,
          link:'https://discord.com/invite/rW2MvA5hbC'
        },
      ],
    };
  },
};
</script>
