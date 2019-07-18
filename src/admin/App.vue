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
          a(href="#").header__exit-link Выйти
    section.navigation
      .container.navigation__container
        nav.nav
          ul.nav__list
            - var pages= ["Обо мне", "Работы", "Отзывы"]
            each item in pages
              li.nav__item.nav__item--active= item
    section.about
      .container.about__container
        .about__title-row
          h2.about__title.title Блок "Обо мне"
          .about__addgroup
            button(type="button").btn-addnew.form__btn-addnew--group +
            span.about__addgroup-text Добавить группу
        .about__content
          .about__skills
            ul.skills__group-list
                li.skills-item
                  form.form.skills-form
                    label.skills-form__groupname-block
                      input(placeholder="Название новой группы").skills-form__groupname
                      .skills-form__groupname-control
                        button(type="button").btn-apply
                        button(type="button").btn-discard
                    .form-line
                    .skills-form__content
                      .skills-form__skills
                        ul.skills-form__skills-list
                    label.skills-form__new-skillblock
                      input(placeholder="Новый навык").skills-form__new-skillname
                      input(value="100").skills-form__new-skillpercent
                      button(type="button").btn-addnew.skills-form__btn-addnew--skill +
                li.skills-item
                  form.form.skills-form
                    label.skills-form__groupname-block
                      input(placeholder="Название новой группы").skills-form__groupname
                      .skills-form__groupname-control
                        button(type="button").btn-apply
                        button(type="button").btn-discard
                    .form-line
                    .skills-form__content
                      .skills-form__skills
                        ul.skills-form__skills-list
                        //- - var skillsArray = [{text:"Git", value:"100"}, {text:"Terminal", value:"90"}, {text:"Gulp", value:"80"}, {text:"Webpack", value:"85"}]
                        //- each item in skillsArray
                        //-   li.skills-form__skills-item
                        //-     table.skills-form__skills-table
                        //-       tr.skills-form__skills-row
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--name= item.text
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--value= item.value
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--percent %
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--control
                        //-           .skills-form__skills-control
                        //-             button(type="button").btn-edit
                        //-             button(type="button").btn-delete
                    label.skills-form__new-skillblock
                      input(placeholder="Новый навык").skills-form__new-skillname
                      input(value="100").skills-form__new-skillpercent
                      button(type="button").btn-addnew.skills-form__btn-addnew--skill +
                li.skills-item
                  form.form.skills-form
                    label.skills-form__groupname-block
                      input(placeholder="Название новой группы").skills-form__groupname
                      .skills-form__groupname-control
                        button(type="button").btn-apply
                        button(type="button").btn-discard
                    .form-line
                    .skills-form__content
                      .skills-form__skills
                        ul.skills-form__skills-list
                        //- - var skillsArray = [{text:"HTML5", value:"100"}, {text:"CSS", value:"90"}, {text:"JavaScript", value:"80"}, {text:"Jquery и Vue.js", value:"85"}]
                        //- each item in skillsArray
                        //-   li.skills-form__skills-item
                        //-     table.skills-form__skills-table
                        //-       tr.skills-form__skills-row
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--name= item.text
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--value= item.value
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--percent %
                        //-         td.skills-form__skills-cell.skills-form__skills-cell--control
                        //-           .skills-form__skills-control
                        //-             button(type="button").btn-edit
                        //-             button(type="button").btn-delete
                    label.skills-form__new-skillblock
                      input(placeholder="Новый навык").skills-form__new-skillname
                      input(value="100").skills-form__new-skillpercent
                      button(type="button").btn-addnew.skills-form__btn-addnew--skill +
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
                  p.works-form__download-desc Перетащите или загрузите для загрузки изображения
                  button(type="button").btn-main ЗАГРУЗИТЬ
              .works-form__main-content
                label.works-form__label Название
                  input(value="Дизайн сайта для авто салона Porsche").works-form__new-title
                label.works-form__label Ссылка
                  input(value="https://www.porsche-pulkovo.ru").works-form__new-link
                label.works-form__label Описание
                  textarea.works-form__new-desc Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                label.works-form__label Добавление тега
                  input(value="Jquery, Vue,js, HTML5").works-form__new-tag                  
                  ul.works-form__tag-list
                    - var tags = ["Jquery", "Vue.js", "HTML5"]
                    each item in tags
                      li.works-form__tag-item
                        span.works-form__tag-name= item
                .works-form__controls
                  button(type="button").btn-main.btn-main--cancel Отмена
                  button(type="button").btn-main СОХРАНИТЬ
        .works__list-wrap
          ul.works__list
            li.works__item.works__item--new
              button(type="button").btn-addnew.btn-addnew--works +
              .works__addnew-desc Добавить работу
              - var worksData = [{title: "Сайт школы образования"}, {desc: "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"}, {link: "http://loftschool.ru"}]
              each item in worksData
                li.works__item
                  .works__pic-block
                    //- img array
                  .works__content
                    h3.works__title
                    p.works__desc
                    a(href="").works__link
                    .works__controls
                      button(type="button").btn-edit.btn-edit--works Править
                      button(type="button").btn-discard.btn-discard--works Удалить



                        

