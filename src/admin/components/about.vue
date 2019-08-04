<template lang="pug">
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
                        //-   - var skillsArray = [{text:"Git", value:"100"}, {text:"Terminal", value:"90"}, {text:"Gulp", value:"80"}, {text:"Webpack", value:"85"}]
                        //-     each item in skillsArray
                        //-       li.skills-form__skills-item
                        //-         table.skills-form__skills-table
                        //-           tr.skills-form__skills-row
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--name= item.text
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--value= item.value
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--percent %
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--control
                        //-               .skills-form__skills-control
                        //-                 button(type="button" title="Редактировать").btn-edit
                        //-                 button(type="button" title="Удалить").btn-delete
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
                        //-   - var skillsArray = [{text:"HTML5", value:"100"}, {text:"CSS", value:"90"}, {text:"JavaScript", value:"80"}, {text:"Jquery и Vue.js", value:"85"}]
                        //-     each item in skillsArray
                        //-       li.skills-form__skills-item
                        //-         table.skills-form__skills-table
                        //-           tr.skills-form__skills-row
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--name= item.text
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--value= item.value
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--percent %
                        //-             td.skills-form__skills-cell.skills-form__skills-cell--control
                        //-               .skills-form__skills-control
                        //-                 button(type="button" title="Редактировать").btn-edit
                        //-                 button(type="button" title="Удалить").btn-delete
                    .skills-form__new-skillblock
                      input(type="text" placeholder="Новый навык").skills-form__new-skillname
                      input(type="text" value="100").skills-form__new-skillpercent
                      button(type="button" title="Добавить новый навык").btn-addnew__plus.skills-form__btn-addnew--skill +
</template>