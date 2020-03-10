export default {
	namespaced: true,
	state: {
		works: [],
		currentWork: {}
	},
	mutations: {
		ADD_WORK(state, newWork) {
			state.works.push(newWork);
		},
		SET_WORKS(state, works) {
			state.works = works;		
		},
		REMOVE_WORK(state, removingWork) {
			state.works = state.works.filter(work => work.id !== removingWork);
		},
		SET_CURRENT_WORK(state, edittingWork) {
			state.currentWork = edittingWork;
		},
		EDIT_WORK(state, edittingWork) {
			state.works = state.works.map(work => {
				return edittingWork.id === work.id ? edittingWork : work;
			})
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
				const response = await this.$axios.get('works/170');
				store.commit("SET_WORKS", response.data);
			} catch (error) {
				console.log(error);
			}
		},
		async removeWork(store, workId) {
			try {
				const response = await this.$axios.delete(`/works/${workId}`);
				store.commit("REMOVE_WORK", workId)
			} catch (error) {
				console.log(error);
			}
		},
		setCurrentWork(store, work) {
			store.commit("SET_CURRENT_WORK", work)
		},
		async editWork(store, work) {
			
			const data = new FormData();

			data.append('photo', work.photo);
			data.append('title', work.title);
			data.append('techs', work.techs);
			data.append('description', work.description);
			data.append('link', work.link);

			try {
				const response = await this.$axios.post(`/works/${work.id}`, data);
				store.commit("EDIT_WORK", response.data.work);
			} catch (error) {
				//errror
			}
		}
	},
}