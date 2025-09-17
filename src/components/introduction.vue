<script setup>
    import { computed, ref } from 'vue';
    import Github from '../icons/Github.vue';
    import Linkendin from '../icons/Linkendin.vue';
    
</script>

<template>
    <section class="w-full sm:max-w-7/10 mx-auto my-12 flex flex-col items-center gap-12 " id="aparicion-i2">
        <div 
            class="relative w-full max-w-130 p-6 flex flex-col gap-5 border-2 border-stone-600 bg-white/10 sm:rounded-2xl shadow-stone-200/30 hover:shadow-2xl duration-200 "
        >
            <div class="flex flex-col items-center justify-center">
                <picture class="w-full">
                    <img 
                        src="../assets/Leo.png" 
                        alt="Foto de Leonardo Dillon"
                        class="w-42 sm:w-64 rounded-full mx-auto mb-4 bg-gray-300/30    "
                    >
                </picture>
                <h2 class="text-2xl sm:text-4xl text-center font-bold text-gray-100">LEONARDO DILLON</h2>
                <small class="text-lg sm:text-3xl text-gray-300/50">Programador Full-Stack</small>
            </div>
            <div class="py-4 space-y-2 text-center border-y border-white">
                <h3 class="text-lg sm:text-2xl font-semibold text-gray-300 italic">Resolviendo desafíos de programación</h3>
                <p class=" sm:text-lg text-gray-400 leading-relaxed max-w-prose ">
                Estoy resolviendo desafíos de programación para mejorar mis habilidades y enfrentar con eficacia los conflictos técnicos del desarrollo web.
                </p>
            </div>
            <div class="absolute -top-2 left-4 flex justify-center gap-3 mt-4">
                <a 
                    href="https://github.com/leo-dillon/" 
                    target="_blank" 
                    class="text-gray-500 hover:text-gray-200 font-medium transition-colors"
                    title="Ir a Github de Leonardo Dillon"
                >
                    <Github width="32" height="32" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/leonardo-dillon-jeannoteguy-1878b515a/" 
                    target="_blank" 
                    class="text-gray-500 hover:text-gray-200 font-medium transition-colors"
                    title="Ir a Linkedin de Leonardo Dillon"
                >
                    <Linkendin width="32" height="32"/>
                </a>
                </div>
        </div>
    </section>
</template>