<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
    import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(n){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        
        if( n == 1 ) return 1
        if( n == 2 ) return 2
        let valores = new Array( n + 1 ).fill( 0 )
        valores[1] = 1
        valores[2] = 2
        for (let i = 3; i <= n; i++) {
            console.log(i)
            valores[ i ] = valores[ i - 1 ] + valores[ i - 2 ];
        }
        return valores[n]

    }

    let text = `
        if( n == 1 ) return 1
        if( n == 2 ) return 2
        let valores = new Array( n + 1 ).fill( 0 )
        valores[1] = 1
        valores[2] = 2
        for (let i = 3; i <= n; i++) {
            console.log(i)
            valores[ i ] = valores[ i - 1 ] + valores[ i - 2 ];
        }
        return valores[n]
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let n_1 = 5
                resp.value = function_actividad(n_1)  
                break;

            case 2:
                let n_2 = 3
                resp.value = function_actividad(n_2)   
                break;
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Climbing Stairs
        </h2>
        <a href="https://leetcode.com/problems/climbing-stairs/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Estás subiendo una escalera. Se necesitan n escalones para llegar a la cima. <br>
                Cada vez podés subir 1 o 2 escalones. ¿De cuántas formas distintas podés llegar hasta la cima? <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="n = 2" salida="2" explicacion="Existen 2 formas de subir a la cima.  Subiendo 1 y 1 y subiendo 2" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="n = 3" salida="3" explicacion="Existen 3 formas de subir a la cima.  Subiendo 1 y 1 y 1, subiendo 2 y 1, subiendo 1 y 2" />          
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
            <h4 v-if="resp != 'A' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>