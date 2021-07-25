<template>
  <v-app>
    <v-app-bar app light>
      <v-btn text class="ms-4 me-4" to="/">Messages</v-btn>

      <v-btn text class="ms-4 me-4" to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn text v-if="!$store.state.token" class="ms-4 me-4" to="/Register">Register</v-btn>
      <v-btn text v-if="!$store.state.token" class="ms-4 me-4" to="/Login">Login</v-btn>
      <v-btn text v-if="$store.state.token" class="ms-4 me-4" @click="$store.commit('logout')">Logout</v-btn>
    </v-app-bar>
    <br />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Messages from './components/Messages.vue';
// import NewMessage from './components/NewMessage.vue';

export default {
  name: 'App',

  components: {
    // Messages,
    // NewMessage,
  },

  data: () => ({
    //
  }),
};
</script>
