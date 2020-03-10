<template lang="pug">
	section.reviews
		.container
			h2.title.reviews__title Блок "Отзывы"
			reviewEditForm(
				v-if="isEditModeOn"
				@closeEditForm="editReviewHandle"
			)
			reviewAddForm(
				v-if="isAddModeOn"
				@cancelAddingReview="addModeHandle"
				)
			reviewsList(
				v-if="!isAddModeOn && !isEditModeOn"
				@addNewReview="addModeHandle"
				:reviews="reviews"
				@editCurrentReview="editReviewHandle"
			)
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	components: {
		reviewAddForm: () => import ('./reviews/reviewAddNew'),
		reviewEditForm: () => import ('./reviews/reviewEditItem'),
		reviewsList: () => import ('./reviews/reviewsList')
	},
	data() {
		return {
			isAddModeOn: false,
			isEditModeOn: false
		}
	},
	methods: {
		...mapActions('reviews', ["fetchReviews"]),
		addModeHandle() {
			this.isAddModeOn = !this.isAddModeOn;
		},
		editReviewHandle() {
			this.isEditModeOn = !this.isEditModeOn;
		}
	},
	computed: {
		...mapState('reviews', {
			reviews: state => state.reviews
		})
	},
	created() {
		this.fetchReviews();
	}
}
</script>

<style lang="postcss" scoped>

.reviews {
  padding-top: 40px;
  background-image: url("../../images/content/mountain.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.reviews__title {
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
  padding-bottom: 20px;
}
</style>
