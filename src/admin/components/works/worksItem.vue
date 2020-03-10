<template lang="pug">
	li.works__item
		.works__pic-block
			img(
				:src="getAbsoluteImgPath"
				class="works__pic"
				alt=""
			)
		.works__content
			h3.works__title {{work.title}}
			p.works__desc {{work.description}}
			a(:href="work.link").works__link {{work.link}}
			ul.works-form__tag-list
				li(
					v-for="tag in tags"
				).works-form__tag-item
					.works-form__tag-name {{tag}}
			.works__controls
				button(
					type="button"
					title="Редактировать"
					@click="editModeOn"
					).btn-edit.btn-edit--works Править
				button(
					type="button"
					title="Удалить"
					@click="removeCurrentWork"
				).btn-discard.btn-discard--works Удалить
</template>

<script>
import requests  from "../../requests.js";
import { mapActions } from 'vuex';

export default {
	props: {
		work: Object
	},
	data() {
		return {
			tags: []
		}
	},
	methods: {
		...mapActions('works', ['removeWork', 'setCurrentWork']),
		async removeCurrentWork() {
			try {
				this.removeWork(this.work.id)
			} catch (error) {
				console.log(error);
			}
		},
		getTags() {
			const arr = this.work.techs.split(',');
			arr.forEach(element => {
				element.trim();
			});
			this.work.techs !== "" ? this.tags = arr : this.tags = [];
		},
		editModeOn() {
			this.$emit("editModeOn");
			this.setThisWork();
		},
		async setThisWork() {
			try {
				await this.setCurrentWork(this.work)
			} catch (error) {
				console.log(error);
			}
		}
	},
	computed: {
		getAbsoluteImgPath() {
			const photo = this.work.photo
			const baseUrl = requests.defaults.baseURL;
			return `${baseUrl}/${photo}`;
		}
	},
	created() {
		this.getTags();
	}
}
</script>

<style lang="postcss" scoped>

	.btn-discard {
		width: 15px;
		height: 12px;
		background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%) 0
			100% / contain no-repeat;
	}

	.works__item {
		margin: 10px;
		margin-left: 1%;
		width: 31%;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(122, 122, 122, 0.1);

		@media screen and (max-width: 768px) {
			width: 47%;
		}

		@media screen and (max-width: 440px) {
			width: 100%;
		}
	}

	.works__content {
		padding: 40px 30px;
	}

	.works__item--new {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to right, #006aed, #3f35cb);

		@media screen and (max-width: 440px) {
			flex-direction: row;
			align-items: center;
			padding: 20px 0;
		}
	}

	.works__controls {
		margin-top: 45px;
		display: flex;
		justify-content: space-between;
	}

	.btn-edit--works {
		background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%) 0
			100% / contain no-repeat;
		width: 100px;
		height: 30px;
		background-position: 100% 50%;
		background-size: 14px 14px;
		text-align: left;
		color: rgba(65, 76, 99, 0.5);
		font-size: 16px;
		font-weight: 600;
	}

	.btn-discard--works {
		width: 100px;
		background-position: 100% 50%;
		background-size: 15px 12px;
		height: 30px;
		text-align: left;
		color: rgba(65, 76, 99, 0.5);
		font-size: 16px;
		font-weight: 600;
	}

	.works__title {
		font-size: 18px;
		font-weight: bold;
		color: #414c63;
	}

	.works__pic {
		object-fit: contain;
		height: 100%;
		width: 100%;
		vertical-align: top;
	}

	.works__desc {
		font-size: 16px;
		line-height: 1.88;
		font-weight: 600;
		color: rgba(65, 76, 99, 0.7);
		width: 95%;
	}

	.works__link {
		text-decoration: none;
		font-size: 16px;
		font-weight: 600;
		color: #383bcf;
	}

	.works-form__tag-list {
		margin-top: 20px;
		display: flex;

		@media screen and (max-width: 440px) {
			margin-left: -10px;
			justify-content: center;
		}
	}

	.works-form__tag-item {
		display: flex;
		padding: 3px 13px;
		border-radius: 15px;
		background-color: #f4f4f4;
		margin-left: 10px;

		@media screen and (max-width: 440px) {
			padding: 1px 10px;
		}
	}

	.works-form__tag-name {
		vertical-align: middle;
		font-size: 13px;
		font-weight: 600;
		color: rgba(40, 51, 64, 0.7);

		@media screen and (max-width: 420px) {
			width: 100%;
		}
	}
</style>