<template>
  <div id="app">
    <ToDoInput :addCallback="addList" />
    <ToDoList
      :toDoList="toDoList"
      :handleCheckByIndex="handleCheckByIndex"
      :deleteOne="deleteOne"
    />
    <ToDoFooter
      :handleDeleteFinished="handleDeleteFinished"
      :handleCheckAll="handleCheckAll"
      :toDoList="toDoList"
    />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDoFooter from "./components/ToDoFooter.vue";

export default {
  name: "App",
  components: {
    ToDoList,
    ToDoInput,
    ToDoFooter,
  },
  data() {
    return {
      toDoList: JSON.parse(localStorage.getItem("toDoList")) || [],
    };
  },
  methods: {
    addList(newAction) {
      console.log("[p0] addList", newAction);
      this.toDoList.unshift(newAction);
    },
    handleCheckByIndex(index) {
      this.toDoList[index].done = !this.toDoList[index].done;
    },
    handleDeleteFinished() {
      const res = [];
      for (let e of this.toDoList) {
        if (!e.done) {
          res.push(e);
        }
      }
      console.log("[p0.4]", res);
      this.toDoList = res;
    },
    deleteOne(index) {
      this.toDoList.splice(index, 1);
      console.log("[p0.5]", { index, toDoList: this.toDoList });
    },
    handleCheckAll(value) {
      console.log("[p0.5] value", value);
      this.toDoList.forEach((e) => {
        e.done = value;
      });
    },
  },
  watch: {
    deep: true,
    toDoList: {
      handler(value) {
        console.log("[p0.6] value", value);
        localStorage.setItem("toDoList", JSON.stringify(value));
      },
      deep: true,
    },
  },
  computed: {},
};
</script>

<style lang='less'>
</style>
