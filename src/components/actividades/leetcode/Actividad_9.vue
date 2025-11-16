<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(haystack, needle){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let splitHayStack = haystack.replace(needle, "|*|").split('|')
        let posicion = 0
        if ( splitHayStack[0].length == haystack.length ) return -1
        for ( let i = 0; i < splitHayStack.length; i++ ) {
            if ( splitHayStack[i] == '*' ){
                return posicion
            }
            posicion = posicion + splitHayStack[i].length
        }    
    }

    let text = `
        let splitHayStack = haystack.replace(needle, "|*|").split('|')
        let posicion = 0
        if ( splitHayStack[0].length == haystack.length ) return -1
        for ( let i = 0; i < splitHayStack.length; i++ ) {
            if ( splitHayStack[i] == '*' ){
                return posicion
            }
            posicion = posicion + splitHayStack[i].length
        }  
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let haystack_1 = "sadbutsad", needle_1 = "sad"
                resp.value = function_actividad(haystack_1, needle_1)  
                break;

            case 2:
                let haystack_2 = "leetcode", needle_2 = "leetD"
                resp.value = function_actividad(haystack_2, needle_2)  
                break;

            default:
                break;
        }
    }
    const datosAct = {
        id: '9',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Find the Index of the First Occurrence in a String",
        link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        description: [ 
            "Dadas dos cadenas de texto needle y haystack, devolvé el índice de la primera aparición de needle dentro de haystack, o -1 si needle no forma parte de haystack."
        ],
        ejemplo: [
            {
                id: "1",
                entrada:"haystack = 'sadbutsad', needle = 'sad'",
                salida: "0",
                explicacion:"Buscamos la primera aparicion de la palabra 'sad' dentro de 'sadbutsad' y la encontramos en el index 0 al 2. Como encontramos un valor devolvemos si posición inicial dentro del 'haystack'. Es decir '0'"  
            },
            {
                id: "2",
                entrada:"haystack = 'leetcode', needle = 'leeto'",
                salida: "-1",
                explicacion:"Buscamos la primera aparicion de la palabra 'leeto' dentro de 'leetcode' y como no lo encontramos devolvemos '-1'"  
            }
            
        ]
    }
</script>

<template>
    <Desafio
        :id="datosAct.id"
        :description="datosAct.description"
        :ejemplo="datosAct.ejemplo"
        :plataforma="datosAct.plataforma"
        :dificultad="datosAct.dificultad"
        :title="datosAct.title"
        :link="datosAct.link"
        :text="text"
        :ejecutarTest="testFunciones"
        :resp="resp"
        :carga="carga"
    />
</template>