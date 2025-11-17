<template>
  <pre class="line-numbers rounded">
    <code  :class="languageClass" ref="codeBlock">
        {{ code }}
    </code>
  </pre>
</template>

<script setup>
import { ref, onMounted, onUpdated, computed } from "vue"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"

// importar idiomas una sola vez
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markup"

const props = defineProps({
  code: String,
  language: { type: String, default: "javascript" }
})

const languageClass = computed(() => `language-${props.language}`)
const codeBlock = ref(null)

const highlight = () => Prism.highlightElement(codeBlock.value)

onMounted(highlight)
onUpdated(highlight)
</script>
