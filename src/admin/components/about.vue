<template lang="pug">
section.about
	.container.about__container
		.about__title-row
			h2.about__title.title Блок "Обо мне"
			.about__addgroup
				button(
					type="button"
					title="Добавить новую группу"
					@click="isEditCardOn = true"
					).btn-addnew.form__btn-addnew--group
					.btn-addnew__plus.btn-addnew__plus--group +
					span.about__addgroup-text Добавить&nbspгруппу
		.about__content
			.about__skills
				ul.skills__group-list            
					li(v-if="isEditCardOn === true").skills-item
						addNewGroup(
							:categories="categories"
							:isEditCardOn="isEditCardOn"
							@discardAdd="discardCreateNewGroup"
						)
					li.skills-item(
						v-for="category in categories"
						)
						skills-group(
							:category="category"
							:skills="filterSkillsByCategoryId(category.id)"
						)          
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {
    addNewGroup: () => import ("./about/addGroupSkills"),
    "skills-group": () => import ("./about/skillsGroup")
  },
  data() {
    return {
      isEditCardOn: false
    };
  },
  methods: {
    ...mapActions("categories", ["getCategories"]),
    ...mapActions("skills", ["fetchSkills"]),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
		},
		discardCreateNewGroup() {
			this.isEditCardOn = false;
		}
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    }),
    ...mapState("skills", {
      skills: state => state.skills
    })
  },
  async created() {
    try {
			await this.getCategories();
    } catch (error) {
      //error
    }

    try {
      await this.fetchSkills();
    } catch {
      //error
    }
  }
};
</script>

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
</style>