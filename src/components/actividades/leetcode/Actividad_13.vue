<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(a, b){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        let newBinario = ''
        let sobra = 0
        let i = ( a.length > b.length ) ? a.length - 1 : b.length - 1
        let array_a = a.split('')
        let array_b = b.split('')
        
        while ( ( array_b != [] || array_a != [] ) && i >= 0 ) {
            let val_b = array_b.pop()
            let val_a = array_a.pop()
            if( val_a == undefined ){ val_a = 0 } else { val_a = parseInt( val_a ) }
            if( val_b == undefined ){ val_b = 0 } else { val_b = parseInt( val_b ) }
            let val = ( val_a + val_b + sobra )

            switch (val) {
                case 3:
                    newBinario += '1'
                    sobra = 1
                    break;
                case 2:
                    newBinario += '0'
                    sobra = 1
                    break;
                case 1:
                    newBinario += '1'
                    sobra = 0
                    break;
                case 0:
                    newBinario += '0'
                    sobra = 0
                    break;
                default:
                    break;
            }
            i--
        }
        if(sobra == 1) newBinario += '1'
        return newBinario.split('').reverse().join('')
    }

let text = `
let newBinario = ''
let sobra = 0
let i = ( a.length > b.length ) ? a.length - 1 : b.length - 1
let array_a = a.split('')
let array_b = b.split('')

while ( ( array_b != [] || array_a != [] ) && i >= 0 ) {
    let val_b = array_b.pop()
    let val_a = array_a.pop()
    if( val_a == undefined ){ 
        val_a = 0 
    } else { 
        val_a = parseInt( val_a ) 
    }
    if( val_b == undefined ){ 
        val_b = 0 
    } else { 
        val_b = parseInt( val_b ) 
    }
    let val = ( val_a + val_b + sobra )

    switch (val) {
        case 3:
            newBinario += '1'
            sobra = 1
            break;
        case 2:
            newBinario += '0'
            sobra = 1
            break;
        case 1:
            newBinario += '1'
            sobra = 0
            break;
        case 0:
            newBinario += '0'
            sobra = 0
            break;
        default:
            break;
    }
    i--
}
if(sobra == 1) newBinario += '1'
return newBinario.split('').reverse().join('')
`

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let  a_1 = "11", b_1 = "1"
                resp.value = function_actividad(a_1, b_1)  
                break;

            case 2:
                let a_2 = "1010", b_2 = "1011"
                resp.value = function_actividad(a_2, b_2)   
                break;
            default:
                break;
        }
    }

    const datosAct = {
        id: '13',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Add Binary",
        link: "https://leetcode.com/problems/add-binary/",
        description: [ 
            "Tenemos dos valores en binario 'a' y 'b', sumar esos valores y devolver el resultante en binario. "
        ],
        ejemplo: [
            {
                id: "1",
                entrada: " a = '11', b = '1'",
                salida: "100",
                explicacion:"El valor a = '11' es 3 y el valor de b = '1' el 1. Si sumamos dichos valores nos da 4 y debemos devolver '100'" 
            },
            {
                id: "2",
                entrada: "a = '1010', b = '1011'",
                salida: "10101",
                explicacion:"El valor a = '1010' es 10 y el valor de b = '1011' el 11. Si sumamos dichos valores nos da 21 y debemos devolver '10101'" 
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