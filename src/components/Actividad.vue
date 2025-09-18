<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        toggleModel: {
            type: Function,
            required: true
        },
        act: {
            type: Object,
            required: true
        }
    })

    function iconoDificultad(dificultad){
        let icon
        switch (dificultad) {
            case "facil":
                icon = "🟢"
                break;
            case "medio":
                icon = "🟠"
                break
            case "dificil":
                icon = "🔴"
            default:
                icon = "⚫"
                break;
        }
        return icon
    }
</script>

<template>
    <span class="py-2 flex items-center justify-center h-18 sm:h-auto mr-2 sm:mr-4 px-1 min-w-10 text-lg sm:text-2xl text-center text-gray-300 border-r border-gray-600 group-hover:bg-gray-700 duration-100"> 
        {{ act.id }}
    </span>
    <h3 class="py-2 h-18 flex items-center sm:h-auto w-full mr-2 sm:mr-4 sm:text-lg text-gray-300"> 
        {{ act.nombre }} 
    </h3>
    <small v-if="act.dificultad" class="py-2 h-18 flex items-center sm:h-auto sm:px-2 text-xl sm:text-2xl sm:border-x border-gray-600 group-hover:bg-gray-700"> 
        {{ iconoDificultad(act.dificultad) }}
    </small>
    <RouterLink :to="act.link" @click="toggleModel" class="py-2 h-18 flex items-center justify-center sm:h-auto min-w-max px-2 sm:px-6 text-gray-500 hover:text-gray-300"> 
        <span class="hidden sm:block mr-1"> Ver </span> Solución 
    </RouterLink>
</template>