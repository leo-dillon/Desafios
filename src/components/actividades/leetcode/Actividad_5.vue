<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_prueba(values){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        
        if( values.length % 2 != 0 ) return false
        let caracteres = ""
        let caracterApertura = {"(":1, "{":2, "[":3}
        let caracterCierre = {")":1, "}":2, "]":3}
        for (let i = 0; i < values.length; i++) {
            if( caracterApertura[ values[i] ] != undefined ){
                caracteres += values[i]
            }else{
                if(caracterApertura[ caracteres.at(-1) ] == caracterCierre[ values[i] ]){
                    caracteres = caracteres.slice(0, -1)
                }else{
                    return false
                }
            }
        }
        return ( caracteres.length == 0 ) ? true : false
    }

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let palabras_1 = "()"
                resp.value = function_prueba(palabras_1)  
                break;

            case 2:
                let palabras_2 = "()[]{}"
                resp.value = function_prueba(palabras_2)  
                break;
            case 3:
                let palabras_3 = "(]"
                resp.value = function_prueba(palabras_3)  
                break;
            case 4:
                let palabras_4 = "([])"
                resp.value = function_prueba(palabras_4)    
                break;
            default:
                break;
        }
    }

    let text = `
        if( values.length % 2 != 0 ) return false 
        let caracteres = "" 
        let caracterApertura = {"(":1, "{":2, "[":3} 
        let caracterCierre = {")":1, "}":2, "]":3} 
        for (let i = 0; i < values.length; i++) { 
            if( caracterApertura[ values[i] ] != undefined ){ 
                caracteres += values[i] 
            }else{ 
                if(caracterApertura[ caracteres.at(-1) ] == caracterCierre[ values[i] ]){ 
                    caracteres = caracteres.slice(0, -1) 
                }else{ 
                    return false 
                } 
            } 
        } 
        return ( caracteres.length == 0 ) ? true : false 
    `
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Valid Parentheses
        </h2>
        <a href="https://leetcode.com/problems/valid-parentheses/description/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 max-w-8/10 text-gray-300">
                Dada una cadena "s" que contiene solo los siguientes caracteres '(', ')', '{', '}', '[' y ']', determina si la cadena de entrada es válida. <br>
                Una cadena de entrada es válida si: <br>
                 - Los paréntesis de apertura deben cerrarse con el mismo tipo de paréntesis. <br>
                 - Los paréntesis de apertura deben cerrarse en el orden correcto. <br>
                 - Cada paréntesis de cierre debe tener un paréntesis de apertura correspondiente del mismo tipo.     <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="s = ()" salida="true" explicacion="Todos caracteres tienen su apertura y su cierre" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="s = ()[]{}" salida="true" explicacion="Todos caracteres tienen su apertura y su cierre" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="s = (]" salida="false" explicacion="Los caracteres no tienen su apertura o su cierre" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 4
                </h4>
                <Ejemplo entrada="s = ([])" salida="true" explicacion="Todos caracteres tienen su apertura y su cierre" />
           
            </div>
            <div>
                <h4 class="w-max text-gray-400 border-b border-stone-600">Mi respuesta</h4>
                <div class="w-max mt-2 ml-4 p-4 bg-[#1e1e1e] border-l border-stone-600 text-gray-200 text-sm font-mono pr-10">
                    <TextCode :text="text"/>
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
            <button @click="testFunciones(4)" class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 4
            </button>
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'asp' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>