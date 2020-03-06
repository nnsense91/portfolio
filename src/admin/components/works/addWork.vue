<template lang="pug">
	.works__form-wrap
		form.form.works-form
			h3.title.works-form__title Редактирование работы
			.form-line
			.works-form__content
				.works-form__download-area
					.works-form__download-content
						.works-form__download-desc Перетащите или загрузите для загрузки изображения
						button(type="button" title="Загрузить").btn-main.works__download-btn загрузить
				button(type="button" title="Изменить").btn-main--cancel.download-tabletbtn Изменить превью
				.works-form__main-content
					label.works-form__label Название
						input(type="text" value="Дизайн сайта для авто салона Porsche").works-form__new-title
					label.works-form__label Ссылка
						input(type="url" value="https://www.porsche-pulkovo.ru").works-form__new-link
					label.works-form__label Описание
						textarea.works-form__new-desc Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
					label.works-form__label Добавление тега
						input(type="text" value="Jquery, Vue,js, HTML5").works-form__new-tag                  
						ul.works-form__tag-list
							- var tags = ["Jquery", "Vue.js", "HTML5"]
							each item in tags
								li.works-form__tag-item
									.works-form__tag-name= item
									button(type="button" title="Удалить тег").works-form__btn-delete &#215
					.works-form__controls
						button(type="button" title="Отмена").btn-main.btn-main--cancel Отмена
						button(type="button" title="Сохранить").btn-main сохранить
</template>

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

	.works__form-wrap {
		margin-top: 20px;
		padding: 2%;
		width: 100%;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(122, 122, 122, 0.1);
	}

	.works-form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.works-form__content {
		padding-top: 48px;
		display: flex;
		justify-content: space-between;

		@media screen and (max-width: 768px) {
			flex-direction: column;
			align-items: center;
		}
	}

	.works-form__download-area {
		width: 45%;
		height: 276px;
		border: 1px dashed #a1a1a1;
		background-color: #dee4ed;
		display: flex;
		align-items: center;
		justify-content: center;
		@media screen and (max-width: 768px) {
			width: 80%;
		}
	}

	.works__download-btn {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}

	.works-form__title {
		padding-top: 20px;
		font-size: 18px;
	}

	.works-form__download-content {
		width: 60%;
		height: 60%;
		text-align: center;
	}

	.works-form__download-desc {
		opacity: 0.5;
		font-size: 16px;
		font-weight: 600;
		line-height: 2.12;
		color: rgba(65, 76, 99);
	}

	.download-tabletbtn {
		@media screen and (min-width: 769px) {
			display: none;
		}
	}

	.works-form__main-content {
		width: 52%;
		display: flex;
		flex-direction: column;
		@media screen and (max-width: 768px) {
			padding-top: 30px;
			width: 80%;
		}
	}

	.works-form__label {
		padding-bottom: 30px;
	}

	.works-form__new-title,
	.works-form__new-link,
	.works-form__new-tag {
		padding-top: 15px;
		width: 100%;
		color: #000;
		font-size: 16px;
		display: block;
	}

	.works-form__new-desc {
		width: 100%;
		height: 146px;
		resize: none;
		outline: none;
		margin-top: 20px;
		font-size: 16px;
		font-weight: 600;
		padding: 20px 81px 20px 20px;
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

	.works-form__btn-delete {
		margin-left: 5px;
		padding: 0;
		background-color: transparent;
	}

	.works-form__controls {
		display: flex;
		justify-content: flex-end;
	}

	.btn-main--cancel {
		text-transform: none;
		background: transparent;
		color: #383bcf;
	}

</style>