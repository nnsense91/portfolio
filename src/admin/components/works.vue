<template lang="pug">    
	section.works
		.container
			h2.works__title.title Блок "Работы"
			worksEditForm(
				v-if="isEditModeOn"
				@closeEditForm="editModeHandle"
			)
			worksList(
				v-if="!isEditModeOn"
				@openEditForm="editModeHandle"
			)
</template>

<script>
export default {
	data() {
		return {
			isEditModeOn: false
		}
	},
	components: {
		worksEditForm: () => import ("./works/worksEditForm"),
		worksList: () => import ("./works/worksList")
	},
	methods: {
		editModeHandle() {
			this.isEditModeOn=!this.isEditModeOn;
		}
	}
}
</script>

<style lang="postcss" scoped>
	.works {
		padding-top: 40px;
		background-image: url("../../images/content/mountain.jpg");
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	
	.works__title {
		font-size: 21px;
		font-weight: bold;
		color: #414c63;
	}
</style>