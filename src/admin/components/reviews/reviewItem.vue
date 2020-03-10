<template lang="pug">
	li.reviews__item
		.reviews__author
			.reviews__avatar
				img(src="../../../images/content/sabancev.png", alt="Автор отзыва фото").reviews__pic
			.reviews__author-info
				.reviews__author-name Владимир Сабанцев
				.reviews__author-profession Преподаватель
		.form-line
		.reviews__content
			p.reviews__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
			.reviews__controls
				button(type="button" title="Редактировать").btn-edit.btn-edit--reviews Править
				button(type="button" title="Удалить").btn-discard.btn-discard--reviews Удалить
</template>

<style lang="postcss" scoped>
	.btn-discard {
		width: 15px;
		height: 12px;
		background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%) 0
			100% / contain no-repeat;
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