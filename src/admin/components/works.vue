<template lang="pug">    
    section.works
      .container
        h2.about__title.title Блок "Работы"
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
        .works__list-wrap
          ul.works__list
            button.works__item.works__item--new
              button(type="button" title="Добавить новый проект").btn-addnew.btn-addnew--works +
              .works__addnew-desc Добавить работу
            - var worksData = {title: "Сайт школы образования", desc: "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!", link: "http://loftschool.ru"}
            - var slideArr = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg"]
            - var i = 0
            each item in slideArr                             
              li.works__item
                .works__pic-block
                  img(src="../../images/content/" + slideArr[i], class="works__pic", alt="")
                  - i++
                .works__content
                  h3.works__title= worksData.title
                  p.works__desc= worksData.desc
                  a(href="#").works__link= worksData.link
                  .works__controls
                    button(type="button" title="Редактировать").btn-edit.btn-edit--works Править
                    button(type="button" title="Удалить").btn-discard.btn-discard--works Удалить
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