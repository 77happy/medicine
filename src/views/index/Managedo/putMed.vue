/* eslint-disable vue/no-unused-vars */
<template>
  <div class="page_fangyao">
    <div class="container flex align-center justify-between">
      <div class="step1">
        <div class="chosetitle">1.选择抽屉</div>
        <!-- drawer_area 抽屉区 -->
        <div class="drawer_area">
          <div
            class="row"
            :class="nowDrawId == item.id ? 'active' : ''"
            v-for="(item, index) in machineItemList"
            :key="index"
            @click="toggleNowDrawId(item.id)"
          >
            <!-- 选中了某一行时显示右箭头 -->
            <div
              class="row_arrow el-icon-right"
              v-if="nowDrawId == item.id"
            ></div>
            <div
              class="col"
              :class="{ have: item.status == '1', none: item.status == '2' }"
              v-for="(item1, index1) in item.child"
              :key="index1"
            >
              {{ item1.id }}
            </div>
          </div>
        </div>

        <!-- justify-content: space-between;  flex item之间的距离相等 与main start main end两端对齐 -->
        <div class="legend flex justify-between">
          <div class="item flex align-center">
            <!-- 设置的是有无药品前面那个样式 -->
            <div class="have"></div>
            <span>有药品</span>
          </div>

          <div class="item flex align-center">
            <div class="none"></div>
            <span>无药品</span>
          </div>

          <div class="item flex align-center">
            <div class=""></div>
            <span>无盒子</span>
          </div>
        </div>

        <div class="button flex align-center justify-between">
          <el-button class="warning" icon="el-icon-warning" plain
            >强制开锁</el-button
          >
          <!-- <el-button type="primary" plain>主要按钮</el-button> -->
          <el-button class="open" type="primary" plain>开抽屉</el-button>
        </div>
      </div>
      <div class="stept2">
        <div class="chosetitle">2.放置药物</div>
        <div class="content">
          <el-table
            :data="
              tableData.filter(
                (data) =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
            style="width: 100%"
          >
            <el-table-column label="Date" prop="date"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="oparation">
              <template slot-scope="scope">
                <div class="flex other" >
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >Edit</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >Delete</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>

          <el-button class="add">add</el-button>
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
      nowDrawId: -1, //当前选中抽屉的id
      boxCheckList: [], //当前选中的盒子列

      machineItemList: [], //左侧 抽屉整体布局

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      search: "",
    };
  },
  // created是组件创建的时候调用该方法 组件被创建的时候去获取药品列表 getMachineItemList 是自己写的一个方法
  // created() {
  // 	this.getMachineItemList();
  // },
  methods: {
    //当某一列被点击后，选中该行
    toggleNowDrawId(id) {
      this.nowDrawId = id;
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
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
      > .chosetitle {
        font-size: 20px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      &.step1 {
        width: 363px;

        //药箱列布局
        > .drawer_area {
          .row {
            //行布局
            display: flex;
            align-items: center;
            justify-content: space-between;
            .col {
              //行内每一项的布局
              width: 100px;
              height: 50px;
            }
          }
        }

        > .legend {
          margin-top: 22px;
          .item {
            div {
              width: 20px;
              height: 20px;
              background: rgba(231, 211, 49, 1);
              &.have {
                background: rgba(32, 159, 133, 1);
              }
              &.none {
                background: rgba(90, 134, 239, 1);
              }
              border-radius: 50%;
            }
            span {
              margin-left: 12px;
              font-size: 18px;
            }
          }
        }
        > .button {
          margin-top: 50px;
          .el-button {
            font-size: 18px;
            width: 140px;
            height: 44px;
            &.warning {
              color: rgba(207, 76, 76, 1);
            }
            &.open {
              background: rgba(32, 159, 133, 1);
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
      // &.step2 {
      //   // background: ;
      // }

      .add {
        width: 70%;
        background: rgba(32, 159, 133, 1);
        color: rgba(255, 255, 255, 1);
      }
      .other{
        width: 200px;
      }
      
    }
  }
}
</style>