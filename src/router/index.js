import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/movies/add',
    name: 'AddMovie',
    component: () => import('../components/AddMovie.vue'),
  },
  {
    path: '/movies/:id',
    name: 'Movie',
    component: () => import('../components/Movie.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
