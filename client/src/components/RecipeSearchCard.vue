<template>
    <div>
        <v-row justify="center" >
            <v-dialog
                    @click:outside="closeDialog()"
                    v-model="dialog"
                    max-width="35%"
            >
                <v-toolbar color="primary">
                    <v-toolbar-title class="title mr-12 hidden-sm-and-down">Recipes or ingredients</v-toolbar-title>
                    <v-card width="60%" class="float-right">
                        <v-autocomplete
                                light
                                v-model="model"
                                :items="meals"
                                :search-input.sync="search"
                                :menu-props="{light: true}"
                                flat
                                hide-no-data
                                hide-details
                                solo
                        ></v-autocomplete>
                    </v-card>
                </v-toolbar>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
  export default {
    /* eslint-disable no-console */

    name: 'RecipeSearchCard',
    data: () => ({
      dialog: true,
      seen: true,
      meals: ['Spaghetti', 'Soup'],
      model: null,
      search: null,
    }),
    methods: {
      closeDialog() {
        this.seen = this.isShown
        this.seen = false
        this.$emit('update:is-shown', this.seen)
        console.log(this.dialog)
      }
    },
    props: ['isShown']

  }
</script>

<style scoped>
    .v-dialog__content {
        align-items: flex-start;
        top: 15%
    }
</style>