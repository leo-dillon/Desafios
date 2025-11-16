    <script setup>
    import { ref } from 'vue';
    import ContenedorDesafios from './contenedorDesafios.vue';
    import ListaDesafios from './ListaDesafios.vue';

    defineProps({
        toggleModel: {
            type: Function,
            required: true
        }
    })

    const nameListaDesafios = ref('')
    const filtroData = ref('')
    const actividades = ref({})
    
    const pageDesafios = ( text ) => {
        nameListaDesafios.value = text
        filtroData.value = ""
        buscarListaDesafio( text.toLowerCase() )
    }

    async function buscarListaDesafio( name, filtro ){
        if( name != '' ){
            let link = "./src/json/listaDesafios/" + name +  ".json"
            let res = await fetch(link)
            let data = await res.json()
            
            if( filtro ){
                let dataFiltrada = data.filter( act => act.dificultad == filtro )
                actividades.value = dataFiltrada
                filtroData.value = filtro
            }else{
                filtroData.value = filtro
                actividades.value = data
            }
        }
    }
</script>

<template>
    <section class="w-full sm:max-w-[1200px] mx-auto">
        <ContenedorDesafios 
            :pageDesafios="pageDesafios" 
            :buscarListaDesafio="buscarListaDesafio"
        />
        <div class="my-6 sm:my-12 w-full text-center"
            v-if="nameListaDesafios == ''">
            <h2 class="text-sm sm:text-xl text-gray-600">
                Debes seleccionar una plataforma para listar los desafíos. 
            </h2>
        </div>
        <ListaDesafios 
            v-else
            :actividades="actividades"
            :toggle-model="toggleModel" 
            :name-lista-desafios="nameListaDesafios" 
            :buscarListaDesafio="buscarListaDesafio"
            :filtro="filtroData"
        />
    </section>
</template>