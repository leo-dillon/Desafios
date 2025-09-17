<script setup>
    defineProps({
        pageDesafios: {
            type: Function,
            required: true
        }
    })
import { RouterLink } from 'vue-router';
    import Leetcode from '../icons/Leetcode.vue';
    import MiduDev from '../icons/MiduDev.vue';
    import MoureDev from '../icons/MoureDev.vue';
</script>

<template>
    <section id="aparicion-i" class="w-full pt-16 relative max-w-9/10 mx-auto mt-12 flex gap-4 sm:gap-12">
        <h2 class="absolute top-4 font-bold text-2xl text-gray-500"> Desafíos realizados en </h2>
        <RouterLink
        to="" 
        v-on:click="pageDesafios('LeetCode')"
        id="leetCode" 
        class=" w-30 h-30 sm:w-38 sm:h-38 p-4 rounded-2xl flex flex-col items-center justify-center bg-white/10 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-500 duration-200 cursor-pointer"
            >
            <Leetcode width="50%" height="50%" />
            <h2 class="font-bold text-lg sm:text-2xl text-gray-200 mt-2"> LeetCode </h2>
        </RouterLink>
        <RouterLink 
        to="" 
        v-on:click="pageDesafios('AdventJS2024')"
        id="moureDev" 
        class="w-30 h-30 sm:w-38 sm:h-38 p-4 rounded-2xl flex flex-col items-center justify-center bg-white/10 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-500 duration-200 cursor-pointer"
            >
            <MiduDev width="50%" height="50%" />
            <h2 class="font-bold text-lg sm:text-2xl text-gray-200 mt-2"> Advent JS </h2>
        </RouterLink>
    </section>
</template>