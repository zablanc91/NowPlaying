import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Playlist from './components/Playlist';
import Songs from './components/Songs';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: '/songs', component: Songs},
  {path: '/', component: Playlist}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
