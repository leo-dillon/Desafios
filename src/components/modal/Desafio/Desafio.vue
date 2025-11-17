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
    <div class="flex flex-col h-210 py-6 " id="modal">
        <DesafiosTitle 
            :id="id"
            :plataforma="plataforma"
            :dificultad="dificultad"
            :title="title"
            :link="link"
        />
        <div class="flex flex-col xl:flex-row gap-6">
            <DesafiosDescripcion 
                :description="description"
                :ejemplo="ejemplo"
                :ejecutarTest="ejecutarTest"
            />
            <div class="flex flex-col gap-4  w-full pb-4 xl:max-w-[600px] xl:pr-12">
                <div class="order-2 sm:order-1">
                    <DesafioCode :text="text"/>
                </div>
                <div class="w-full scroll-top order-1 sm:order-2" id="res">
                    <div v-if="carga" class="text-gray-400 text-sm animate-pulse">Cargando...</div>
    
                    <div
                        v-else-if="resp"
                        class="bg-primary-900/40 border border-primary-700 text-gray-200 p-3 rounded-xl shadow-md max-w-xl"
                    >
                        <span class="block font-semibold text-primary-300 mb-1">Respuesta del ejemplo seleccionado: </span>
                        <p class="whitespace-pre-line leading-relaxed">
                            <pre><code>{{ resp }}</code></pre>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>