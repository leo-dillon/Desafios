<script setup>
import Ejemplo from '../../Ejemplo.vue';

    defineProps({
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
        }
    })
</script>

<template>
    <div class="w-fit max-w-170">
        <h3 class="mt-4 text-gray-400 border-b border-stone-600">
            Descripción
        </h3>
        <div class="my-2">
            <p v-for="i in description" :key="i" class=" ml-4 text-gray-300 text-pretty leading-relaxed" :class="i.startsWith('-') ? 'ml-12 opacity-80 list-item' : ''">
                {{ i }}
            </p>
        </div>
        <div v-for="i in ejemplo" class="py-4 space-y-3">
            <h4 class="w-max text-gray-400 border-b border-stone-600">
                Ejemplo {{ i.id }}
            </h4>
            <Ejemplo 
                :entrada=" i.entrada " 
                :salida=" i.salida "
                :explicacion="i.explicacion" 
            />
        </div>
    </div>
</template>