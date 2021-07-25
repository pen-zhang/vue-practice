<template>
  <v-flex col-sm-8 offset-sm-2>
    <v-card>
      <v-toolbar dark> <v-toolbar-title>Login</v-toolbar-title></v-toolbar>

      <v-form>
        <v-container>
          <v-row>
            <v-col cols="8" md="6">
              <v-text-field v-model="userName" label="User Name" required></v-text-field>
            </v-col>

            <v-col cols="8" md="6">
              <v-text-field v-model="password" label="Password" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn class="ms-4 mb-2" @click="login">Login</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: function() {
    return { userName: '', password: '' };
  },
  methods: {
    async login() {
      this.$store.dispatch('login', { userName: this.userName, password: this.password });
    },
  },
};
</script>
