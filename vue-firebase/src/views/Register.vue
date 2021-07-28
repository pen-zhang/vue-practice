<template>
  <div>
    <form @submit.prevent="register" class="mt-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light px-3">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Register</h3>

                <div class="mb-3">
                  <div class="col-12 alert alert-danger px-3" v-if="error">{{ error }}</div>
                  <section class="col-sm-12">
                    <label for="displayName" class="form-label visually-hidden">Display Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="disaplayName"
                      placeholder="Display Name"
                      name="displayName"
                      required
                      v-model="disaplayName"
                    />
                  </section>
                </div>

                <section class="mb-3">
                  <label for="email" class="form-label visually-hidden">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    v-model="email"
                  />
                </section>

                <div class="row">
                  <section class="col-sm-12 mb-3">
                    <input type="password" class="form-control" placeholder="Password" v-model="passOne" />
                  </section>
                  <section class="col-sm-12 mb-3">
                    <input type="password" class="form-control" placeholder="Repeat Password" v-model="passTwo" />
                  </section>
                </div>

                <div class="mb-0 text-end">
                  <button class="btn btn-primary col-2 " type="submit">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/login">login</router-link>
    </p>
  </div>
</template>

<script>
import Firebase from 'firebase';
export default {
  name: 'Register',
  data: function() {
    return {
      displayName: null,
      email: null,
      passOne: null,
      passTwo: null,
      error: null,
    };
  },
  watch: {
    passTwo: function() {
      if (this.passOne !== '' && this.passTwo !== '' && this.passTwo !== this.passOne) {
        this.error = 'passwords must mathc';
      } else {
        this.error = null;
      }
    },
  },
  methods: {
    register: function() {
      const info = {
        email: this.email,
        password: this.passOne,
        displayName: this.displayName,
      };
      if (!this.error) {
        Firebase.auth()
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            (userCredentials) => {
              return userCredentials.user
                .updateProfile({
                  displayName: info.displayName,
                })
                .then(() => {
                  this.$router.replace('meetings');
                });
            },
            (error) => {
              this.error = error.message;
            }
          );
      }
    },
  },
};
</script>
