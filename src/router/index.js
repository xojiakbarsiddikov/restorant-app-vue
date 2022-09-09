import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/vHome'
import SignUp from '@/components/SignUp'


const routes = [
    {
        path: '/',
        name: 'vHome',
        component: Home
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
