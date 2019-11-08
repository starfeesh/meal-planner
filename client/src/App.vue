<template>
  <v-app class="app">
      <Layout/>
  </v-app>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  body, html {
    background: #13022B;
  }
</style>
