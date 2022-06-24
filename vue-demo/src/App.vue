<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <router-view/> -->
    <div>{{ name }}</div>
    <button v-on:click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Ethan",
    };
  },
  methods: {
    handleClick(){
      console.log(this)
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
