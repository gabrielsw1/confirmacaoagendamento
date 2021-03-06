import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Main from '@/views/Main'
import Stepper from '@/components/Stepper'
import Perfil from '@/components/Perfil'
import Institucional from '@/components/Institucional'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Login
    },
    {
        path: '/Main',
        component: Main,
        children: [
            { path: '/agendamentos', component: Stepper },
            { path: '/perfil', component: Perfil },
            { path: '/institucional', component: Institucional },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router