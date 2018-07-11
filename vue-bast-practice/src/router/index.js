import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
import NotFound from '@/components/404'
import LogTime from '@/components/LogTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/TimeEntries',
      component: TimeEntries,
      children: [{
        path: 'LogTime',
        component: LogTime
      }]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
