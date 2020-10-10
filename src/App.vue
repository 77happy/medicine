<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>

export default {
}
</script>
<style >
#app {
  /* ？ */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
/* 虽然上面没有body，但是页面打开f12就会出现隐藏的body */
body{
  background-image: url(~@/assets/image/indexBg.png);
}
</style>