<script setup>
import { ref } from 'vue'
import Ejemplo from '../../Ejemplo.vue'
import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'

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
const datosAct = {
    id: '5',
    plataforma: "AdventJS 2024",
    dificultad: "🟢",
    title: "🎄 Emparejando Botas",
    link: "https://adventjs.dev/es/challenges/2024/5",
    description: [ 
        "Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:",
        "-- type indica si es una bota izquierda (I) o derecha (R).",
        "-- size indica el tamaño de la bota.",
        "Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.",
        "¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño! "
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "shoes = [ { type: 'I', size: 38 }, { type: 'R', size: 38 }, { type: 'R', size: 42 }, { type: 'I', size: 41 }, { type: 'I', size: 42 } ]",
            salida: "[38, 42]",
            explicacion: ""
        },
        {
            id: "2",
            entrada: "shoesB = [ { type: 'I', size: 38 }, { type: 'R', size: 38 }, { type: 'I', size: 38 }, { type: 'I', size: 38 }, { type: 'R', size: 38 }]",
            salida: "[38, 38]",
            explicacion: ""
        },
        {
            id: "3",
            entrada: "shoes3 = [ { type: 'I', size: 38 }, { type: 'R', size: 36 }, { type: 'R', size: 42 }, { type: 'I', size: 41 }, { type: 'I', size: 43 } ]",
            salida: "[]",
            explicacion: ""
        }
    ]
}

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