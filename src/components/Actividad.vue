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
    <span class="flex items-center justify-center py-1 sm:h-auto mr-2 sm:mr-4 px-1 min-w-10 text-lg sm:text-2xl text-center text-gray-300 border-r border-gray-600 group-hover:bg-slate-950 duration-100"> 
        {{ act.id }}
    </span>
    <h3 id="scroll" class=" flex items-center sm:h-auto w-full mr-2 sm:mr-4 sm:text-lg truncate overflow-x-auto  pr-4 sm:pr-0 font-bold text-gray-400"> 
        {{ act.nombre }} 
    </h3>
    <small v-if="act.dificultad" class=" flex items-center sm:h-auto sm:px-2 text-md sm:text-2xl sm:border-x border-gray-600 group-hover:bg-slate-950"> 
        {{ iconoDificultad(act.dificultad) }}
    </small>
    <RouterLink :to="act.link" @click="toggleModel" class=" flex items-center justify-center sm:h-auto min-w-max px-2 sm:px-6 text-gray-500 hover:text-gray-300"> 
        <span class="hidden sm:block mr-1"> Ver </span> Solución 
    </RouterLink>
</template>

<style scoped>
#scroll {
  scrollbar-color: #4a5565 transparent;
  scrollbar-width: thin;
}
</style>