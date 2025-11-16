<script setup>
import { ref } from 'vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum(gifts) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })

    let valores = []
    let arrayFinal = []
    if( gifts.length == 0 ) return arrayFinal
    for (let i = 0; i < gifts.length; i++) {
        if( !valores.includes( gifts[i] ) ){
            valores.push( gifts[i] )
        }
    }
    arrayFinal = valores.sort( (a,b) => a-b )
    return arrayFinal
}

let text = `
    let valores = []
    let arrayFinal = []
    if( gifts.length == 0 ) return arrayFinal
    for (let i = 0; i < gifts.length; i++) {
        if( !valores.includes( gifts[i] ) ){
            valores.push( gifts[i] )
        }
    }
    arrayFinal = valores.sort( (a,b) => a-b )
    return arrayFinal
        
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            let gifts1 = [3, 1, 2, 3, 4, 2, 5]
            resp.value = function_twoSum(gifts1)
            break;

        case 2:
            let gifts2 = [6, 5, 5, 5, 5]
            resp.value = function_twoSum(gifts2)
            break;

        case 3:
            let gifts3 = []
            resp.value = function_twoSum(gifts3)
            break;
        default:
            break;
    }
}

const datosAct = {
    id: '1',
    plataforma: "AdventJS 2024",
    dificultad: "🟢",
    title: "¡Primer regalo repetido!",
    link: "https://adventjs.dev/es/challenges/2024/1",
    description: [ 
        "Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.",
        "Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente."
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "gifts = [3, 1, 2, 3, 4, 2, 5]",
            salida: "[1, 2, 3, 4, 5]",
            explicacion: "Eliminaremos los valores repetidos y luego ordenaremos los valores. En este caso mostraremos [1, 2, 3, 4, 5]"
        },
        {
            id: "2",
            entrada: "gifts2 = [6, 5, 5, 5, 5]",
            salida: "[5, 6]",
            explicacion: "Eliminaremos los valores repetidos y luego ordenaremos los valores. En este caso mostraremos [5, 6]"
        },
        {
            id: "3",
            entrada: "gifts = []",
            salida: "[]",
            explicacion: "Eliminaremos los valores repetidos y luego ordenaremos los valores. En este caso mostraremos []"
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