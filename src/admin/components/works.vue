<template lang="pug">
	section.works
		.container
			h2.works__title.title Блок "Работы"
			worksAddForm(
				v-if="isAddModeOn"
				@closeAddForm="addModeHandle"
			)
			worksList(
				:works="works"
				v-if="!isAddModeOn && !isEditModeOn"
				@openAddForm="addModeHandle"
				@editModeOn="editModeHandle"
			)
			worksEditForm(
				v-if="isEditModeOn"
				@closeEditForm="editModeHandle"
			)
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	components: {
		worksAddForm: () => import ("./works/worksAddNew"),
		worksEditForm: () => import ("./works/worksEditItem"),
		worksList: () => import ("./works/worksList"),
	},
	data() {
		return {
			isEditModeOn: false,
			isAddModeOn: false
		}
	},
	methods: {
		...mapActions('works',['fetchWorks']),
		addModeHandle() {
			this.isAddModeOn = !this.isAddModeOn;
		},
		editModeHandle() {
			this.isEditModeOn = !this.isEditModeOn;
		}
	},
	computed: {
		...mapState('works', {
			works: state => state.works
		})
	},
	async created() {
		try {
			await this.fetchWorks();
		} catch(error) {
			//error
		}
	},
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