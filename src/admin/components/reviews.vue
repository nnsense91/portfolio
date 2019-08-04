<template lang="pug">
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
                    - var slideArr = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg"]
                    - var nameArr = ["Владимир Сабанцев", "Ковальчук Дмитрий", "Петров Сергей", "Степан Реактивный", "Федор Сумкин"]
                    - var avatarArr = ["kovalchuk.png", "sabancev.png", "kovalchuk.png", "sabancev.png", "sabancev.png"]
                    - var professionArr = ["Преподаватель", "Основатель LoftSchool", "Водитель автобуса", "Работник Почты России", "Шахтер"]
                    - var i = 0
                    each item in slideArr                             
                        li.reviews__item
                        .reviews__author
                            .reviews__avatar
                            img(src="../../images/content/" + avatarArr[i], class="reviews__pic", alt="")                        
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