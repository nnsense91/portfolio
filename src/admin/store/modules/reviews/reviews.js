export default {
	namespaced: true,
	state: {
		reviews: []
	},
	mutations: {
		ADD_REVIEW(state, review) {
			state.reviews.push(review);
			console.log(state.reviews);
		}
	},
	actions: {
		async addNew(store, review) {
			try {
				const response = await this.$axios.post('/reviews', review);
				store.commit("ADD_REVIEW", response.data)
			} catch {
				//error
			}
		}
	}
}