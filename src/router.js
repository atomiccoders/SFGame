import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/calc/missions',
      name: 'missions',
      component: () =>
        import(/* webpackChunkName: "missions" */ './views/Missions.vue')
    },
    {
      path: '/calc/weapons',
      name: 'weapons',
      component: () =>
        import(/* webpackChunkName: "weapons" */ './views/Weapons.vue')
    },
    {
      path: '/lib/characters',
      name: 'characters',
      component: () =>
        import(/* webpackChunkName: "weapons" */ './views/Characters.vue')
    },
    {
      path: '/lib/locations',
      name: 'locations',
      component: () =>
        import(/* webpackChunkName: "weapons" */ './views/Locations.vue')
    },
    {
      path: '/lib/experience',
      name: 'experience',
      component: () =>
        import(/* webpackChunkName: "weapons" */ './views/Experience.vue')
    }
  ]
})
