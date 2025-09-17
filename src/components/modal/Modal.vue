<script setup>

    import { useRoute } from 'vue-router';
    import Loading from './Loading.vue';
    import { computed, defineAsyncComponent } from 'vue';

    defineProps({
        open: Boolean,
        loading: Boolean,
        toggleModel: Function,
    })

    const modelRouter = useRoute()

    const actividad = computed(() => {
        const { name, act } = modelRouter.query
        try {
            if( !name || !act ){
                return null
            }
            return defineAsyncComponent( () => import(`../actividades/${name}/Actividad_${act}.vue`))
        } catch (error) {
            return null
        }
    })

</script>

<template>
    <div @click="toggleModel" v-if="open" class="fixed flex justify-center items-center top-0 w-screen h-screen bg-black/50 z-100">
        <div @click.stop v-if="loading"  class=" w-max max-w-9/10 p-4 flex flex-col items-center justify-center bg-orange-200 rounded-2xl">
            <Loading/>
        </div>
        <div @click.stop v-else class="relative w-full max-w-300 max-h-200 overflow-y-scroll p-4 flex flex-col justify-center bg-gray-800 rounded-2xl">
            <component :is="actividad" />
            <button @click="toggleModel" class="text-xl absolute top-4 right-4 p-2 cursor-pointer hover:scale-120 duration-200">
                ❌
            </button>
        </div>
    </div>
</template>