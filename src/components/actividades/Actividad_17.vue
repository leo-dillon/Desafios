<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../Ejemplo.vue'
    import TextCode from '../codeUI/TextCode.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(root){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        const res = [];
        function helper(node) {
            if (!node) return;
            helper(node.left);
            res.push(node.val);
            helper(node.right);
        }
        helper(root);
        return res;
    }

    let text = `
        const res = [];
        function helper(node) {
            if (!node) return;
            helper(node.left);
            res.push(node.val);
            helper(node.right);
        }
        helper(root);
        return res;
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let node = [1,2,3]
                resp.value = function_actividad( node )  
                break;

            case 2:
                let nums_b1 = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                    val: 4,
                    left: null,
                    right: null
                    },
                    right: {
                    val: 5,
                    left: {
                        val: 6,
                        left: null,
                        right: null
                    },
                    right: {
                        val: 7,
                        left: null,
                        right: {
                        val: 9,
                        left: null,
                        right: null
                        }
                    }
                    }
                },
                right: {
                    val: 3,
                    left: null,
                    right: {
                    val: 8,
                    left: null,
                    right: null
                    }
                }
                };

                resp.value = function_actividad( nums_b1 )   
                break;
            
            case 3:
                let nums_c1 = []
                resp.value = function_actividad( nums_c1 )   
                break;
            default:
                break;
        }
    }
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Binary Tree Inorder Traversal
        </h2>
        <a href="https://leetcode.com/problems/binary-tree-inorder-traversal" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Dado el nodo raíz de un árbol binario (root), debes devolver un arreglo con los valores de los nodos en el orden de in-order traversal: izquierda → raíz → derecha .
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="nums1 = [1,null,2,3]" salida="[1,2,3]" explicacion=" Si la entrada es root = [1, null, 2, 3], el resultado esperado es [1, 3, 2]" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="nums1 = [1,2,3,4,5,null,8,null,null,6,7,9] " salida="[4,2,6,5,7,1,3,9,8]" explicacion="Si la entrada es root = [1,2,3,4,5,null,8,null,null,6,7,9], el resultado esperado es [4,2,6,5,7,1,3,9,8]" />          
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="nums1 = []" salida="[]" explicacion="Si la entrada es root = [], el resultado esperado es []" />          
           
            </div>
            <div>
                <h4 class="w-max text-gray-400 border-b border-stone-600">Mi respuesta</h4>
                <div class="w-max mt-2 ml-4 bg-[#1e1e1e] border-l border-stone-600 text-gray-200 text-sm font-mono pr-10">
                    <TextCode :text="text" />
                </div>
            </div>
        </div>
        <div class="ml-6 py-6 flex gap-6 ">
            <button @click="testFunciones(1)" disabled class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores
            </button>
            <button @click="testFunciones(2)" class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 2
            </button>
            <button @click="testFunciones(3)" disabled class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 3
            </button>
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'A' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template> 