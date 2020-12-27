<template>
  <div class="flex chat justify-event align-center">
    <!-- 聊天列表 -->
    <div class="chatList">
      <!-- 聊天列表顶部 -->
      <div class="chatHead flex align-center">
        <!-- 头像 -->
        <div class="msgHead">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            :size="55"
          ></el-avatar>
        </div>
      </div>
      <!-- 聊天人列表显示 -->
      <div class="chaPer">
        <div class="chaPerOne flex align-center">
          <!-- 头像 -->
          <div class="msgPerHead">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              :size="50"
            ></el-avatar>
          </div>
          <div class="chaPerWord">
            <span class="chatName">HelloWorld</span>
            <div class="chatWord">你好</div>
          </div>
        </div>
        <el-divider></el-divider>

        <div class="chaPerOne flex align-center">
          <!-- 头像 -->
          <div class="msgPerHead">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              :size="50"
            ></el-avatar>
          </div>
          <div class="chaPerWord">
            <span class="chatName">HelloWorld</span>
            <div class="chatWord">你好</div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="chaPerOne flex align-center">
          <!-- 头像 -->
          <div class="msgPerHead">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              :size="50"
            ></el-avatar>
          </div>
          <div class="chaPerWord">
            <span class="chatName">HelloWorld</span>
            <div class="chatWord">你好</div>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
    </div>

    <!-- 具体聊天界面 -->
    <div class="chatView">
      <div
        class="chatHead flex justify-center align-center"
        style="color: white; font-weight: 600"
      >
        <div>77</div>
      </div>
      <div class="chaPerOne flex align-center">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="50"
          shape="square"
        ></el-avatar>
        <span class="chatWord" style="font-size: 14px"
          >2020年12月27日17:06:07</span
        >
      </div>
      <div class="chatBox chatBox-left checkall">你好</div>
      <!-- <el-divider></el-divider> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.chat {
  height: 100vh;
  > .chatList {
    background: white;
    width: 400px;
    height: 800px;
    border-radius: 24px;
    // margin-left: -300px;
  }
  > .chatView {
    background: white;
    width: 900px;
    height: 700px;
    border-radius: 24px;
  }
  .chatHead {
    width: 100%;
    height: 80px;
    background: rgb(31, 129, 110);
    border-radius: 24px 24px 0px 0px;
  }
  .msgHead {
    margin-left: 15px;
  }
  .el-divider--horizontal {
    margin: 0;
  }
  .chaPerOne {
    height: 100px;
    > .chaPerWord {
      margin-left: 10px;
      > .chatName {
        color: rgb(25, 87, 74);
        font-weight: 600;
      }
    }
  }
  .chatWord {
    color: rgb(91, 97, 96);
  }
// 聊天气泡样式（框
  .chatBox{
        position: relative;
        margin:12px;
        padding:5px 8px;
        word-break: break-all;
        background: #ffffff;
        border: 1px solid #989898;
        border-radius: 5px;
        max-width:180px;
    }
    // 聊天框前面的三角形
     .chatBox-left::before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        left: 0px;
        top:-20px;
        border: 10px solid;
        border-color: transparent transparent  rgb(25, 87, 74) transparent ;
    }
    .checkall{
        margin-left: 60px;
    }
}
</style>