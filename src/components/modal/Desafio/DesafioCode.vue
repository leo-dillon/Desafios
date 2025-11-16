<script setup>
    import TextCode from '../../codeUI/TextCode.vue'

    defineProps({
        text: String
    })
</script>

<template>
    <div class="w-full">
        <h4 class="w-max text-gray-400 border-b border-stone-600">Mi respuesta</h4>
        <div
            class="w-fit mt-2 ml-4 bg-[#1e1e1e] border-l border-stone-600 text-gray-200 text-sm font-mono pr-10">
            <TextCode :text="text" />
        </div>
    </div>
</template>