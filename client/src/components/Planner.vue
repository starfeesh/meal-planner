<template>
    <v-container fluid>
        <v-row v-for="week in visibleWeeks"
               :key="week"
               no-gutters
               class="px-2"
               justify="center"
        >
            <v-col
                    cols="12" lg="12" md="12" sm="12"
            >
                <v-row>
                    <v-col
                            v-for="day in 7"
                           :key="day"
                            class="px-1"
                    >
                        <v-card
                                class="mx-1 primary outer"
                                min-height="495"
                                >

                            <v-sheet color="secondary" class="innerTitle">
                                <v-card-subtitle class="text--white px-2 py-0 text-right text-uppercase">
                                    <span>{{ getCurrentDate(day, week).format('ddd') }}</span>
                                </v-card-subtitle>
                                <v-card-subtitle class="display-1 text--white pa-1 py-0 text-right text-uppercase month">
                                    <span>{{ getCurrentDate(day, week).format('MMM') }}</span>
                                </v-card-subtitle>
                                <v-card-subtitle class="display-1 text--white pa-1 py-0 text-right justify-end">
                                    {{ getCurrentDate(day, week).format('DD') }}
                                </v-card-subtitle>
                            </v-sheet>
                            <v-card-text class="py-0 innerBody">
                                <v-col cols="12" class="py-0 innerChild" v-for="mealInstance in mealTypes" :class="separateMeals(mealInstance)" :key="mealInstance.id">
                                    <v-row no-gutters>
                                        <v-col cols="8" class="ma-auto innerChild">
                                            <v-card class="transparent" tile flat>
                                                <v-card-text class="px-0">
                                                    <p :class="mealInstance.class" class="text-uppercase font-weight-bold">{{ mealInstance.title }}</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                        <v-col cols="4" class="mb-auto mt-2">
                                            <v-card class="transparent" tile flat>
                                                <v-card-text class="pa-0 pt-1 text-right text--white">
                                                    <v-btn v-if="displayPlusOrMinus(mealInstance, day, week)"
                                                           dark
                                                           :color="mealInstance.color"
                                                           x-small
                                                           fab
                                                           @click.stop="removeContent(mealInstance, day, week)"
                                                    >
                                                        <v-icon> mdi-minus </v-icon>
                                                    </v-btn>
                                                    <v-btn v-if="!displayPlusOrMinus(mealInstance, day, week)"
                                                           dark
                                                           :color="mealInstance.color"
                                                           x-small
                                                           fab
                                                           @click.stop="displayRecipeCard(mealInstance, day, week)"
                                                    >
                                                        <v-icon> mdi-plus </v-icon>
                                                    </v-btn>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="10" class="py-0 innerChild">
                                            <div>
                                                <v-card class="transparent" tile flat>
                                                    <Meal :meal-text="getMealText(mealInstance, day, week)"
                                                    />
                                                </v-card>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-container ref="container" v-if="showRecipeCard">
            <RecipeSearchCard :shown.sync="showRecipeCard" light/>
        </v-container>
    </v-container>
</template>

<script>
  /* eslint-disable vue/no-unused-components */
  /* eslint-disable no-unused-vars */
  import Vue from 'vue'
  //import vuetify from '../plugins/vuetify'
  import { mapState } from 'vuex'
  import moment from 'moment'
  import Meal from "./Meal"
  import RecipeSearchCard from "./RecipeSearchCard"

  export default {
    components: {
      Meal,
      RecipeSearchCard
    },
    data: () => ({
      activeDate: '',
      toggleButton: false,
      visibleWeeks: 1,
      activeMeal: '',
      showRecipeCard: false,
    }),
    computed: mapState({
      meals: state => state.meals.meals,
      mealTypes: state => state.meals.mealTypes,
      active: state => state.meals.activeMeal
    }),
    methods: {
      formatDate(day, week) {
        /* eslint-disable no-console */
        return this.getCurrentDate(day, week).format('YYYY-MM-DD')
      },
      separateMeals(meal) {
        if (meal.id === 3) {
          return "hiddenSeparator"
        } else return "mealSeparator"
      },
      getCurrentDate(day, week) {
        let sunday = moment().startOf('week')
        if (week > 1) {
          week = week - 1
          let days = week * 7 + day
          return sunday.add(days, 'day')
        } else return sunday.add(day, 'day')
      },
      getMealText(meal, day, week) {
        if (this.meals.hasOwnProperty(this.formatDate(day, week))) {
          return this.meals[this.formatDate(day, week)][meal.title].title
        }
      },
      displayRecipeCard(meal, day, week) {
        this.showRecipeCard = !this.showRecipeCard
        console.log('Show card: ' + this.showRecipeCard)
        /*let ComponentClass = Vue.extend(RecipeSearchCard)
        let instance = new ComponentClass({
          vuetify,
          propsData: { active: this.active }
        })
        instance.$mount() // pass nothing
        this.$refs.container.appendChild(instance.$el)*/
      },
      removeContent (meal, day, week) {
        let meals = this.meals

        if (meals.hasOwnProperty(this.formatDate(day, week))) {
          if (meals[this.formatDate(day, week)].hasOwnProperty(meal.title)) {
            this.$store.commit('meals/removeMeal', {meal: meal, date: this.formatDate(day, week)})
            console.log(meals)
          }
        }

      },
      displayPlusOrMinus (meal, day, week) {
        if (this.meals.hasOwnProperty(this.formatDate(day, week))) {
          if (this.meals[this.formatDate(day, week)].hasOwnProperty(meal.title)) {
            if (this.meals[this.formatDate(day, week)][meal.title].title.length > 0) {
              return true // data exists, display minus
            }
          }
        }
      }
    },
    created () {
      this.$store.dispatch('meals/getAllMealTypes')
      this.$store.dispatch('meals/getAllMeals')
    }
  }
</script>

<style>
    .bodyText {
        height: 60px;
    }
    .accent-1-text {
        color: #AD7DE2;
    }
    .accent-2-text {
        color: #C474BD;
    }
    .accent-3-text {
        color: #DD6A95;
    }
    .accent-4-text {
        color: #EC6070;
    }
    .hiddenSeparator {
        border: none;
        margin-left: -15px;
        min-width: 120%;
        padding: 25px;
    }
    .mealSeparator {
        border-bottom: rgba(19, 2, 43, 0.12) 1px solid;
        margin-left: -15px;
        min-width: 120%;
        padding: 25px;
    }
    .month {
        opacity: 30%;
        position: absolute;
    }
    .outer {
        display: flex !important;
        flex-direction: column;
    }
    .innerTitle {
        min-height: 60px;
        flex: 0 1 0;
    }
    .innerBody {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
    }
    .innerChild {
        flex: 1 !important;
    }

</style>