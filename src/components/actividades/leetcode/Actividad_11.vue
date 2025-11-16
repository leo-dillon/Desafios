<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(s){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let arrayDeString = s.trim().split(' ')
        return arrayDeString[arrayDeString.length - 1].length
    }

    let text = `
    let arrayDeString = s.trim().split(' ')
    return arrayDeString[ arrayDeString.length - 1 ].length
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let s_1 = "Hello World"
                resp.value = function_actividad(s_1)  
                break;

            case 2:
                let s_2 = "   fly me   to   the moon  "
                resp.value = function_actividad(s_2)   
                break;
            case 3:
                let s_3 = "luffy is still joyboy"
                resp.value = function_actividad(s_3)  
                  
                break;
            default:
                break;
        }
    }

    const datosAct = {
        id: '11',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Length of Last Word",
        link: "https://leetcode.com/problems/sealength-of-last-word/",
        description: [ 
            "Dado un array ordenado de enteros distintos y un valor objetivo (target), devolvé el índice si el valor se encuentra. Si no se encuentra, devolvé el índice en el que debería insertarse para mantener el orden. ",
            "Debés escribir un algoritmo con una complejidad de tiempo de ejecución O(log n). ",
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "s = 'Hello World'",
                salida: "5", 
                explicacion: "Buscamos la palabra más larga del texto en este caso es 'World' y devolvemos su longitud 5"
            },
            {
                id: "2",
                entrada: "s = '   fly me   to   the moon  '",
                salida: "4", 
                explicacion: "Buscamos la palabra más larga del texto en este caso es 'moon' y devolvemos su longitud 4"
            },
            {
                id: "2",
                entrada: "s = 'luffy is still joyboy'",
                salida: "6", 
                explicacion: "Buscamos la palabra más larga del texto en este caso es 'joyboy' y devolvemos su longitud 6"
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