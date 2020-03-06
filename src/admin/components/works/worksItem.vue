<template lang="pug">
	li.works__item
		.works__pic-block
			img(src="../../../images/content/slide1.jpg", class="works__pic", alt="")
		.works__content
			h3.works__title {{work.title}}
			p.works__desc {{work.description}}
			a(:href="work.link").works__link {{work.link}}
			.works__controls
				button(type="button" title="Редактировать").btn-edit.btn-edit--works Править
				button(type="button" title="Удалить").btn-discard.btn-discard--works Удалить
</template>

<script>
export default {
	props: {
		work: Object
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
</style>