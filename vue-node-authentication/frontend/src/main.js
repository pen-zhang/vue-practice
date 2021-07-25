import Vue from 'vue';
import App from './App.vue';
import store from './store';

import Vuetify from 'vuetify';
import vuetify from './plugins/vuetify';

import vueRouter from 'vue-router';
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';
import Message from './components/Message';
import Register from './components/Register';
import Login from './components/Login';

Vue.use(Vuetify);
Vue.use(vueRouter);

const routes = [
  { path: '/', component: Messages },
  { path: '/NewMessage', component: NewMessage },
  { path: '/Message/:id', component: Message },
  { path: '/Register', component: Register },
  { path: '/Login', component: Login },
];

const router = new vueRouter({ routes, mode: 'history' }); // default '#' mode VS history mode

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
