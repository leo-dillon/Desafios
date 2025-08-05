<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
    import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(nums1, m, nums2, n){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        for (let i = m; i < nums1.length; i++) {
            nums1[ i ] = nums2[ i - m ]             
        } 

        if( nums1.length == 1 ) return nums1
        return nums1.sort( ( a, b ) => a - b )
    }

    let text = `
        for (let i = m; i < nums1.length; i++) {
            nums1[ i ] = nums2[ i - m ]             
        } 

        if( nums1.length == 1 ) return nums1
        return nums1.sort( ( a, b ) => a - b )
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_a1 = [1,2,3,0,0,0]
                let m_a1 = 3 
                let nums_a2 = [2,5,6] 
                let n_a1 = 3
                resp.value = function_actividad( nums_a1, m_a1, nums_a2, n_a1)  
                break;

            case 2:
                let nums_b1 = [1]
                let m_b1 = 1
                let nums_b2 = [0] 
                let n_b1 = 0
                resp.value = function_actividad( nums_b1, m_b1, nums_b2, n_b1)   
                break;
            
            case 3:
                let nums_c1 = [0]
                let m_c1 = 0
                let nums_c2 = [1] 
                let n_c1 = 1
                resp.value = function_actividad( nums_c1, m_c1, nums_c2, n_c1)   
                break;
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Merge Sorted Array
        </h2>
        <a href="https://leetcode.com/problems/merge-sorted-array" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Se te dan dos arreglos de enteros, nums1 y nums2, ordenados en orden no decreciente, y dos enteros m y n, que representan la cantidad de elementos en nums1 y nums2 respectivamente. <br>
                Combiná nums1 y nums2 en un solo arreglo ordenado en orden no decreciente. <br>
                El arreglo ordenado final no debe ser devuelto por la función, sino que debe ser almacenado dentro del arreglo nums1.
                Para permitir esto, nums1 tiene una longitud de m + n, donde los primeros m elementos son los que deben ser combinados, y los últimos n elementos están establecidos en 0 y deben ser ignorados.
                nums2 tiene una longitud de n.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3" salida="[1,2,2,3,5,6]" explicacion="Los arreglos que estamos combinando son [1,2,3] y [2,5,6]. El resultado de la combinación es [1,2,2,3,5,6], donde los elementos subrayados provienen de nums1." />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="nums1 = [1], m = 1, nums2 = [], n = 0" salida="[1]" explicacion="Los arreglos que estamos combinando son [0] y [1]. El resultado de la combinación es [1], donde los elementos subrayados provienen de nums1." />          
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="nums1 = [0], m = 0, nums2 = [1], n = 1" salida="[1]" explicacion="El resultado de la combinación es [] y [1]. El resultado de la combinación es [1], donde los elementos subrayados provienen de nums1." />          
           
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
            <h4 v-if="resp != 'A' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>