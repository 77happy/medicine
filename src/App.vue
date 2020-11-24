<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // mounted(){
  //   this.$http.get('addStudent',{name:'777',age:'18'}).then(res=>{
  //     console.log(res)
  //   })
  // }
};
</script>
<style >
#app {
  /* ？ */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
/* 虽然上面没有body，但是页面打开f12就会出现隐藏的body */
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-image: url(~@/assets/image/indexBg.png);
}
div{
  box-sizing: border-box;
}
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
.justify-around {
  /* 中间是边缘距离的两倍 */
  justify-content: space-around;
}


.flex-wrap {
  flex-wrap: wrap;
}
.flex-direction{
  flex-direction:row
}
</style>