<template lang="pug">
	form.form.reviews-form
		h3.reviews-form__title Новый отзыв
		.form-line
		.reviews-form__content
			.reviews-form__avatar-wrap
				.reviews-form__avatar-block(:style="background")
				button(type="button" title="Добавить фото").form__addphoto-btn Добавить фото
					input(type="file" accept="image/jpeg,image/png" @change="addPreviewFile").reviews-form__download-file
			.reviews-form__main-content
				.reviews-form__row
					label.reviews-form__block-name Имя автора
						input(type="text" v-model="currentReview.author").reviews-form__input-name
					label.reviews-form__block-profession Титул автора
						input(type="text" v-model="currentReview.occ").reviews-form__input-profession
				label.reviews-form__block-text Отзыв
					textarea(v-model="currentReview.text").reviews-form__text
				.reviews-form__controls
					button(type="button" title="Отмена" @click="cancelEditReview").btn-main.btn-main--cancel Отмена
					button(type="button" title="Сохранить" @click="editCurrentReview").btn-main сохранить
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	data() {
		return {
			background: null,
			url: null
		}
	},
	methods: {
		...mapActions('reviews', ["editReview"]),
		cancelEditReview() {
			this.$emit("closeEditForm");
		},
		addPreviewFile(event) {
			this.currentReview.photo = event.target.files[0];
			this.url = URL.createObjectURL(this.currentReview.photo);
			this.background = `background: url(${this.url}) center/cover no-repeat`;
		},
		async editCurrentReview() {
			try {
				this.editReview(this.currentReview);
				this.$emit("closeEditForm");
			} catch {
				//error
			}
		}
	},
	computed: {
		...mapState('reviews', {
			currentReview: state => state.currentReview
		})
	},
}
</script>

<style lang="postcss" scoped>
.btn-main {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 25px;
  padding: 20px 50px;
  background: linear-gradient(to right, #006aed, #3f35cb);

  @media screen and (max-width: 440px) {
    font-size: 14px;
    padding: 10px 25px;
  }
}

.reviews-form__title {
  padding-bottom: 30px;
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
}

.reviews-form {
  box-shadow: 0 0 10px rgba(122, 122, 122, 0.1);
  padding: 30px;
}

.reviews-form__content {
  padding: 50px 30px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 440px) {
    padding: 0;
    flex-direction: column;
  }
}

.reviews-form__avatar-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  @media screen and (max-width: 440px) {
    margin-top: 20px;
    width: 100%;
  }
}

.reviews-form__avatar-block {
  width: 150px;
  height: 150px;
  background: svg-load("user.svg", fill=#fff, width=100%, height=100%) 50% 50% /
    center no-repeat;
  background-color: #dee4ed;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 440px) {
    width: 200px;
    height: 200px;
  }
}

.reviews-form__download-file {
	opacity: 0;
	font-size: 0;
	border: none;		
	position: absolute;
	overflow: hidden;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
	padding: 0;
}

.form__addphoto-btn {
	position: relative;
	margin-top: 10px;
	background: none;
	font-size: 16px;
	font-weight: 600;
	color: #383bcf;
}

.reviews-form__main-content {
  margin-left: 1%;
  width: 70%;

  @media screen and (max-width: 440px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
}

.reviews-form__block-text {
  margin-top: 30px;
}

.reviews-form__row {
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.reviews-form__input-name,
.reviews-form__input-profession,
.reviews-form__text {
  width: 95%;
  margin-bottom: 30px;
  display: block;
}

.reviews-form__block-name,
.reviews-form__block-profession {
  width: 49%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.reviews-form__text {
  width: 100%;
  height: 116px;
  resize: none;
  outline: none;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 81px 20px 20px;

  @media screen and (max-width: 440px) {
    padding: 10px;
  }
}

.reviews-form__controls {
  display: flex;
  justify-content: flex-end;
}
</style>