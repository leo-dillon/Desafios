<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
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
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Length of Last Word
        </h2>
        <a href="https://leetcode.com/problems/length-of-last-word/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Dado un array ordenado de enteros distintos y un valor objetivo (target), devolvé el índice si el valor se encuentra. Si no se encuentra, devolvé el índice en el que debería insertarse para mantener el orden. <br>
                Debés escribir un algoritmo con una complejidad de tiempo de ejecución O(log n). <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="s = 'Hello World'" salida="5" explicacion="Buscamos la palabra más larga del texto en este caso es 'World' y devolvemos su longitud 5" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="s = '   fly me   to   the moon  '" salida="4" explicacion="Buscamos la palabra más larga del texto en este caso es 'moon' y devolvemos su longitud 4" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="s = 'luffy is still joyboy'" salida="6" explicacion="Buscamos la palabra más larga del texto en este caso es 'joyboy' y devolvemos su longitud 6" />
            
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