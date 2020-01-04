<template>
    <div>
        <v-row>
            <v-dialog
                    @click:outside="closeDialog()"
                    v-model="dialog"
                    max-width="45%"
            >
                <v-toolbar color="primary">
                    <div class="justify-space-between align-center tool">
                        <v-toolbar-title class="title hidden-sm-and-down">Recipes or ingredients</v-toolbar-title>
                        <v-card light width="60%">
                            <v-autocomplete
                                    clearable
                                    v-model="mealComponent"
                                    :items="meals"
                                    filled
                                    chips
                                    :menu-props="{light: true}"
                                    label="Start typing..."
                                    item-text="name"
                                    item-value="name"
                                    flat
                                    hide-no-data
                                    hide-details
                                    solo
                                    multiple
                                    @change="selectComponent"

                            >
                                <template v-slot:selection="data">
                                    <v-chip v-bind="data.attrs"
                                            :input-value="data.selected"
                                            close
                                            @click="data.select"
                                            @click:close="remove(data.item)"
                                    >
                                        <span>{{ data.item.name }}</span>
                                    </v-chip>
                                </template>
                                <template v-slot:item="data">
                                    <template v-if="typeof data.item !== 'object'">
                                        <v-list-item-content v-text="data.item"></v-list-item-content>
                                    </template>
                                    <template v-else>
                                        <v-list-item-content>
                                        <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                </template>
                            </v-autocomplete>
                        </v-card>
                    </div>
                </v-toolbar>
                <v-card flat
                        color="primary"
                        v-if="selectedCount === 1"
                >
                    <v-card-title>
                        {{ selectedTitle }}
                    </v-card-title>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
  export default {
    /* eslint-disable no-console */
    /* eslint-disable no-unused-vars */

    name: 'RecipeSearchCard',
    data: () => ({
      dialog: true,
      seen: true,
      meals: [ {name: 'Spaghetti', mealType: 'dinner'}, {name: 'Soup', mealType: 'dinner'}, {name: 'Cereal', mealType: 'breakfast'} ],
      mealComponent: null,
      criteria: null,
      selectedCount: 0,
      selectedTitle: '',
      filters: [
        {
          value: 0,
          fn: (item, queryText, itemText) => item.indexOf(queryText) > -1,
        },
        {
          value: 1,
          fn: (item, queryText, itemText) => queryText.length > 2 && item.toLowerCase().indexOf(queryText) > -1,
        },
      ],
    }),
    methods: {
      selectComponent(item) {
        this.selectedCount++
        this.selectedTitle = item[0]
      },
      closeDialog() {
        this.seen = false
        this.$emit('update:shown', this.seen)
        this.selectedCount = 0
      }
    },
    props: ['shown'],
    computed: {
      activeFilter () {
        if (this.model == null) return undefined
        console.log(this.criteria)

        return this.filters[this.model].fn
      },
    }

  }
</script>

<style scoped>
    .v-dialog__content {
        align-items: flex-start;
        top: 15%
    }
    .tool {
        display: flex;
        width: 100%
    }
</style>