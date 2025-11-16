<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum( height, ornament ) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })
    let arbol = ''
    const longitud = height * 2 - 1
    for (let i = 0; i < height; i++) {
        const caracteres = ornament.repeat( 2 * i + 1 )
        const vacio = '_'.repeat( ( longitud - caracteres.length ) / 2 )
        arbol += vacio + caracteres + vacio + '\n'
    }
    const vacioBase = '_'.repeat(( longitud - 1 ) / 2 )
    arbol += vacioBase + "#" + vacioBase + '\n'
    arbol += vacioBase + "#" + vacioBase    
    return arbol
}

let text = `
    let arbol = ''
    const longitud = height * 2 - 1
    for (let i = 0; i < height; i++) {
        const caracteres = ornament.repeat( 2 * i + 1 )
        const vacio = '_'.repeat( ( longitud - caracteres.length ) / 2 )
        arbol += vacio + caracteres + vacio + '\n'
    }
    const vacioBase = '_'.repeat(( longitud - 1 ) / 2 )
    arbol += vacioBase + "#" + vacioBase + '\n'
    arbol += vacioBase + "#" + vacioBase    
    return arbol
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            resp.value = function_twoSum(5,'*')
            break;

        case 2:
            resp.value = function_twoSum(3,'+')
            break;

        case 3:
            resp.value = function_twoSum(6,'@')
            break;
        default:
            break;
    }
}

const datosAct = {
    id: '4',
    plataforma: "AdventJS 2024",
    dificultad: "🟠",
    title: "🎄 Decorando el árbol de Navidad",
    link: "https://adventjs.dev/es/challenges/2024/4",
    description: [ 
        "¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.",
        "La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:",
        "-- El árbol está compuesto de triángulos de caracteres especiales.",
        "-- Los espacios en blanco a los lados del árbol se representan con guiones bajos _.",
        "-- Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.",
        "-- El árbol siempre debe tener la misma longitud por cada lado.",
        "-- Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea para cada línea."
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "arbol = (5, '*')",
            salida: "____*____ ___***___ __*****__ _*******_ ********* ____#____ ____#____",
            explicacion: "Realizamos la base del árbol símbolo # y de cada lado rellenamos con el valor dado - 1 , en la línea superior rellenamos los mismos espacios con el símbolo entregado y subimos reduciendo los símbolos en 2 cada vez"
        },
        {
            id: "2",
            entrada: "arbol = (3,'+')",
            salida: "__+__ _+++_ +++++ __#__ __#__",
            explicacion: "Realizamos la base del árbol símbolo # y de cada lado rellenamos con el valor dado - 1 , en la línea superior rellenamos los mismos espacios con el símbolo entregado y subimos reduciendo los símbolos en 2 cada vez"
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