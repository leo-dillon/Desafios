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
        },
        ejecutarTest: {
            type: Function,
            required: true
        },
    })
</script>

<template>
    <div class="w-full max-w-3xl mx-auto sm:px-4">
  <!-- Título -->
  <h3 class="mt-4 text-gray-400 border-b border-stone-600 text-lg md:text-xl">
    Descripción
  </h3>

  <!-- Descripción -->
  <div class="my-2 pb-2 space-y-2">
    <p
      v-for="i in description"
      :key="i"
      class="text-gray-300 text-pretty leading-relaxed"
      :class="i.startsWith('-') ? 'ml-6 md:ml-10 opacity-80 list-item' : ''"
    >
      {{ i }}
    </p>
  </div>

  <!-- Ejemplos -->
  <div v-for="i in ejemplo" :key="i.id" class="relative bg-zinc-900 px-2 py-3 my-2 rounded-md">
    <h4 class="w-max text-gray-400 border-b border-stone-600 text-sm md:text-md">
      Ejemplo {{ i.id }}
    </h4>

    <Ejemplo
      :entrada="i.entrada"
      :salida="i.salida"
      :explicacion="i.explicacion"
    />
     <button @click="ejecutarTest( parseInt(i.id) )"
          class="absolute -top-0 -right-0 text-gray-300 text-sm px-2 py-1 border border-gray-600 cursor-pointer hover:bg-blue-800">
          Probar valores {{ i.id  }}
      </button>
  </div>
</div>

</template>