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
                actividades.value = data
            }
        }
    }
</script>

<template>
    <section class="w-full max-w-[1200px] mx-auto">
        <ContenedorDesafios 
            :pageDesafios="pageDesafios" 
            :buscarListaDesafio="buscarListaDesafio"
        />
        
        <ListaDesafios 
            :actividades="actividades"
            :toggle-model="toggleModel" 
            :name-lista-desafios="nameListaDesafios" 
            :buscarListaDesafio="buscarListaDesafio"
            :filtro="filtroData"
        />
    </section>
</template>