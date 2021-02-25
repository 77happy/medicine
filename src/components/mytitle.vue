<template>
  <div class="flex title">
    <div class="content flex justify-around">
      <div class="bg"></div>
      <div class="flex notice align-center">
        <img
          src="@/assets/image/title/tixing.png"
          alt="提醒"
          @click="message"
          style="cursor: pointer"
        />
      </div>

      <div class="flex align-center">
        <img
          src="@/assets/image/title/touxiang.png"
          alt=""
          @click="personal"
          style="cursor: pointer"
        />
        你好
      </div>

      <div class="flex align-center">{{currentTime}}</div>
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
  data() {
    return {
      timer: "", //定义一个定时器变量
      currentTime: new Date(),
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    //个人中心
    personal() {
      this.$router.push("/personal");
    },
    message() {
      this.$router.push("/message");
    },
    //过滤加0
    appendZero(obj) {
      if (obj < 10) {
        return "0" + obj;
      } else {
        return obj;
      }
    },
  },
  created() {
    var that = this; //声明一个变量指向vue实例this，保证作用域一致
    that.currentTime = setInterval(() => {
      that.currentTime = //修改数据date
        new Date().getFullYear() +
        "年" +
        (new Date().getMonth() + 1) +
        "月" +
        new Date().getDate() +
        "日 " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ": " +
        new Date().getSeconds();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在vue实例销毁前，清除我们的定时器
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
      z-index: 1000;
    }
    > div {
      z-index: 1001;
      img {
        width: 30px;
        height: 30px;
      }
      > span {
        margin-left: 5px;
      }
      &.back {
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