<template>
  <div class="flex flex-wrap page_home align-center">
    <div class="flex justify-center flex-wrap">
      <div
        class="item flex justify-center align-center"
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
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      actionList: [
        {
          name: "药品管理                                                                                                                                                                                          ",
          imgUrl: require("@/assets/image/home/quyao.png"),
          url: "/putMed",
        },
        {
          name: "退药",
          imgUrl: require("@/assets/image/home/tuiyao.png"),
          url: "/",
        },
        {
          name: "空瓶管理",
          imgUrl: require("@/assets/image/home/pingzi.png"),
          url: "/",
        },
        {
          name: "手术信息管理",
          imgUrl: require("@/assets/image/home/fangyao.png"),
          url: "/operMan",
        },
        {
          name: "库存",
          imgUrl: require("@/assets/image/home/kucun.png"),
          url: "/",
        },
        {
          name: "商城管理",
          imgUrl: require("@/assets/image/home/dayin.png"),
          url: "/",
        },
      ],
    };
  },

  methods:{
    navTo(item){
      this.$router.push(item.url)
    }
  }
};
</script>
<style lang="scss">
.page_home {
  height: 100vh;
  .item {
    cursor: pointer;
    border-radius: 24px;
    width: 465px;
    height: 260px;
    background-color: white;
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
      > .title{
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