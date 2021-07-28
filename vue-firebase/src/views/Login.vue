<template>
  <div>
    <form class="mt-3" @submit.prevent="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3 ps-1">Log in</h3>
                <section class="row mb-2 ps-3 pe-3">
                  <div class="col-12 alert alert-danger px-3" v-if="error">{{ error }}</div>
                  <label for="Email" class="form-label visually-hidden">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" required />
                </section>
                <section class="row mb-2 ps-3 pe-3">
                  <input type="password" class="form-control" placeholder="Password" v-model="password" required />
                </section>
                <div class="row justify-content-end mb-0 ">
                  <button class="col-2 btn btn-primary me-3" type="submit">Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-3">
      or
      <router-link to="/register">register</router-link>
    </p>
  </div>
</template>

<script>
import FireBase from 'firebase';
export default {
  data: function() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login: function() {
      const info = {
        email: this.email,
        password: this.password,
      };
      FireBase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push('meetings');
          },
          (error) => {
            this.error = error.message;
          }
        );
    },
  },
};
</script>
