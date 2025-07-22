<script setup>

    import { useRoute } from 'vue-router';
    import Loading from './Loading.vue';
    import Actividad_1 from '../actividades/Actividad_1.vue';
    import Actividad_2 from '../actividades/Actividad_2.vue';
    import Actividad_3 from '../actividades/Actividad_3.vue';
    import Actividad_4 from '../actividades/Actividad_4.vue';
import Actividad_5 from '../actividades/Actividad_5.vue';
import Actividad_6 from '../actividades/Actividad_6.vue';
import Actividad_7 from '../actividades/Actividad_7.vue';
import Actividad_8 from '../actividades/Actividad_8.vue';
import Actividad_9 from '../actividades/Actividad_9.vue';
import Actividad_10 from '../actividades/Actividad_10.vue';
import Actividad_11 from '../actividades/Actividad_11.vue';
import Actividad_12 from '../actividades/Actividad_12.vue';
import Actividad_13 from '../actividades/Actividad_13.vue';
import Actividad_14 from '../actividades/Actividad_14.vue';

    defineProps({
        open: Boolean,
        loading: Boolean,
        toggleModel: Function,
    })

    const modelRouter = useRoute()

    const actividad = () => {
        let actividad_final 
        switch (modelRouter.query.act) {
            case "1":
                actividad_final = Actividad_1
                break
            case "2":
                actividad_final = Actividad_2
                break
            case "3":
                actividad_final = Actividad_3
                break
            case "4":
                actividad_final = Actividad_4
                break
            case "5":
                actividad_final = Actividad_5
                break
            case "6":
                actividad_final = Actividad_6
                break
            case "7":
                actividad_final = Actividad_7
            case "8":
                actividad_final = Actividad_8
            case "9":
                actividad_final = Actividad_9
                break
            case "10":
                actividad_final = Actividad_10
                break
            case "11":
                actividad_final = Actividad_11
                break
            case "12":
                actividad_final = Actividad_12
                break
            case "13":
                actividad_final = Actividad_13
                break
            case "14":
                actividad_final = Actividad_14
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
            <component :is="actividad()" />
            <button @click="toggleModel" class="text-xl absolute top-4 right-4 p-2 cursor-pointer hover:scale-120 duration-200">
                ❌
            </button>
        </div>
    </div>
</template>