import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './Home.vue'
import People from './components/People.vue'
import Planets from './components/Planets.vue'
import Starships from './components/Starships.vue'


Vue.use(VueRouter);

const routes = [
  {path:'/', component: Home},
  {path:'/home', component: Home},
  {path:'/people', component: People},
  {path:'/planets', component: Planets},
  {path:'/starships', component: Starships}
]

Vue.component('home', Home);
Vue.component('people', People);
Vue.component('planets', Planets);
Vue.component('starships', Starships);



const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})