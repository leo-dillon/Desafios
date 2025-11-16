<script setup>
    defineProps({
        ejecutarTest: {
            type: Function,
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
    <div class="ml-6 py-6 flex gap-6 ">
        <button v-for="i in ejemplo" @click="ejecutarTest( parseInt(i.id) )"
            class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
            Probar valores
        </button>
    </div>
</template>