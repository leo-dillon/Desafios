<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    function function_actividad(version1, version2){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        let array_version1 = version1.split('.').map( val => parseInt(val) )
        let array_version2 = version2.split('.').map( val => parseInt(val) )
        let max_length = ( array_version1.length > array_version2.length ) ? array_version1.length : array_version2.length
        
        const val = () => {
            for (let i = 0; i < max_length; i++) {
                let valor_v1 = array_version1[i] ? array_version1[i] : 0
                let valor_v2 = array_version2[i] ? array_version2[i] : 0 
                if( valor_v1 > valor_v2 ){
                    return 1
                } else if( valor_v1 < valor_v2 ){
                    return -1
                }   
            }    
            return 0
        }
        return val()

    }

    let text = `
        let array_version1 = version1.split('.').map( val => parseInt(val) )
        let array_version2 = version2.split('.').map( val => parseInt(val) )
        let max_length = ( array_version1.length > array_version2.length ) ? array_version1.length : array_version2.length
        
        const val = () => {
            for (let i = 0; i < max_length; i++) {
                let valor_v1 = array_version1[i] ? array_version1[i] : 0
                let valor_v2 = array_version2[i] ? array_version2[i] : 0 
                if( valor_v1 > valor_v2 ){
                    return 1
                } else if( valor_v1 < valor_v2 ){
                    return -1
                }   
            }    
            return 0
        }
        return val()
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                const version1a = "1.2"
                const version2a = "1.10"
                resp.value = function_actividad( version1a, version2a )  
                break;

            case 2:
                const version1b = "1.01", version2b = "1.001"
                resp.value = function_actividad( version1b, version2b )
                break;
            
            case 3:
                const version1c = "1.0", version2c = "1.0.0.0"
                resp.value = function_actividad( version1c, version2c )
                break;
            
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟠 Compare Version Numbers
        </h2>
        <a href="https://leetcode.com/problems/count-elements-with-maximum-frequency" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Given two version strings, version1 and version2, compare them. A version string consists of revisions separated by dots '.'. The value of the revision is its integer conversion ignoring leading zeros.
                To compare version strings, compare their revision values in left-to-right order. If one of the version strings has fewer revisions, treat the missing revision values as 0.
                Return the following:
                <br> - <span class="opacity-80">If version1 < version2, return -1.</span>
                <br> - <span class="opacity-80">If version1 > version2, return 1.</span>
                <br> - <span class="opacity-80">Otherwise, return 0</span>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="version1 = '1.2', version2 = '1.10'" salida="-1" explicacion="Comenzamos con el primer valor y en ambos casos es 1" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="version1 = '1.01', version2 = '1.001'" salida="0" explicacion="Comenzamos con el primer valor y en ambos casos es 1" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="version1 = '1.0', version2 = '1.0.0.0'" salida="0" explicacion="Comenzamos con el primer valor y en ambos casos es 1" />
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