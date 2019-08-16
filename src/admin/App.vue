<template lang="pug">
  .wrap
    header.header
      .container.header__container
        .header__content
          .header__avatar
            img(src="../images/content/avatar.jpg").header__avatar-pic
          h1.header__author-name Иван Егоров
          .header__title Панель администрирования
        .header__exit
          button(type="button" href="#" title="Выход").header__exit-link Выйти
    section.navigation
      .container.navigation__container
        nav.nav
          ul.nav__list
            - var pages= ["Обо мне", "Работы", "Отзывы"]
            each item in pages
              li.nav__item.nav__item--active
                button(type="button" href="#" title="меню").nav__link= item
    section.about
      .container.about__container
        .about__title-row
          h2.about__title.title Блок "Обо мне"
          .about__addgroup
            button(type="button" title="Добавить новую группу").btn-addnew.form__btn-addnew--group
              .btn-addnew__plus.btn-addnew__plus--group +
              span.about__addgroup-text Добавить&nbspгруппу
        .about__content
          .about__skills
            ul.skills__group-list
                li.skills-item
                  form.form.skills-form
                    .skills-form__groupname-block
                      input(type="text" placeholder="Название новой группы").skills-form__groupname
                      .skills-form__groupname-control
                        button(type="button" title="Принять").btn-apply
                        button(type="button" title="Отменить").btn-discard
                    .form-line
                    .skills-form__content
                      .skills-form__skills
                        ul.skills-form__skills-list
                    .skills-form__new-skillblock
                      input(type="text" placeholder="Новый навык").skills-form__new-skillname
                      input(type="text" value="100").skills-form__new-skillpercent
                      button(type="button" title="Добавить новый навык").btn-addnew__plus.skills-form__btn-addnew--skill +
                li.skills-item
                  form.form.skills-form
                    .skills-form__groupname-block
                      input(type="text" placeholder="Название новой группы").skills-form__groupname
                      .skills-form__groupname-control
                        button(type="button" title="Принять").btn-apply
                        button(type="button" title="Отменить").btn-discard
                    .form-line
                    .skills-form__content
                      .skills-form__skills
                        ul.skills-form__skills-list
                          - var skillsArray = [{text:"Git", value:"100"}, {text:"Terminal", value:"90"}, {text:"Gulp", value:"80"}, {text:"Webpack", value:"85"}]
                            each item in skillsArray
                              li.skills-form__skills-item
                                table.skills-form__skills-table
                                  tr.skills-form__skills-row
                                    td.skills-form__skills-cell.skills-form__skills-cell--name= item.text
                                    td.skills-form__skills-cell.skills-form__skills-cell--value= item.value
                                    td.skills-form__skills-cell.skills-form__skills-cell--percent %
                                    td.skills-form__skills-cell.skills-form__skills-cell--control
                                      .skills-form__skills-control
                                        button(type="button" title="Редактировать").btn-edit
                                        button(type="button" title="Удалить").btn-delete
                    .skills-form__new-skillblock
                      input(type="text" placeholder="Новый навык").skills-form__new-skillname
                      input(type="text" value="100").skills-form__new-skillpercent
                      button(type="button" title="Добавить новый навык").btn-addnew__plus.skills-form__btn-addnew--skill +
                li.skills-item
                  form.form.skills-form
                    .skills-form__groupname-block
                      input(type="text" placeholder="Название новой группы").skills-form__groupname
                      .skills-form__groupname-control
                        button(type="button" title="Принять").btn-apply
                        button(type="button" title="Отменить").btn-discard
                    .form-line
                    .skills-form__content
                      .skills-form__skills
                        ul.skills-form__skills-list
                          - var skillsArray = [{text:"HTML5", value:"100"}, {text:"CSS", value:"90"}, {text:"JavaScript", value:"80"}, {text:"Jquery и Vue.js", value:"85"}]
                            each item in skillsArray
                              li.skills-form__skills-item
                                table.skills-form__skills-table
                                  tr.skills-form__skills-row
                                    td.skills-form__skills-cell.skills-form__skills-cell--name= item.text
                                    td.skills-form__skills-cell.skills-form__skills-cell--value= item.value
                                    td.skills-form__skills-cell.skills-form__skills-cell--percent %
                                    td.skills-form__skills-cell.skills-form__skills-cell--control
                                      .skills-form__skills-control
                                        button(type="button" title="Редактировать").btn-edit
                                        button(type="button" title="Удалить").btn-delete
                    .skills-form__new-skillblock
                      input(type="text" placeholder="Новый навык").skills-form__new-skillname
                      input(type="text" value="100").skills-form__new-skillpercent
                      button(type="button" title="Добавить новый навык").btn-addnew__plus.skills-form__btn-addnew--skill +
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
                  img(src="../images/content/" + slideArr[i], class="works__pic", alt="")
                  - i++
                .works__content
                  h3.works__title= worksData.title
                  p.works__desc= worksData.desc
                  a(href="#").works__link= worksData.link
                  .works__controls
                    button(type="button" title="Редактировать").btn-edit.btn-edit--works Править
                    button(type="button" title="Удалить").btn-discard.btn-discard--works Удалить
    section.reviews
      .container
        h2.title.reviews__title Блок "Отзывы"
        .reviews__form-wrap
          form.form.reviews-form
            h3.reviews-form__title Новый отзыв
            .form-line
            .reviews-form__content
              .reviews-form__avatar-wrap
                .reviews-form__avatar-block                
                button(type="button" title="Добавить фото").form__addphoto-btn Добавить фото
              .reviews-form__main-content
                .reviews-form__row
                  label.reviews-form__block-name Имя автора
                    input(type="text" value="Ковальчук Дмитрий").reviews-form__input-name
                  label.reviews-form__block-profession Титул автора
                    input(type="text" value="Основатель LoftSchool").reviews-form__input-profession
                label.reviews-form__block-text Отзыв
                  textarea.reviews-form__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .reviews-form__controls
                  button(type="button" title="Отмена").btn-main.btn-main--cancel Отмена
                  button(type="button" title="Сохранить").btn-main сохранить
        .reviews__main-content
          .reviews__list-wrap
            ul.reviews__list
              button.reviews__item.reviews__item--new
                button(type="button" title="Добавить новый отзыв").btn-addnew.btn-addnew--reviews +
                .reviews__addnew-desc Добавить отзыв
              - var nameArr = ["Владимир Сабанцев", "Ковальчук Дмитрий", "Петров Сергей", "Степан Реактивный", "Федор Сумкин"]
              - var avatarArr = ["kovalchuk.png", "sabancev.png", "kovalchuk.png", "sabancev.png", "sabancev.png"]
              - var professionArr = ["Преподаватель", "Основатель LoftSchool", "Водитель автобуса", "Работник Почты России", "Шахтер"]
              - var i = 0
              each item in slideArr                             
                li.reviews__item
                  .reviews__author
                    .reviews__avatar
                      img(src="../images/content/" + avatarArr[i], class="reviews__pic", alt="")                        
                    .reviews__author-info
                      .reviews__author-name= nameArr[i]
                      .reviews__author-profession= professionArr[i]
                      - i++
                  .form-line
                  .reviews__content
                    p.reviews__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .reviews__controls
                      button(type="button" title="Редактировать").btn-edit.btn-edit--reviews Править
                      button(type="button" title="Удалить").btn-discard.btn-discard--reviews Удалить


                        

