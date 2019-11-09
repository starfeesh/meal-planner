import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);


export default new Vuetify({
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


