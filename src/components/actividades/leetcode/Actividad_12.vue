<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    
    function function_actividad(digits){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

        if ( digits[ digits.length - 1 ] != 9 ){
            digits[ digits.length - 1 ] = digits[ digits.length - 1 ] + 1
            return digits
        }

        for (let i = digits.length - 1 ; i >= 0; i--) {
            if( digits[ i ] == 9 ){
                digits[ i ] = 0
                if( i == 0 ){
                    digits.unshift(1)
                    break
                }
            } else {
                digits[ i ] = digits[ i ] + 1 
                break
            }
        }
        return digits

    }

    let text = `
if ( digits[ digits.length - 1 ] != 9 ){
    digits[ digits.length - 1 ] = digits[ digits.length - 1 ] + 1
    return digits
}

for (let i = digits.length - 1 ; i >= 0; i--) {
    if( digits[ i ] == 9 ){
        digits[ i ] = 0
        if( i == 0 ){
            digits.unshift(1)
            break
        }
    } else {
        digits[ i ] = digits[ i ] + 1 
        break
    }
}
return digits
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let digits_1 = [1,2,3]
                resp.value = function_actividad(digits_1)  
                break;

            case 2:
                let digits_2 = [4,3,2,1]
                resp.value = function_actividad(digits_2)   
                break;
            case 3:
                let digits_3 = [9]
                resp.value = function_actividad(digits_3)  
                break;
            default:
                break;
        }
    }

    const datosAct = {
        id: '12',
        plataforma: "LeetCode",
        dificultad: "🟢",
        title: "Plus One",
        link: "https://leetcode.com/problems/plus-one/",
        description: [ 
            "Se te da un número entero grande representado como un arreglo de enteros digits, donde cada digits[i] es el i-ésimo dígito del número. Los dígitos están ordenados de más significativo a menos significativo, de izquierda a derecha. El número entero grande no contiene ceros a la izquierda.",
            "Incrementá el número entero en uno y devolvé el arreglo resultante de dígitos.",
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "digits = [1,2,3]",
                salida: "[1,2,4]", 
                explicacion: "El array [1,2,3] representa el valor 123, debemos sumarle 1 y devolverlo en formato array. Es decir [1,2,4]"
            },
            {
                id: "2",
                entrada: "digits = [4,3,2,1]",
                salida: "[4,3,2,2]", 
                explicacion: "El array [4,3,2,1] representa el valor 4321, debemos sumarle 1 y devolverlo en formato array. Es decir [4,3,2,2]"
            },
            {
                id: "3",
                entrada: "digits = [9]",
                salida: "[1,0]", 
                explicacion: "El array [9] representa el valor 9, debemos sumarle 1 y devolverlo en formato array. Es decir [1,0]"
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