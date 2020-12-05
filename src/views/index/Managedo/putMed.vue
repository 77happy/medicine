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
              <!-- {{ item1.id }} -->
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
        <div class="chosetitle">2.查看药物</div>
        <div>
          <div class="content">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="mid" label="药品编号" width="100">
              </el-table-column>
              <el-table-column prop="name" label="药品名称" width="100">
              </el-table-column>
              <el-table-column prop="province" label="规格" width="100">
              </el-table-column>
              <el-table-column prop="city" label="有效期" width="100">
              </el-table-column>
              <el-table-column prop="address" label="批号" width="100">
              </el-table-column>
              <el-table-column prop="zip" label="用法" width="100">
              </el-table-column>
              <el-table-column prop="zip" label="价格" width="100">
              </el-table-column>
              <el-table-column prop="zip" label="分类" width="100">
              </el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >修改</el-button
                  >
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <div class="flex justify-center">
          <el-button class="add" @click="dialogFormVisible = true"
            >add</el-button
          >
        </div>
      </div>
    </div>
    <el-dialog title="新增药物" :visible.sync="dialogFormVisible" width="30%">
      <div class="flex justify-center">
        <el-form :model="form" label-width="80px">
          <el-form-item label="药品编号" :label-width="formLabelWidth">
            <el-input v-model="form.mid" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="药品名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="药品规格" :label-width="formLabelWidth">
            <el-input
              v-model="form.specifications"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="有效期" :label-width="formLabelWidth">
            <el-input v-model="form.term" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="批号" :label-width="formLabelWidth">
            <el-input v-model="form.batch" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="服用说明" :label-width="formLabelWidth">
            <el-input v-model="form.dose" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="价格" :label-width="formLabelWidth">
            <el-input v-model="form.price" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="分类" :label-width="formLabelWidth">
            <el-input
              v-model="form.classification"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="抽屉" :label-width="formLabelWidth">
            <el-input v-model="form.cabinet" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addMed">确 定</el-button>
      </div>
    </el-dialog>
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
          address: "上海市",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市",
        },
      ],

      dialogFormVisible: false,
      form: {
        mid: "",
        name: "",
        specifications: "",
        term: "",
        batch: "",
        dose: "",
        price: "",
        classification: "",
        cabinet: "",
      },
      formLabelWidth: "70px",
    };
  },
  // created是组件创建的时候调用该方法 组件被创建的时候去获取药品列表 getMachineItemList 是自己写的一个方法
  created() {
    this.getMachineItemList();
  },
  methods: {
    //获取药箱布局 假设为9行*3列
    getMachineItemList() {
      let arr = [];
      for (let i = 0; i < 9; i++) {
        //设置每一行的属性
        let rowObj = {
          id: i + 1,
          child: [],
        };
        for (let j = 0; j < 3; j++) {
          //设置每一列的属性
          let colObj = {
            id: i + 1 + "-" + (j + 1),
          };
          //push为数组方法，增加一个项
          rowObj.child.push(colObj);
        }
        arr.push(rowObj);
      }
      console.log(arr);
      this.machineItemList = arr;
    },

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

    addMed() {
      let mid = this.form.mid;
      let name = this.form.name;
      let dose = this.form.dose;
      let price = this.form.price;
      let classification = this.form.classification;
      let cabinet = this.form.cabinet;
      let specifications = this.form.specifications;
      let batch = this.form.batch;
      let term = this.form.term;

      // console.log(mid)
      // console.log(name)
      // 传给后台接口
      this.$http
        .get("/putmed/putMedicine", {
          mid: mid,
          name: name,
          dose: dose,
          price: price,
          classification: classification,
          cabinet: cabinet,
          specifications: specifications,
          batch: batch,
          term: term,
        })
        .then((res) => {
          if (res.code == 1) {
            alert("新增成功！");
          } else {
            alert("新增失败！！");
          }

          this.dialogFormVisible = false;
        });
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
      box-sizing: border-box;
      background: rgba(255, 255, 255, 1);
      // 给div元素添加圆角的边框
      border-radius: 10px;
      padding: 30px;
      > .chosetitle {
        font-size: 20px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 25px;
      }
      &.step1 {
        width: 363px;

        //药箱列布局
        > .drawer_area {
          .row {
            //行布局
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            position: relative;
            > .row_arrow {
              display: none;
              position: absolute;
              left: -30px;
              top: 10px;
            }
            &:last-child {
              margin-bottom: 0;
            }
            &:hover,
            &.active {
              > .row_arrow {
                display: block;
              }
            }
            .col {
              width: 88px;
              height: 44px;
              background: rgba(231, 211, 49, 1);
              &.have {
                background: rgba(32, 159, 133, 1);
              }
              &.none {
                background: rgba(90, 134, 239, 1);
              }
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
      //   >.content{
      //   }
      // }

      .add {
        width: 70%;
        background: rgba(32, 159, 133, 1);
        color: rgba(255, 255, 255, 1);
        margin-top: 70px;
      }
    }
  }
}
</style>