<template>
    <div>
        <v-overlay :value="overlay">
            <v-row justify="center">
                <v-dialog
                        v-model="dialog"
                        max-width="290"
                >
                    {{dialog}}
                </v-dialog>
            </v-row>
        </v-overlay>
    </div>
</template>

<script>
  export default {
    name: 'RecipeSearchCard',
    data: () => ({
      dialog: true,
      overlay: true
    }),

  }
</script>

<style scoped>

</style>