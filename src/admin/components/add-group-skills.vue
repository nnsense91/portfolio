<template lang="pug">
  form.form.skills-form
    .skills-form__groupname-block
        input(
          type="text"
          placeholder="Название новой группы"
          v-model="createCategory.title"
          ).skills-form__groupname
        .skills-form__groupname-control
          button(
            type="button"
            title="Принять"
            @click="addNewCategory"
            ).btn-apply
          button(
            type="button"
            title="Отменить"
            @click="isEditCardOn = false"
            ).btn-discard
    .form-line
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    categories: Array,
    category: Object,
    isEditCardOn: Boolean
  },
  data() {
    return {
      createCategory: {
        title: ""
      }
    };
  },
  methods: {
    ...mapActions("categories", ["addCategory"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.createCategory);
        this.createCategory.title = "";
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