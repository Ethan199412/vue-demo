<template>
  <div id="app">
    <SearchHeader />
    <div class='flex-wrap'>
      <User v-for="(e) in infoList" :key="e.id" :info="e"/>
    </div>
  </div>
</template>

<script>
import Request from "./request/request.js";
import SearchHeader from "./components/SearchHeader.vue";
import User from './components/User.vue'

export default {
  name: "App",

  data() {
    return {
      infoList: [],
    };
  },
  components: {
    SearchHeader,
    User
  },
  methods: {
    search(query) {
      Request.getUsers(query).then((res) => {
        console.log("[p0] res", res);
        this.infoList = res.data.items
      });
    },
  },
  mounted() {
    this.$bus.$on("search", this.search);
  },
};
</script>

<style lang='less'>
  .flex-wrap{
    display: flex;
    flex-wrap: wrap;
  }
</style>
