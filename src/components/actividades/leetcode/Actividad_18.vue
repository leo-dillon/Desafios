<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
    
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
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟠 Add Two Numbers
        </h2>
        <a href="https://leetcode.com/problems/Add-Two-Numbers" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Se le proporcionan dos listas enlazadas no vacías que representan dos enteros no negativos. Los dígitos se almacenan en orden inverso y cada uno de sus nodos contiene un solo dígito. Sume los dos números y devuelva la suma como una lista enlazada.
                Puede asumir que los dos números no contienen ningún cero inicial, excepto el propio 0.
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="nodo1 = [2,4,3] - nodo2 = [5,6,4]" salida="[7,0,8]" explicacion="Sumamos los valores 342 + 465 = 807" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="nodo1 = [0] - nodo2 = [0]" salida="[0]" explicacion="Sumamos los valores 0 + 0 = 0" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="nodo1 = [9,9,9,9,9,9,9], nodo2 = [9,9,9,9]" salida="[8,9,9,9,0,0,0,1]" explicacion="Sumamos los valores 9999999 + 9999 = 10009998" />          
           
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