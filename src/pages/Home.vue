<script setup>
    import { ref }          from 'vue';
    import { useRoute }     from 'vue-router';
    import Modal            from '../components/modal/Modal.vue';
    import Introduction     from '../components/introduction.vue';
    import Desafios from '../components/Desafios.vue';

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
        <Desafios :toggleModel="toggleModel"/>
    </main>
</template>