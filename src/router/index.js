import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Home from '../views/Home.vue'
import Expertise from '../views/Expertise.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/expertise',
        name: 'Expertise',
        component: Expertise
    },
    {
        path: '/work',
        name: 'Work',
        component: Work
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router