<template>
  <div class="user-container">
      <img class='user-url' :src="info.avatar_url"/>
    <div>{{ info.login }}</div>
    <a :href="info.html_url">去主页</a>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped lang='less'>
.user-container {
  width: 200px;
  height: 300px;
  padding: 10px;
  border: 3px solid #ccc;
  margin: 10px;
}

.user-url{
    width:100%;
}
</style>
