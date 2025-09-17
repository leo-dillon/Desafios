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
            type: String,
            required: true
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
    <section class="w-full sm:max-w-9/10 sm:mx-auto mt-12 flex flex-col">
        <h2 class="w-full text-start ml-4 sm:ml-0 font-bold text-2xl text-gray-200">
            Lista de Desafios:
        </h2>
        <small v-if="nameListaDesafios" class="ml-4 sm:ml-0 mb-4 w-full text-start text-xl text-gray-500">
            Desafios resueltos de {{ nameListaDesafios }}
        </small>
        <small v-else class="w-full text-start text-xl text-gray-500">
            Selecciona una página de desafios para continuar ...
        </small>
        <div>
            <div v-if="actividades" class="my-3 ml-4 sm:ml-0 flex justify-start items-center flex-wrap gap-4">
                <RouterLink 
                    @click="buscarListaDesafio(nameListaDesafios, 'facil')" 
                    to="?filtro=facil"
                    :class="[ 
                        'px-4 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200'
                        , filtro == 'facil' ? 'bg-gray-900 text-gray-300': 'text-gray-500'
                    ]"
                > 
                    Facíl 🟢
                </RouterLink>
                <RouterLink
                    to="?filtro=medio" 
                    @click="buscarListaDesafio(nameListaDesafios, 'medio')" 
                    :class="[ 
                        'px-4 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200'
                        , filtro == 'medio' ? 'bg-gray-900 text-gray-300': 'text-gray-500'
                    ]"
                > 
                    Intermedio 🟠
                </RouterLink>
                <RouterLink
                    to="?filtro=dificil" 
                    @click="buscarListaDesafio(nameListaDesafios, 'dificil')" 
                    :class="[ 
                        'px-4 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200'
                        , filtro == 'dificil' ? 'bg-gray-900 text-gray-300': 'text-gray-500'
                    ]"
                > 
                    Difícil 🔴
                </RouterLink>

            </div>
            <transition-group
                tag="ul"
                name="fade"
                class="w-[100% - 5px] sm:max-w-400 mx-[5px] sm:mx-auto bg-gray-900 sm:rounded-2xl"
            >
                <li 
                    v-if="loading"  
                    v-for="(act, i) in actividades"
                    class="w-full flex items-center hover:bg-gray-700 group duration-100"
                    :style="{ transitionDelay: (i * 30) + 'ms' }"
                >
                    <Actividad 
                        :act="act"
                        :toggle-model="toggleModel"
                    />
                </li>
                <p v-else class="px-4 py-2 w-full text-lg text-gray-300">
                    Cargando ...
                </p>
                <li v-if="loading && actividades.length == 0" class="px-4 py-2 w-full max-full-100 flex items-center hover:bg-gray-700">
                    <h3 class="w-full text-lg text-gray-300"> No tienes actividades realizadas</h3>
                </li>
            </transition-group>
        </div>
    </section>
</template>