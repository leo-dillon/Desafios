<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum( height, ornament ) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })
    let arbol = ''
    const longitud = height * 2 - 1
    for (let i = 0; i < height; i++) {
        const caracteres = ornament.repeat( 2 * i + 1 )
        const vacio = '_'.repeat( ( longitud - caracteres.length ) / 2 )
        arbol += vacio + caracteres + vacio + '\n'
    }
    const vacioBase = '_'.repeat(( longitud - 1 ) / 2 )
    arbol += vacioBase + "#" + vacioBase + '\n'
    arbol += vacioBase + "#" + vacioBase    
    return arbol
}

let text = `
        let arbol = ''
        const longitud = height * 2 - 1
        for (let i = 0; i < height; i++) {
            const caracteres = ornament.repeat( 2 * i + 1 )
            const vacio = '_'.repeat( ( longitud - caracteres.length ) / 2 )
            arbol += vacio + caracteres + vacio + '\n'
        }
        const vacioBase = '_'.repeat(( longitud - 1 ) / 2 )
        arbol += vacioBase + "#" + vacioBase + '\n'
        arbol += vacioBase + "#" + vacioBase    
        return arbol
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            resp.value = function_twoSum(5,'*')
            break;

        case 2:
            resp.value = function_twoSum(3,'+')
            break;

        case 3:
            resp.value = function_twoSum(6,'@')
            break;
        default:
            break;
    }
}
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟠 Reto #4: 🎄 Decorando el árbol de Navidad
        </h2>
        <a href="https://adventjs.dev/es/challenges/2024/4" class="ml-6 text-blue-400 hover:text-blue-500 duration-200"
            title="Ir a LeetCode"> link AdventJS 2024 </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.
                La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:
                <br><span class="opacity-70">-- El árbol está compuesto de triángulos de caracteres especiales.</span>
                <br><span class="opacity-70">-- Los espacios en blanco a los lados del árbol se representan con guiones bajos _.</span>
                <br><span class="opacity-70">-- Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.</span>
                <br><span class="opacity-70">-- El árbol siempre debe tener la misma longitud por cada lado.</span>
                <br><span class="opacity-70">-- Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.</span>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="(5, '*')" 
                    salida="
                    ____*____
                    ___***___
                    __*****__
                    _*******_
                    *********
                    ____#____
                    ____#____
                    "
                    explicacion="" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="(3,'+')" 
                    salida="
                        __+__
                        _+++_
                        +++++
                        __#__
                        __#__
                    "
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
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'ASD' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong
                    class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != 'ASD' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>