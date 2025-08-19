<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'

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
        }else{
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
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟢 Reto #3: 🎁 Organiza el inventario
        </h2>
        <a href="https://adventjs.dev/es/challenges/2024/3" class="ml-6 text-blue-400 hover:text-blue-500 duration-200"
            title="Ir a LeetCode"> link AdventJS 2024 </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
               Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

                Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:
                <br>
                <span class="opacity-70">-- name: el nombre del juguete (string).</span><br>
                <span class="opacity-70">-- quantity: la cantidad disponible de ese juguete (entero).</span><br>
                <span class="opacity-70">-- category: la categoría a la que pertenece el juguete (string).</span><br>
                Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:
                <br>
                <span class="opacity-70" >-- Las claves del objeto serán las categorías de juguetes.</span> <br>
                <span class="opacity-70" >-- Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.</span> <br>
                <span class="opacity-70" >-- Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.</span> <br>
                <span class="opacity-70" >-- Si el array está vacío, la función debe devolver un objeto vacío {}.</span> <br>
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="[  
                    { name: 'doll', quantity: 5, category: 'toys' }, 
                    { name: 'car', quantity: 3, category: 'toys' }, 
                    { name: 'ball', quantity: 2, category: 'sports' }, 
                    { name: 'car', quantity: 2, category: 'toys' }, 
                    { name: 'racket', quantity: 4, category: 'sports' } 
                    ] " 
                    salida="{
                        toys: {
                            doll: 5,
                            car: 5
                        },
                        sports: {
                            ball: 2,
                            racket: 4
                        }
                    }"
                    explicacion="Dividimos el array inicial en cattegorías y insertamos los productos correcpondientes" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="[
                        { name: 'book', quantity: 10, category: 'education' },
                        { name: 'book', quantity: 5, category: 'education' },
                        { name: 'paint', quantity: 3, category: 'art' }
                    ]" 
                    salida="{
                      education: {
                        book: 15
                      },
                      art: {
                        paint: 3
                      }
                    }"
                    explicacion="Dividimos el array inicial en cattegorías y insertamos los productos correcpondientes" />
            </div>
            <div>
                <h4 class="w-max text-gray-400 border-b border-stone-600">Mi respuesta</h4>
                <div
                    class="w-max mt-2 ml-4 bg-[#1e1e1e] border-l border-stone-600 text-gray-200 text-sm font-mono pr-10">
                    <TextCode :text="text" />
                </div>
            </div>
        </div>
        <div class="ml-6 py-6 flex gap-6 ">
            <button @click="testFunciones(1)"
                class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores
            </button>
            <button @click="testFunciones(2)"
                class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 2
            </button>
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'ASD' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong
                    class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != 'ASD' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>