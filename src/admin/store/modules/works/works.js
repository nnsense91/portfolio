export default {
	namespaced: true,
	state: {
		works: []
	},
	mutations: {
		ADD_WORK(state, newWork) {
			state.works.push(newWork);
		},
		SET_WORKS(state, works) {
			state.works = works;		
		}
	},
	actions: {
		async addWork(store, newWork) {
			try {
				const response = await this.$axios.post('/works', newWork);
				store.commit("ADD_WORK", response.data);
			} catch(error) {
				console.log(error);
			}
		},
		async fetchWorks(store) {
			try {
				const response = await this.$axios('works/170');
				store.commit("SET_WORKS", response.data);
			} catch (error) {
				//error
			}
		}
	},
}