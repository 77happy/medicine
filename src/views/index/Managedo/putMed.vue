<template>
  <div class="page_fangyao">
    <div class="container flex align-center">
      <div class="step1">
        <div class="chosetitle">1.选择抽屉</div>
        <!-- drawer_area 抽屉区 -->
        <div class="drawer_area">
          <!-- 行 -->
          <!--如果当前（for循环到的） nowDrawId 和item.id相等时，则添加上active类的样式  ，不相等时不做处理 -->
          <!-- <div class="row" :class="nowDrawId == item.id ?'active':''" v-for="(item,index) in machineItemList" :key="index"  > -->
          <!-- @click="toggleNowDrawer(item, index)  为柜子绑定事件 -->
          <div class="row">
            <!-- <div class="row_arrow el-icon-right"></div> -->
            <!-- 列 -->
            <!--have是样式名  样式名+boolean值时，样式名生效  当前：当item1.status == '1'时，样式‘have’生效-->
            <!-- <div class="col" :class="{ have: item1.status == '1', none: item1.status == '2'}" v-for="(item1,index1) in item.child" :key="index1"></div> -->
          </div>
        </div>
        <div class="lengend">
          <div>
            <span>有药品</span>
          </div>

          <div>
            <span>无药品</span>
          </div>
        </div>

        <div>
          <el-button class="warning">强制开锁</el-button>
          <el-button type="primary">开抽屉</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "putMed",
  data() {
    return {
      num: 1,
      // dialogVisible 对话框是否可见
      dialogVisible: false,

      nowDrawerIndex: -1, //当前选中抽屉的下表
      nowDrawerId: -1, //当前选中抽屉的id
      boxCheckList: [], //当前选中的盒子列
    };
  },
  // created是组件创建的时候调用该方法 组件被创建的时候去获取药品列表 getMachineItemList 是自己写的一个方法
  // created() {
  // 	this.getMachineItemList();
  // },
  methods: {},
};
</script>
<style lang="scss">
.page_fangyao {
  height: 100vh; //为元素设定长度，不然align-item:center 不生效
  .container {
    padding: 0 144px;
    height: 100%;
    > div {
      height: 740px;
      background: rgba(255, 255, 255, 1);
      // 给div元素添加圆角的边框
      border-radius: 10px;
      padding: 30px;

      &.step1 {
        width: 363px;
        > .chosetitle {
          font-size: 20px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
      
      }
    }
  }
}
</style>