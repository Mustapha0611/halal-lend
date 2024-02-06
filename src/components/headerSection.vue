<template>
  <header
    role="banner"
    class="flex justify-between items-center h-[9vh] bg-main px-4 text-white sticky z-30 top-0"
  >
    <div class="px-5 lg:px-20">
      <router-link to="/">
        <img
          src="../assets/logo.svg"
          alt="Your Website Logo"
          class="w-20 h-16 md:h-16 md:w-28"
        />
      </router-link>
    </div>

    <nav role="navigation" class="flex md:justify-between">
      <ul
        role="menu"
        class="flex px-5 lg:px-20 items-center gap-7 text-[16px] z-40 flex-col md:flex-row absolute md:static md:h-auto w-full left-[-100%] h-[100vh] transition-all top-0 bg-main justify-center"
        :class="{ show: showMenu }"
      >
    
        <span
          tabindex="0"
          @click="menuToggle"
          class="md:hidden absolute top-7 right-[5%] w-6 h-6 cursor-pointer"
          :class="{ showContact: showMenu }"
        >
          <img src="../assets/close.png" alt="Close" class="w-full h-full" />
        </span>
   
       
        <li role="menu item"><a href="#" @click="menuToggle">Home</a></li>
        <li role="menu item"><a href="#developers" @click="menuToggle">Developers</a></li>
        <div
          class="absolute md:static md:h-auto md:w-auto w-full left-0 top-[30rem] md:top-0 flex items-end justify-center opacity-0 md:opacity-100 transition-opacity"
          :class="{ showContact: showMenu }"
        >
          <button
            aria-label="Launch demo"
            class="px-8 py-3 min-w-[10rem] text-sm rounded-md shadow shadow-yellow-600 font-semibold bg-btn"
          >
            Launch Demo
          </button>
        </div>
      </ul>
    </nav>

    <button
      aria-label="Toggle Menu"
      aria-haspopup="true"
      class="md:hidden flex cursor-pointer px-5"
      @click="menuToggle"
      @keyup.enter="menuToggle"
    >
      <img
        src="../assets/burger-nav.png"
        alt="Menu"
        class="w-8 h-8 aspect-square"
      />
    </button>
  </header>
</template>
<script setup>
import { ref } from "vue";

const showMenu = ref(false);
const menuToggle = () => {
  showMenu.value = !showMenu.value;
  console.log(showMenu.value);
};
</script>
<style scoped>

.router-link-exact-active {
  /* border-bottom: 2px solid #D45800; */
  color: #d45800;
}
.show {
  /* transform: translateX(100%); */
  left: 0;
  transition: 0.2s all;
}
.showContact{
  opacity:1;
  transition: opacity 1s linear;
}
</style>
