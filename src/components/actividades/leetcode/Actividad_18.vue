<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    function ListNode(val, next = null) {
        this.val = val;
        this.next = next;
    }   
    function function_actividad(l1, l2){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        let dummy = new ListNode(0); 
        let current = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry > 0) {
            let val1 = (l1 !== null) ? l1.val : 0;
            let val2 = (l2 !== null) ? l2.val : 0;
            let total = val1 + val2 + carry;

            let digit = total % 10;
            carry = Math.floor(total / 10);

            current.next = new ListNode(digit);
            current = current.next;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummy.next;
}

    let text = `
    let dummy = new ListNode(0); 
        let current = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry > 0) {
            let val1 = (l1 !== null) ? l1.val : 0;
            let val2 = (l2 !== null) ? l2.val : 0;
            let total = val1 + val2 + carry;

            let digit = total % 10;
            carry = Math.floor(total / 10);

            console.log(carry)
            current.next = new ListNode(digit);
            current = current.next;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummy.next;
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                const nodo1 = {
                    val: 2,
                    next: {
                        val: 4,
                        next: {
                            val: 3,
                            next: null
                        }
                    }
                }
                const nodo2 = {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 4,
                            next: null
                        }
                    }
                }
                resp.value = function_actividad( nodo1, nodo2 )  
                break;

            case 2:
                const nodob1 = {
                            val: 0,
                            next: null
                        }
                const nodob2 = {
                            val: 0,
                            next: null
                        }
                resp.value = function_actividad( nodob1, nodob2 )
                break;
            
            case 3:
                const nodoc1 = {
                    val: 9,
                    next: {
                        val: 9,
                        next: {
                            val: 9,
                            next: {
                                val: 9,
                                next: {
                                    val: 9,
                                    next: {
                                        val: 9,
                                        next: {
                                            val: 9,
                                            next: null 
                }   }   }   }   }   }   }
                const nodoc2 = {
                    val: 9,
                    next: {
                        val: 9,
                        next: {
                            val: 9,
                            next: {
                                val: 9,
                                next: null
                    }   }   }   }
                resp.value = function_actividad( nodoc1, nodoc2 )
                break;
            default:
                break;
        }
    }

    const datosAct = {
        id: '18',
        plataforma: "LeetCode",
        dificultad: "🟠",
        title: "Add Two Numbers",
        link: "https://leetcode.com/problems/Add-Two-Numbers/",
        description: [ 
            "Se le proporcionan dos listas enlazadas no vacías que representan dos enteros no negativos. Los dígitos se almacenan en orden inverso y cada uno de sus nodos contiene un solo dígito. Sume los dos números y devuelva la suma como una lista enlazada.",
            "Puede asumir que los dos números no contienen ningún cero inicial, excepto el propio 0."
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "nodo1 = [2,4,3] - nodo2 = [5,6,4]" ,
                salida:"[7,0,8]",
                explicacion:"Sumamos los valores 342 + 465 = 807"
            },
            {
                id: "2",
                entrada: "nodo1 = [0] - nodo2 = [0]" ,
                salida:"[0]",
                explicacion:"Sumamos los valores 0 + 0 = 0"
            },
            {
                id: "3",
                entrada: "nodo1 = [9,9,9,9,9,9,9], nodo2 = [9,9,9,9]" ,
                salida:"[8,9,9,9,0,0,0,1]",
                explicacion:"Sumamos los valores 9999999 + 9999 = 10009998"
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