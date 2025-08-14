<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_twoSum(nums, target){
        let posicionesHalladas
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

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
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Two Sum
        </h2>
        <a href="https://leetcode.com/problems/two-sum/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Dado un array de números enteros nums y un entero target, devolvé los índices de los dos números que suman el valor de target. <br>
                Podés asumir que cada entrada tendrá exactamente una única solución, y no podés usar el mismo elemento dos veces. <br>
                Podés devolver la respuesta en cualquier orden.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="nums = [2,7,11,15], target = 9" salida="[0,1]" explicacion=" nums[0] + nums[1] == 9, devolvemos [0, 1]." />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada=" nums = [3,2,4], target = 6" salida="[1,2]" explicacion="nums[1] + nums[2] == 6, devolvemos [1, 2]." />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada=" nums = [3,3], target = 6" salida=" [0,1]" explicacion="nums[0] + nums[1] == 6, devolvemos [0, 1]." />
            </div>
            <div>
                <h4 class="w-max text-gray-400 border-b border-stone-600">Mi respuesta</h4>
                <div class="w-max mt-2 ml-4 bg-[#1e1e1e] border-l border-stone-600 text-gray-200 text-sm font-mono pr-10">
                    <TextCode :text="text" />
                </div>
            </div>
        </div>
        <div class="ml-6 py-6 flex gap-6 ">
            <button @click="testFunciones(1)" class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores
            </button>
            <button @click="testFunciones(2)" class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 2
            </button>
            <button @click="testFunciones(3)" class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 3
            </button>
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != '' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>