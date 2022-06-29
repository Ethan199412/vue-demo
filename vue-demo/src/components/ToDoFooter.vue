<template>
  <div class="flex">
    <input type="checkbox" v-model="isAll" />
    <div>共{{ total }}条，{{ finished }}已完成</div>
    <button @click="handleDeleteFinishedLocal()">删除所有做过的</button>
  </div>
</template>

<script>
export default {
  name: "ToDoFooter",
  data() {
    return {
      // checkAll: false
    };
  },
  methods: {
    handleDeleteFinishedLocal() {
      this.handleDeleteFinished();
    },
    handleCheckAllLocal(e) {
      this.handleCheckAll(e.target.checked);
    },
  },
  computed: {
    isAll: {
      get() {
        return this.total == this.finished && this.total > 0;
      },
      set(value) {
        this.handleCheckAll(value);
      },
    },
    total() {
      return this.toDoList.length;
    },
    finished() {
      return this.toDoList.reduce((total, e) => {
        if (e.done == true) total += 1;
        return total;
      }, 0);
    },
  },
  props: {
    toDoList: {
      type: Array,
      default: [],
    },
    handleDeleteFinished: {
      type: Function,
      default: () => {},
    },
    handleCheckAll: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style scoped>
</style>
