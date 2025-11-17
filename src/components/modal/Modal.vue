<script setup>

    import { useRoute, useRouter } from 'vue-router';
    import Loading from './Loading.vue';
    import { computed, defineAsyncComponent, onMounted } from 'vue';
    
    const props = defineProps({
        open: Boolean,
        loading: Boolean,
        toggleModel: Function,
    })
    
    const modelRouter = useRoute()
    const router = useRouter()
    
    const closeModal = () => {
        props.toggleModel()
        router.replace({ query: {} });
    }

    const actividad = computed(() => {
        const { name, act } = modelRouter.query
        try {
            if( !name || !act ){
                return null
            }
            return defineAsyncComponent({
                loader: () => import(`../actividades/${name}/Actividad_${act}.vue`),
                errorComponent: {
                    template: '<div class="text-red-500">Error loading component</div>'
                },
                onError(err) {
                    console.error("Error loading component:", err);
                    props.toggleModel(false)
                },
                delay: 200,
                timeout: 3000
            })
        } catch (error) {
            return null
        }
    })

    onMounted( () => {
        const { name, act } = modelRouter.query
        if( name && act ){
            props.toggleModel(true)
        }
    })


</script>

<template>
    <div @click="() => closeModal()" v-if="open" class="fixed flex justify-center items-center top-0 w-screen h-screen bg-black/50 z-100">
        <div @click.stop v-if="loading"  class="p-4 flex flex-col items-center justify-center bg-orange-200 rounded-2xl">
            <Loading/>
        </div>
        <div @click.stop v-else class="relative w-fit overflow-y-scroll px-4 sm:mx-4flex flex-col justify-center bg-zinc-800 rounded-2xl" id="scroll">
            <p v-if="!actividad">Error</p>
            <component :is="actividad" />
            <button @click="() => closeModal()" class="flex items-center text-md absolute top-2 sm:top-4 right-2 sm:right-4 p-2 cursor-pointer hover:scale-120 duration-200 ">
                ❌
            </button>
        </div>
    </div>
</template>

<style scoped>
#scroll {
  scrollbar-color: #4a5565 transparent;
  scrollbar-width: thin;
}
</style>