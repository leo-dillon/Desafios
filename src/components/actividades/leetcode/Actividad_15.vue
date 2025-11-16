<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(head){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let listNode = head
        while ( listNode && listNode.next ) {
            if ( listNode.val == listNode.next.val ){
                listNode.next = listNode.next.next
            } else {
                listNode = listNode.next
            }
        }
        return head
    }

    let text = `
        let listNode = head
        while ( listNode && listNode.next ) {
            if ( listNode.val == listNode.next.val ){
                listNode.next = listNode.next.next
            } else {
                listNode = listNode.next
            }
        }
        return head
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let n_1 = {
                    val: 1,
                    next: {
                        val: 1,
                        next: {
                        val: 2,
                        next: null
                        }
                    }
                }
                resp.value = function_actividad(n_1)  
                break;

            case 2:
                // let n_2 = [1,1,2,3,3]
                let n_2 = {
                    val: 1,
                    next: {
                        val: 1,
                        next: {
                            val: 2,
                            next: {
                                val: 3,
                                next: {
                                    val: 3,
                                    next: null    
                                }
                            }
                        }
                    }
                }
                resp.value = function_actividad(n_2)   
                break;
            default:
                break;
        }
    }

    const datosAct = {
        id: '15',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Remove Duplicates from Sorted List",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        description: [ 
            "Dado el nodo principal de una lista enlazada ordenada, elimina todos los duplicados de manera que cada elemento aparezca solo una vez. ",
            "Devuelve también la lista enlazada ordenada. ",
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "head = [1,1,2]",
                salida: "[1,2]",
                explicacion:"El valor a = '11' es 3 y el valor de b = '1' el 1. Si sumamos dichos valores nos da 4 y debemos devolver '100'" 
            },
            {
                id: "2",
                entrada: "head = [1,1,2,3,3]",
                salida: "[1,2,3]",
                explicacion:"El valor a = '1010' es 10 y el valor de b = '1011' el 11. Si sumamos dichos valores nos da 21 y debemos devolver '10101'" 
            }
            
        ]
    }
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