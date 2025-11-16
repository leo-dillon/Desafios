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
        
        if(nums < 0) return false;
        let numString = nums.toString()
        let numAlreves = ""
        for (let i = numString.length - 1; i >= 0 ; i--) {
            numAlreves += numString[i]
        }
        return nums == numAlreves 
        
    }

    let text = `
        if(nums < 0) return false;
        let numString = nums.toString()
        let numAlreves = ""
        for (let i = numString.length - 1; i >= 0 ; i--) {
            numAlreves += numString[i]
        }
        return nums == numAlreves 
    `
    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                let nums_1 = 121
                resp.value = function_palindrome(nums_1)  
                break;

            case 2:
                let nums_2 = -121
                resp.value = function_palindrome(nums_2)  
                break;

            case 3:
                let nums_3 = 10
                resp.value = function_palindrome(nums_3)  
                break;
            
            default:
                break;
        }
    }
    const datosAct = {
    id: '2',
    plataforma: "LeetCode",
    dificultad: "🟢",
    title: "Palindrome Number",
    link: "https://leetcode.com/problems/Palindrome-Number/",
    description: [ 
        "Dado un número entero x, devuelve true si x es un palíndromo y false en caso contrario."
    ],
    ejemplo: [
        {
            id: "1",
            entrada: "n = 121",
            salida: "true",
            explicacion: "Si damos vuelta el valor es el mismo 121 = 121"
        },
        {
            id: "2",
            entrada: "n = -121",
            salida: "false",
            explicacion: "Todos los numeros negativos no son polindromos"
        },
        {
            id: "3",
            entrada: "n = 10",
            salida: "false",
            explicacion: "Si damos la vuelta el valor no es igual 10 != 01"
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