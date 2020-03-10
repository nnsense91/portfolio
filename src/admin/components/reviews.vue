<template lang="pug">
	section.reviews
		.container
			h2.title.reviews__title Блок "Отзывы"
			reviewAddNew(
				v-if="isAddmodeOn"
				@cancelAddingReview="addModeHandle"
				)
			reviewsList(
				v-if="!isAddmodeOn"
				@addNewReview="addModeHandle"
			)
</template>

<script>
export default {
	components: {
		reviewAddNew: () => import ('./reviews/reviewAddNew'),
		reviewsList: () => import ('./reviews/reviewsList')
	},
	data() {
		return {
			isAddmodeOn: false
		}
	},
	methods: {
		addModeHandle() {
			this.isAddmodeOn = !this.isAddmodeOn;
		}
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
