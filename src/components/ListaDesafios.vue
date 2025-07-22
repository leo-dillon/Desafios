<script setup>
    import { RouterLink } from 'vue-router';
    import { onMounted, ref } from 'vue';

    defineProps({
        toggleModel: Function
    })

    let actividades = ref({})
    let loading = ref(false)

    onMounted( async () => {
        try {
            buscarActividades()
            setTimeout(() => {
                loading.value = true
            }, 500);
        } catch (error) {
            console.error(error)
        }
    }) 

    async function buscarActividades(dificultad = ""){
        let res = await fetch("./src/json/actividades.json")
        let data = await res.json()
        if(dificultad != ""){
            data = data.filter((act) => act.dificultad == dificultad)
        }
        actividades.value = data
    }

    function iconoDificultad(dificultad){
        let icon
        switch (dificultad) {
            case "facil":
                icon = "🟢"
                break;
            case "medio":
                icon = "🟠"
                break
            case "dificil":
                icon = "🔴"
            default:
                icon = "⚫"
                break;
        }
        return icon
    }

</script>

<template>
    <section class="w-full max-w-9/10 sm:max-w-300 mx-auto mt-12 flex flex-col">
        <h2 class="w-full text-start text-3xl text-gray-200">
            Desafios - Resueltos
        </h2>
        <div>
            <div class="my-3 flex justify-start items-center gap-4">
                <button @click="buscarActividades('facil')" class="px-4 text-gray-500 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200"> 
                    Facíl 🟢
                </button>
                <button @click="buscarActividades('medio')" class="px-4 text-gray-500 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200"> 
                    Intermedio 🟠
                </button>
                <button class="px-4 text-gray-500 border border-gray-600 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-900 duration-200"> 
                    Difícil 🔴
                </button>

            </div>
            <ul class="bg-gray-800 rounded-2xl">
                <li v-if="loading" v-for="act in actividades" class="px-4 py-2 w-full max-full-100 flex items-center hover:bg-gray-700">
                    <span class="mr-4 px-2 text-2xl text-gray-300 border-x border-gray-600"> {{ act.id }}</span>
                    <h3 class="w-full text-lg text-gray-300"> {{ act.nombre }} </h3>
                    <small class="mx-4 px-2 text-2xl border-x border-gray-600"> 
                        {{ iconoDificultad(act.dificultad) }}
                    </small>
                    <RouterLink :to="act.link" @click="toggleModel" class="min-w-max text-gray-500 hover:text-gray-300 duration-200"> Ver Solución </RouterLink>
                </li>
                <p v-else class="px-4 py-2 w-full text-lg text-gray-300">Cargando ...</p>
                <li v-if="loading && actividades.length == 0" class="px-4 py-2 w-full max-full-100 flex items-center hover:bg-gray-700">
                    <h3 class="w-full text-lg text-gray-300"> No tienes actividades en está dificultad </h3>
                </li>
            </ul>
        </div>
    </section>
</template>