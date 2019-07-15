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
      .container        
        .about__title-row
          h2.about__title Блок "Обо мне"
          .about__addgroup
            span.about__addgroup-text Добавить группу
        .about__content
          .about__skills
            ul.skills__group
              li.skills__group-item
                .skills__groupname-block
                  input(placeholder="Название новой группы").skills__groupname
                  .skills__groupname-controls
                    //- svg
                .skills__line
                .skills__content
                  ul.skills__list.skills__list--new
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                  .skills__new-block
                    input.skills__new-name(placeholder="Новый навык")
                    input.skills__new-percant
                    button(type="button").skills__add-btn
              li.skills__group-item
                .skills__groupname-block
                  input(placeholder="Название новой группы" value="WorkFlow").skills__groupname
                  .skills__groupname-controls
                    //- svg
                .skills__line
                .skills__content
                  ul.skills__list
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                  .skills__new-block
                    input.skills__new-name
                    input.skills__new-percant
                    button(type="button").skills__add-btn  
              li.skills__group-item
                .skills__groupname-block
                  input(placeholder="Название новой группы").skills__groupname
                  .skills__groupname-controls
                    //- svg
                .skills__line
                .skills__content
                  ul.skills__list
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                    li.skills__item
                      input.skills__skillname-input
                      input.skills__skillpercent-input
                      .skills__groupname-controls
                        //- svg
                  .skills__new-block
                    input.skills__new-name
                    input.skills__new-percant
                    button(type="button").skills__add-btn
                  

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

input {
  border: none;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600;
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

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.container {
  margin: 0 auto;
  width: 1200px;
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

.skills__list--new {
  display: none;
}

//about

.about {
  padding-top: 60px;
  background-image: url("../images/content/mountain.jpg");
  background-repeat: no-repeat;
}

.about__title-row {
  display: flex;
  align-items: center;
}

.about__title {
  font-family: Open Sans;
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
}

.about__addgroup {
  margin-left: 100px;
}

.about__addgroup-text {
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 600;
  color: #383bcf;

  &::before {
    content: "+";
    padding: 0 7px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    border-radius: 50%;
    background: linear-gradient(to right, #006aed, #3f35cb);
    display: inline-block;
    margin-right: 25px;
    cursor: pointer;
  }
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

.skills__group-item {
  padding: 30px 30px;
  width: 48%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid;
}
</style>