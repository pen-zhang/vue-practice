<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Meeting Log</router-link>
        <div class="navbar-nav ms-auto">
          <router-link class="nav-item nav-link" to="/meetings" v-if="user">meetings</router-link>
          <router-link class="nav-item nav-link" to="/login" v-if="!user">log in</router-link>
          <router-link class="nav-item nav-link" to="/register" v-if="!user">register</router-link>
          <button class="nav-item nav-link btn btn-link" @click="$emit('logout')" v-if="user">log out</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['user'],
};
</script>
