<template>
    <v-container fluid class="pa-0" ref="container">
        <input type="text"
               ref="mealInput"
               :value="mealText"
               class="mealInput"
               size="15"
               @blur.native="mealDescription = $event.target.value; edit = false; $emit('input', mealDescription);"
               @keyup.enter.native="mealDescription = $event.target.value; edit = false; $emit('input', mealDescription);"
               v-focus=""
        />
    </v-container>
</template>

<script>
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-console */

  import moment from 'moment'
  import VClamp from 'vue-clamp'
  export default {
    name: "Meal",
    data: () => ({
      mealDescription: '',
      edit: false,
    }),
    methods: {
      /*getMealDescription(meal, date) {
        if (this.meals[date]) {
          switch (meal.id) {
            case 0: return this.mealDescription = this.meals[date].breakfast
            case 1: return this.mealDescription = this.meals[date].lunch
            case 2: return this.mealDescription = this.meals[date].dinner
            case 3: return this.mealDescription = this.meals[date].snacks
          }
        }
      },*/
      makeMealEntry(meal, date) {
        let type = meal.title
        this.meals[date] = Object.assign({[type]: ''})
      },
      focusInput() {
        this.$nextTick(() => {
          console.log(this.clicked)
          if (this.clicked) {
            this.$refs.mealInput.focus()
          }
        })
      }
    },
    watch: {
      edit: function() {
        this.edit = this.clicked
        this.focusInput()
      }
    },
    directives: {
      focus: {
        inserted: function(el) {
          el.focus()
        }
      }
    },
    props: ['meal', 'date', 'clicked', 'meals', 'mealTypes', 'mealText']
  }
</script>

<style scoped>
    .mealDescription, .mealInput {
        overflow-y: hidden;
        margin-bottom: 5px;
        margin-top: -20px;

    }
    .mealInput:focus {
        background-color: rgba(67, 54, 93, 0.15);
        outline: none;
        margin-bottom: 5px;
        margin-top: -20px;
    }

</style>