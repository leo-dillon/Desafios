<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import Actividad from './Actividad.vue';

    defineProps({
        toggleModel: {
            type: Function,
            required: true
        },
        buscarListaDesafio: {
            type: Function,
            required: true
        },
        nameListaDesafios: {
            type: String,
            required: true
        },
        filtro: {
            type: String ,
            required: true ,
            default: ""
        },
        actividades: {
            type: Object,
            required: true
        }
    })

    const loading = ref(false)
    onMounted( async () => {
        try {
            setTimeout(() => {
                loading.value = true
            }, 500);
        } catch (error) {
            console.error(error)
        }
    }) 

</script>

<template>
    <section class="w-full sm:max-w-9/10 sm:mx-auto mt-12 flex flex-col scroll-top" id="Desafios">
        <div class="w-full max-w-9/10 mx-auto sm:mx-0">
            <h2 class="w-full text-start font-bold text-2xl text-gray-200">
                Lista de Desafios:
            </h2>
            <small v-if="nameListaDesafios" class="mb-4 w-full text-start text-xl text-gray-500">
                Desafios resueltos de {{ nameListaDesafios }}
            </small>
            <small v-else class="w-full text-start text-xl text-gray-500">
                Selecciona una página de desafios para continuar ...
            </small>
        </div>
        <div>
            <div v-if="actividades.length > 0 || filtro != ''" class="my-3 ml-4 sm:ml-0 flex justify-start items-center flex-wrap gap-4">
                <RouterLink 
                    @click="buscarListaDesafio(nameListaDesafios, 'facil')" 
                    to="?filtro=facil"
                    :class="[ 
                        'py-1 px-4 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200'
                        , filtro == 'facil' ? 'bg-gray-900 text-gray-300': 'text-gray-500'
                    ]"
                > 
                    Facíl <span class="ml-2 text-sm">🟢</span>
                </RouterLink>
                <RouterLink
                    to="?filtro=medio" 
                    @click="buscarListaDesafio(nameListaDesafios, 'medio')" 
                    :class="[ 
                        'py-1 px-4 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200'
                        , filtro == 'medio' ? 'bg-gray-900 text-gray-300': 'text-gray-500'
                    ]"
                > 
                    Intermedio <span class="ml-2 text-sm">🟠</span>
                </RouterLink>
                <RouterLink
                    to="?filtro=dificil" 
                    @click="buscarListaDesafio(nameListaDesafios, 'dificil')" 
                    :class="[ 
                        'py-1 px-4 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200'
                        , filtro == 'dificil' ? 'bg-gray-900 text-gray-300': 'text-gray-500'
                    ]"
                > 
                    Difícil <span class="ml-2 text-sm">🔴</span>
                </RouterLink>
                <RouterLink 
                    v-if="filtro == 'facil' || filtro == 'medio' || filtro == 'dificil'"
                    @click="buscarListaDesafio(nameListaDesafios, '')" 
                    to=""
                    :class="[ 
                        'py-1 px-4 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200 text-gray-500'
                    ]"
                > 
                    Eliminar los filtros
                </RouterLink>
            </div>
            <ul
                class="w-full pr-2 sm:max-w-400 sm:mx-auto bg-gray-900 sm:rounded-2xl transition-all"
            >
                <li 
                    v-if="loading"  
                    v-for="(act, i) in actividades"
                    class="w-full flex items-center hover:bg-gray-700 group duration-100"
                >
                    <Actividad 
                        :act="act"
                        :toggle-model="toggleModel"
                    />
                </li>
                <p v-else class="px-4 py-2 w-full text-lg text-gray-300">
                    Cargando ...
                </p>
                <li v-if="loading && actividades.length == 0" class="px-4 py-2 w-full max-full-100 flex items-center bg-slate-950">
                    <h3 v-if="filtro == ''" class="w-full text-lg text-gray-300"> No tienes actividades realizadas</h3>
                    <h3 v-else class="w-full text-lg text-gray-300"> No tienes actividades realizadas con está dificultad</h3>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
    li {
        transition: background-color 0.2s ease; 
        transition-delay: 0.2s; 
    }

    li:hover {
        background-color:  #020618  ; 
        transition-delay: 0s; 
    }
</style>