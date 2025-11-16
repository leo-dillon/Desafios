<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
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

    const datosAct = {
        id: '21',
        plataforma: "LeetCode",
        dificultad: "🟠",
        title: "Triangle",
        link: "https://leetcode.com/problems/triangle/",
        description: [ 
            "Dado un array triangular, devuelve la suma mínima de rutas de arriba a abajo.",
            "En cada paso, puedes moverte a un número adyacente de la fila inferior. De forma más formal, ",
            "si estás en el índice i de la fila actual, puedes moverte al índice i o al índice i + 1 de la siguiente fila."
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]",
                salida: "11",
                explicacion: "Sumamos el minimo valor de cara array de cada posición. En este caso 2 + 3 + 5 + 1 = 11"
            },
            {
                id: "2",
                entrada: "triangle = [[-10]]",
                salida: "-10",
                explicacion: "En este caso al tener solo un valor lo dejamo tal cual"
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