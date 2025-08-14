<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_palindrome(nums){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        
        if(nums < 0) return false;
        let numString = nums.toString()
        let numAlreves = ""
        for (let i = numString.length - 1; i >= 0 ; i--) {
            numAlreves += numString[i]
        }
        return nums == numAlreves 
        
    }

    let text = `
        if(nums < 0) return false;
        let numString = nums.toString()
        let numAlreves = ""
        for (let i = numString.length - 1; i >= 0 ; i--) {
            numAlreves += numString[i]
        }
        return nums == numAlreves 
    `
    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_1 = 121
                resp.value = function_palindrome(nums_1)  
                break;

            case 2:
                let nums_2 = -121
                resp.value = function_palindrome(nums_2)  
                break;

            case 3:
                let nums_3 = 10
                resp.value = function_palindrome(nums_3)  
                break;
            
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Palindrome Number
        </h2>
        <a href="https://leetcode.com/problems/palindrome-number/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Dado un número entero x, devuelve true si x es un palíndromo y false en caso contrario.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="n = 121" salida="true" explicacion="Si damos vuelta el valor es el mismo 121 = 121" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="n = -121" salida="false" explicacion="Todos los numeros negativos no son polindromos" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="n = 10" salida="false" explicacion="Si damos la vuelta el valor no es igual 10 != 01" />
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
            <h4 v-if="resp != 'a' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>