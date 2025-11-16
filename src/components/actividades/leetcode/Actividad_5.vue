<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_prueba(values){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        
        if( values.length % 2 != 0 ) return false
        let caracteres = ""
        let caracterApertura = {"(":1, "{":2, "[":3}
        let caracterCierre = {")":1, "}":2, "]":3}
        for (let i = 0; i < values.length; i++) {
            if( caracterApertura[ values[i] ] != undefined ){
                caracteres += values[i]
            }else{
                if(caracterApertura[ caracteres.at(-1) ] == caracterCierre[ values[i] ]){
                    caracteres = caracteres.slice(0, -1)
                }else{
                    return false
                }
            }
        }
        return ( caracteres.length == 0 ) ? true : false
    }

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let palabras_1 = "()"
                resp.value = function_prueba(palabras_1)  
                break;

            case 2:
                let palabras_2 = "()[]{}"
                resp.value = function_prueba(palabras_2)  
                break;
            case 3:
                let palabras_3 = "(]"
                resp.value = function_prueba(palabras_3)  
                break;
            case 4:
                let palabras_4 = "([])"
                resp.value = function_prueba(palabras_4)    
                break;
            default:
                break;
        }
    }

    let text = `
        if( values.length % 2 != 0 ) return false 
        let caracteres = "" 
        let caracterApertura = {"(":1, "{":2, "[":3} 
        let caracterCierre = {")":1, "}":2, "]":3} 
        for (let i = 0; i < values.length; i++) { 
            if( caracterApertura[ values[i] ] != undefined ){ 
                caracteres += values[i] 
            }else{ 
                if(caracterApertura[ caracteres.at(-1) ] == caracterCierre[ values[i] ]){ 
                    caracteres = caracteres.slice(0, -1) 
                }else{ 
                    return false 
                } 
            } 
        } 
        return ( caracteres.length == 0 ) ? true : false 
    `

    const datosAct = {
    id: '5',
    plataforma: "LeetCode",
    dificultad: "🟢",
    title: "Valid Parentheses",
    link: "https://leetcode.com/problems/Valid-Parentheses/",
    description: [ 
        "Dada una cadena 's' que contiene solo los siguientes caracteres '(', ')', '{', '}', '[' y ']', determina si la cadena de entrada es válida.",
        "Una cadena de entrada es válida si:",
        "-- Los paréntesis de apertura deben cerrarse con el mismo tipo de paréntesis.",
        "-- Los paréntesis de apertura deben cerrarse en el orden correcto.",
        "-- Cada paréntesis de cierre debe tener un paréntesis de apertura correspondiente del mismo tipo.    ",
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "s = ()",
            salida: "true",
            explicacion: "Todos caracteres tienen su apertura y su cierre" 
        },
        {
            id: "2",
            entrada: "s = ()[]{}",
            salida: "true",
            explicacion: "Todos caracteres tienen su apertura y su cierre" 
        },
        {
            id: "3",
            entrada: "s = (]",
            salida: "false",
            explicacion: "Los caracteres no tienen su apertura o su cierre" 
        },
        {
            id: "4",
            entrada: "s = ([])",
            salida: "true",
            explicacion: "Todos caracteres tienen su apertura y su cierre" 
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