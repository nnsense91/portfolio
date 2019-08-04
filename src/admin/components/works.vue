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