<template>
  <div id="app">
    <ToDoInput :addCallback="addList"/>
    <ToDoList :toDoList="toDoList" :handleCheckByIndex="handleCheckByIndex"/>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import ToDoInput from "./components/ToDoInput.vue";

export default {
  name: "App",
  components: {
    ToDoList,
    ToDoInput,
  },
  data() {
    return {
      toDoList: [],
    };
  },
  methods: {
    addList(newAction){
      console.log('[p0] addList', newAction)
      this.toDoList.unshift(newAction)
    },
    handleCheckByIndex(index){
      this.toDoList[index].done = !this.toDoList[index].done
    }
  },
};
</script>

<style lang='less'>
</style>
