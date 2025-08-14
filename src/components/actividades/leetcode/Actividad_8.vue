<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
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
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Remove Element
        </h2>
        <a href="https://leetcode.com/problems/remove-element/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Dado un array de enteros nums y un entero val, eliminá todas las ocurrencias de val en nums en el mismo array (es decir, sin usar otro array adicional). El orden de los elementos puede cambiar. Luego, devolvé la cantidad de elementos en nums que no son iguales a val. <br>
                Considerando que el número de elementos en nums que no son iguales a val es k, para que tu solución sea aceptada, tenés que hacer lo siguiente: <br>
                Modificá el array nums de forma tal que los primeros k elementos contengan los valores que no son iguales a val.  <br>
                 - El resto de los elementos en nums no importa, ni tampoco el tamaño final del array. <br>
                 - Devolvé k. <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="nums = [3,2,2,3], val = 3" salida="2, nums = [2,2,'_','_']" explicacion="Nos piden quitar los valores 3 del array nums y debemos devolvel el array [2,2,'_','_'] y la cantidad de elemento no quitados en este caso 2" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="nums = [0,1,2,2,3,0,4,2], val = 2" salida="5, nums = [0,1,4,0,3,'_','_','_']" explicacion="Nos piden quitar los valores 2 del array nums y debemos devolvel el array [0,1,4,0,3,'_','_','_'] y la cantidad de elemento no quitados en este caso 5" />
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
            <h4 v-if="resp != '' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> valores {{ resp[0] }} , Array {{ resp[1] }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>