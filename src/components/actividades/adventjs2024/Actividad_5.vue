<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'

const resp = ref("")
const carga = ref(false)

function function_twoSum( shoes ) {
    setTimeout(() => {
        carga.value = false
    }, 500)
    document.querySelector("#res").scrollIntoView({ behavior: 'smooth' })
    const counts = {};

  for (const { type, size } of shoes) {
    if (!counts[size]) counts[size] = { I: 0, R: 0 };
    counts[size][type]++;
  }

  const result = [];
  for (const size in counts) {
    const { I, R } = counts[size];
    const pairs = Math.min(I, R);
    for (let i = 0; i < pairs; i++) {
      result.push(Number(size));
    }
  }
  return result
}

let text = `
    const counts = {};

    for (const { type, size } of shoes) {
        if (!counts[size]) counts[size] = { I: 0, R: 0 };
        counts[size][type]++;
    }

    const result = [];
    for (const size in counts) {
        const { I, R } = counts[size];
        const pairs = Math.min(I, R);
        for (let i = 0; i < pairs; i++) {
        result.push(Number(size));
        }
    }
    return result
    `

function testFunciones(n) {
    carga.value = true
    switch (n) {
        case 1:
            const shoesA = [
                { type: 'I', size: 38 },
                { type: 'R', size: 38 },
                { type: 'R', size: 42 },
                { type: 'I', size: 41 },
                { type: 'I', size: 42 }
            ]
            resp.value = function_twoSum(shoesA)
            break;

        case 2:
            const shoesB = [
                { type: 'I', size: 38 },
                { type: 'R', size: 38 },
                { type: 'I', size: 38 },
                { type: 'I', size: 38 },
                { type: 'R', size: 38 }
            ]
            resp.value = function_twoSum(shoesB)
            break;

        case 3:
            const shoesC = [
                { type: 'I', size: 38 },
                { type: 'R', size: 36 },
                { type: 'R', size: 42 },
                { type: 'I', size: 41 },
                { type: 'I', size: 43 }
            ]
            resp.value = function_twoSum(shoesC)
            break;
        default:
            break;
    }
}
</script>

<template>
    <div class="py-6 w-full h-200" id="modal">
        <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
            🟠 Reto #4: 🎄 Emparejando Botas
        </h2>
        <a href="https://adventjs.dev/es/challenges/2024/5" class="ml-6 text-blue-400 hover:text-blue-500 duration-200"
            title="Ir a LeetCode"> link AdventJS 2024 </a>
        <div class="ml-6 pt-6 space-y-2">
            <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
            <p class="ml-4 text-gray-300">
                Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:
                <br><span class="opacity-70"></span> type indica si es una bota izquierda (I) o derecha (R).
                <br><span class="opacity-70"></span> size indica el tamaño de la bota.
                Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.
                ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
            </p>
            <div class="py-4 space-y-3">
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 1
                </h4>
                <Ejemplo entrada="shoes = [
                    { type: 'I', size: 38 },
                    { type: 'R', size: 38 },
                    { type: 'R', size: 42 },
                    { type: 'I', size: 41 },
                    { type: 'I', size: 42 }
                    ]" 
                    salida="[38, 42]"
                    explicacion="" />
                <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 2
                </h4>
                <Ejemplo entrada="shoesB = [
                { type: 'I', size: 38 },
                { type: 'R', size: 38 },
                { type: 'I', size: 38 },
                { type: 'I', size: 38 },
                { type: 'R', size: 38 }
            ]" 
                    salida="[38, 38]"
                    explicacion="" />
            </div>
            <div>
            <h4 class="w-max text-gray-400 border-b border-stone-600">
                    Ejemplo 3
                </h4>
                <Ejemplo entrada="shoes3 = [
                    { type: 'I', size: 38 },
                    { type: 'R', size: 36 },
                    { type: 'R', size: 42 },
                    { type: 'I', size: 41 },
                    { type: 'I', size: 43 }
                    ]" 
                    salida="[]"
                    explicacion="" />
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
            <button @click="testFunciones(3)"
                class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                Probar valores 3
            </button>
        </div>
        <div class="ml-6 pb-8" id="res">
            <h4 v-if="resp != 'ASD' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong
                    class="text-gray-300 text-lg">Respuesta:</strong> {{ resp }} </h4>
            <h4 v-if="resp != 'ASD' && carga == true" class="text-gray-400"> Cargando ... </h4>
        </div>
    </div>
</template>