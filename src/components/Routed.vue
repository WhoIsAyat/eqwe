<template>
    <div class="container ">
        <div class="routedPage">     
                <router-view> </router-view>
        </div>
            
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 15px;
}
.routedPage{
    min-width: 100%;
    position: relative;
    padding: 20px 20px;
    min-height: 100%;
    display: flex;
}
.view{
    position: relative;
    min-width: 100%;
    min-height: 100%;
    font-size: 20px;
}


</style>