<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="relative min-h-150 flex flex-col items-center justify-center bg-[#0C0A09] overflow-hidden px-6 text-center"
  >
    <!-- Fondo decorativo SVG -->
    <svg
      class="absolute inset-0 opacity-10 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,224L60,229.3C120,235,240,245,360,245.3C480,245,600,235,720,213.3C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>

    <!-- Contenido principal -->
    <div
      class="z-10 flex flex-col items-center"
    >
      <!-- Logo -->
      <picture class="mb-8">
        <img
          class="w-20 h-20 md:w-24 md:h-24 object-contain animate-fade-in"
          src="../assets/whiteLogo.png"
          alt="Logo de Leonardo Dillon"
          title="Logo de Leonardo Dillon"
        />
      </picture>

      <!-- Título -->
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-3">
        Error 404
      </h1>

      <!-- Subtítulo -->
      <p class="text-gray-400 text-lg md:text-xl mb-8 max-w-md">
        La página que estás buscando no existe o fue movida.  
        Volvamos al inicio y sigamos explorando.
      </p>

      <!-- Botón -->
      <RouterLink
        to="/"
        class="px-6 py-3 rounded-full border border-gray-500 text-gray-100 hover:bg-gray-800 hover:text-white transition duration-300"
      >
        Volver al inicio
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
