// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueComponent
import App from './App'
import router from './router'
import './main.css'

Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  // router,
  // components: { App },
  // template: '<App/>'
  // template: `<div>
  //   <div class='basic' :class='style'>{{number}}</div>
  //   <button v-on:click="handleClick">click</button>
  //   <button v-on:click="handleChangeStyle">change style</button>
  //   <input v-model='firstName'/>
  //   <input v-model='lastName'/>
  //   <div>{{fullName}}</div>
  //   <button v-on:click="handleSort">排序</button>
  //   <div>查找</div>
  //   <input v-model='searchedWords'/>
  //   <template>
  //     <div v-for="(p,index) of searchedCars" :key="p.id">{{p.name}}-{{p.color}}-{{p.price}}
  //       <input/>
  //     </div>
  //   </template>
  //   <button v-on:click="handleDelete">删除</button>
  //   <button v-on:click="handleAdd">加一辆</button>
  //   <button v-on:click="handleChangePrice">改价格</button>
  //   <div>罗列颜色</div>
  //   <div v-for="(e,index) of colors" :key="e">{{e}}</div>
  //   <button v-on:click="handleChangeColor">改颜色</button>
  //   <div v-html='innerText'></div>
  // </div>`,
  components: {
    App
  },
  data: {

  },
  template:`
   <App/>
  `
})

