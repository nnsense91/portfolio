<template lang="pug">
  form.form.skills-form
    .skills-form__groupname-block(
      v-if="editCategoryModeOn === false"
    )
      input(
        type="text"
        :value="this.category.category"
        readonly
        ).skills-form__groupname
      .skills-form__groupname-control
        button(
          type="button"
          title="Редактировать"
          @click="editCategoryModeOn = true"
          ).btn-edit
        button(
          type="button"
          title="Удалить"
          @click="removeThisCategory"
          ).btn-delete
    .skills-form__groupname-block(
      v-else
    )
      input(
        type="text"
        v-model="editedCategory.title"
        ).skills-form__groupname
      .skills-form__groupname-control
        button(
          type="button"
          title="Редактировать"
          @click="editThisCategory"
          ).btn-apply
        button(
          type="button"
          title="Удалить"
          @click="editCategoryModeOn = false"
          ).btn-discard
    .form-line
    .skills-form__content
      .skills-form__skills
        ul.skills-form__skills-list
          skills-Item(
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
          )
    .skills-form__new-skillblock(:class="{blocked: formIsBlocked}")
      input(type="text" v-model="skill.title" placeholder="Новый навык").skills-form__new-skillname
      input(type="text" v-model="skill.percent").skills-form__new-skillpercent
      button(type="button" title="Добавить новый навык" @click="addNewSkill").btn-addnew__plus.skills-form__btn-addnew--skill +
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {
    "skills-Item": () => import ("./skillsItem")
  },
  props: {
    skills: Array,
    category: Object
  },
  data() {
    return {
      skill: {
        title: "",
        percent: "",
        category: this.category.id
      },
      formIsBlocked: false,
      editCategoryModeOn: false,
      editedCategory: { ...this.category }
    };
	},
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("skillsCategories", [
      "removeCategory",
      "editCategory",
      "getCategories"
    ]),
    async addNewSkill() {
      this.formIsBlocked = "true"
      try {
        await this.addSkill(this.skill);
        this.skill = {
          title: "",
					percent: "",
					category: this.category.id
        }
      } catch(error) {
        //ошибка пользователю
        alert("не удалось добавить скилл.", error.message)
      } finally {
        this.formIsBlocked = "false"
      }
    },
    async removeThisCategory() {
      try {
        await this.removeCategory(this.category.id);
      } catch (error) {
        //error
      }
    },
    async editThisCategory() {
      try {
        await this.editCategory(this.editedCategory);
        await this.getCategories();
        this.editedCategory.title = "";
        this.editCategoryModeOn = false;
      } catch (error) {
        //error
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

.btn-edit {
  width: 14px;
  height: 14px;
  background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%) 0
    100% / contain no-repeat;
}

.skills__group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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