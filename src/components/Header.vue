<template>
    <div class="wrapper">
        <div class="box">
        <div class="container">
        <nav class="nav">
            <div class="navigation-block">
                <a href="#" class="header__logo-link"><router-link to="/"><img :src="imageUrl" alt="ImmortalRio27" class="logo"></router-link></a>
                <ul class="ul">
                    <li class="list"  id="list-link"><router-link to="/About" class="link">About</router-link></li>
                    <li class="list" id="list-link"><router-link to="/MySkills" class="link">My Skills</router-link></li>
                    <li class="list" id="list-link"><router-link to="/MyWorks" class="link">My Works</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
    <RoutedPage/>
    </div>
    <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
     </ul>
</div>
</template>

<script setup>
// imports
import {ref} from 'vue';
import RoutedPage from '../components/Routed.vue'

// Var

let logo = 'vue.svg'
const imageUrl = new URL(`../assets/image/header/logo/${logo}`, import.meta.url).href;

</script>

<style lang="scss" scoped>

//Animated Bg
@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #19191f;
    overflow: hidden;
    z-index: -55;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 19s linear infinite;
}




.background li:nth-child(0) {
    left: 16%;
    width: 142px;
    height: 142px;
    bottom: -142px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 30%;
    width: 106px;
    height: 106px;
    bottom: -106px;
    animation-delay: 1s;
}
.background li:nth-child(2) {
    left: 35%;
    width: 126px;
    height: 126px;
    bottom: -126px;
    animation-delay: 4s;
}
.background li:nth-child(3) {
    left: 20%;
    width: 108px;
    height: 108px;
    bottom: -108px;
    animation-delay: 5s;
}
.background li:nth-child(4) {
    left: 64%;
    width: 156px;
    height: 156px;
    bottom: -156px;
    animation-delay: 10s;
}
.background li:nth-child(5) {
    left: 44%;
    width: 153px;
    height: 153px;
    bottom: -153px;
    animation-delay: 7s;
}
.background li:nth-child(6) {
    left: 73%;
    width: 167px;
    height: 167px;
    bottom: -167px;
    animation-delay: 25s;
}
.background li:nth-child(7) {
    left: 45%;
    width: 102px;
    height: 102px;
    bottom: -102px;
    animation-delay: 15s;
}
.background li:nth-child(8) {
    left: 23%;
    width: 101px;
    height: 101px;
    bottom: -101px;
    animation-delay: 40s;
}
.background li:nth-child(9) {
    left: 20%;
    width: 129px;
    height: 129px;
    bottom: -129px;
    animation-delay: 44s;
}
.background li:nth-child(10) {
    left: 26%;
    width: 191px;
    height: 191px;
    bottom: -191px;
    animation-delay: 40s;
}
.background li:nth-child(11) {
    left: 86%;
    width: 120px;
    height: 120px;
    bottom: -120px;
    animation-delay: 37s;
}
.background li:nth-child(12) {
    left: 54%;
    width: 108px;
    height: 108px;
    bottom: -108px;
    animation-delay: 43s;
}
.background li:nth-child(13) {
    left: 33%;
    width: 154px;
    height: 154px;
    bottom: -154px;
    animation-delay: 23s;
}
.background li:nth-child(14) {
    left: 25%;
    width: 197px;
    height: 197px;
    bottom: -197px;
    animation-delay: 20s;
}
.background li:nth-child(15) {
    left: 19%;
    width: 117px;
    height: 117px;
    bottom: -117px;
    animation-delay: 10s;
}
.background li:nth-child(16) {
    left: 23%;
    width: 109px;
    height: 109px;
    bottom: -109px;
    animation-delay: 24s;
}
.background li:nth-child(17) {
    left: 29%;
    width: 167px;
    height: 167px;
    bottom: -167px;
    animation-delay: 30s;
}
.background li:nth-child(18) {
    left: 0%;
    width: 175px;
    height: 175px;
    bottom: -175px;
    animation-delay: 43s;
}
.background li:nth-child(19) {
    left: 44%;
    width: 196px;
    height: 196px;
    bottom: -196px;
    animation-delay: 48s;
}
.background li:nth-child(20) {
    left: 83%;
    width: 106px;
    height: 106px;
    bottom: -106px;
    animation-delay: 11s;
}



.wrapper{
    position: relative;
    min-height: 100vh;
    margin-bottom: 45px;

   
 
}
.container{
    max-width: 100vw;
    margin: 0 auto;
    padding: 0 15px;
}
.navigation-block{
    display: flex;
    justify-content: space-between;
    padding: 30px 30px;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
.logo{
    height: 50px;
    width: 50px;
    color: white;
    font-size: 25px;
    transition: color .5s;
    animation-name: opacityAnimated;
    animation-duration: 3s;
}
.logo:hover{
    color: black;
    transition: .5s;
}
.ul{
    position: relative;
    display: flex;
    justify-content: center;
    gap: 30px;
    animation-name: opacityAnimated;
    animation-duration: 3s;

    .music-btn{
        padding: 5px;
        font-size: 15px;
        color: white;
        border: none;
        background: transparent;
    }
}
li{
    transition: color .5s;
}
li:hover{
    color:rgb(63, 57, 66);
    transition: .5s;
}
.link{
    color:white;
    position: relative;
    transition: .5s;
}
.link:hover{
    color:rgb(79, 88, 88);
    transition: .5s;
    background: gray;
    padding: 15px;

}
.router-link-exact-active{
    color:rgb(79, 88, 88);
    position: relative;
}
.router-link-exact-active::before{
    content: '';
    position: absolute;
    width:100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background: rgb(244, 230, 230);
}

@keyframes opacityAnimated {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media (max-width: 430px){
    .navigation-block{
        padding: 20px 10px;
        .ul{
            font-size: 15px;
        }
    }
}
@media (max-width: 350px){
    .ul{
        gap: 10px;
    }
}
</style>