</template>

<script>
export default {};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

//base

html {
  padding: 0;
  margin: 0;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}

* {
  box-sizing: border-box;
  font-family: Open Sans;
}

.wrap {
  width: 100%;
  height: 100%;
}

input {
  border: none;
  padding-bottom: 2%;
  border-bottom: 1px solid;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  &:placeholder {
    color: #414c63;
  }
}

button {
  
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}

body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.container {
  padding: 0 3%;
  margin: 0 auto;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
}

.form {
  background-color: #fff;
}

.form-line {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.07);
}

label {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

//buttons

button {
  cursor: pointer;
  border: none;
}

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

.btn-addnew__plus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(to right, #006aed, #3f35cb);
  border-radius: 50%;
  color: #fff;

  &--group {
    width: 21px;
    height: 21px;
  }
}

.btn-apply {
  width: 15px;
  height: 12px;
  background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%) 0 100% /
    contain no-repeat;
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

.btn-delete {
  width: 12px;
  height: 15px;
  background: svg-load("trash.svg", fill=#a0a5b1, width=100%, height=100%) 0
    100% / contain no-repeat;
}
//header
.header {
  padding: 15px 0;
  background-color: #424269;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__content {
  width: 50%;
  display: flex;
  align-items: center;
}

.header__avatar {
  max-width: 45px;
  max-height: 45px;
  border-radius: 50%;
  overflow: hidden;
}

.header__avatar-pic {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}

.header__author-name {
  margin-left: 25px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}

.header__title {
  margin-left: 25px;
  opacity: 0.5;
  font-size: 14px;
  color: #fff;
}

.header__exit-link {
  background-color: transparent;
  opacity: 0.7;
  font-size: 16px;
  color: #fff;
}

//navigation
.nav {
  width: 300px;
  padding-top: 15px;
}

.nav__list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav__item {
  text-align: center;
  width: 28%;
}

.nav__link {
  background-color: transparent;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #414c63;
  padding-bottom: 20px;
  text-decoration: none;
}

.nav__item--active {
  border-bottom: 2px solid #383bcf;
  & > .nav__link {
    color: #383bcf;
  }
}
//about

.about {
  height: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url("../images/content/mountain.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.about__title-row {
  display: flex;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.title {
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
}

.about__addgroup {
  margin-left: 100px;

  @media screen and (max-width: 420px) {
    margin-left: 0;
  }
}

.form__btn-addnew--group {
  background-color: transparent;
  display: flex;
  align-items: center;
}

.about__addgroup-text {
  margin-left: 13px;
  font-size: 16px;
  font-weight: 600;
  color: #383bcf;
}

.about__content {
  margin-top: 60px;
}

//skills

.skills__group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skills__group-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -2%;
}

.skills-item {
  margin-top: 20px;
  margin-left: 2%;
  padding: 2%;
  width: 48%;
  height: 387px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(122, 122, 122, 0.1);

  @media screen and (max-width: 420px) {
    width: 100%;
  }
}

.skills-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.skills-form__groupname-block {
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.skills-form__groupname {
  width: 60%;
}

.skills-form__groupname-control {
  width: 10%;
  display: flex;
  justify-content: space-between;
}

.skills-form__content {
  height: 70%;
  padding-top: 20px;
  margin-left: 2%;
  font-size: 16px;
  color: #414c63;
}

.skills-form__skills-table {
  width: 100%;
}

.skills-form__skills-row {
  width: 100%;
}

.skills-form__skills-cell--name {
  width: 60%;
}

.skills-form__skills-cell--value {
  width: 8%;
}
.skills-form__skills-cell--percent {
  width: 15%;
}

.skills-form__skills-cell--control {
  width: 10%;
}

.skills-form__skills-control {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.skills-form__new-skillblock {
  display: flex;
  justify-content: flex-end;
}

.skills-form__new-skillname {
  width: 50%;
}
.skills-form__new-skillpercent {
  margin-left: 10px;
  width: 13%;
}
.skills-form__new-skillname,
.skills-form__new-skillpercent {
  font-size: 16px;
  padding-bottom: 2px;
}
.skills-form__btn-addnew--skill {
  font-size: 30px;
  margin-left: 20px;
}

//work
.works {
  padding-top: 40px;
  background-image: url("../images/content/mountain.jpg");
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

// Отзывы

.reviews {
  padding-top: 40px;
  background-image: url("../images/content/mountain.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  width: 100px;
  height: 100px;
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
  width: 74%;

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
  font-size: 18px;
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