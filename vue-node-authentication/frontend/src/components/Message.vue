<template>
  <v-flex col-sm-8 offset-sm-2>
    <v-card>
      <v-toolbar dark> <v-toolbar-title>Message</v-toolbar-title></v-toolbar>
      <v-card-text>
        {{ message }}
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
// import axios from 'axios';
// import store from '../store.js';

export default {
  data: function() {
    return { message: '' };
  },
  async created() {
    console.log('params id:', this.$route.params.id);
    this.message = (await this.$store.dispatch('getMessage', this.$route.params.id)).data;
  },
};
</script>
