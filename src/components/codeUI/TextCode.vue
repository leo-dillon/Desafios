<script setup>
import { ref } from 'vue';
    defineProps({
        text: String
    })
    let a = [
        "for", "if", "else", "switch", "case", "break", "try", "catch",
        "while", "do", "continue", "finally", "return", "throw", "await"
    ];
    let b = [
        "let", "const", "var", "function", "new", "this",
        "true", "false", "null", "undefined", "typeof", "instanceof",
        "import", "export", "default", "extends", "super", "in", "of"
    ];
    let c = [
        "(", ")", "{", "}", "[", "]"
    ];

    let textoMejorado = ref("")
    function mejorandoTexto(text){
        for (let i = 0; i < c.length; i++) {
            text = text.replaceAll(c[i], `<span class="text-orange-500">${c[i]}</span>`)
        }
        for (let i = 0; i < a.length; i++) {
            const regex = new RegExp(`\\b${a[i]}\\b`, 'g');
            text = text.replace(regex, `<span class="text-violet-500">${a[i]}</span>`)
        }
        for (let i = 0; i < b.length; i++) {
            const regex = new RegExp(`\\b${b[i]}\\b`, 'g');
            text = text.replace(regex, `<span class="text-blue-500">${b[i]}</span>`)
        }
        textoMejorado.value = text
    }
</script>
<template>
    {{ mejorandoTexto(text) }}
    <pre>
        <code v-html="textoMejorado" class="text-lg"></code>
    </pre>
</template>
