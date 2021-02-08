import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
    component: () => import('@/layouts/Home'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: 'Home | Vue App',
          // requireAuth: true
        }
      },
    ]
  },
  {
    path: '/dash',
    name: 'Dash',
    redirect: '/dashboard',
    component: () => import('@/layouts/Home'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta: {
          title: 'Dashboard | Vue App'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   if (checkToken()) {
  //     next()
  //   } else {
  //     next('/explore')
  //     return
  //   }
  // }

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next()
})

export default router
