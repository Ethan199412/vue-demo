<template>
  <div>
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <div>成绩：{{ score }}</div>
    <input ref="input" />
    <button v-on:click="showInfo">click</button>
    <div class='test'>hehe student</div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    showInfo(event) {
      console.log(this.$refs.input);
    },
  },
  props: {
    name: String,
    age: Number,
    score: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test{
  background: skyblue;
}

</style>
