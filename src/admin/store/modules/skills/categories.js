export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
    },
    DELETE_CATEGORY(state, removeCategoryId) {
      state.categories = state.categories.filter(category => category.id !== removeCategoryId);
    },
    EDIT_CATEGORY(state, editCategory) {
      state.categories = state.categories.map(category => {
        return category.id === editCategory.id ? editCategory : category
      })
    }
  },
  actions: {
    async addCategory({ commit }, newCategory) {
      try {
        const { data: category } = await this.$axios.post('/categories', newCategory);
        commit('ADD_CATEGORY', category)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async removeCategory({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit('DELETE_CATEGORY', categoryId);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async editCategory({ commit }, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, category);
        commit('EDIT_CATEGORY', category);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async getCategories({ commit }) {
      try {
        const { data: categories } = await this.$axios.get('/categories/170');
        commit('SET_CATEGORIES', categories);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    }
  }
}