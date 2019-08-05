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

.about {
  height: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url("../../images/content/mountain.jpg");
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
</style>