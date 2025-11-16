<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum(inventory) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })
    let inventarioOrdenado = {}
    if( inventory == {} ) return {}
    inventory.forEach( element => {
        let name = element.name
        let quantity = element.quantity
        if( inventarioOrdenado[element.category] ){
            if( inventarioOrdenado[element.category][name] ){
                inventarioOrdenado[element.category] = {
                    ...inventarioOrdenado[element.category],
                    [name]: quantity + inventarioOrdenado[element.category][name]
                }
            } else {
                inventarioOrdenado[element.category] = {
                    ...inventarioOrdenado[element.category],
                    [name]: quantity
                }
            }
        }else{
            inventarioOrdenado[element.category] = {
                [name]: quantity
            }
        }
    });    
    return inventarioOrdenado
}

let text = `
 let inventarioOrdenado = {}
  if( inventory == {} ) return {}
  inventory.forEach( element => {
   let name = element.name
   let quantity = element.quantity
    if( inventarioOrdenado[element.category] ){
     if( inventarioOrdenado[element.category][name] ){
      inventarioOrdenado[element.category] = {
       ...inventarioOrdenado[element.category],
       [name]: quantity + inventarioOrdenado[element.category][name]
      }
    } else {
     inventarioOrdenado[element.category] = {
     ...inventarioOrdenado[element.category],
     [name]: quantity
    }
   }
 } else {
  inventarioOrdenado[element.category] = {
   [name]: quantity
  }
 }
 });    
 return inventarioOrdenado
`

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            let inventory1 = [
                { name: 'doll', quantity: 5, category: 'toys' },
                { name: 'car', quantity: 3, category: 'toys' },
                { name: 'ball', quantity: 2, category: 'sports' },
                { name: 'car', quantity: 2, category: 'toys' },
                { name: 'racket', quantity: 4, category: 'sports' }
            ]
            resp.value = function_twoSum(inventory1)
            break;

        case 2:
            let inventory2 = [
                { name: 'book', quantity: 10, category: 'education' },
                { name: 'book', quantity: 5, category: 'education' },
                { name: 'paint', quantity: 3, category: 'art' }
            ]
            resp.value = function_twoSum(inventory2)
            break;

        default:
            break;
    }
}

const datosAct = {
    id: "4",
    plataforma: "AdventJS 2024",
    dificultad: "🟢",
    title: "Organiza el inventario",
    link: "https://adventjs.dev/es/challenges/2024/3",
    description: [ 
        "Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.",
        "Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:",
        "-- name: el nombre del juguete (string).",
        "-- quantity: la cantidad disponible de ese juguete (entero).",
        "-- category: la categoría a la que pertenece el juguete (string).",
        "Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:",
        "-- Las claves del objeto serán las categorías de juguetes.",
        "-- Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.",
        "-- Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.",
        "-- Si el array está vacío, la función debe devolver un objeto vacío {}.",
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "[  { name: 'doll', quantity: 5, category: 'toys' }, { name: 'car', quantity: 3, category: 'toys' }, { name: 'ball', quantity: 2, category: 'sports' }, { name: 'car', quantity: 2, category: 'toys' }, { name: 'racket', quantity: 4, category: 'sports' } ]",
            salida: "{ toys: { doll: 5, car: 5 },  sports: { ball: 2, racket: 4 }}",
            explicacion: "Dividimos el array inicial en cattegorías y insertamos los productos correcpondientes"
        },
        {
            id: "2",
            entrada: "[ { name: 'book', quantity: 10, category: 'education' }, { name: 'book', quantity: 5, category: 'education' }, { name: 'paint', quantity: 3, category: 'art' }]",
            salida: "{  education: { book: 15 }, art: { paint: 3 } }",
            explicacion: "Dividimos el array inicial en cattegorías y insertamos los productos correcpondientes"
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