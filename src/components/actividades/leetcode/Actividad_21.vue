<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    function function_actividad(triangle){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let dp = [...triangle[triangle.length - 1]];
        for (let i = triangle.length - 2; i >= 0; i--) {
            for (let j = 0; j < triangle[i].length; j++) {
                const left = dp[j];
                const right = dp[j + 1];
                dp[j] = triangle[i][j] + Math.min(left, right);
            }
        }
        return dp[0];
    }

    let text = `
        let dp = [...triangle[triangle.length - 1]];

        for (let i = triangle.length - 2; i >= 0; i--) {
            for (let j = 0; j < triangle[i].length; j++) {
                const left = dp[j];
                const right = dp[j + 1];
                dp[j] = triangle[i][j] + Math.min(left, right);
            }
        }
        return dp[0];
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                const triangleA = [[2],[3,4],[6,5,7],[4,1,8,3]]
                resp.value = function_actividad( triangleA )  
                break;

            case 2:
                const triangleB = [[-10]]
                resp.value = function_actividad( triangleB )
                break;
            
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟠  Triangle
        </h2>
        <a href="https://leetcode.com/problems/triangle" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Dado un array triangular, devuelve la suma mínima de rutas de arriba a abajo.
                En cada paso, puedes moverte a un número adyacente de la fila inferior. De forma más formal, 
                si estás en el índice i de la fila actual, puedes moverte al índice i o al índice i + 1 de la siguiente fila.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]" salida="11" explicacion="Sumamos el minimo valor de cara array de cada posición. En este caso 2 + 3 + 5 + 1 = 11" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="triangle = [[-10]]" salida="-10" explicacion="En este caso al tener solo un valor lo dejamo tal cual" />
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