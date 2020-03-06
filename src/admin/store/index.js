import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skillsCategories from "./modules/skills/categories";
import user from "./modules/user";
import skills from "./modules/skills/skills";
import works from "./modules/works/works";

export default new Vuex.Store({
    modules: {
        skillsCategories,
        user,
		skills,
		works
    }
})