export default {
    namespaced: true,
    state: {
        skills: []
    },
    mutations: {
        SET_SKILLS(state, skills) {
            state.skills = skills;
        },
        ADD_SKILL(state, skill) {
            state.skills.push(skill);
        },
        REMOVE_SKILL(state, removedSkillId) {
            state.skills = state.skills.filter(skill => skill.id !== removedSkillId);
            //кладем в skills только скиллы с id не равные удаленному
        },
        EDIT_SKILL (state, editedSkill) {
            state.skills = state.skills.map(skill => {
                return skill.id === editedSkill.id ? editedSkill : skill;
            });
        }
    },
    actions: {
        async addSkill(store, newSkill) {
            try {
                const response = await this.$axios.post("/skills", newSkill)
								store.commit("ADD_SKILL", response.data)
            } catch(error) {
								console.log(error.response.data);
            }
        },
        async fetchSkills(store) {
            try {
								const response = await this.$axios.get("/skills/170");
								                
                store.commit("SET_SKILLS", response.data);
            } catch (error) {
                //error
            }
        },
        async removeSkill(store, skillId) {
            try {
                const response = await this.$axios.delete(`/skills/${skillId}`)
                store.commit("REMOVE_SKILL", skillId)
            } catch {
                //error
            }
        },
        async editSkill(store, skill) {
            try {
                const response = await this.$axios.post(`/skills/${skill.id}`, skill);
                store.commit("EDIT_SKILL", skill)
            } catch(error) {

            }
        }
    }
};