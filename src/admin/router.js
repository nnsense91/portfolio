import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios';
import store from './store';

Vue.use(VueRouter);

const baseURL = "https://webdev-api.loftschool.com/"
const guard = axios.create({
	baseURL
});

const routes = [
    {
        path: "/",
				component: () => import ("./components/about.vue")
    },
    {
        path: "/works",
        component: () => import ("./components/works.vue")
    },
    {
        path: "/reviews",
        component: () => import ("./components/reviews.vue")
    },
    {
        path: "/login",
				component: () => import ("./components/login.vue"),
				meta: {
					public: true
				}
    }
];

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
	const isPublicRoute = to.matched.some(record => record.meta.public);
	const isUserLogged = store.getters["user/userIsLogged"];

	if (isPublicRoute === false && isUserLogged === false) {
		const token = localStorage.getItem("token");
		guard.defaults.headers["Authorization"] = `Bearer ${token}`;

		try {
			const response = await guard.get("/user");
			store.commit("user/SET_USER", response.data.user);
			next();
		} catch (error) {
			router.push('/login');
			localStorage.removeItem("token");
		}
	} else {
		next();
	}
	
});

export default router;