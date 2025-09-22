<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
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
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Count Elements With Maximum Frequency
        </h2>
        <a href="https://leetcode.com/problems/count-elements-with-maximum-frequency" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Se te da un array nums que consiste en enteros positivos.
                Devuelve la suma de las frecuencias de los elementos en nums tales que esos elementos tengan la frecuencia máxima.
                La frecuencia de un elemento es la cantidad de veces que aparece ese elemento en el array.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="nums = [1,2,2,3,1,4]" salida="4" explicacion="Los elementos con frecuencia máxima son 1 y 2, anbos con frecuencia dos por lo tanto retornamos 4 ( 2 + 2 )" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="nums = [1,2,3,4,5]" salida="5" explicacion="Todos los elementos tienen una frecuencia máxima de 1, por lo tanto retornamos 5 ( 1 + 1 + 1 + 1 + 1 )" />
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
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'A' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template> 