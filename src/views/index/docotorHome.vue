<template>
  <div class="flex flex-wrap page_home">
    <div class="flex align-center justify-center diagnosis">
      <div class="test flex">
        <div class="test_content">
          <div class="dia flex align-center justify-center">
            <span>诊断病人</span>
            <div>
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="switchChange"
              >
              </el-switch>
            </div>
          </div>

          <div class="count flex align-center justify-center">
            <span>当前共计诊断人数：{{num}}人</span>
          </div>
        </div>

        <div
          class="fluorcesence fluorcesence-filter"
          :style="{ background: background }"
        ></div>
        <div
          class="fluorcesence fluorcesence-border"
          :style="{ background: background }"
        ></div>
      </div>
    </div>

    <div class="flex justify-center items">
      <div class="flex justify-center flex-wrap">
        <div
          class="item flex align-center"
          v-for="(item, index) in actionList"
          :key="index"
          @click="navTo(item)"
        >
          <div class="item_content">
            <img :src="item.imgUrl" class="item_icon" />
            <div class="title title flex justify-center align-center">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      num:0,
      actionList: [
        {
          name:
            "开处方单                                                                                                                                                                                       ",
          imgUrl: require("@/assets/image/home/quyao.png"),
          url: "/prescribing",
        },
        {
          name: "手术规划",
          imgUrl: require("@/assets/image/home/tuiyao.png"),
          url: "/",
        },
        // {
        //   name: "药品",
        //   imgUrl: require("@/assets/image/home/pingzi.png"),
        //   url: "/",
        // },
        // {
        //   name: "手术信息管理",
        //   imgUrl: require("@/assets/image/home/fangyao.png"),
        //   url: "/",
        // },
        // {
        //   name: "库存",
        //   imgUrl: require("@/assets/image/home/kucun.png"),
        //   url: "/",
        // },
        // {
        //   name: "商城管理",
        //   imgUrl: require("@/assets/image/home/dayin.png"),
        //   url: "/",
        // },
      ],
      value: false,
      angle: 235,
      background: "linear-gradient(235deg, #89ff00, #6286EF, #00bcd4);",
      timer: 0,
    };
  },
  created() {
    this.rotate();
  },
  methods: {

    switchChange(e){
      // console.log(e)
      if(e==true){
        this.num++
      }
    },

    navTo(item) {
      this.$router.push(item.url);
    },
    // 旋转
    rotate() {
      var that = this;
      this.timer = setInterval(() => {
        that.angle++;
        that.background =
          "linear-gradient(" + that.angle + "deg,#89ff00,#6286EF,#00bcd4)";
        if (that.angle == 595) {
          that.angle = 235;
        }
        // console.log(that.angle,that.background)
      }, 10);
    },
  },
};
</script>
<style lang="scss">
.page_home {
  height: 100vh;
  .diagnosis {
    width: 100%;
    height: 50%;

    > .test {
      width: 45%;
      height: 150px;
      background-color: white;
      border-radius: 24px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .fluorcesence {
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;

        border-radius: 24px;
        overflow: hidden;
      }
      .fluorcesence-filter {
        z-index: -1;
      }
      .fluorcesence-filter {
        z-index: -2;
        filter: blur(40px);
      }
    }

    .test_content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
      background: rgb(242, 247, 241);
      width: 99.7%;
      height: 99.5%;
      border-radius: 24px;

      font-size: 28px;
      color: rgba(28,127,104, 1);
      
    }
    .count {
      width: 380px;
      height: 150px;
    }
    .dia {
      width: 180px;
      height: 150px;
    }
  }

  .items {
    width: 100%;
    height: 500px;
    margin-top: -150px;
  }

  .item {
    cursor: pointer;
    border-radius: 24px;
    width: 465px;
    height: 260px;
    background-color: white;
    // 上右下左
    margin: 0 20px 20px 0;
    > .item_content {
      position: relative;
      width: 407px;
      height: 200px;
      background-image: url(~@/assets/image/home/item_bg.png);
      background-size: 407px 200px;
      background-position: center;
      background-repeat: no-repeat;
      > .item_icon {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 100px;
        height: 100px;
      }
      > .title {
        // position: absolute; 是相对于离其最近且 带有relative属性的父辈元素
        position: absolute;
        left: 224px;
        height: 100%;
        width: 108px;
        font-size: 36px;
        text-align: center;
        color: rgba(32, 159, 133, 1);
      }
    }
  }
}
</style>