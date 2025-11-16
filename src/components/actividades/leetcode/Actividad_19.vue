<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    function function_actividad(nums){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        let frecuencias = {}
        let max_f = 0
        let respuesta = 0
        
        nums.forEach(num => {
            if( frecuencias[num] ){
                frecuencias[num] = frecuencias[num] + 1 
            } else {
                frecuencias[num] = 1
            } 
        }); 
        for (const frec in frecuencias) {
            console.log( frecuencias[frec] )
            if( frecuencias[frec] > max_f ){
                max_f = frecuencias[frec]
                respuesta = frecuencias[frec]
            } else if ( frecuencias[frec] == max_f ){
                respuesta += frecuencias[frec]
            }
        }

        return respuesta
    }

    let text = `
    let frecuencias = {}
    let max_f = 0
    let respuesta = 0
    
    nums.forEach(num => {
        if( frecuencias[num] ){
            frecuencias[num] = frecuencias[num] + 1 
        } else {
            frecuencias[num] = 1
        } 
    }); 
    for (const frec in frecuencias) {
        console.log( frecuencias[frec] )
        if( frecuencias[frec] > max_f ){
            max_f = frecuencias[frec]
            respuesta = frecuencias[frec]
        } else if ( frecuencias[frec] == max_f ){
            respuesta += frecuencias[frec]
        }
    }

    return respuesta
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                const nums1 = [1,2,2,3,1,4]
                resp.value = function_actividad( nums1 )  
                break;

            case 2:
                const nums2 = [1,2,3,4,5]
                resp.value = function_actividad( nums2 )
                break;
            
            default:
                break;
        }
    }

    const datosAct = {
        id: '13',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Count Elements With Maximum Frequency",
        link: "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
        description: [ 
            "Se te da un array nums que consiste en enteros positivos.",
            "Devuelve la suma de las frecuencias de los elementos en nums tales que esos elementos tengan la frecuencia máxima.",
            "La frecuencia de un elemento es la cantidad de veces que aparece ese elemento en el array."
        ],
        ejemplo: [
            {
                id: "1",
                entrada:"nums = [1,2,2,3,1,4]",
                salida: "4",
                explicacion:"Los elementos con frecuencia máxima son 1 y 2, anbos con frecuencia dos por lo tanto retornamos 4 ( 2 + 2 )"
            },
            {
                id: "2",
                entrada:"nums = [1,2,3,4,5]",
                salida: "5",
                explicacion:"Todos los elementos tienen una frecuencia máxima de 1, por lo tanto retornamos 5 ( 1 + 1 + 1 + 1 + 1 )"
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