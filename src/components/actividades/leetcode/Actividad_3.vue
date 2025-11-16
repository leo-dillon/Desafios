<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_palindrome(nums){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        
        let numerosRomanos = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        let resFinal = 0

        for(let i = 0; i < nums.length ; i++){
            let n1 = numerosRomanos[nums[ i ]]
            let n2 = ( nums[ i + 1 ] != undefined ) ? numerosRomanos[nums[ i + 1 ]] : 0
            if( n2 > n1 ){
                resFinal += n2 - n1
                i++
            }else{
                resFinal += n1
            }
        }
        
        return resFinal
        
    }

    let text = `
    let numerosRomanos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let resFinal = 0

    for ( let i = 0; i < nums.length ; i++ ) {
        let n1 = numerosRomanos[ nums[ i ] ]
        let n2 = ( nums[ i + 1 ] != undefined ) 
            ? numerosRomanos[ nums[ i + 1 ] ] 
            : 0
        if ( n2 > n1 ) {
            resFinal += n2 - n1
            i++
        } else {
            resFinal += n1
        }
    }
    
    return resFinal
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_1 = "III"
                resp.value = function_palindrome(nums_1)  
                break;

            case 2:
                let nums_2 = "LVIII"
                resp.value = function_palindrome(nums_2)  
                break;

            case 3:
                let nums_3 = "MCMXCIV"
                resp.value = function_palindrome(nums_3)  
                break;
            
            default:
                break;
        }
    }
const datosAct = {
    id: '3',
    plataforma: "LeetCode",
    dificultad: "🟢",
    title: "roman to integer",
    link: "https://leetcode.com/problems/roman-to-integer/",
    description: [ 
        "Los números romanos se representan mediante siete símbolos diferentes: I, V, X, L, C, D y M.",
        "Símbolo Valor",
        "-- I => 1",
        "-- V => 5",
        "-- X => 10",
        "-- L => 50",
        "-- C => 100",
        "-- D => 500",
        "-- M => 1000",
        "Por ejemplo, el número 2 se escribe como II en números romanos, simplemente se suman dos unos. El 12 se escribe como XII, que es simplemente X + II. El número 27 se escribe como XXVII, que es XX + V + II. <br>",
        "Los números romanos suelen escribirse de mayor a menor de izquierda a derecha. Sin embargo, el número cuatro no se escribe como IIII. En su lugar, se escribe IV. Como el uno está antes que el cinco, se resta, formando el número cuatro. El mismo principio se aplica al número nueve, que se escribe como IX. <br>",
        "Hay seis casos en los que se utiliza la resta:",
        "-- I puede colocarse antes de V (5) y X (10) para formar 4 y 9.",
        "-- X puede colocarse antes de L (50) y C (100) para formar 40 y 90.",
        "-- C puede colocarse antes de D (500) y M (1000) para formar 400 y 900.",
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "numRoman = III",
            salida: "3",
            explicacion: "III = 3"
        },
        {
            id: "2",
            entrada: "numRoman = LVIII",
            salida: "58",
            explicacion: "LVIII ==> L = 50 / V = 5 / III = 3 ==> 50 + 5 + 3 = 58"
        },
        {
            id: "3",
            entrada: "numRoman = MCMXCIV",
            salida: "1994",
            explicacion: "M = 1000 / CM = - 100 + 1000 / XC = -10 + 100 / IV = -1 + 5  ==> 1994"
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