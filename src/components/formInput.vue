<template>
    <main>
        <form name="users" method="POST" netlify  class="flex justify-center relative py-10 text-black" on>
            <input type="email" name="email" class="lg:py-6 lg:px-12 md:px-7 md:py-4 py-3 px-4 lg:w-[65%] w-[85%] rounded-lg md:text-2xl text-sm" placeholder="Enter your Email Address here" required/>
            <button type="submit"  class="lg:px-7 lg:py-4 py-2 px-3 text-sm rounded-md text-white focus:outline-0 bg-btn absolute lg:right-[18%] md:right-[9%] lg:top-[30%] md:top-[33.5%] top-[35.5%] right-[9%] md:text-2xl">Subscribe</button>
        </form>
    </main>
</template>
<style>
input{
    outline:none;
}
</style>