<template lang="pug">    
	section.works
		.container
			h2.works__title.title Блок "Работы"
			worksEditForm(v-if="isEditModeOn")
			worksList
</template>

<script>
export default {
	data() {
		return {
			isEditModeOn: false
		}
	},
	components: {
		worksEditForm: ()=> import ("./works/addWork"),
		worksList: ()=> import ("./works/worksList")
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

.btn-edit {
  width: 14px;
  height: 14px;
  background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%) 0
    100% / contain no-repeat;
}

.works {
  padding-top: 40px;
  background-image: url("../../images/content/mountain.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.works__list-wrap {
  width: 100%;
  padding: 30px 0;
}

.works__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: -1%;
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

.btn-addnew--works {
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

.works__addnew-desc {
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