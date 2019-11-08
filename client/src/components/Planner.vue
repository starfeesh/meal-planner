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
                                <v-card-title class="display-1 text--white pa-1 py-0 text-right text-uppercase month">
                                    <span>{{ getCurrentDate(day, week).format('MMM') }}</span>
                                </v-card-title>
                                <v-card-title class="display-1 text--white pa-1 py-0 text-right justify-end">
                                    {{ getCurrentDate(day, week).format('DD') }}
                                </v-card-title>
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
                                                    <v-btn v-if="!checkForData(mealInstance, day, week)"
                                                            dark
                                                            :color="mealInstance.color"
                                                            x-small
                                                            fab
                                                            @click.stop="addMeal()"
                                                            >
                                                        <v-icon>mdi-plus</v-icon>
                                                    </v-btn>
                                                    <v-btn v-else=""
                                                            dark
                                                           :color="mealInstance.color"
                                                            x-small
                                                            fab
                                                            @click.stop="removeMeal()"
                                                            >
                                                        <v-icon>mdi-minus</v-icon>
                                                    </v-btn>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="10" class="py-0 innerChild">
                                            <div>
                                                <v-card class="transparent" tile flat>
                                                    <Meal :meal-text="checkForData(mealInstance, day, week)"
                                                          v-if="checkForData(mealInstance, day, week)"
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
        <v-container ref="container">

        </v-container>
    </v-container>
</template>

<script>
  /* eslint-disable vue/no-unused-components */
  import Vuetify from 'vuetify/lib'
  import Vue from 'vue'
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
      toggleButton: true,
      visibleWeeks: 1,
      activeMeal: ''
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
      addMeal() {
        let vuet = new Vuetify()
        let ComponentClass = Vue.extend(RecipeSearchCard)
        let instance = new ComponentClass({
          vuet,
          propsData: { active: this.active }
        })
        instance.$mount() // pass nothing
        this.$refs.container.appendChild(instance.$el)
      },

      /*changeActive(title, action, date) {
        if (action === 'plus' && date) {
          console.log(moment().format('x') + ' plus before ' + title)
          this.activeDate = date
          this.activeMeal = title
          this.toggleButton = false

          this.$store.commit('meals/setActive', title)

          console.log(moment().format('x') + ' plus after ' + title)
          console.log('Dealing with meal: ' + title + '. Meal that is active: ' + this.active + ' ' + date)

        } else if (action === 'minus' && title === this.active) {
          console.log(moment().format('x') + ' minus before ' + title)
          this.activeDate = ''
          this.activeMeal = ''
          this.toggleButton = true

          this.$store.commit('meals/setInactive')

          console.log(moment().format('x') + ' minus after '  + title)
          console.log('Dealing with meal: ' + title + '. Meal that is active: ' + this.active + ' ' + date)

          //console.log('This meal: ' + mealInstance.title + ' is active: ' + mealInstance.active)
        } else if (this.meals[date][title]) {
          this.toggleButton = true
        }
      },*/
      checkForData (meal, day, week) {
        let mealData = {}
        let date = this.formatDate(day, week)
        Vue.set(mealData, date, this.meals[date])
        if (mealData) {
          if (mealData[date]) {
            if (mealData[date]){
              return mealData[date][meal.title]
            } else {
              return false
            }
          }
        }
      }
    },
    created () {
      this.$store.dispatch('meals/getAllMealTypes')
      this.$store.dispatch('meals/getAllMeals')
    },
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