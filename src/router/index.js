// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   linkActiveClass: 'bg-black bg-opacity-25',
//   routes
// })

import Groups from '../views/Groups.vue'
import Groups2 from '../views/Groups_v2.vue'
import Photostream from '../views/Photostream.vue'
import Photostream2 from '../views/Photostream_v2.vue'
import Scheduled from '../views/Scheduled.vue'
import Scheduled2 from '../views/Scheduled_v2.vue'

export let routes = [
  {
    path: '/',
    name: 'Groups',
    component: Groups,
    meta: { layout: 'Layout1' }
  },
  {
    path: '/photostream',
    name: 'Photostream',
    component: Photostream,
    meta: { layout: 'Layout1' }
  },
  {
    path: '/scheduled',
    name: 'Scheduled',
    component: Scheduled,
    meta: { layout: 'Layout1' }
  },
  {
    path: '/groups-v2',
    name: 'Groups 2',
    component: Groups2,
    meta: { layout: 'Layout2' }
  },
  {
    path: '/photostream-v2',
    name: 'Photostream2',
    component: Photostream2,
    meta: { layout: 'Layout2' }
  },
  {
    path: '/scheduled-v2',
    name: 'Scheduled2',
    component: Scheduled2,
    meta: { layout: 'Layout2' }
  }
]
