import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VuetifyDialog from 'vuetify-dialog'

const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#6B637B",
        secondary: "#43365D",
        tertiary: "#13022B",
        accent1: "#AD7DE2",
        accent2: "#C474BD",
        accent3: "#DD6A95",
        accent4: "#EC6070",
      },
      light: {
        primary: "#6B637B",
        secondary: "#43365D",
        tertiary: "#13022B",
        accent1: "#AD7DE2",
        accent2: "#C474BD",
        accent3: "#DD6A95",
        accent4: "#EC6070"
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  },
});
export default vuetify

Vue.use(Vuetify);
Vue.use(VuetifyDialog, { context: { vuetify } })

