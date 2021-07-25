<template>
  <v-flex col-8 offset-sm-2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item v-for="(message, index) in $store.state.messages" :key="index" :to="'/message/' + index">
          <v-list-item-content>
            <v-list-item-title v-text="message.text"></v-list-item-title>
            <v-list-item-subtitle v-text="message.user"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
// import axios from 'axios';
// import store from "../store.js";

export default {
  data: function() {
    return {};
  },
  async created() {
    // this.messages = (await axios.get('http://localhost:3000/messages')).data;
    // let messages = (await axios.get('http://localhost:3000/messages')).data;
    // this.$store.commit('updateMessages', messages);

    this.$store.dispatch('getMessages');

    console.log('fetch server data', this.$store.state.messages);

    // this.$root.$on('newMessage', message => {
    //   this.messages.push(message);
    // })
  },
};
</script>
