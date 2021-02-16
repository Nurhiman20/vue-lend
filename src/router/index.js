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
      {
        path: '/home/overview/:idAsset',
        name: 'Overview Asset',
        component: () => import('@/views/Home/views/Overview.vue'),
        meta: {
          title: 'Overview Asset | Vue App',
          // requireAuth: true
        }
      }
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
  },
  {
    path: '/depositLayout',
    name: 'DepositLayout',
    redirect: '/deposit',
    component: () => import('@/layouts/Home'),
    children: [
      {
        path: '/deposit',
        name: 'Deposit',
        component: () => import('@/views/Deposit'),
        meta: {
          title: 'Deposit | Vue App'
        }
      }
    ]
  },
  {
    path: '/borrowLayout',
    name: 'Borrow Layout',
    redirect: '/borrow',
    component: () => import('@/layouts/Home'),
    children: [
      {
        path: '/borrow',
        name: 'Borrow',
        component: () => import('@/views/Borrow'),
        meta: {
          title: 'Borrow | Vue App'
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
