<script setup>
    defineProps({
        pageDesafios: {
            type: Function,
            required: true
        }
    })
    import Leetcode from '../icons/Leetcode.vue';
    import MoureDev from '../icons/MoureDev.vue';
</script>

<template>
    <section id="contenedor-desafios" class="w-full pt-16 relative max-w-9/10 sm:max-w-300 mx-auto mt-12 flex gap-12">
        <h2 class="absolute top-4 font-bold text-2xl text-gray-500"> Desafíos realizados en </h2>
        <div 
        v-on:click="pageDesafios('LeetCode')"
        id="leetCode" 
        class="w-38 h-38 p-4 rounded-2xl flex flex-col items-center justify-center bg-white/10 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-500 duration-200 cursor-pointer"
            >
            <Leetcode width="70px" height="70px" />
            <h2 class="font-bold text-2xl text-gray-200 mt-2"> LeetCode </h2>
        </div>
        <div 
        v-on:click="pageDesafios('MoureDev')"
        id="moureDev" 
        class="w-38 h-38 p-4 rounded-2xl flex flex-col items-center justify-center bg-white/10 opacity-80 hover:opacity-100 hover:shadow-sm hover:shadow-gray-500 duration-200 cursor-pointer"
            >
            <MoureDev width="70px" height="70px" />
            <h2 class="font-bold text-2xl text-gray-200 mt-2"> MoureDev </h2>
        </div>
    </section>
</template>