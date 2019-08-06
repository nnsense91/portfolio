export default {
    namespaced: true,
    state: {
        skills: []
    },
    actions: {
        addSkill(store, newSkill) {
            this.$axios.post("/skills", newSkill);
        }
    }
};