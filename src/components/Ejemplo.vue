<script setup>
    defineProps({
        entrada: String,
        salida: String,
        explicacion: String,
    })
</script>
<template>
    <p class="ml-4 pl-4 text-gray-400 border-l border-stone-600">
        <strong class="text-gray-300 text-lg">Entrada:      </strong>     {{ entrada }}      <br>
        <strong class="text-gray-300 text-lg">Salida:       </strong>     {{ salida }}       <br>
        <strong class="text-gray-300 text-lg">Explicación:  </strong>     {{ explicacion }}
    </p>
</template>