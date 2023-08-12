<template>
    <div>
        <Header/>
        <Footer/>
    </div>

</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<style lang="scss" scoped>
@media (max-width: 900) {
    .wrapper{
        max-height: 70vh;
    }
}
@media (max-width: 500) {
    .wrapper{
        max-height: 50vh;
    }
}
</style>