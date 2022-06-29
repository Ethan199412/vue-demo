<template>
  <div>
    <div class="todo-container">
      <div class="flex item" v-for="(e, index) in toDoList" :key="e.id">
        <div class="flex">
          <div>{{ e.action }}</div>
          <input
            type="checkbox"
            :checked="e.done"
            @click="handleCheck(e.id, index)"
          />
        </div>
        <button class="btn-danger" @click="deleteOneLocal(index)">删除</button>
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
      this.handleCheckByIndex(index);
    },
    deleteOneLocal(index){
        this.deleteOne(index)
    }
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
    deleteOne: {
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
  justify-content: space-between;
}

.item {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.item:hover {
  background: #ccc;
  .btn-danger {
    display: block;
  }
}

.todo-container {
  border-bottom: 1px solid #ccc;
}

.btn-danger {
  background: red;
  color: white;
  display: none;
}
</style>
