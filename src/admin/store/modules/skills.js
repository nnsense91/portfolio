export default {
    namespaced: true,
    state: {
        skills: []
    },
    mutations: {
        SET_SKILLS(state, skills) {
            state.skills = skills
        },
        ADD_SKILL(state, skill) {
            state.skills.push(skill);
        }
    },
    actions: {
        async addSkill(store, newSkill) {
            try {
                const response = await this.$axios.post("/skills", newSkill)
                store.commit("ADD_SKILL", response.data)
            } catch(error) {
                throw new Error (
                    error.response.data.error || error.response.data.message
                    )
            }
        },
        async fetchSkills(store) {
            try {
                const response = await this.$axios.get("/skills/170");
                // const { data: skills } = await this.$axios("/skills/170"); - можно вытащить объект data при помощи деструктуризации и дать имя переменной, которая его содержит  skills.
                store.commit("SET_SKILLS", response.data);
            } catch (error) {
                //error
            }
        }
    }
};