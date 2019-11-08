<template>
  <v-app>

    <v-content app>
      <Planner></Planner>
    </v-content>

    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <div class="pos my-12">
        <div class="circles">
          <v-progress-circular
                  :rotate="-90"
                  :size="155"
                  :width="8"
                  :value="50"
                  color="accent4"
          >
          </v-progress-circular>
        </div>
        <div class="circles">
          <v-progress-circular
                  :rotate="-90"
                  :size="130"
                  :width="8"
                  :value="25"
                  color="accent3"
          >
          </v-progress-circular>
        </div>
        <div class="circles">
          <v-progress-circular
                  :rotate="-90"
                  :size="105"
                  :width="8"
                  :value="45"
                  color="accent2"
          >
          </v-progress-circular>
        </div>
        <div class="circles">
          <v-progress-circular
                  :rotate="-90"
                  :size="80"
                  :width="8"
                  :value="78"
                  color="accent1"
          >
          </v-progress-circular>
        </div>
      </div>
      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.text"
                @click="doNothing()"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
            app
            color="tertiary"
            dark
            flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </v-app>
</template>

<script>
  import Planner from './Planner.vue';
  export default {
    components: {
       Planner,
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
      items: [
        { icon: 'mdi-home', text: 'Home' },
        { icon: 'mdi-calendar-range', text: 'Planner' },
        { icon: 'mdi-shopping', text: 'Shopping list' },
      ]
    }),
    created () {
      //this.$vuetify.theme.dark = true
    },
    methods: {
      doNothing() {

      },
    }
  }
</script>

<style scoped>
  .theme--dark.v-application {
    background: #13022B;
  }
  .theme--dark.v-navigation-drawer {
    background-color: #43365d;
  }
  .pos {
    position: relative;
    width: 100%;
    height: 100px;
    text-align: center;
  }
  .circles {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>