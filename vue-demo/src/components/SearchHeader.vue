<template>
  <div>
    <input v-model="query" />
    <button @click="handleSearch">查找</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    handleSearch() {
      console.log(this.query, this.$bus);
      this.$bus.$emit("search", this.query);
    },
  },
};
</script>

<style scoped>
</style>
