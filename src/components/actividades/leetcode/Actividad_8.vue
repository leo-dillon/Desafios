<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(nums, val){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let valoresDistintos = 0
        for ( let i = 0; i < nums.length; i++ ) {
            if ( val != nums[ i ] ) {
                nums[ valoresDistintos ] = nums[ i ]
                valoresDistintos ++
            }
        }        
        for (let i = valoresDistintos; i < nums.length; i++) {
            nums[i] = "_"
            
        }
        return [ valoresDistintos, nums ]
    }

    let text = `
        let valoresDistintos = 0
        for ( let i = 0; i < nums.length; i++ ) {
            if ( val != nums[ i ] ) {
                nums[ valoresDistintos ] = nums[ i ]
                valoresDistintos ++
            }
        }        
        for (let i = valoresDistintos; i < nums.length; i++) {
            nums[i] = "_"
            
        }
        return [ valoresDistintos, nums ]
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_1 = [3,2,2,3], val_1 = 3
                resp.value = function_actividad(nums_1, val_1)  
                break;

            case 2:
                let nums_2 = [0,1,2,2,3,0,4,2], val_2 = 2
                resp.value = function_actividad(nums_2, val_2)  
                break;

            default:
                break;
        }
    }
    const datosAct = {
        id: '8',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Remove Element",
        link: "https://leetcode.com/problems/remove-element/",
        description: [ 
            "Dado un array de enteros nums y un entero val, eliminá todas las ocurrencias de val en nums en el mismo array (es decir, sin usar otro array adicional). El orden de los elementos puede cambiar. Luego, devolvé la cantidad de elementos en nums que no son iguales a val.",
            "Considerando que el número de elementos en nums que no son iguales a val es k, para que tu solución sea aceptada, tenés que hacer lo siguiente:",
            "Modificá el array nums de forma tal que los primeros k elementos contengan los valores que no son iguales a val. ",
            "-- El resto de los elementos en nums no importa, ni tampoco el tamaño final del array.",
            "-- Devolvé k.",
        ],
        ejemplo: [
            {
                id: "1",
                entrada:"nums = [3,2,2,3], val = 3",
                salida:"2, nums = [2,2,'_','_']",
                explicacion:"Nos piden quitar los valores 3 del array nums y debemos devolvel el array [2,2,'_','_'] y la cantidad de elemento no quitados en este caso 2" 
            },
            {
                id: "2",
                entrada:"nums = [0,1,2,2,3,0,4,2], val = 2",
                salida:"5, nums = [0,1,4,0,3,'_','_','_']",
                explicacion:"Nos piden quitar los valores 2 del array nums y debemos devolvel el array [0,1,4,0,3,'_','_','_'] y la cantidad de elemento no quitados en este caso 5" 
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