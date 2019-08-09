<template lang="pug">
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
                        skillsItem
            .skills-form__new-skillblock                
                input(type="text" v-model="skill.title" placeholder="Новый навык").skills-form__new-skillname
                input(type="text" v-model="skill.percent").skills-form__new-skillpercent
                button(type="button" title="Добавить новый навык" @click="addNewSkill").btn-addnew__plus.skills-form__btn-addnew--skill +
        pre {{skill}}
</template>

<script>
import skillsItem from "./skills-item";
import { mapActions } from "vuex";

export default {
  components: {
    skillsItem
  },
  data() {
    return {
      skill: {
        title: "",
        percent: "",
        category: "1"
      }
    };
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      try {
        await this.addSkill(this.skill);
        alert ("Скилл успешно добавлен")
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.btn-discard {
  width: 15px;
  height: 12px;
  background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%) 0
    100% / contain no-repeat;
}

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