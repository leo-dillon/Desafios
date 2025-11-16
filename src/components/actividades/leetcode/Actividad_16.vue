<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(nums1, m, nums2, n){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        for (let i = m; i < nums1.length; i++) {
            nums1[ i ] = nums2[ i - m ]             
        } 

        if( nums1.length == 1 ) return nums1
        return nums1.sort( ( a, b ) => a - b )
    }

    let text = `
        for (let i = m; i < nums1.length; i++) {
            nums1[ i ] = nums2[ i - m ]             
        } 

        if( nums1.length == 1 ) return nums1
        return nums1.sort( ( a, b ) => a - b )
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_a1 = [1,2,3,0,0,0]
                let m_a1 = 3 
                let nums_a2 = [2,5,6] 
                let n_a1 = 3
                resp.value = function_actividad( nums_a1, m_a1, nums_a2, n_a1)  
                break;

            case 2:
                let nums_b1 = [1]
                let m_b1 = 1
                let nums_b2 = [0] 
                let n_b1 = 0
                resp.value = function_actividad( nums_b1, m_b1, nums_b2, n_b1)   
                break;
            
            case 3:
                let nums_c1 = [0]
                let m_c1 = 0
                let nums_c2 = [1] 
                let n_c1 = 1
                resp.value = function_actividad( nums_c1, m_c1, nums_c2, n_c1)   
                break;
            default:
                break;
        }
    }

    const datosAct = {
        id: '16',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Merge Sorted Array",
        link: "https://leetcode.com/problems/merge-sorted-array/",
        description: [ 
            "Se te dan dos arreglos de enteros, nums1 y nums2, ordenados en orden no decreciente, y dos enteros m y n, que representan la cantidad de elementos en nums1 y nums2 respectivamente.",
            "Combiná nums1 y nums2 en un solo arreglo ordenado en orden no decreciente.",
            "El arreglo ordenado final no debe ser devuelto por la función, sino que debe ser almacenado dentro del arreglo nums1.",
            "Para permitir esto, nums1 tiene una longitud de m + n, donde los primeros m elementos son los que deben ser combinados, y los últimos n elementos están establecidos en 0 y deben ser ignorados.",
            "nums2 tiene una longitud de n."
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3" ,
                salida: "[1,2,2,3,5,6]" ,
                explicacion: "Los arreglos que estamos combinando son [1,2,3] y [2,5,6]. El resultado de la combinación es [1,2,2,3,5,6], donde los elementos subrayados provienen de nums1."  
            },
            {
                id: "2",
                entrada: "nums1 = [1], m = 1, nums2 = [], n = 0" ,
                salida: "[1]" ,
                explicacion: "Los arreglos que estamos combinando son [0] y [1]. El resultado de la combinación es [1], donde los elementos subrayados provienen de nums1."  
            },
            {
                id: "3",
                entrada: "nums1 = [0], m = 0, nums2 = [1], n = 1" ,
                salida: "[1]" ,
                explicacion: "El resultado de la combinación es [] y [1]. El resultado de la combinación es [1], donde los elementos subrayados provienen de nums1."  
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