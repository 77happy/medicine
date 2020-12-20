<template>
  <div class="flex justify-center align-center">
    <div class="flex mainpage justify-center align-center">
      <div class="portrait flex justify-center align-center">
        <div>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.mainpage {
  width: 70%;        
  height: 100%;
  > .portrait {
    width: 100%;
    height: 1400px;
    background: white;
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>