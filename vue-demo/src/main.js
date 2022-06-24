// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './main.css'

Vue.config.productionTip = false
// Vue.config.devtools = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  // router,
  // components: { App },
  // template: '<App/>'
  template: `<div>
    <div class='basic' :class='style'>{{number}}</div>
    <button v-on:click="handleClick">click</button>
    <button v-on:click="handleChangeStyle">change style</button>
    <input v-model='firstName'/>
    <input v-model='lastName'/>
    <div>{{fullName}}</div>
    <div>查找</div>
    <input v-model='searchedWords'/>
    <template>
      <div v-for="(p,index) of searchedCars" :key="p.id">{{p.name}}-{{p.color}}-{{p.price}}
        <input/>
      </div>
    </template>
    <button v-on:click="handleDelete">删除</button>
    <button v-on:click="handleAdd">加一辆</button>
  </div>`,
  data: {
    number: 1,
    firstName: 'Ethan',
    lastName: 'Lee',
    style: ['type1', 'type2', 'type3'],
    cars: [
      { name: '奥迪', color: 'black', price: '700000', id: 1 },
      { name: '桑塔纳', color: 'red', price: '200000', id: 2 },
      { name: '马自达', color: 'silver', price: '500000', id: 3 }
    ],
    searchedWords: ''
  },
  methods: {
    handleClick() {
      this.number += 1
      console.log(this)
    },
    combine() {
      const { firstName, lastName } = this
      return firstName + '-' + lastName
    },
    handleChangeStyle() {
      if (this.style.length > 0) {
        this.style.pop()
      }
    },
    handleDelete() {
      this.cars.splice(1, 1)
      console.log(this.cars)
    },
    handleAdd() {
      this.cars.unshift({ name: '劳斯莱斯', color: 'silver', price: '1000000', id: Math.random() })
    }
  },
  computed: {
    fullName: {
      get() {
        console.log('get called')
        const { firstName, lastName } = this
        return firstName + '-' + lastName
      }
    },
    searchedCars() {
      // if(!this.searchedWords){
      //   return this.cars
      // }
      return this.cars.filter(e => e.name.includes(this.searchedWords))
    }
  },
  watch: {
    lastName: {
      handler(newValue, oldValue) {
        console.log({ oldValue, newValue })
      }
    }
  }
})

