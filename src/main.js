// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
import IndexPage from './pages/index'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.use(Router)
Vue.use(Resource)

Vue.config.productionTip = false

/* eslint-disable no-new */
let  router=new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    }
  ]
})
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
