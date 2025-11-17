<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum( packages ) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })
    let limite = 0
    if( packages.length == 0) return ""
    if( packages.includes('(') ){
        while (limite < 10) {
            let ultimoParentesis = packages.lastIndexOf('(')
            if( ultimoParentesis == -1 ) {
                limite = 10 
            }
            let cierreParentesis = packages.indexOf(')', ultimoParentesis )
            let porcionString = packages.slice( ultimoParentesis, cierreParentesis + 1 )
            let textPorcionString = porcionString.slice( 1, porcionString.length - 1 ).split('').reverse().join('')

            packages = packages.replace(porcionString, textPorcionString)

            limite++
        }
    }
    return packages
    
    
}

let text = `
let limite = 0
if( packages.length == 0) return ""
if( packages.includes('(') ){
    while (limite < 10) {
    let ultimoParentesis = packages.lastIndexOf('(')
    if( ultimoParentesis == -1 ) {
        limite = 10 
    }
    let cierreParentesis = packages.indexOf(')', ultimoParentesis )
    let porcionString = packages
        .slice( ultimoParentesis, cierreParentesis + 1 )
    let textPorcionString = porcionString
        .slice( 1, porcionString.length - 1 )
        .split('')
        .reverse()
        .join('')
    packages = packages.replace(porcionString, textPorcionString)
    limite++
    }
}
return packages
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            const textA  = "a(cb)de"
            resp.value = function_twoSum(textA)
            break;

        case 2:
            const textB = 'a(bc(def)g)h'
            resp.value = function_twoSum(textB)
            break;

        case 3:
            const textC = 'abc(def(gh)i)jk'
            resp.value = function_twoSum(textC)
            break;

        case 4:
            const textD = 'a(b(c))e'
            resp.value = function_twoSum(textD)
            break;
        default:
            break;
    }
}
const datosAct = {
        id: '7',
        plataforma: "Advent JS",
        dificultad: "🟠",
        title: "👹 El ataque del Grinch",
        link: "https://adventjs.dev/es/challenges/2024/7",
        description: [ 
            "¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.",
            "Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:",
            "-- Recibirás un string que contiene letras y paréntesis.",
            "-- Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.",
            "-- Si hay paréntesis anidados, resuelve primero los más internos.",
            "-- Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.",
        ],
        ejemplo: [
            {
                id: "1",
                entrada: " order = 'a(cb)de' ",
                salida: "abcde",
                explicacion:"" 
            },
            {
                id: "2",
                entrada: "orden = a(bc(def)g)h",
                salida: "agdefcbh",
                explicacion:"" 
            },
            {
                id: "3",
                entrada: "abc(def(gh)i)jk",
                salida: "abcighfedjk",
                explicacion:"" 
            },
            {
                id: "4",
                entrada: "a(b(c))e",
                salida: "acbe",
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