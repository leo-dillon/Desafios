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
    let actividades = ref({})
    
    const pageDesafios = ( text ) => {
        nameListaDesafios.value = text
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
            }else{
                actividades.value = data
            }
        }
    }
</script>

<template>
    <section>
        <ContenedorDesafios 
            :pageDesafios="pageDesafios" 
            :buscarListaDesafio="buscarListaDesafio"
        />
        
        <ListaDesafios 
            :actividades="actividades"
            :toggle-model="toggleModel" 
            :name-lista-desafios="nameListaDesafios" 
            :buscarListaDesafio="buscarListaDesafio"
        />
    </section>
</template>