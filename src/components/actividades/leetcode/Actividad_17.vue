<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
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

    const datosAct = {
        id: '17',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Binary Tree Inorder Traversal",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        description: [ 
            "Dado el nodo raíz de un árbol binario (root), debes devolver un arreglo con los valores de los nodos en el orden de in-order traversal: izquierda → raíz → derecha ."
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "nums1 = [1,null,2,3]",
                salida: "[1,2,3]" ,
                explicacion:" Si la entrada es root = [1, null, 2, 3], el resultado esperado es [1, 3, 2]" 
            },
            {
                id: "2",
                entrada: "nums1 = [1,2,3,4,5,null,8,null,null,6,7,9] ",
                salida: "[4,2,6,5,7,1,3,9,8]" ,
                explicacion:"Si la entrada es root = [1,2,3,4,5,null,8,null,null,6,7,9], el resultado esperado es [4,2,6,5,7,1,3,9,8]" 
            },
            {
                id: "3",
                entrada: "nums1 = []",
                salida: "[]" ,
                explicacion:"Si la entrada es root = [], el resultado esperado es []" 
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