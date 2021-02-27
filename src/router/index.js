import Vue from 'vue'
import VueRouter from 'vue-router'
//Modules
import Auth from '@/router/modules/auth.js'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
            title: 'Seja bem Vindo'
        }
    },

    ...Auth
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router