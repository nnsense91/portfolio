export default {
    namespaced: true,
    state: {
        skills: []
    },
    actions: {
        async addSkill(store, newSkill) {
            try {
                const response =  await this.$axios.post("/skills", newSkill);
            } catch (error){
                throw new Error(
                    error.response.data.error || error.response.data.message
                )
            }
        }
    }
};