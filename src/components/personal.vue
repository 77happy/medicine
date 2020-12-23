<template>
  <div class="flex justify-center align-center">
    <div class="personPage">
      <!-- 走马灯和头像 -->
      <div class="head">
        <!-- 走马灯 -->
        <div class="lantern">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- <h3>{{ item }}</h3> -->
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 头像 -->
        <div class="portrait">
          <el-avatar
            class="avatar"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            @error="errorHandler"
            :size="70"
          >
          </el-avatar>
          <div class="rightIcon">
            <!-- <img src="@/assets/image/personal/zan.png" alt="" class="ico"> -->
            <img src="@/assets/image/personal/loveper.png" alt="" class="ico" />
            <img
              src="@/assets/image/personal/befriend.png"
              alt=""
              class="ico"
            />
          </div>
        </div>
      </div>
      
      <!-- 主体 -->
      <div class="personBody">
        <!-- 导航栏 -->
        <div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <div class="flex justify-between ">
              <el-menu-item index="1">我的文章</el-menu-item>
              <el-submenu index="2">
                <template slot="title">随便逛逛</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3">问答</el-menu-item>
              <el-menu-item index="4">我的关注</el-menu-item>
            </div>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    errorHandler() {
      return true;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss">
.personPage {
  width: 70%;
  height: 100%;
  background: white;
  > .lantern {
    width: 100%;
    height: 1400px;
    z-index: -2;
  }
  .portrait {
    position: relative;
    > .avatar {
      position: absolute;
      top: -120px;
      left: 40px;
      z-index: 7;
    }
    .rightIcon {
      position: absolute;
      top: -80px;
      right: 40px;
      z-index: 7;
      > .ico {
        width: 35px;
        margin-left: 10px;
      }
    }
  }
  .el-submenu__title {
    font-size: 24px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-menu-item{
    font-size: 24px;
  }
}
</style>