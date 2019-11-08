<template>
    <v-container fluid class="pa-0" ref="container">
        <v-clamp :max-lines="1">{{ mealText }}</v-clamp>
    </v-container>
</template>

<script>
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-console */

  import moment from 'moment'
  import VClamp from 'vue-clamp'
  export default {
    name: "Meal",
    components: {
      VClamp
    },
    methods: {

    },
    props: ['mealText']
  }
</script>