<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_prueba(values){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let letras = values[0]  
        let letrasHalladas = ""

        for (let i = 0; i < letras.split("").length; i++) {
            let coinciden = true
            for (let u = 1; u < values.length; u++) {
                if( values[u][i] != letras[i]  ){
                    coinciden = false
                }else{
                    values[u] = values[u].replace(letras[i], "1")
                }
            }
            if( coinciden ) {
                letrasHalladas += letras[i]
            }else{
                break
            }
        }

        return letrasHalladas
    }

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let palabras_1 = ["flower","flow","flight"]
                resp.value = function_prueba(palabras_1)  
                break;

            case 2:
                let palabras_2 = ["dog","racecar","car"]
                resp.value = function_prueba(palabras_2)  
                break;
            case 3:
                let palabras_3 = ["aa","ab"]
                resp.value = function_prueba(palabras_3)  
                break;
            default:
                break;
        }
    }

    let text = `
        let letras = values[ 0 ]  
        let letrasHalladas = ""

        for ( let i = 0; i < letras.split( "" ).length; i++ ) {
            let coinciden = true
            for ( let u = 1; u < values.length; u++ ) {
                if ( values[ u ][ i ] != letras[ i ]  ) {
                    coinciden = false
                } else {
                    values[ u ] = values[ u ].replace( letras[ i ], "1" )
                }
            }
            if ( coinciden ) {
                letrasHalladas += letras[ i ] 
            } else {
                break
            }
        }

        return letrasHalladas
    `

    const datosAct = {
    id: '4',
    plataforma: "LeetCode",
    dificultad: "🟢",
    title: "Longest Common Prefix",
    link: "https://leetcode.com/problems/Longest-Common-Prefix/",
    description: [ 
        "Escribe una función para encontrar el prefijo común más largo entre un arreglo de cadenas de texto.",
        "Si no existe un prefijo común, devuelve una cadena vacía ''."
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "strs = ['flower','flow','flight']",
            salida: "fl",
            explicacion: "Todos las palabras elegidas comparten las iniciales fl"
        },
        {
            id: "2",
            entrada: "strs = ['dog','racecar','car']",
            salida: " " ,
            explicacion: "Ninguna palabra comparte un valor inicial común"
        },
        {
            id: "3",
            entrada: "strs = ['aa', 'ab']",
            salida: "a",
            explicacion: "Todos las palabras elegidas comparten las iniciales a"
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