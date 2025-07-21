<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
    import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(digits){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        if ( digits[ digits.length - 1 ] != 9 ){
            digits[ digits.length - 1 ] = digits[ digits.length - 1 ] + 1
            return digits
        }

        for (let i = digits.length - 1 ; i >= 0; i--) {
            if( digits[ i ] == 9 ){
                digits[ i ] = 0
                if( i == 0 ){
                    digits.unshift(1)
                    break
                }
            } else {
                digits[ i ] = digits[ i ] + 1 
                break
            }
        }
        return digits

    }

    let text = `
        if ( digits[ digits.length - 1 ] != 9 ){
            digits[ digits.length - 1 ] = digits[ digits.length - 1 ] + 1
            return digits
        }

        for (let i = digits.length - 1 ; i >= 0; i--) {
            if( digits[ i ] == 9 ){
                digits[ i ] = 0
                if( i == 0 ){
                    digits.unshift(1)
                    break
                }
            } else {
                digits[ i ] = digits[ i ] + 1 
                break
            }
        }
        return digits
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let digits_1 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
                resp.value = function_actividad(digits_1)  
                break;

            case 2:
                let digits_2 = [4,3,2,1]
                resp.value = function_actividad(digits_2)   
                break;
            case 3:
                let digits_3 = [9]
                resp.value = function_actividad(digits_3)  
                break;
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Plus One
        </h2>
        <a href="https://leetcode.com/problems/plus-one/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Se te da un número entero grande representado como un arreglo de enteros digits, donde cada digits[i] es el i-ésimo dígito del número. Los dígitos están ordenados de más significativo a menos significativo, de izquierda a derecha. El número entero grande no contiene ceros a la izquierda. <br>
                Incrementá el número entero en uno y devolvé el arreglo resultante de dígitos. <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="digits = [1,2,3]" salida="[1,2,4]" explicacion="El array [1,2,3] representa el valor 123, debemos sumarle 1 y devolverlo en formato array. Es decir [1,2,4]" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="digits = [4,3,2,1]" salida="[4,3,2,2]" explicacion="El array [4,3,2,1] representa el valor 4321, debemos sumarle 1 y devolverlo en formato array. Es decir [4,3,2,2]" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="digits = [9]" salida="[1,0]" explicacion="El array [9] representa el valor 9, debemos sumarle 1 y devolverlo en formato array. Es decir [1,0]" />
            
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