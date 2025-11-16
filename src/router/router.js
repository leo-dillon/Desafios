import Error from "../pages/Error.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
    {
        path: "/",
        name: "Desafios - Home",
        component: Home
    },
    {
        path: "/:patchMatch(.*)*",
        name: "Desafios - Error",
        component: Error
    }
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route

