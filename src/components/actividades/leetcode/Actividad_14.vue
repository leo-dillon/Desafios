<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(n){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        
        if( n == 1 ) return 1
        if( n == 2 ) return 2
        let valores = new Array( n + 1 ).fill( 0 )
        valores[1] = 1
        valores[2] = 2
        for (let i = 3; i <= n; i++) {
            valores[ i ] = valores[ i - 1 ] + valores[ i - 2 ];
        }
        return valores[n]

    }

    let text = `
        if( n == 1 ) return 1
        if( n == 2 ) return 2
        let valores = new Array( n + 1 ).fill( 0 )
        valores[1] = 1
        valores[2] = 2
        for (let i = 3; i <= n; i++) {
            valores[ i ] = valores[ i - 1 ] + valores[ i - 2 ];
        }
        return valores[n]
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let n_1 = 5
                resp.value = function_actividad(n_1)  
                break;

            case 2:
                let n_2 = 3
                resp.value = function_actividad(n_2)   
                break;
            default:
                break;
        }
    }

    const datosAct = {
        id: '14',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Climbing Stairs",
        link: "https://leetcode.com/problems/climbing-stairs/",
        description: [ 
            "Estás subiendo una escalera. Se necesitan n escalones para llegar a la cima. ",
            "Cada vez podés subir 1 o 2 escalones. ¿De cuántas formas distintas podés llegar hasta la cima? "
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "n = 2",
                salida: "2",
                explicacion:"Existen 2 formas de subir a la cima.  Subiendo 1 y 1 y subiendo 2"  
            },
            {
                id: "2",
                entrada: "n = 3",
                salida: "3",
                explicacion:"Existen 3 formas de subir a la cima.  Subiendo 1 y 1 y 1, subiendo 2 y 1, subiendo 1 y 2"  
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