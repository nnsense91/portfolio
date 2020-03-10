<template lang="pug">
	.reviews__form-wrap
		.reviews__main-content
			.reviews__list-wrap
				ul.reviews__list
					button(type="button" @click="addNewReview").reviews__item.reviews__item--new
						button(type="button" title="Добавить новый отзыв").btn-addnew.btn-addnew--reviews +
						.reviews__addnew-desc Добавить отзыв
					reviewItem(
						v-for="review in reviews"
						:key="review.id"
						:review="review"
						@editCurrentReview="editCurrentReview"
					)
</template>

<script>
export default {
	components: {
		reviewItem: () => import ("./reviewItem")
	},
	props: {
		reviews: Array
	},
	methods: {
		addNewReview() {
			this.$emit("addNewReview");
		},
		editCurrentReview() {
			this.$emit("editCurrentReview");
		}
	}
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

.btn-discard {
  width: 15px;
  height: 12px;
  background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%) 0
    100% / contain no-repeat;
}

.btn-edit {
  width: 14px;
  height: 14px;
  background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%) 0
    100% / contain no-repeat;
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

.form__addphoto-btn {
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
.reviews__item--new {
  display: flex;
}

.reviews__item--new {
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

.btn-addnew--reviews {
  width: 150px;
  height: 150px;
  background: transparent;
  border: 1px solid #fff;
  font-size: 72px;
  font-weight: 300;
  font-style: normal;
  border-radius: 50%;
  color: #fff;

  @media screen and (max-width: 440px) {
    width: 50px;
    height: 50px;
    line-height: 1;
    font-size: 36px;
  }
}

.reviews__addnew-desc {
  margin-top: 30px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  color: #ffffff;

  @media screen and (max-width: 440px) {
    margin-top: 0;
    width: 50%;
    margin-left: 20px;
  }
}

.reviews__controls {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
}

.btn-edit--reviews {
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

.btn-discard--reviews {
  width: 100px;
  background-position: 100% 50%;
  background-size: 15px 12px;
  height: 30px;
  text-align: left;
  color: rgba(65, 76, 99, 0.5);
  font-size: 16px;
  font-weight: 600;
}

.reviews__list-wrap {
  width: 100%;
  padding: 30px 0;
}

.reviews__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: -1%;
  @media screen and (max-width: 768px) {
    margin-left: -1%;
  }
}

.reviews__item {
  padding: 40px 15px;
  margin: 10px;
  margin-left: 1%;
  width: 31%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(122, 122, 122, 0.1);

  @media screen and (max-width: 768px) {
    width: 47%;
    margin-left: 1%;
  }

  @media screen and (max-width: 440px) {
    margin-left: 0;
    width: 100%;
  }
}

.reviews__title {
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
  padding-bottom: 20px;
}

.reviews__desc {
  font-size: 16px;
  line-height: 1.88;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.7);
  width: 95%;
}

.reviews__link {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #383bcf;
}

.reviews__avatar {
  width: 50px;
  height: 50px;
}

.reviews__pic {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.reviews__author-info {
  margin-left: 3%;
}

.reviews__author {
  padding-bottom: 20px;
  display: flex;
}

.reviews__author-name {
  font-size: 18px;
  font-weight: bold;
  color: #414c63;
}

.reviews__author-profession {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}
</style>