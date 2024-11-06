import {routes} from "./router.js";
import {createRouter, createWebHashHistory} from "vue-router";

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})