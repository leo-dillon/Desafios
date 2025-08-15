<script setup>

    import { useRoute } from 'vue-router';
    import Loading from './Loading.vue';
    import Actividad_leetcode_1 from '../actividades/leetcode/Actividad_1.vue';
    import Actividad_leetcode_2 from '../actividades/leetcode/Actividad_2.vue';
    import Actividad_leetcode_3 from '../actividades/leetcode/Actividad_3.vue';
    import Actividad_leetcode_4 from '../actividades/leetcode/Actividad_4.vue';
    import Actividad_leetcode_5 from '../actividades/leetcode/Actividad_5.vue';
    import Actividad_leetcode_6 from '../actividades/leetcode/Actividad_6.vue';
    import Actividad_leetcode_7 from '../actividades/leetcode/Actividad_7.vue';
    import Actividad_leetcode_8 from '../actividades/leetcode/Actividad_8.vue';
    import Actividad_leetcode_9 from '../actividades/leetcode/Actividad_9.vue';
    import Actividad_leetcode_10 from '../actividades/leetcode/Actividad_10.vue';
    import Actividad_leetcode_11 from '../actividades/leetcode/Actividad_11.vue';
    import Actividad_leetcode_12 from '../actividades/leetcode/Actividad_12.vue';
    import Actividad_leetcode_13 from '../actividades/leetcode/Actividad_13.vue';
    import Actividad_leetcode_14 from '../actividades/leetcode/Actividad_14.vue';
    import Actividad_leetcode_15 from '../actividades/leetcode/Actividad_15.vue';
    import Actividad_leetcode_16 from '../actividades/leetcode/Actividad_16.vue';
    import Actividad_leetcode_17 from '../actividades/leetcode/Actividad_17.vue';

    import Actividad_adventjs2024_1 from '../actividades/adventjs2024/Actividad_1.vue';

    defineProps({
        open: Boolean,
        loading: Boolean,
        toggleModel: Function,
    })

    const modelRouter = useRoute()

    const actividadLeetcode = () => {
        let actividadBuscada
        switch (modelRouter.query.act) {
            case "1":
                actividadBuscada = Actividad_leetcode_1
                break
            case "2":
                actividadBuscada = Actividad_leetcode_2
                break
            case "3":
                actividadBuscada = Actividad_leetcode_3
                break
            case "4":
                actividadBuscada = Actividad_leetcode_4
                break
            case "5":
                actividadBuscada = Actividad_leetcode_5
                break
            case "6":
                actividadBuscada = Actividad_leetcode_6
                break
            case "7":
                actividadBuscada = Actividad_leetcode_7
                break
            case "8":
                actividadBuscada = Actividad_leetcode_8
                break
            case "9":
                actividadBuscada = Actividad_leetcode_9
                break
            case "10":
                actividadBuscada = Actividad_leetcode_10
                break
            case "11":
                actividadBuscada = Actividad_leetcode_11
                break
            case "12":
                actividadBuscada = Actividad_leetcode_12
                break
            case "13":
                actividadBuscada = Actividad_leetcode_13
                break
            case "14":
                actividadBuscada = Actividad_leetcode_14
                break
            case "15":
                actividadBuscada = Actividad_leetcode_15
                break
            case "16":
                actividadBuscada = Actividad_leetcode_16
                break
            case "17":
                actividadBuscada = Actividad_leetcode_17
                break
            default:
                actividadBuscada = "Error Garrafal"
        }
        return actividadBuscada
    }

    const actividadMouredev = () => {
        let actividadBuscada
        switch (modelRouter.query.act) {
            case "1":
                actividadBuscada = Actividad_leetcode_1
                break
            default:
                actividadBuscada = "Error Garrafal"
            }
        return actividadBuscada
    }

    const actividadAdventJS2024 = () => {
       let actividadBuscada
        switch (modelRouter.query.act) {
            case "1":
                actividadBuscada = Actividad_adventjs2024_1
                break
            default:
                actividadBuscada = "Error Garrafal"
            }
        return actividadBuscada
    }

    const buscarActividad = () => {
        let actividad_final 
        switch (modelRouter.query.name) {
            case "leetcode":
                actividad_final = actividadLeetcode()
                break
            case "mouredev":
                actividad_final = actividadMouredev()
                break
            case "adventjs2024":
                actividad_final = actividadAdventJS2024()
                break
            default:
                actividad_final = "Error Garrafal"
        }
        return actividad_final
    }

</script>

<template>
    <div @click="toggleModel" v-if="open" class="fixed flex justify-center items-center top-0 w-screen h-screen bg-black/50 z-100">
        <div @click.stop v-if="loading"  class=" w-max max-w-9/10 p-4 flex flex-col items-center justify-center bg-orange-200 rounded-2xl">
            <Loading/>
        </div>
        <div @click.stop v-else class="relative w-full max-w-300 max-h-200 overflow-y-scroll p-4 flex flex-col justify-center bg-gray-800 rounded-2xl">
            <component :is="buscarActividad()" />
            <button @click="toggleModel" class="text-xl absolute top-4 right-4 p-2 cursor-pointer hover:scale-120 duration-200">
                ❌
            </button>
        </div>
    </div>
</template>