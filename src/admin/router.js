import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from "./components/about.vue";
import works from "./components/works.vue";
import reviews from "./components/reviews.vue";
import login from "./components/login.vue";

const routes = [
    {
        path: "/",
        component: about
    },
    {
        path: "/works",
        component: works
    },
    {
        path: "/reviews",
        component: reviews
    },
    {
        path: "/login",
        component: login
    }
];

export default new VueRouter({ routes });