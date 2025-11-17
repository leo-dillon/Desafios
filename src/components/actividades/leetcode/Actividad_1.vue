<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_twoSum(nums, target){
        let posicionesHalladas
        setTimeout(() => {
            carga.value = false
        },500)
        document.getElementById("res")?.scrollIntoView({behavior: 'smooth'})

        for( let i = 0; i < nums.length; i++ ){
            for (let u = i+1; u < nums.length; u++) {
                if( nums[i] + nums[u] == target ){
                    posicionesHalladas = [ i, u ]
                    return posicionesHalladas
                }
            }   
        }
    }

let text = `
for( let i = 0; i < nums.length; i++ ){
    for (let u = i+1; u < nums.length; u++) {
        if( nums[i] + nums[u] == target ){
            posicionesHalladas = [ i, u ]
            return posicionesHalladas
        }
    }   
}
`

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_1 = [2,7,11,15]
                let traget_1 = 9
                resp.value = function_twoSum(nums_1, traget_1)  
                break;

            case 2:
                let nums_2 = [3,2,4]
                let traget_2 = 6 
                resp.value = function_twoSum(nums_2, traget_2)  
                break;

            case 3:
                let nums_3 = [3,3]
                let traget_3 = 6 
                resp.value = function_twoSum(nums_3, traget_3)  
                break;
            
            default:
                break;
        }
    }
    const datosAct = {
    id: '1',
    plataforma: "LeetCode",
    dificultad: "🟢",
    title: "Two Sum",
    link: "https://leetcode.com/problems/two-sum/",
    description: [ 
        "Dado un array de números enteros nums y un entero target, devolvé los índices de los dos números que suman el valor de target.",
        "Podés asumir que cada entrada tendrá exactamente una única solución, y no podés usar el mismo elemento dos veces.",
        "Podés devolver la respuesta en cualquier orden."
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "nums = [2,7,11,15], target = 9",
            salida: "[0,1]",
            explicacion: "nums[0] + nums[1] == 9, devolvemos [0, 1]."
        },
        {
            id: "2",
            entrada: "nums = [3,2,4], target = 6",
            salida: "[1,2]",
            explicacion: "nums[1] + nums[2] == 6, devolvemos [1, 2]."
        },
        {
            id: "3",
            entrada: "nums = [3,3], target = 6",
            salida: "[0,1]",
            explicacion: "nums[0] + nums[1] == 6, devolvemos [0, 1]."
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