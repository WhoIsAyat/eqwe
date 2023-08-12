<template>
    <div class="container">
        <div class="block">
            <p class="intro-center">Welcome To My Portfolio Website</p>
        
           <div class="Immortalrio-block"> <span class="span-ImmortalRio i">I</span><span class="span-ImmortalRio m">M</span><span class="span-ImmortalRio m2">M</span><span class="span-ImmortalRio o">O</span><span class="span-ImmortalRio r">R</span><span class="span-ImmortalRio t">T</span><span class="span-ImmortalRio a">A</span><span class="span-ImmortalRio l">L</span><span class="span-ImmortalRio r2">R</span><span class="span-ImmortalRio i2">I</span><span class="span-ImmortalRio o2">O</span><span class="span-ImmortalRio n2">2</span><span class="span-ImmortalRio  n7">7</span></div>
        </div>
      
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
    width: 1320px;
    min-width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}
.block{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}
.intro-center{
    font-size: 25px;
    font-family: monospace;
    animation-name: visibility;
    animation-duration: 2s;
    display: block;
}
.Immortalrio-block{
    margin-top: 25px;
}
.span-ImmortalRio{
    color: white;
    font-size: 20px;
    font-family: serif;
}

/*                                     !Анимация на ник!                            */
.i{
   animation-name: wordVisibility;
   animation-duration: 1s;
    display: inline;

}
.m{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 2s;
}
.m2{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 2.2s;
}
.o{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 2.4s;
}
.r{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 2.6s;
}
.t{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 2.8s;
}
.a{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 3s;
}
.l{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 3.2s;
}
.r2{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 3.4s;
}
.i2{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 3.6s;
}
.o2{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 3.8s;
}
.n2{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 4s;
}
.n7{
    display: inline;
    animation-name: wordVisibility;
    animation-duration: 4.2s;
}
span{
    display: none;
}

/*                                     конец                           */


@keyframes wordVisibility {
    0%{
        opacity: 0;
    }
    20%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    
}
@keyframes visibility {
    0%{
        opacity: 0;
    }
    10%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}
@media (max-width: 500px) {
    .block{
       align-items: start;
    }
    span{
        font-size: 15px;
    }
    .intro-center{
        font-size: 20px;
    }
}
@media (max-width: 900px){
    .block{
        max-height: 50vh;
    }
}
</style>