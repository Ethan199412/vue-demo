// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueComponent
import App from './App'
import './main.less'

Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  components: {
    App
  },
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  data: {

  },
  template:`
   <App/>
  `
})

