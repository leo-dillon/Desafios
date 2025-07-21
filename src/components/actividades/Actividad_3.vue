<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_palindrome(nums){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        
        let numerosRomanos = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        let resFinal = 0

        for(let i = 0; i < nums.length ; i++){
            let n1 = numerosRomanos[nums[ i ]]
            let n2 = ( nums[ i + 1 ] != undefined ) ? numerosRomanos[nums[ i + 1 ]] : 0
            if( n2 > n1 ){
                resFinal += n2 - n1
                i++
            }else{
                resFinal += n1
            }
        }
        
        return resFinal
        
    }

    let text = `
        let numerosRomanos = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        let resFinal = 0

        for ( let i = 0; i < nums.length ; i++ ) {
            let n1 = numerosRomanos[ nums[ i ] ]
            let n2 = ( nums[ i + 1 ] != undefined ) ? numerosRomanos[ nums[ i + 1 ] ] : 0
            if ( n2 > n1 ) {
                resFinal += n2 - n1
                i++
            } else {
                resFinal += n1
            }
        }
        
        return resFinal
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_1 = "III"
                resp.value = function_palindrome(nums_1)  
                break;

            case 2:
                let nums_2 = "LVIII"
                resp.value = function_palindrome(nums_2)  
                break;

            case 3:
                let nums_3 = "MCMXCIV"
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
        <a href="https://leetcode.com/problems/roman-to-integer/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 max-w-8/10 text-gray-300">
                Los números romanos se representan mediante siete símbolos diferentes: I, V, X, L, C, D y M. <br>
                Símbolo	Valor <br>
                <span class="inline-block w-2 ml-3">I</span> <span class="mx-3">=></span> 1 <br>
                <span class="inline-block w-2 ml-3">V</span> <span class="mx-3">=></span> 5 <br>
                <span class="inline-block w-2 ml-3">X</span> <span class="mx-3">=></span> 10 <br>
                <span class="inline-block w-2 ml-3">L</span> <span class="mx-3">=></span> 50 <br>
                <span class="inline-block w-2 ml-3">C</span> <span class="mx-3">=></span> 100 <br>
                <span class="inline-block w-2 ml-3">D</span> <span class="mx-3">=></span> 500 <br>
                <span class="inline-block w-2 ml-3">M</span> <span class="mx-3">=></span> 1000 <br>
                Por ejemplo, el número 2 se escribe como II en números romanos, simplemente se suman dos unos. El 12 se escribe como XII, que es simplemente X + II. El número 27 se escribe como XXVII, que es XX + V + II. <br>
                Los números romanos suelen escribirse de mayor a menor de izquierda a derecha. Sin embargo, el número cuatro no se escribe como IIII. En su lugar, se escribe IV. Como el uno está antes que el cinco, se resta, formando el número cuatro. El mismo principio se aplica al número nueve, que se escribe como IX. <br>
                Hay seis casos en los que se utiliza la resta: <br>
                <span class="mr-4">|</span>I puede colocarse antes de V (5) y X (10) para formar 4 y 9. <br>
                <span class="mr-4">|</span>X puede colocarse antes de L (50) y C (100) para formar 40 y 90. <br>
                <span class="mr-4">|</span>C puede colocarse antes de D (500) y M (1000) para formar 400 y 900. <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="numRoman = III" salida="3" explicacion="III = 3" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="numRoman = LVIII" salida="58" explicacion="LVIII ==> L = 50 / V = 5 / III = 3 ==> 50 + 5 + 3 = 58" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="numRoman = MCMXCIV" salida="1994" explicacion="M = 1000 / CM = - 100 + 1000 / XC = -10 + 100 / IV = -1 + 5  ==> 1994" />
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