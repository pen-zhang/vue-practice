<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      :meetings="meetings"
      :error="error"
      @logout="logout"
      @addMeeting="addMeeting"
      @deleteMeeting="deleteMeeting"
      @checkin="checkIn"

    />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import Firebase from 'firebase';
import db from './db.js';

export default {
  name: 'App',
  data: function() {
    return {
      user: null,
      meetings: [],
      error: null,
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push('login');
        });
    },
    addMeeting(meetingName) {
      db.collection('users')
        .doc(this.user.uid)
        .collection('meetings')
        .add({
          name: meetingName,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
        });
    },
    deleteMeeting(meetingId) {
      db.collection('users')
        .doc(this.user.uid)
        .collection('meetings')
        .doc(meetingId)
        .delete();
    },
    checkIn(info) {
      db.collection('users')
        .doc(info.userID)
        .collection('meetings')
        .doc(info.meetingID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            db.collection('users')
              .doc(info.userID)
              .collection('meetings')
              .doc(info.meetingID)
              .collection('attendees')
              .add({
                displayName: info.displayName,
                email: info.email,
                createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
              })
              .then(() => {
                this.$router.push('/attendees/' + info.userID +'/' + infor.meetingID);
              });
          } else {
            this.error = 'Sorry, no such meeting';
          }
        });
    },
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        // console.log(user.uid);
        db.collection('users')
          .doc(this.user.uid)
          .collection('meetings')
          .onSnapshot((snapshot) => {
            const snapData = [];
            snapshot.forEach((doc) => {
              snapData.push({
                id: doc.id,
                name: doc.data().name,
              });
            });
            this.meetings = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else {
                return 1;
              }
            });
          });
      }
    });
    // db.collection('users')
    //   .doc('0jmDatODcLTefP3biZya')
    //   .get()
    //   .then((snapshot) => {
    //     this.user = snapshot.data().name;
    //   });
  },
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
