<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
    import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(a, b){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let newBinario = ''
        let sobra = 0
        let i = ( a.length > b.length ) ? a.length - 1 : b.length - 1
        let array_a = a.split('')
        let array_b = b.split('')
        
        while ( ( array_b != [] || array_a != [] ) && i >= 0 ) {
            let val_b = array_b.pop()
            let val_a = array_a.pop()
            if( val_a == undefined ){ val_a = 0 } else { val_a = parseInt( val_a ) }
            if( val_b == undefined ){ val_b = 0 } else { val_b = parseInt( val_b ) }
            let val = ( val_a + val_b + sobra )

            switch (val) {
                case 3:
                    newBinario += '1'
                    sobra = 1
                    break;
                case 2:
                    newBinario += '0'
                    sobra = 1
                    break;
                case 1:
                    newBinario += '1'
                    sobra = 0
                    break;
                case 0:
                    newBinario += '0'
                    sobra = 0
                    break;
                default:
                    break;
            }
            i--
        }
        if(sobra == 1) newBinario += '1'
        return newBinario.split('').reverse().join('')
    }

    let text = `
        let newBinario = ''
        let sobra = 0
        let i = ( a.length > b.length ) ? a.length - 1 : b.length - 1
        let array_a = a.split('')
        let array_b = b.split('')
        
        while ( ( array_b != [] || array_a != [] ) && i >= 0 ) {
            let val_b = array_b.pop()
            let val_a = array_a.pop()
            if( val_a == undefined ){ val_a = 0 } else { val_a = parseInt( val_a ) }
            if( val_b == undefined ){ val_b = 0 } else { val_b = parseInt( val_b ) }
            let val = ( val_a + val_b + sobra )

            switch (val) {
                case 3:
                    newBinario += '1'
                    sobra = 1
                    break;
                case 2:
                    newBinario += '0'
                    sobra = 1
                    break;
                case 1:
                    newBinario += '1'
                    sobra = 0
                    break;
                case 0:
                    newBinario += '0'
                    sobra = 0
                    break;
                default:
                    break;
            }
            i--
        }
        if(sobra == 1) newBinario += '1'
        return newBinario.split('').reverse().join('')
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let  a_1 = "11", b_1 = "1"
                resp.value = function_actividad(a_1, b_1)  
                break;

            case 2:
                let a_2 = "1010", b_2 = "1011"
                resp.value = function_actividad(a_2, b_2)   
                break;
            case 3:
                let a_3 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", b_3 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
                resp.value = function_actividad(a_3, b_3)   
                break;
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Add Binary
        </h2>
        <a href="https://leetcode.com/problems/add-binary/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Tenemos dos valores en binario "a" y "b", sumar esos valores y devolver el resultante en binario. <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada=" a = '11', b = '1'" salida="100" explicacion="El valor a = '11' es 3 y el valor de b = '1' el 1. Si sumamos dichos valores nos da 4 y debemos devolver '100'" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="a = '1010', b = '1011'" salida="10101" explicacion="El valor a = '1010' es 10 y el valor de b = '1011' el 11. Si sumamos dichos valores nos da 21 y debemos devolver '10101'" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <p class="ml-4 pl-4 text-gray-300 border-l border-stone-600">
                    <strong class="text-gray-200 text-lg">Entrada:</strong> <br> a = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101' <br> b = '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011' <br>
                    <strong class="text-gray-200 text-lg">Salida:</strong> '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000' <br>
                    </p>          
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