import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },{
      path: '/About',
      name: 'About',
      component: About
    },{
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },{
      path: '/Resume',
      name: 'Resume',
      component: Resume
    },{
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
