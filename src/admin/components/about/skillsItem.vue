<template lang="pug">
  li.skills-form__skills-item
    table.skills-form__skills-table
      tr(v-if="editModeOn === false").skills-form__skills-row
        td.skills-form__skills-cell.skills-form__skills-cell--name {{skill.title}}
        td.skills-form__skills-cell.skills-form__skills-cell--value {{skill.percent}}
        td.skills-form__skills-cell.skills-form__skills-cell--percent %
        td.skills-form__skills-cell.skills-form__skills-cell--control
          .skills-form__skills-control
            button(type="button" title="Редактировать" @click="editModeOn = true").btn-edit
            button(type="button" title="Удалить" @click="removeThisSkill").btn-delete

      tr(v-else).skills-form__skills-row
        td.skills-form__skills-cell.skills-form__skills-cell--name 
          input(type="text" v-model="editedSkill.title" placeholder="название").skills-form__edit-field
        td.skills-form__skills-cell.skills-form__skills-cell--value 
          input(type="text" v-model="editedSkill.percent").skills-form__edit-field
        td.skills-form__skills-cell.skills-form__skills-cell--percent %
        td.skills-form__skills-cell.skills-form__skills-cell--control
          .skills-form__skills-control
            button(
            @click="editCurrentSkill"
            type="button"
            title="Принять"
            ).btn-apply
            button(
              @click="editModeOn = false"
              type="button"
              title="Отменить"
              ).btn-discard
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editModeOn: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeThisSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch(error) {
        //errror
      }
    },
    async editCurrentSkill() {
      try {        
        await this.editSkill(this.editedSkill);
        this.editModeOn = false;
      } catch (error) {
        //error
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.btn-edit {
  width: 14px;
  height: 14px;
  background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%) 0
    100% / contain no-repeat;
}

.btn-discard {
  width: 15px;
  height: 12px;
  background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%) 0
    100% / contain no-repeat;
}

.skills-form__skills-table {
  width: 100%;
}

.skills-form__skills-row {
  display: flex;
  width: 100%;
}

.skills-form__skills-cell--name {
  width: 60%;
}

.skills-form__skills-cell--value {
  text-align: right;
  width: 8%;
}
.skills-form__skills-cell--percent {  
  width: 20%;
}

.skills-form__skills-cell--control {
  display: flex;
  align-items: center;
  width: 10%;
}

.skills-form__skills-control {  
  width: 100%;
  display: flex;
  justify-content: space-between;  
}

.skills-form__edit-field {
  width: 95%;
  padding-bottom: 0;
}
</style>