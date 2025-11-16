    <script setup>
        import { ref } from 'vue'
        import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
        
        const resp = ref("")
        const carga = ref(false)
        
        function function_twoSum(nums){
            setTimeout(() => {
                carga.value = false
            },500)
            document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

            let valorAnterior = 100
            let valoresDistintos = 0
            for ( let i = 0; i < nums.length; i++ ) {
                if ( valorAnterior == nums[ i ] ) {
                } else {
                    valorAnterior = nums[ i ]
                    nums[ valoresDistintos ] = valorAnterior
                    valoresDistintos ++
                }
            }        
            for (let i = valoresDistintos; i < nums.length; i++) {
                nums[i] = "_"
                
            }
            return [ valoresDistintos, nums ]
        }

        let text = `
            let valorAnterior = 100
            let valoresDistintos = 0
            for ( let i = 0; i < nums.length; i++ ) {
                if ( valorAnterior == nums[ i ] ) {
                } else {
                    valorAnterior = nums[ i ]
                    nums[ valoresDistintos ] = valorAnterior
                    valoresDistintos ++
                }
            }        
            for (let i = valoresDistintos; i < nums.length; i++) {
                nums[i] = "_"
                
            }
            return [ valoresDistintos, nums ]
        `

        function testFunciones (n) {
            carga.value = true
            switch (n) {
                case 1:
                    let nums_1 = [1,1,2]
                    resp.value = function_twoSum(nums_1)  
                    break;

                case 2:
                    let nums_2 = [0,0,1,1,1,2,2,3,3,4]
                    resp.value = function_twoSum(nums_2)  
                    break;

                default:
                    break;
            }
        }
    const datosAct = {
        id: '7',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Remove Duplicates from Sorted Array",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        description: [ 
            "Se te da un array de números enteros llamado nums, ordenado de forma no decreciente (es decir, de menor a mayor o con elementos iguales). ",
            "Debés eliminar los elementos duplicados 'en el lugar' (es decir, sin usar estructuras nuevas), de forma que cada elemento único aparezca solo una vez. ",
            "El orden relativo de los elementos debe mantenerse igual que en el array original. ",
            "Luego, tenés que devolver la cantidad de elementos únicos en nums. ",
            "Considerá que el número de elementos únicos en nums es k. ",
            "Para que tu solución sea aceptada, debés hacer lo siguiente: ",
            "-- Modificá el array nums de forma que los primeros k elementos contengan los elementos únicos, en el mismo orden en que aparecían originalmente. ",
            "-- Los elementos restantes (después de los primeros k) no son importantes, así como tampoco lo es el tamaño final del array. ",
            "-- Devolvé el valor de k. ",
        ],
        ejemplo: [
            {
                id: "1",
                entrada:"nums = [1,1,2]",
                salida:"2, [1,2]",
                explicacion:"Está función retornara 2, devido a que hay 2 números distintos y el resto se repite" 
            },
            {
                id: "2",
                entrada:"nums = [0,0,1,1,1,2,2,3,3,4]",
                salida:"5, [0,1,2,3,4]",
                explicacion:"Está función retornara 5, devido a que hay 5 números distintos y el resto se repite" 
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