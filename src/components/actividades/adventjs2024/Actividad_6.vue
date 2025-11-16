<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum( box ) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })
    let response = true
    let esta = false
    box.pop()
    box.shift()
    box.forEach(item => {

        if(item[0] == '*' || item[ item.length - 1 ] == '*'){
            response = false
        }
        if( item.includes('*') ) {
            esta = true
        }
    });
    if( !esta ) response = false
    return response
}

let text = `
    let response = true
    let esta = false
    box.pop()
    box.shift()
    box.forEach(item => {

        if(item[0] == '*' || item[ item.length - 1 ] == '*'){
            response = false
        }
        if( item.includes('*') ) {
            esta = true
        }
    });
    if( !esta ) response = false
    return response
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            const boxA =[
                "###",
                "#*#",
                "###"
                ]
            resp.value = function_twoSum(boxA)
            break;

        case 2:
            const boxB = [
                "####",
                "#* #",
                "#  #",
                "####"
            ]
            resp.value = function_twoSum(boxB)
            break;

        case 3:
            const boxC = [
                "#####",
                "#   #",
                "#  #*",
                "#####"
                ]
            resp.value = function_twoSum(boxC)
            break;
        default:
            break;
    }
}
const datosAct = {
    id: '6',
    plataforma: "AdventJS 2024",
    dificultad: "🟠",
    title: "📦 ¿Regalo dentro de la caja?",
    link: "https://adventjs.dev/es/challenges/2024/6",
    description: [ 
        "Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.",
        "La caja tiene un regalo (*) y cuenta como dentro de la caja si:",
        "-- Está rodeada por # en los bordes de la caja.",
        "-- El * no está en los bordes de la caja.",
        "Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.",
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "box = [ '###', '#*#', '###' ]",
            salida: "true",
            explicacion: ""
        },
        {
            id: "2",
            entrada: "box = [ '####', '#* #', '#  #', '####' ]",
            salida: "true",
            explicacion: ""
        },
        {
            id: "3",
            entrada: "box = [ '#####', '#   #', '#  #*', '#####' ]",
            salida: "false",
            explicacion: ""
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