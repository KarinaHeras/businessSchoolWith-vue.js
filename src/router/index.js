import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Form from '@/components/Form'
import Student from '@/components/Student'
import StudentEdit from '@/components/StudentEdit'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'aMain',
      component: Main,
      props: true
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true
    },
    {
      path: '/student/:id',
      name: 'Id',
      component: Student,
      props: true,
      children: [
        {
          path: 'edit',
          name: 'Edit',
          component: StudentEdit,
          props: true,
        }
      ]
    },
    {
      path: '*',
      redirect: '/'

    }
  ]
})

