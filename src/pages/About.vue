<template>
    <div class="container btn-block">
        <div class="left-side"><div class="image">
        
            <img :src="avatar" alt="">
        </div></div>
        <div class="right-side"><h2>ImmortalRio27</h2>
        <p v-for="info in info32" :key="info.id" class="info-section-p">{{info.info}}</p>
     
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
let avatarImg = 'avatar.jpg'
const avatar = new URL(`../assets/image/header/avatar/${avatarImg}`, import.meta.url).href;
const info32 = ref([{
     info:'Frontend Developer',
     id:1
},
{
     info:'Возраст: 17лет',
     id:2
},
{
     info:'Город: Ташкент',
     id:3
},
{
     info:`Опыт разработки: 10 месяцев`,
     id:4
},])



</script>

<style lang="scss" scoped>
.right-side{
    max-height: 350px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    margin-left: 15px;
}
.btn-block{
display: flex;
align-items: center;
justify-content: space-evenly;
 height: 500px;
padding: 15px;
animation-name: visibility;
animation-duration: 1.1s;

}
.image{
    max-width: 400px;
    max-height: 350px;
    border: 3px solid white;
    padding: 10px;

}
.image img{
    width: 100%;
    height: 100%;
    border: 3px solid whitesmoke;
}
.btn{
    color: white;

}

.center-text{
    align-self: center;
}
.center-text{
    font-size: 25px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(26, 3, 68);
}
.info-section-p:hover{
    color:chocolate;
    text-decoration: underline;
    transition: .2s;
    cursor: pointer;
}
@keyframes visibility {
    0%{
        opacity: 0;
    }
    20%{
        opacity: 0.2;
    }
    40%{
        opacity: 0.4;
    }
    50%{
        opacity: .5;
    }
    70%{
        opacity: 0.7;
    }
    80%{
        opacity: 0.8;
    }
    90%{
        opacity: 0.9;
    }
    100%{
        opacity: 1;
    }
}

@media (max-width: 750px) {
    .btn-block{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
}
</style>