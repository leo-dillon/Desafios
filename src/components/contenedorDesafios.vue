<script setup>
    defineProps({
        pageDesafios: {
            type: Function,
            required: true
        }
    })
    import Leetcode from '../icons/Leetcode.vue';
    import MiduDev from '../icons/MiduDev.vue';
    import MoureDev from '../icons/MoureDev.vue';
</script>

<template>
    <section id="aparicion-i" class="w-full pt-8 sm:pt-16 relative max-w-9/10 mx-auto mt-12 flex flex-wrap justify-around sm:justify-start gap-4 sm:gap-6">
        <h2 class="absolute top-0 left-0 sm:top-6 font-bold text-xl text-gray-500"> Desafíos realizados en:</h2>
        <a
            href="#Desafios" 
            v-on:click="pageDesafios('LeetCode')"
            id="leetCode" 
            class="flex-grow max-w-38 h-25 sm:h-30 p-4 rounded-2xl flex flex-col items-center justify-center bg-white/10 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-500 duration-200 cursor-pointer"
        >
            <Leetcode width="50%" height="50%" />
            <h2 class="font-bold text-lg sm:text-2xl text-gray-200 mt-2"> LeetCode </h2>
        </a>
        <a 
            href="#Desafios" 
            v-on:click="pageDesafios('AdventJS2024')"
            id="moureDev" 
            class="flex-grow max-w-38 h-25 sm:h-30 p-4 rounded-2xl flex flex-col items-center justify-center bg-white/10 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-500 duration-200 cursor-pointer"
        >
            <MiduDev width="50%" height="50%" />
            <h2 class="font-bold text-lg sm:text-2xl text-gray-200 mt-2"> Advent JS </h2>
        </a>
    </section>
</template>