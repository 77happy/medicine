/* eslint-disable vue/no-unused-vars */
<template>
  <div class="page_fangyao">
    <div class="container flex align-center justify-between">
      <div class="step1">
        <div class="chosetitle">1.选择抽屉</div>
        <!-- drawer_area 抽屉区 -->
        <div class="drawer_area">
          <div
            class="col"
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
            <!-- {{ item.id }} -->
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
        <div class="flex">
          <div class="chosetitle">2.查看药物</div>

          <el-button class="add" @click="add"
            >add</el-button
          >
        </div>

        <div>
          <div class="content" style="margin-top: 20px">
            <el-table :data="showList" border style="width: 100%">
              <el-table-column prop="mid" label="药品编号" width="100">
              </el-table-column>
              <el-table-column prop="name" label="药品名称" width="100">
              </el-table-column>
              <el-table-column prop="specifications" label="规格" width="100">
              </el-table-column>
              <el-table-column prop="term" label="有效期" width="100">
              </el-table-column>
              <el-table-column prop="batch" label="批号" width="100">
              </el-table-column>
              <el-table-column prop="dose" label="用法" width="100">
              </el-table-column>
              <el-table-column prop="price" label="价格" width="100">
              </el-table-column>
              <el-table-column prop="classification" label="分类" width="100">
              </el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="update(scope.row)"
                    >修改</el-button
                  >
                  <el-button
                    type="text"
                    size="small"
                    @click="delMed(scope.row.mid)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 分页 -->
        <div class="flex justify-center page">
          <div class="block" style="margin-top: 20px">
            <!-- <span class="demonstration">大于 7 页时的效果</span> -->
            <el-pagination
              layout="prev, pager, next"
              :total="tableData.length"
              :page-size="pagesize"
              @current-change="current_change"
              :current-page.sync="currentPage"
            >
            </el-pagination>
          </div>
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

    <el-dialog title="修改药品" :visible.sync="updateFormVisible" width="30%">
      <div class="flex justify-center">
        <el-form :model="form" label-width="80px">
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
        <el-button @click="updateFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="modMed">确 定</el-button>
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

      tableData: [],

      dialogFormVisible: false,
      updateFormVisible: false, //'修改'功能的弹窗开关

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

      pagesize: 7, //每页多少数据
      currentPage: 1, //默认当前页为第一页
    };
  },
  // created是组件创建的时候调用该方法 组件被创建的时候去获取药品列表 getMachineItemList 是自己写的一个方法
  created() {
    this.getMachineItemList();
  },
  computed: {
    //根据当前页码所展示的数据
    showList() {
      //slice为数组一个方法，结果是从已有数组返回指定位置的数组，参数为起始下标和结束下标
      return this.tableData.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage - 1 + this.pagesize
      );
    },
  },
  methods: {
    //获取药箱布局 假设为9行*1列
    getMachineItemList() {
      let arr = [];
      for (let i = 0; i < 9; i++) {
        //设置每一行的属性
        let rowObj = {
          id: i + 1,
        };

        arr.push(rowObj);
      }
      console.log(arr);
      this.machineItemList = arr;
    },

    //当某一列被点击后，选中该行
    toggleNowDrawId(id) {
      this.nowDrawId = id;
      // 传给后台 后台返回cabinet=id的数据，并在右侧展示
      this.findMed();
    },
    // 查询显示所有药品
    findMed() {
      this.$http
        .post("/putmed/findMed", {
          cabinet: this.nowDrawId,
        })
        .then((res) => {
          if (res.code == 1) {
            // console.log(res.data, "findMed");
            this.tableData = res.data;
          }
        });
    },
    // 修改所点击那行的药品信息
    modMed() {
      this.$http.post("/putmed/modifyMed", this.form).then((res) => {
        if (res.code == 1) {
          alert("修改成功！");
          this.findMed();
        } else {
          alert("修改失败！！");
        }

        this.updateFormVisible = false;
      });
    },
      // 新增药品
    addMed() {
      // 传给后台接口
      this.$http.get("/putmed/putMedicine", this.form).then((res) => {
        if (res.code == 1) {
          alert("新增成功！");
          this.findMed();
        } else {
          alert("新增失败！！");
        }

        this.dialogFormVisible = false;
      });
    },
    //点击add按钮 初始化表格
    add(){
      this.form = {
        mid: "",
        name: "",
        specifications: "",
        term: "",
        batch: "",
        dose: "",
        price: "",
        classification: "",
        cabinet: "",
      };

      this.dialogFormVisible  = true;
    },
    //点击每一行修改按钮
    update(data) {
      // console.log(data)
      //把该行药品的值直接赋给form
      this.form = data;

      this.updateFormVisible = true;
    },
    // 删除药品信息 单行
    delMed(id) {
      // 根据id删除
      this.$http
        .post("/putmed/delMed", {
          mid: id,
        })
        .then((res) => {
          if (res.code == 1) {
            this.findMed();
          }
        });
    },
    current_change(currentPage) {
      //改变当前页
      this.currentPage = currentPage;
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
          .col {
            width: 80%;
            height: 44px;
            margin-top: 10px;
            margin-left: 30px;
            background: rgba(231, 211, 49, 1);
            &.have {
              background: rgba(32, 159, 133, 1);
            }
            &.none {
              background: rgba(90, 134, 239, 1);
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

      .add {
        // width: 70%;
        background: rgba(32, 159, 133, 1);
        color: rgba(255, 255, 255, 1);
        margin-left: 800px;
      }
    }
  }
}
</style>