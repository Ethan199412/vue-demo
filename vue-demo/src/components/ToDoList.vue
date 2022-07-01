<template>
  <div>
    <div class="todo-container">
      <transition-group name="todo" appear>
        <div class="flex item" v-for="(e, index) in toDoList" :key="e.id">
          <div class="flex">
            <div v-if="!e.isEdit">{{ e.action }}</div>
            <input
              v-else
              :value="e.action"
              @blur="handleConfirm($event, index)"
              ref="action"
            />
            <input
              type="checkbox"
              :checked="e.done"
              @click="handleCheck(e.id, index)"
            />
          </div>
          <div class="flex btn-container">
            <button @click="editOneLocal(index)" v-show="!e.isEdit">
              编辑
            </button>
            <button class="btn-danger" @click="deleteOneLocal(index)">
              删除
            </button>
          </div>
        </div>
      </transition-group>
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
    deleteOneLocal(index) {
      this.deleteOne(index);
    },
    editOneLocal(index, event) {
      console.log(event);

      setTimeout(() => {
        console.log(this.$refs["action-" + index], this.$refs);
        //this.$refs["action-" + index][0].focus();
        this.$refs.action[0].focus();
      });

      // this.$nextTick(() => {
      //   console.log(this.$refs["action-" + index], this.$refs);
      //   //this.$refs["action-" + index][0].focus();
      //   this.$refs.action[0].focus();
      // },100);

      // setTimeout(() => {

      // },200);

      // event.target.focus()
      this.editOne(index, true);
    },
    handleConfirm(e, index) {
      const { value } = e.target;
      this.editOne(index, false);
      this.updateItem(index, value);
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
    deleteOne: {
      type: Function,
      default: () => {},
    },
    editOne: {
      type: Function,
      defaultL: () => {},
    },
    updateItem: {
      type: Function,
      defaultL: () => {},
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.todo-enter-active{
  animation: atguigu 0.5s ease;
}

.todo-leave-active{
  animation: atguigu 0.5s ease reverse;
}

@keyframes atguigu {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
}

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
  .btn-container {
    display: block;
  }
}

.btn-container {
  display: none;
}

.todo-container {
  border-bottom: 1px solid #ccc;
}

.btn-danger {
  background: red;
  color: white;
}
</style>
