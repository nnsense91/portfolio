export default {
	namespaced: true,
	state: {
		reviews: [],
		currentReview: {}
	},
	mutations: {
		ADD_REVIEW(state, review) {
			state.reviews.push(review);
		},
		SET_REVIEWS(state, reviews) {
			state.reviews = reviews;
		},
		REMOVE_REVIEW(state, removingReviewId) {
			state.reviews = state.reviews.filter(review => review.id !== removingReviewId);
		},
		SET_CURRENT_REVIEW(state, currentReview) {
			state.currentReview = currentReview;
		},
		EDIT_REVIEW(state, edittingReview) {
			state.reviews = state.reviews.map(review => {
				console.log(edittingReview.photo);
				return edittingReview.id === review.id ? edittingReview : review;
			})
		}
	},
	actions: {
		async addNew(store, review) {
			try {
				const response = await this.$axios.post('/reviews', review);
				store.commit("ADD_REVIEW", response.data);
			} catch {
				//error
			}
		},
		async fetchReviews(store) {
			try {
				const response = await this.$axios.get('/reviews/170');
				store.commit("SET_REVIEWS", response.data);
			} catch {
				//error
			}
		},
		async removeReview (store, reviewId) {
			try {
				const response = await this.$axios.delete(`/reviews/${reviewId}`);
				store.commit("REMOVE_REVIEW", reviewId)
			} catch {
				//error
			}
		},
		setCurrentReview(store, review) {
			store.commit("SET_CURRENT_REVIEW", review);
		},
		async editReview(store, currentReview) {
			
			const reviewData = new FormData();

			reviewData.append('photo', currentReview.photo);
			reviewData.append('author', currentReview.author);
			reviewData.append('occ', currentReview.occ);
			reviewData.append('text', currentReview.text);

			try {
				const response = await this.$axios.post(`/reviews/${currentReview.id}`, reviewData);
				store.commit("EDIT_REVIEW", response.data.review)
			} catch {
				//error
			}
		}
	}
}