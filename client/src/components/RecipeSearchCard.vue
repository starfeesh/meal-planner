<template>
    <div>
        <v-row justify="center">
            <v-dialog
                    v-model="dialog"
            >
                {{dialog}}
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
  export default {
    name: 'RecipeSearchCard',
    data: () => ({
      dialog: true,
    }),

  }
</script>

<style scoped>

</style>