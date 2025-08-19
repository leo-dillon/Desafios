<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum(nombre) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })

        if( nombre.length == 0) return '*'
        let xNombres = nombre.length + 1
        let contenedor = new Array( xNombres ).fill('a')

        let nombreLargo = 0
        for (let y = 0; y < nombre.length; y++) {
            if( nombreLargo < nombre[y].length ) nombreLargo = nombre[y].length
        }
        nombreLargo = nombreLargo + 4

        function rellenarContenedor( nombreLargo ){
            let valor = ''
            for (let u = 0; u < nombreLargo; u++) {
                valor += '*'            
            }
            return valor
        }

        for (let o = 0; o < contenedor.length; o++) {
            if( o == 0 ) {
                contenedor[ 0 ] = rellenarContenedor( nombreLargo )
            } else {
                let nombreActual = nombre[ o - 1 ] 
                nombreActual = '* ' + nombre[ o - 1 ]
                let espacioFaltante = nombreLargo - 1 - nombreActual.length
                let espacio = ""
                for (let p = 0; p < espacioFaltante; p++) {
                    espacio += ' '    
                }
                espacio += '*'
                nombreActual = nombreActual + espacio
                contenedor[ o ] = nombreActual
            }
        }
        contenedor.push( rellenarContenedor( nombreLargo ) )
        console.log( contenedor.join('\n') )
        return contenedor.join('\n')
    
}

let text = `
        if( nombre.length == 0) return '*'
        let xNombres = nombre.length + 1
        let contenedor = new Array( xNombres ).fill('a')

        let nombreLargo = 0
        for (let y = 0; y < nombre.length; y++) {
            if( nombreLargo < nombre[y].length ) nombreLargo = nombre[y].length
        }
        nombreLargo = nombreLargo + 4

        function rellenarContenedor( nombreLargo ){
            let valor = ''
            for (let u = 0; u < nombreLargo; u++) {
                valor += '*'            
            }
            return valor
        }

        for (let o = 0; o < contenedor.length; o++) {
            if( o == 0 ) {
                contenedor[ 0 ] = rellenarContenedor( nombreLargo )
            } else {
                let nombreActual = nombre[ o - 1 ] 
                nombreActual = '* ' + nombre[ o - 1 ]
                let espacioFaltante = nombreLargo - 1 - nombreActual.length
                let espacio = ""
                for (let p = 0; p < espacioFaltante; p++) {
                    espacio += ' '    
                }
                espacio += '*'
                nombreActual = nombreActual + espacio
                contenedor[ o ] = nombreActual
            }
        }
        contenedor.push( rellenarContenedor( nombreLargo ) )
        return contenedor.join('\n')
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            let nombres1 = ['midu']
            resp.value = function_twoSum(nombres1)
            break;

        case 2:
            let nombres2 = ['a', 'bb', 'ccc']
            resp.value = function_twoSum(nombres2)
            break;

        default:
            break;
    }
}
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Reto #2: 🎁 Enmarcando nombres
        </h2>
        <a href="https://adventjs.dev/es/challenges/2024/2" class="ml-6 text-blue-400 hover:text-blue-500 duration-200"
            title="Ir a LeetCode"> link AdventJS 2024 </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
               Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="nombres = ['midu']" salida="* midu *"
                    explicacion="Buscamos el nombre más largo y luego lo encerramos en *" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="nombres = ['a', 'bb', 'ccc']" salida="* a    ** bb  ** ccc  *"
                    explicacion="Buscamos el nombre más largo y luego lo encerramos en *" />
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