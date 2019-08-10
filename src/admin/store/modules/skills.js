export default {
    namespaced: true,
    state: {
        skills: []
    },
    mutations: {
        SET_SKILLS(state, skills) {
            state.skills = skills;
        }
    },
    actions: {
        async addSkill(store, newSkill) {
            try {
                const response = await this.$axios.post("/skills", newSkill);
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                )
            }
        },
        async fetchSkills(store) {
            try {
                response = await this.$axios("/skills/170");
                const skills = response.data.skills;
                console.log(response.data);
                store.commit("SET_SKILLS", skills);
            } catch (error) {
                //Error
            }
        }
    }
};