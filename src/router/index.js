import {createRouter, createWebHistory} from 'vue-router';
import Intro from '../pages/Intro.vue';
export const  routers = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name: 'intro', component: Intro},
        {path:'/MyWorks', name:'MyWorks', component: ()=> import('../pages/MyWorks.vue')},
        {path:'/About', name:'AboutMe', component: ()=> import('../pages/About.vue')},
        {path:'/MySkills', name:'MySkills', component: ()=> import('../pages/MySkills.vue')}
    ]
})