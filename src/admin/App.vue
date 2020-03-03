<template lang="pug">
  .wrap
    header.header
      .container.header__container
        .header__content
          .header__avatar
            img(src="../images/content/avatar.jpg" alt="Мое фото").header__avatar-pic
          h1.header__author-name Иван Егоров
          .header__title Панель администрирования
        .header__exit
          button(type="button" title="Выход").header__exit-link Выйти
    .navigation
      .container.navigation__container
        nav.nav
          ul.nav__list
            li(ref="navItem").nav__item
              router-link(tag="button" to="/" title="Блок 'Обо мне'").nav__link Обо мне
            li(ref="navItem").nav__item
              router-link(tag="button" to="works" title="Блок 'Мои работы'").nav__link Работы
            li(ref="navItem").nav__item
              router-link(tag="button" to="reviews" title="Блок 'Отзывы'").nav__link Отзывы
    router-view
</template>

<script>

export default {
  name: "app",
  components: {
    about: () => import ("./components/about"),
    reviews: () => import ("./components/reviews"),
    works: () => import ("./components/works")
  }
};
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

.router-link-exact-active {
  border-bottom: 2px solid #383bcf;
  outline: none;
}
</style>