</template>

<script>
export default {};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

//base

* {
  box-sizing: border-box;
}

.wrap {
  width: 100%;
  height: 100%;
}

input {
  border: none;
  padding-bottom: 2%;
  border-bottom: 1px solid;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  &:placeholder {
    color: #414c63;
  }
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
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
  width: 1200px;
}

.form {
  background-color: #fff;
}

.form-line {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.07);
}

label {
  font-family: Open Sans;
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
  font-family: Open Sans;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 25px;
  padding: 20px 50px;
  background: linear-gradient(to right, #006aed, #3f35cb);
}

.btn-addnew {
  width: 40px;
  height: 40px;
  background: linear-gradient(to right, #006aed, #3f35cb);
  border-radius: 50%;
  color: #fff;
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
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}

.header__title {
  margin-left: 25px;
  opacity: 0.5;
  font-family: Open Sans;
  font-size: 14px;
  color: #fff;
}

.header__exit-link {
  opacity: 0.7;
  font-family: Open Sans;
  font-size: 16px;
  color: #fff;
}

//navigation
.nav {
  width: 25%;
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
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 600;
  color: #383bcf;
  padding-bottom: 20px;
}

.nav__item--active {
  border-bottom: 2px solid #383bcf;
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
}

.title {
  font-family: Open Sans;
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
}

.about__addgroup {
  margin-left: 100px;
}

.form__btn-addnew--group {
  width: 21px;
  height: 21px;
}

.about__addgroup-text {
  margin-left: 13px;
  font-family: Open Sans;
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
  font-family: Open Sans;
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
  background-image: url("../images/content/mountain.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.works__form-wrap {
  margin-top: 20px;
  padding: 2%;
  width: 100%;
  height: 775px;
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
}

.works-form__download-area {
  width: 45%;
  height: 276px;
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 2.12;
  color: rgba(65, 76, 99);
}

.works-form__main-content {
  width: 52%;
  display: flex;
  flex-direction: column;
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
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 81px 20px 20px;
}

.works-form__tag-list {
  margin-top: 20px;
  display: flex;
}

.works-form__tag-item {
  padding: 2px 20px;
  border-radius: 15px;
  background-color: #f4f4f4;
  margin-left: 10px;
}

.works-form__tag-name {
  vertical-align: middle;
  font-size: 13px;
  font-weight: 600;
  color: rgba(40, 51, 64, 0.7);
  &::after {
    content: "+";
    vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
    font-size: 25px;
    font-weight: 600;
    color: rgba(40, 51, 64, 0.7);
    transform: rotate(45deg);
    cursor: pointer;
  }
}

.works-form__controls {
  display: flex;
  justify-content: flex-end;
}

.btn-main--cancel {
  background: transparent;
  color: #383bcf;
}


.works__list-wrap {
  width: 100%;
  padding: 30px 0;  
}

.works__list {
  width: 100%;
}

.works__item {
  width: 32%;
  height: 556px;
}

.works__item--new {
  display: flex;
}

.works__item--new {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #006aed, #3f35cb);
}

.btn-addnew--works {
  width: 150px;
  height: 150px;
  background: transparent;
  border: 1px solid #fff;
  font-family: Open Sans;
  font-size: 72px;
  font-weight: 300;
  font-style: normal;
}

.works__addnew-desc {
  margin-top: 30px;
  text-align: center;
  width: 30%;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  color: #ffffff;
}

.works__controls {
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
  font-family: Open Sans;
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
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 600;
}

</style>