<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
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

    const datosAct = {
    id: '6',
    plataforma: "LeetCode",
    dificultad: "🟢",
    title: "merge two sorted lists",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    description: [ 
        "Se te dan las cabeceras (nodos iniciales) de dos listas enlazadas ordenadas: list1 y list2. ",
        "Combiná ambas listas en una única lista ordenada. ",
        "La lista resultante debe construirse uniendo (intercalando) los nodos de las dos listas originales. ",
        "Devolvé la cabecera de la lista enlazada combinada. "
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "list1 = [1,2,4], list2 = [1,3,4]",
            salida:"[1,1,2,3,4,4]" ,
            explicacion:"Todos caracteres tienen su apertura y su cierre"
        },
        {
            id: "2",
            entrada: "list1 = [], list2 = []",
            salida:"[]" ,
            explicacion:"Todos caracteres tienen su apertura y su cierre"
        },
        {
            id: "3",
            entrada: "list1 = [], list2 = [0]",
            salida:"[0]" ,
            explicacion:"Los caracteres no tienen su apertura o su cierre"
        }
        
    ]
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
    <Desafio
        :id="datosAct.id"
        :description="datosAct.description"
        :ejemplo="datosAct.ejemplo"
        :plataforma="datosAct.plataforma"
        :dificultad="datosAct.dificultad"
        :title="datosAct.title"
        :link="datosAct.link"
        :text="text"
        :ejecutarTest="testFunciones"
        :resp="resp"
        :carga="carga"
    />
</template>