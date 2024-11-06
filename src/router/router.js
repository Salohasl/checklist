import Home from "../pages/Home.vue";
import Checklist from "../pages/Checklist.vue";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/checklist',
        name: 'checklist',
        component: Checklist
    }
]