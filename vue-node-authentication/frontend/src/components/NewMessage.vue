<template>
  <v-flex col-sm-8 offset-sm-2>
    <v-card>
      <v-toolbar dark> <v-toolbar-title>New Message</v-toolbar-title></v-toolbar>

      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field v-model="messagesBody" label="Message" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn class="ms-4 mb-2" @click="submit">submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
// import axios from 'axios';
// import store from '../store.js';

export default {
  data: function() {
    return { messagesBody: '' };
  },
  methods: {
    async submit() {
      try {
        // console.log(this.messagesBody);
        // let msg = (await axios.post('http://localhost:3000/messages', { message: this.messagesBody })).data;
        // this.$root.$emit('newMessage', msg.message);

        this.$store.dispatch('newMessage', this.messagesBody);
        // console.log(msg);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
