// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './main.css'

Vue.config.productionTip = false
// Vue.config.devtools = false

/* eslint-disable no-new */
const Student = Vue.extend({
  data() {
    return {
      name: 'ethan',
      age: 13
    }
  },
  methods: {
    changeAge() {
      this.age += 1
    }
  },
  template: `<div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click='changeAge'>点我</button>
  </div>`
})

const School = Vue.extend({
  data() {
    return {
      name: '华中科技大学',
      address: '武汉'
    }
  },
  methods: {
    handleClick() {
      this.name += 'hehe'
    }
  },
  components:{
    Student
  },
  template: `<div>
  <div>{{name}}</div>
  <div>{{address}}</div>
  <button @click="handleClick">点我</button>
  <Student/>
  </div>`
})

console.log('[p0]',typeof School, new School())

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
    School
  },
  data: {
    number: 1,
    firstName: 'Ethan',
    lastName: 'Lee',
    style: ['type1', 'type2', 'type3'],
    cars: [
      { name: '奥迪a8', color: 'silver', price: 900000, id: 4 },
      { name: '奥迪a6', color: 'black', price: 700000, id: 1 },
      { name: '桑塔纳', color: 'red', price: 200000, id: 2 },
      { name: '马自达', color: 'silver', price: 500000, id: 3 },
    ],
    searchedWords: '',
    sort: false,
    colors: ['red', 'green', 'blue'],
    innerText: '<h1>haha</h1>'
  },
  beforeCreate() { // 指的是绑定关系，虚拟 dom 和正式 dom 的绑定关系
    console.log('before create', this)
  },
  methods: {
    handleClick() {
      this.number += 1
      console.log(this)
    },
    handleSort() {
      // this.searchedCars.sort((a, b) => a.price - b.price)
      // console.log(this.searchedCars)
      this.sort = !this.sort
    }
    ,
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
    },
    handleChangePrice() {
      this.cars[0].price -= 100000
    },
    handleChangeColor() {
      this.colors[0] = 'orange'
      this.colors = [...this.colors]
    },
    bye() {
      this.$destroy()
      console.log('bye')
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
      const arr = this.cars.filter(e => e.name.includes(this.searchedWords))
      if (this.sort) {
        return arr.sort((a, b) => a.price - b.price)
      }
      return arr
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

