import planner from '../../api/planner'

// initial state
const state = {
  meals: {},
  mealTypes: [],
  activeMeal: ''
}

// getters
const getters = {}
// actions
const actions = {
  getAllMeals ({ commit }) {
    planner.getMeals(meals => {
      commit('setMeals', meals)
    })
  },
  getAllMealTypes ({ commit }) {
    planner.getMealTypes(mealTypes => {
      commit('setMealTypes', mealTypes)
    })
  },
  setActive (context, activeMeal) {
    context.commit('setActive', activeMeal)

  }
}

// mutations
const mutations = {
  setMeals (state, meals) {
    state.meals = meals
  },
  removeMeal (state, {meal, date}) {
    state.meals[date][meal.title]['title'] = ""
  },
  setMealTypes (state, mealTypes) {
    state.mealTypes = mealTypes
  },
  setActive (state, activeMeal) {
      state.activeMeal = activeMeal
  },
  setInactive (state) {
      state.activeMeal = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}