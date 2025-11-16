<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum( indices, clength ) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })

    let carrera = ""   
    indices.forEach( (pos, index) => {
        let pistaVacia = new Array(clength).fill('~')
        let pista = ""
        for (let i = 0; i < indices.length - index - 1; i++) {
            pista += " "
        }
        if( pos != 0 ){
            if( pos > 0 ){
                pistaVacia[pos] = "r"
            } else {
                pistaVacia[clength + pos] = "r"
            }
        }
        carrera += pista + pistaVacia.join("") + " /" + (index+1) +  ( index == indices.length - 1 ? '' : '\n' )
    } )

    return carrera
    
    
}

let text = `
    let carrera = ""   
    indices.forEach( (pos, index) => {
        let pistaVacia = new Array(clength).fill('~')
        let pista = ""
        for (let i = 0; i < indices.length - index - 1; i++) {
            pista += " "
        }
        if( pos != 0 ){
            if( pos > 0 ){
                pistaVacia[pos] = "r"
            } else {
                pistaVacia[clength + pos] = "r"
            }
        }
        carrera += 
            pista + 
            pistaVacia.join("") + 
            " /" + 
            (index+1) +  
            ( index == indices.length - 1 ? '' : '\n' )
    } )

    return carrera
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            resp.value = function_twoSum([0, 5, -3], 10)
            break;

        case 2:
            resp.value = function_twoSum([2, -1, 0, 5], 8)
            break;

        case 3:
            resp.value = function_twoSum([3, 7, -2], 12)
            break;

        default:
            break;
    }
}
const datosAct = {
        id: '8',
        plataforma: "Advent JS",
        dificultad: "🟢",
        title: "🦌 La carrera de renos",
        link: "https://adventjs.dev/es/challenges/2024/8",
        description: [ 
            "En este desafio debemos representar de forma grafica como termino una carrera de renos, para ello nos entregan 2 valores",
            "-- posicion = number[] y tamañoPista = number",
            "Tomando encuenta los valores anteriores debemos generar una pista de carreras donde se verá la posición final de los renos",
            "Datos a tener encuenta:",
            "-- Las posiciones pueden ser positivas y negativas. Si son positivas contamos desda la salida y si son negativas contamos desde la llegada. Tambien la posición puede ser 0. Este caso es el ganador de la carrera por lo tanto no se encuentra en la pista",
            "-- Cada pista debe tener su respecitvo espacio lateral: Ej 1° línea = 0 espacios, 2° línea = 1 espacios, 3° línea = 2 espacios "
        ],
        ejemplo: [
            {
                id: "1",
                entrada: " indices = '[0, 5, -3]' , length = '10' ",
                salida: "\t\t\n~~~~~~~~~~ /1 \t~~~~~r~~~~ /2 ~~~~~~~r~~ /3",
                explicacion:"" 
            },
            {
                id: "2",
                entrada: " indices = '[2, -1, 0, 5]' , length = '8' ",
                salida: "~~r~~~~~ /1 ~~~~~~~r /2 ~~~~~~~~ / ~~~~~r~~ /4",
                explicacion:"" 
            },
            {
                id: "3",
                entrada: " indices = '[3, 7, -2]' , length = '12' ",
                salida: "  ~~~r~~~~~~~~ /1 ~~~~~~~r~~~~ /2 ~~~~~~~~~~r~ /3",
                explicacion:"" 
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