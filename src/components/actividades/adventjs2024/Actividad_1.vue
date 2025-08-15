<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum(gifts) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })

    let valores = []
    let arrayFinal = []
    if( gifts.length == 0 ) return arrayFinal
    for (let i = 0; i < gifts.length; i++) {
        if( !valores.includes( gifts[i] ) ){
            valores.push( gifts[i] )
        }
    }
    arrayFinal = valores.sort( (a,b) => a-b )
    return arrayFinal
}

let text = `
    let valores = []
    let arrayFinal = []
    if( gifts.length == 0 ) return arrayFinal
    for (let i = 0; i < gifts.length; i++) {
        if( !valores.includes( gifts[i] ) ){
            valores.push( gifts[i] )
        }
    }
    arrayFinal = valores.sort( (a,b) => a-b )
    return arrayFinal
        
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            let gifts1 = [3, 1, 2, 3, 4, 2, 5]
            resp.value = function_twoSum(gifts1)
            break;

        case 2:
            let gifts2 = [6, 5, 5, 5, 5]
            resp.value = function_twoSum(gifts2)
            break;

        case 3:
            let gifts3 = []
            resp.value = function_twoSum(gifts3)
            break;
        default:
            break;
    }
}
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Reto #1: 🎁 ¡Primer regalo repetido!
        </h2>
        <a href="https://adventjs.dev/es/challenges/2024/1" class="ml-6 text-blue-400 hover:text-blue-500 duration-200"
            title="Ir a LeetCode"> link AdventJS 2024 </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de
                ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser
                ordenados en orden ascendente antes de entregárselos a los elfos.

                Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados)
                y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="gifts1 = [3, 1, 2, 3, 4, 2, 5]" salida="[1, 2, 3, 4, 5]"
                    explicacion="Eliminaremos los valores repetidos y luego ordenaremos los valores. En este caso mostraremos [1, 2, 3, 4, 5]" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="gifts2 = [6, 5, 5, 5, 5]" salida="[5, 6]"
                    explicacion="Eliminaremos los valores repetidos y luego ordenaremos los valores. En este caso mostraremos [5, 6]" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="[]" salida="[]"
                    explicacion="Como no nos estan dando valores devolvemos un array vacio. En este caso []" />
            </div>
            <div>
                <h4 class="w-max text-gray-400 border-b border-stone-600">Mi respuesta</h4>
                <div
                    class="w-max mt-2 ml-4 bg-[#1e1e1e] border-l border-stone-600 text-gray-200 text-sm font-mono pr-10">
                    <TextCode :text="text" />
                </div>
            </div>
        </div>
        <div class="ml-6 py-6 flex gap-6 ">
            <button @click="testFunciones(1)"
                class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores
            </button>
            <button @click="testFunciones(2)"
                class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 2
            </button>
            <button @click="testFunciones(3)"
                class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 3
            </button>
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'ASD' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong
                    class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != 'ASD' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>