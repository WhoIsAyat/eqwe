<template>
    <div class="container">
        <div class="skills-nav">
        <div class="my-skills">
            <div :class="skill.class" v-for="skill in skills" :key="skill.id">
                <div class="skill-img-block"><img :src="skill.img" :alt="skill.name"></div>
                <div class="skill-name-block"><p class="skill-name">{{skill.name}}</p></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
//Img import

import html from '../assets/image/main/skills/html5.svg'
import css from '../assets/image/main/skills/css.svg'
import js from '../assets/image/main/skills/js.svg'
import twind from '../assets/image/main/skills/tailwindcss.svg'
import bt5 from '../assets/image/main/skills/bootstrap.svg'
import php from '../assets/image/main/skills/php.svg'
import python from '../assets/image/main/skills/python.svg'
import git from '../assets/image/main/skills/git.svg'
import viteimg from '../assets/image/main/skills/vitejs.svg'
import vueimg from '../assets/image/main/skills/vue.svg'
//end
import {ref} from 'vue'
const skills = ref([{
    name:'html5', id:1,
    img:html,
    class:'skills-block  shake-hard'
},
{
       name:'css3',
    id:2, 
    img:css,
    class:'skills-block'
},
{
       name:'JavaScript',
    id:3, 
    img:js,
    class:'skills-block shake-hard'
},
{
       name:'TailWind',
    id:4, 
    img:twind,
    class:'skills-block'
},
{
       name:'Bootstrap5',
    id:5, 
    img:bt5,
    class:'skills-block'
},
{
       name:'VueJs',
    id:6, 
    img:vueimg,
    class:'skills-block shake-hard'
},
{
       name:'Vite',
    id:7, 
    img:viteimg,
    class:'skills-block'
},
{
       name:'GIT',
    id:8, 
    img:git,
    class:'skills-block shake-hard'
},
{
       name:'PHP(BASIC)',
    id:9, 
    img:php,
    class:'skills-block shake-hard'
},
{
       name:'Python(BASIC)',
    id:10, 
    img:python,
    class:'skills-block'
},])
</script>

<style lang="scss" scoped>
.skills-nav{
    display: flex;
    justify-content: center;
    width: 100%;
    animation-name: visibility;
    animation-duration: 1s;
}
.container{
    max-width: 1320px;
    min-width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}

.my-skills{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 20px;
}
.skills-block:hover{
 
    transition: .5s;
    cursor: pointer;
    .skill-img-block{
        transform: rotateY(180deg);
    }
    .skill-name-block{
        transform: rotateY(360deg);
    }



    .skill-name{
        color: white;
    }
}
.skills-block{
    margin-top: 50px;
    min-height: 200px;
    min-width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background: transparent;

    background: transparent;
    transition: .5s;
    position: relative;
    perspective: 1000px;
    animation-name: clickMe;


    .skill-img-block{
        background-color: azure;
    }   
    .skill-name-block{
        background-color: gray;
        transform: rotateY(180deg);
    }
    .skill-img-block, .skill-name-block{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content:center;
        align-items: center;
        transition: 1s;
        backface-visibility: hidden;
        border-radius: 10px;
    }



    .skill-name{
        color: rgba(0, 0, 0, 0.57);
        text-transform:uppercase;
    }
   
    img{
        width: 100px;
        height: 80px;
    }
}
.shake-hard{
    animation: shake;
    animation-duration: 7s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
}
.shake-hard:hover{
    animation: none;
}
@keyframes shake {
10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }
20% { -webkit-transform: translate(-4px, 0px) rotate(1deg); }
30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
40% { -webkit-transform: translate(0px, 0px) rotate(0deg); }
50% { -webkit-transform: translate(0px, 0px) rotate(0deg); }
60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }
70% { -webkit-transform: translate(0px, 0px) rotate(0deg); }
80% { -webkit-transform: translate(0px, 0px) rotate(0deg); }
90% { -webkit-transform: translate(7px, 2px) rotate(0deg); }
100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }
}

@media (max-width:1050px){
    .my-skills{
        display: grid;
        grid-template-columns: repeat(3, 1fr) !important;
    }
}
@media (max-width:850px){
    .my-skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr) !important;
    }
    
}
@media (max-width:600px){
    .my-skills{
        display: grid;
        grid-template-columns: 1fr !important;
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
@keyframes clickMe {
    0%{
        transform: translate(0);
    }
    20%{
        transform:rotate(90deg);
    }
    60%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>