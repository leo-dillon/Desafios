<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum( box ) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })
    let response = true
    let esta = false
    box.pop()
    box.shift()
    box.forEach(item => {

        if(item[0] == '*' || item[ item.length - 1 ] == '*'){
            response = false
        }
        if( item.includes('*') ) {
            esta = true
        }
    });
    if( !esta ) response = false
    return response
}

let text = `
    let response = true
    let esta = false
    box.pop()
    box.shift()
    box.forEach(item => {

        if(item[0] == '*' || item[ item.length - 1 ] == '*'){
            response = false
        }
        if( item.includes('*') ) {
            esta = true
        }
    });
    if( !esta ) response = false
    return response
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            const boxA =[
                "###",
                "#*#",
                "###"
                ]
            resp.value = function_twoSum(boxA)
            break;

        case 2:
            const boxB = [
                "####",
                "#* #",
                "#  #",
                "####"
            ]
            resp.value = function_twoSum(boxB)
            break;

        case 3:
            const boxC = [
                "#####",
                "#   #",
                "#  #*",
                "#####"
                ]
            resp.value = function_twoSum(boxC)
            break;
        default:
            break;
    }
}
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟠 Reto #6: 📦 ¿Regalo dentro de la caja?
        </h2>
        <a href="https://adventjs.dev/es/challenges/2024/6" class="ml-6 text-blue-400 hover:text-blue-500 duration-200"
            title="Ir a LeetCode"> link AdventJS 2024 </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.
                La caja tiene un regalo (*) y cuenta como dentro de la caja si:
                <br><span class="opacity-70"></span>Está rodeada por # en los bordes de la caja.
                <br><span class="opacity-70"></span>El * no está en los bordes de la caja.
                Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="box = [
                    '###',
                    '#*#',
                    '###'
                ]" 
                    salida="true"
                    explicacion="" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="box = [
                    '####',
                    '#* #',
                    '#  #',
                    '####'
                ]" 
                    salida="true"
                    explicacion="" />
            </div>
            <div>
            <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="[
                    '#####',
                    '#   #',
                    '#  #*',
                    '#####'
                ]" 
                    salida="false"
                    explicacion="" />
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