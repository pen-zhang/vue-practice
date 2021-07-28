<template>
  <form action="" class="mt-3" @submit.prevent="handleCheckIn">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card bg-light">
            <div class="card-body">
              <h3 class="font-weight-light mb-3">Check in</h3>
              <section class="mb-3">
                <div class="col-12 alert alert-danger px-3" v-if="error">{{ error }}</div>
                <label for="displayName" class="form-label visually-hidden">Name</label>
                <input
                  type="text"
                  id="displayName"
                  class="form-control"
                  placeholder="Name"
                  required
                  v-model="displayName"
                />
              </section>

              <section class="mb-3">
                <label for="Email" class="form-label visually-hidden">Email</label>
                <input type="email" id="Email" class="form-control" placeholder="Email" required v-model="email" />
              </section>
              <div class="text-end mb-0"><button class="btn btn-primary" type="submit">Check in</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CheckIn',
  data: function() {
    return {
      displayName: null,
      email: null,
    };
  },
  props: ['error'],
  methods: {
    handleCheckIn() {
      // console.log(this.$route.params);
      this.$emit('checkin', {
        userID: this.$route.params.userID,
        meetingID: this.$route.params.meetingID,
        displayName: this.displayName,
        email: this.email,
      });
      this.displayName = null;
      this.email = null;
    },
  },
};
</script>
