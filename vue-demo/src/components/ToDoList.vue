<template>
  <div>
    <div class="todo-container">
      <div class="flex" v-for="(e, index) in toDoList" :key="e.id">
        <div>{{ e.action }}</div>
        <input
          type="checkbox"
          :checked="e.done"
          @click="handleCheck(e.id, index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      checkList: [],
    };
  },
  methods: {
    handleCheck(id, index) {
      console.log(id, index);
      this.handleCheckByIndex(index)
    },
  },
  props: {
    toDoList: {
      type: Array,
      default: [],
    },
    handleCheckByIndex: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.flex {
  display: flex;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.todo-container {
  border-bottom: 1px solid #ccc;
}
</style>
