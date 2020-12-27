<template>
  <div class="flex title">
    <div class="content flex justify-around">
      <div class="bg"></div>
      <div class="flex notice align-center">
        <img src="@/assets/image/title/tixing.png" alt="提醒" @click="message"  style="cursor : pointer"/>
      </div>

      <div class="flex align-center">
        <img src="@/assets/image/title/touxiang.png" alt="" @click="personal" style="cursor : pointer"/> 你好
      </div>

      <div class="flex align-center">2020/10/16 星期四 10:04</div>
      <!-- <div class="logout flex" @click="logout">
        <span>退出</span>
    </div> -->

      <div class="back flex align-center" @click="back">
        <img src="@/assets/image/title/back.png" />
        <span>返回</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    //个人中心
    personal(){
      this.$router.push("/personal")
    },
     message(){
      this.$router.push("/message")
    }
  },
};
</script>
<style  lang="scss">
.title {
  height: 64px;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  > .content {
    position: absolute;
    right: 0;
    height: 100%;
    width: 900px;
    > .bg {
      position: absolute;
      height: 0;
      width: 900px;
      border-bottom: 64px solid #209f85;
    //   通过设置不同边的透明效果，可以制作出三角形,宽度和高度要设置为0。
      border-left: 60px solid transparent;
    }
    > div {
      z-index: 1;
      img {
        width: 30px;
        height: 30px;
      }
      >span{
        margin-left: 5px;
      }
      &.back{
        cursor: pointer;
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
    
  }
}
</style>