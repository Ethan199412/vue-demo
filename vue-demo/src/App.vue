<template>
  <div id="app">
    <button v-on:click="handleClick">click</button>
    <Student v-for="(item,index) in scoreList" :key="index" :age="item.age"
    :name="item.name" :score="item.score"/>
    <div class='student'>
      <div class='boy'>boy next door</div>
    </div>
    <div class='test'>hehe</div>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
    return {
      scoreList: [
        {
          name: "Ethan",
          age: 10,
          score: 95,
        },
        {
          name: "Lily",
          age: 11,
          score: 80,
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.number += 1;
    },
  },
};
</script>

<style lang='less'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.student{
  .boy{
    color:red
  }
}
.test{
  background: orange;
}
</style>
