<script setup>
    import { ref } from 'vue'
    import Ejemplo from '../../Ejemplo.vue'
    import TextCode from '../../codeUI/TextCode.vue'
import Desafio from '../../modal/Desafio/Desafio.vue'
    
    const resp = ref("")
    const carga = ref(false)
    function function_actividad(version1, version2){
        setTimeout(() => {
            carga.value = false
        },500)
        document.querySelector("#res").scrollIntoView({behavior: 'smooth'})
        let array_version1 = version1.split('.').map( val => parseInt(val) )
        let array_version2 = version2.split('.').map( val => parseInt(val) )
        let max_length = ( array_version1.length > array_version2.length ) ? array_version1.length : array_version2.length
        
        const val = () => {
            for (let i = 0; i < max_length; i++) {
                let valor_v1 = array_version1[i] ? array_version1[i] : 0
                let valor_v2 = array_version2[i] ? array_version2[i] : 0 
                if( valor_v1 > valor_v2 ){
                    return 1
                } else if( valor_v1 < valor_v2 ){
                    return -1
                }   
            }    
            return 0
        }
        return val()

    }

    let text = `
    let array_version1 = version1.split('.').map( val => parseInt(val) )
    let array_version2 = version2.split('.').map( val => parseInt(val) )
    let max_length = ( array_version1.length > array_version2.length ) ? array_version1.length : array_version2.length
    
    const val = () => {
        for (let i = 0; i < max_length; i++) {
            let valor_v1 = array_version1[i] ? array_version1[i] : 0
            let valor_v2 = array_version2[i] ? array_version2[i] : 0 
            if( valor_v1 > valor_v2 ){
                return 1
            } else if( valor_v1 < valor_v2 ){
                return -1
            }   
        }    
        return 0
    }
    return val()
    `

    function testFunciones (n) {
        carga.value = true
        switch (n) {
            case 1:
                const version1a = "1.2"
                const version2a = "1.10"
                resp.value = function_actividad( version1a, version2a )  
                break;

            case 2:
                const version1b = "1.01", version2b = "1.001"
                resp.value = function_actividad( version1b, version2b )
                break;
            
            case 3:
                const version1c = "1.0", version2c = "1.0.0.0"
                resp.value = function_actividad( version1c, version2c )
                break;
            
            default:
                break;
        }
    }

    const datosAct = {
        id: '20',
        plataforma: "LeetCode",
        dificultad: "🟠",
        title: "Compare Version Numbers",
        link: "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
        description: [ 
            "Given two version strings, version1 and version2, compare them. A version string consists of revisions separated by dots '.'. The value of the revision is its integer conversion ignoring leading zeros.",
            "To compare version strings, compare their revision values in left-to-right order. If one of the version strings has fewer revisions, treat the missing revision values as 0.",
            "Return the following:",
            "-- If version1 < version2, return -1.",
            "-- If version1 > version2, return 1.",
            "-- Otherwise, return 0"
        ],
        ejemplo: [
            {
                id: "1",
                entrada: "version1 = '1.2', version2 = '1.10'",
                salida: "-1",
                explicacion: "Comenzamos con el primer valor y en ambos casos es 1"
            },
            {
                id: "2",
                entrada: "version1 = '1.01', version2 = '1.001'",
                salida: "0",
                explicacion: "Comenzamos con el primer valor y en ambos casos es 1"
            },
            {
                id: "2",
                entrada: "version1 = '1.0', version2 = '1.0.0.0'",
                salida: "0",
                explicacion: "Comenzamos con el primer valor y en ambos casos es 1"
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