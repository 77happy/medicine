<template>
  <div class="page_login">
    <div class="container flex justify-between align-center">
      <img src="@/assets/image/login_bg.png" alt="登录" />

      <div class="login_area">
        <div class="title">登录</div>
        <el-input
          v-model="account"
          placeholder="请输入用户名/手机号码"
        ></el-input>
        <el-input
          v-model="password"
          show-password
          placeholder="请输入登录密码"
        ></el-input>
        <el-checkbox v-model="checked">记住用户名</el-checkbox>
        <div><el-button type="primary" @click="login">登录</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      account: "",
      password: "",
      checked: false,
    };
  },
  methods: {
    //登录
    login() {
      // 获取输入的账号密码，传给后台
      // 后台判断工号类型 并返回错误或跳到主页面

      // 获取输入的账号密码
      let account = this.account
      let password = this.password
      // console.log(account)
      // console.log(password)

      
      // this.$router.push('/index')
    }
  },
};
</script>

<style lang="scss">
.page_login {
  .container {
    padding: 150px 141px 0 327px;
    > img {
      margin-left: -105px;
      margin-right: 200px;
      height: 548px;
      width: 582px;
    }
    > .login_area {
      border: white solid 1px;
      background-color: white;
      width: 590px;
      height: 528px;
      box-shadow: 0px 0px 10px rgba(32, 159, 133, 0.08);
      border-radius: 10px;
      padding: 52px 70px;
      > .title {
        font-size: 30px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      > .el-input {
        margin-top: 50px;
      }
      > .el-checkbox {
        margin-top: 40px;
      }
      .el-button {
        margin-top: 20px;
        width: 450px;
        background: rgba(32, 159, 133, 1);
        color: white;
      }
    }
  }
}
</style>
