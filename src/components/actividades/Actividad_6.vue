<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
    import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_prueba(array_1, array_2){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        

        let nodoFinal = { val: -1, next: null }
        let punteroNodo = nodoFinal

        while ( array_1 != null && array_2 != null ) {

            if ( array_1.val > array_2.val ){
                punteroNodo.next = array_2
                array_2 = array_2.next
            } else {
                punteroNodo.next = array_1
                array_1 = array_1.next
            }
            punteroNodo = punteroNodo.next
        }

        if( array_1 != null ) punteroNodo.next = array_1
        if( array_2 != null ) punteroNodo.next = array_2

        return nodoFinal.next
    }

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let list1 = {
                    val: 1,
                    next: {
                        val: 2,
                        next: {
                        val: 4,
                        next: null
                        }
                    }
                }
                let list2 = {
                    val: 1,
                    next: {
                        val: 3,
                        next: {
                        val: 4,
                        next: null
                        }
                    }
                }
                resp.value = function_prueba(list1, list2)  
                break;

            case 2:
                let list3 = {}, list4 = {}
                resp.value = function_prueba(list3, list4) 
                break;
            case 3:
                let list5 = {}
                let list6 = { val:0, next: null}
                resp.value = function_prueba(list5, list6) 
                break;
            default:
                break;
        }
    }

    let text = `
        let nodoFinal = { val: -1, next: null }
        let punteroNodo = nodoFinal

        while ( array_1 != null && array_2 != null ) {

            if ( array_1.val > array_2.val ){
                punteroNodo.next = array_2
                array_2 = array_2.next
            } else {
                punteroNodo.next = array_1
                array_1 = array_1.next
            }
            punteroNodo = punteroNodo.next
        }

        if( array_1 != null ) punteroNodo.next = array_1
        if( array_2 != null ) punteroNodo.next = array_2

        return nodoFinal.next
    `
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Valid Parentheses
        </h2>
        <a href="https://leetcode.com/problems/merge-two-sorted-lists/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 max-w-8/10 text-gray-300">
                Se te dan las cabeceras (nodos iniciales) de dos listas enlazadas ordenadas: list1 y list2. <br>
                Combiná ambas listas en una única lista ordenada. <br>
                La lista resultante debe construirse uniendo (intercalando) los nodos de las dos listas originales. <br>
                Devolvé la cabecera de la lista enlazada combinada. <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="list1 = [1,2,4], list2 = [1,3,4]" salida="[1,1,2,3,4,4]" explicacion="Todos caracteres tienen su apertura y su cierre" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="list1 = [], list2 = []" salida="[]" explicacion="Todos caracteres tienen su apertura y su cierre" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="list1 = [], list2 = [0]" salida="[0]" explicacion="Los caracteres no tienen su apertura o su cierre" />
                
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
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'asp' && carga == false" class="ml-12 text-gray-400 text-2xl max-w-7/10"> <strong class="text-gray-300 text-lg">Respuesta ( en nodos!! ) :</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>