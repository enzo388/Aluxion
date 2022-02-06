import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
/* import Home from '../views/Home.vue' */
import HomeComponent from '../components/HomeComponent.vue';
import InfoMapComponent from '../components/InfoMapComponent.vue';
import Map from '../components/Map.vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/Info',
    name: 'Info',
    component: InfoMapComponent
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
