<script setup>
    defineProps({
        id: {
            type: String,
            required: true
        },
        plataforma: {
            type: String,
            required: true
        },
        dificultad: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div>
        <h2 class="uppercase text-md sm:text-2xl text-start text-balance font-bold text-gray-200 border-b border-stone-600">
            {{ dificultad  }} Reto #{{ id }}: 🎁 <span class="text-nowrap"> {{ title }} </span>
        </h2>
        <a :href="link" class="inline-block mt-1 text-blue-400 hover:text-blue-500 duration-200 text-sm sm:text-xl"
            :title="`Ir a ${plataforma}`"> link {{ plataforma }}
        </a>
    </div>
</template>