<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(nums, target){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let min = 0;
        let max = nums.length - 1;

        while (min <= max) {
            let medio = Math.floor((min + max) / 2);

            if (nums[medio] === target) {
                return medio;
            } else if (nums[medio] < target) {
                min = medio + 1;
            } else {
                max = medio - 1;
            }
        }
        return min;
    }

    let text = `
        let min = 0;
        let max = nums.length - 1;

        while (min <= max) {
            let medio = Math.floor((min + max) / 2);

            if (nums[medio] === target) {
                return medio;
            } else if (nums[medio] < target) {
                min = medio + 1;
            } else {
                max = medio - 1;
            }
        }
        return min;  
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_1 = [1,3,5,6], target_1 = 5
                resp.value = function_actividad(nums_1, target_1)  
                break;

            case 2:
                let nums_2 = [1,3,5,6], target_2 = 2
                resp.value = function_actividad(nums_2, target_2)   
                break;
            case 3:
                let nums_3 = [1,3,5,6], target_3 = 7
                resp.value = function_actividad(nums_3, target_3)  
                  
                break;
            default:
                break;
        }
    }
    const datosAct = {
        id: '10',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Search Insert Position",
        link: "https://leetcode.com/problems/search-insert-position/",
        description: [ 
            "Dado un array ordenado de enteros distintos y un valor objetivo (target), devolvé el índice si el valor se encuentra. Si no se encuentra, devolvé el índice en el que debería insertarse para mantener el orden. ",
            "Debés escribir un algoritmo con una complejidad de tiempo de ejecución O(log n). "
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "nums = [1,3,5,6], target = 5",
                salida: "2", 
                explicacion:"Buscamos dondo colocar 'target' dentro del array 'nums' para mantener un orden ascendente. En este caso posición 2" 
            },
            {
                id: "2",
                entrada: "nums = [1,3,5,6], target = 2",
                salida: "1", 
                explicacion:"Buscamos dondo colocar 'target' dentro del array 'nums' para mantener un orden ascendente. En este caso posición 1" 
            },
            {
                id: "2",
                entrada: "nums = [1,3,5,6], target = 7",
                salida: "4", 
                explicacion:"Buscamos dondo colocar 'target' dentro del array 'nums' para mantener un orden ascendente. En este caso posición 4" 
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