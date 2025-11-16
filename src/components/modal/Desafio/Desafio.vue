<script setup>
import DesafiosTitle from '../../modal/Desafio/DesafioTitle.vue'
import DesafiosDescripcion from '../../modal/Desafio/DesafioDescripcion.vue'
import DesafioCode from '../../modal/Desafio/DesafioCode.vue'
import DesafioTest from '../../modal/Desafio/DesafioTest.vue'

defineProps({
    id:{
        type: String,
        required: true
    },
    description: {
        type: Array[String],
        required: true
    },
    ejemplo: {
        type: Array[{
            id: String,
            entrada: String,
            salida: String,
            explicacion: String
        }],
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
    },
    text: {
        type: String,
        required: true
    },
    ejecutarTest: {
        type: Function,
        required: true
    },
    resp: {
        required: true
    },
    carga: {
        type: Boolean,
        required: true
    }
})

</script>

<template>
    <div class="flex flex-col h-200 py-6 " id="modal">
        <DesafiosTitle 
            :id="id"
            :plataforma="plataforma"
            :dificultad="dificultad"
            :title="title"
            :link="link"
        />
        <div class="flex flex-col sm:flex-row gap-12 ">
            <DesafiosDescripcion 
                :description="description"
                :ejemplo="ejemplo"
            />
            <div class="w-full max-w-[600px] pr-12">
                <DesafioCode :text="text"/>
                <DesafioTest :ejecutarTest="ejecutarTest" :ejemplo="ejemplo"/>
                <div class="ml-6 pb-8 w-full" id="res">
                    <h4 v-if="carga == true" class="text-gray-400"> Cargando ... </h4>
                    <h4 v-else-if="resp && carga == false" class="w-full max-w-9/10 text-wrap text-gray-400 text-sm"> 
                        <strong class="text-gray-300 text-md ">Respuesta:</strong> <br> {{ resp }}
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>