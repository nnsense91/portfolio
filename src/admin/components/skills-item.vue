<template lang="pug">
  li.skills-form__skills-item
    table.skills-form__skills-table
      tr.skills-form__skills-row
        td.skills-form__skills-cell.skills-form__skills-cell--name {{skill.title}}
        td.skills-form__skills-cell.skills-form__skills-cell--value {{skill.percent}}
        td.skills-form__skills-cell.skills-form__skills-cell--percent %
        td.skills-form__skills-cell.skills-form__skills-cell--control
          .skills-form__skills-control
            button(type="button" title="Редактировать").btn-edit
            button(type="button" title="Удалить").btn-delete
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    skill: Object
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
  width: 10%;
}

.skills-form__skills-control {  
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>