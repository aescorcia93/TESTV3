import { createWebHistory, createRouter } from "vue-router";
import Custormerlist from "@/components/Customerlist.vue";
import Customersettings from "@/components/Customersettings.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Custormerlist
    },
    {
        path: "/customers",
        name: "customerlist",
        component: Custormerlist,
    },
    {
        path: "/customers/:id",
        name: "customeredit",
        component: Customersettings,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;