<script setup>

    import { ref } from 'vue';
    import Introduction from '../components/introduction.vue';
    import ListaDesafios from '../components/ListaDesafios.vue';
    import Modal from '../components/modal/Modal.vue';
    import { useRoute} from 'vue-router';
    
    const modelRouter = useRoute()
    const open = ref(false)
    const loading = ref(true)

    const toggleModel = () => {
        open.value = !open.value
        if(loading.value){
            setTimeout(() => {
                loading.value = false
            }, 1000)
        }else{
            loading.value = true
        }
    }
</script>

<template>
    <main>
        <Modal 
            :open="open" 
            :loading="loading" 
            :toggleModel="toggleModel" 
        />
        <Introduction />
        <ListaDesafios :toggleModel="toggleModel"/>
    </main>
</template>