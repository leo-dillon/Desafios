<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_prueba(values){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let letras = values[0]  
        let letrasHalladas = ""

        for (let i = 0; i < letras.split("").length; i++) {
            let coinciden = true
            for (let u = 1; u < values.length; u++) {
                if( values[u][i] != letras[i]  ){
                    coinciden = false
                }else{
                    values[u] = values[u].replace(letras[i], "1")
                }
            }
            if( coinciden ) {
                letrasHalladas += letras[i]
            }else{
                break
            }
        }

        return letrasHalladas
    }

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let palabras_1 = ["flower","flow","flight"]
                resp.value = function_prueba(palabras_1)  
                break;

            case 2:
                let palabras_2 = ["dog","racecar","car"]
                resp.value = function_prueba(palabras_2)  
                break;
            case 3:
                let palabras_3 = ["aa","ab"]
                resp.value = function_prueba(palabras_3)  
                break;
            default:
                break;
        }
    }

    let text = `
        let letras = values[ 0 ]  
        let letrasHalladas = ""

        for ( let i = 0; i < letras.split( "" ).length; i++ ) {
            let coinciden = true
            for ( let u = 1; u < values.length; u++ ) {
                if ( values[ u ][ i ] != letras[ i ]  ) {
                    coinciden = false
                } else {
                    values[ u ] = values[ u ].replace( letras[ i ], "1" )
                }
            }
            if ( coinciden ) {
                letrasHalladas += letras[ i ] 
            } else {
                break
            }
        }

        return letrasHalladas
    `
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Longest Common Prefix
        </h2>
        <a href="https://leetcode.com/problems/longest-common-prefix/description/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 max-w-8/10 text-gray-300">
                Escribe una función para encontrar el prefijo común más largo entre un arreglo de cadenas de texto. <br>
                Si no existe un prefijo común, devuelve una cadena vacía "". <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="strs = ['flower','flow','flight']" salida="fl" explicacion="Todos las palabras elegidas comparten las iniciales fl" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="strs = ['dog','racecar','car']" salida=" " explicacion="Ninguna palabra comparte un valor inicial común" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="strs = ['aa', 'ab']" salida="a" explicacion="Todos las palabras elegidas comparten las iniciales a" />
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
            <h4 v-if="resp != 'asp' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>