<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum(nombre) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })

    if (nombre.length == 0) return '*'
    let xNombres = nombre.length + 1
    let contenedor = new Array(xNombres).fill('a')

    let nombreLargo = 0
    for (let y = 0; y < nombre.length; y++) {
        if (nombreLargo < nombre[y].length) nombreLargo = nombre[y].length
    }
    nombreLargo = nombreLargo + 4

    function rellenarContenedor(nombreLargo) {
        let valor = ''
        for (let u = 0; u < nombreLargo; u++) {
            valor += '*'
        }
        return valor
    }

    for (let o = 0; o < contenedor.length; o++) {
        if (o == 0) {
            contenedor[0] = rellenarContenedor(nombreLargo)
        } else {
            let nombreActual = nombre[o - 1]
            nombreActual = '* ' + nombre[o - 1]
            let espacioFaltante = nombreLargo - 1 - nombreActual.length
            let espacio = ""
            for (let p = 0; p < espacioFaltante; p++) {
                espacio += ' '
            }
            espacio += '*'
            nombreActual = nombreActual + espacio
            contenedor[o] = nombreActual
        }
    }
    contenedor.push(rellenarContenedor(nombreLargo))
    console.log(contenedor.join('\n'))
    return contenedor.join('\n')

}

let text = `
 if( nombre.length == 0) return '*'
 let xNombres = nombre.length + 1
 let contenedor = new Array( xNombres ).fill('a')
 let nombreLargo = 0
 for (let y = 0; y < nombre.length; y++) {
    if( nombreLargo < nombre[y].length ) nombreLargo = nombre[y].length
 }
 nombreLargo = nombreLargo + 4
 function rellenarContenedor( nombreLargo ){
    let valor = ''
    for (let u = 0; u < nombreLargo; u++) {
        valor += '*'            
    }
    return valor
 }
 for (let o = 0; o < contenedor.length; o++) {
    if( o == 0 ) {
        contenedor[ 0 ] = rellenarContenedor( nombreLargo )
    } else {
        let nombreActual = nombre[ o - 1 ] 
        nombreActual = '* ' + nombre[ o - 1 ]
        let espacioFaltante = nombreLargo - 1 - nombreActual.length
        let espacio = ""
        for (let p = 0; p < espacioFaltante; p++) {
            espacio += ' '    
        }
        espacio += '*'
        nombreActual = nombreActual + espacio
        contenedor[ o ] = nombreActual
    }
 }
 contenedor.push( rellenarContenedor( nombreLargo ) )
 return contenedor.join('')
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            let nombres1 = ['midu']
            resp.value = function_twoSum(nombres1)
            break;

        case 2:
            let nombres2 = ['a', 'bb', 'ccc']
            resp.value = function_twoSum(nombres2)
            break;

        default:
            break;
    }
}

const datosAct = {
    id: "2",
    plataforma: "AdventJS 2024",
    dificultad: "🟢",
    title: "🎁 Enmarcando nombres",
    link: "https://adventjs.dev/es/challenges/2024/2",
    description: [
        "Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico."
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "nombres = ['midu']",
            salida: "* midu *",
            explicacion: "Buscamos el nombre más largo y luego lo encerramos en *"
        },
        {
            id: "2",
            entrada: "nombres = ['a', 'bb', 'ccc']",
            salida: "* a    ** bb  ** ccc  *",
            explicacion: "Buscamos el nombre más largo y luego lo encerramos en *"
        }
    ]
}

</script>

<template>
    <Desafio :id="datosAct.id" :description="datosAct.description" :ejemplo="datosAct.ejemplo"
        :plataforma="datosAct.plataforma" :dificultad="datosAct.dificultad" :title="datosAct.title"
        :link="datosAct.link" :text="text" :ejecutarTest="testFunciones" :resp="resp" :carga="carga" />
</template>