<template>
    <div class="container">
        <div class="grid-works">
            <div class="work-card" v-for="work in myWorks" :key="work.name">
                <img :src="work.img" :alt="work.name" class="work-img">
                <p class="card-name">{{ work.name }} </p>

                <p class="card-description">{{work.description}}</p>
                <div class="view-work-block">
                 <a href="#" class="show-work-online"><img src="../assets/image/main/icons/code-view/eye.svg" alt="" class="source-img"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const myWorks = [
    {
        img:'https://www.princesquay.com/wp-content/uploads/2018/11/vue-web.jpg',
        name:'Vue Cinema',
        description:'Создан с помощью HTML и CSS, во время 4 месяца обучения в PROWEB'
    },
    {
        img:'https://cdn-icons-png.flaticon.com/512/418/418231.png',
        name:'Секундомер (обычный)',
        description:'Простой секундомер, сделанный для освоения основ Js'
    },
    {
        img:'https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?w=360',
        name:'Soon...',
        description:'Soon...'
    }
]
</script>

<style lang="scss" scoped>
.container{
    max-width: 1320px;
    min-width: 100%;
    padding: 0 15px;
    margin: 0 auto;
}
.grid-works{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    animation-name: visibility;
    animation-duration: 1s;
}
.work-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background: transparent;
    padding: 15px;
    color: rgb(87, 100, 113);
    border: 3px solid rgb(43, 43, 45);
    border-radius: 20px;
    box-shadow:
    inset 0 -3em 3em rgba(255, 255, 255, 0.5),
          0 0  0 2px rgb(255, 255, 255),
          0.3em 0.3em 1em rgba(186, 179, 179, 0.3);
        }
.card-name{
    font-size: 25px;
}
.work-img{
    max-width: 300px;
    max-height: 200px;
  
}
.card-description{
    align-self: flex-start;
    font-size: 20px;
    color:dodgerblue;
}
.card-name-desc{
    color: antiquewhite;
    font-size: 25px;
    margin-bottom: 5px;
}
.view-work-block{
    width: 100px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .5s;
    border-radius: 25px;
    background: rgb(224, 224, 224);
}
.source-img{
    width: 50px;
}
.view-work-block:hover{
    background: rgb(42, 39, 39);
    transition: 1s;
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

@media (max-width: 1050px){
    .card-name{
        font-size: 20px;
    }
    .card-name-desc{
        font-size: 18px;
    }
    .card-description{
        align-self: flex-start;
        font-size: 15px;
        color:dodgerblue;
    }
}
@media (max-width: 950px) {
    .grid-works{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 820px) {
    .grid-works{
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 500px){
    .work-img{
        max-width: 200px;
    }
} 
</style>