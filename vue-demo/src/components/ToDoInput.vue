<template>
  <div>
    <input v-model="action" />
    <button @click="handleAdd">添加</button>
  </div>
</template>

<script>
export default {
  name: "ToDoInput",
  data() {
    return {
      action: "",
    };
  },
  methods: {
    handleAdd() {
      if (!this.action) return;
      this.addCallback({
        action: this.action,
        id: parseInt(Math.random() * 100000),
        done: false
      });
      this.action = "";
    },
  },
  props: {
    addCallback: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
