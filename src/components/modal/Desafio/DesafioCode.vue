<script setup>
    import TextCode from '../../codeUI/TextCode.vue'
    
    defineProps({
        text: String
    })
</script>

<template>
    <div class="w-full">
        <h4 class="w-max text-gray-400 border-b border-stone-600">Mi solución : </h4>
        <div
            class="w-full md:w-fit mt-2 border-l border-stone-600 text-gray-200 text-sm font-mono xl:pr-10" >
            <TextCode :code="text" />
        </div>
    </div>
</template>