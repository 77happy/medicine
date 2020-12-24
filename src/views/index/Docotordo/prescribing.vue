<template>
  <div class="mainpage flex justify-center align-center">
    <div class="preHead">
      <div class="flex justify-center"><h1>xxx医院门诊处方笺</h1></div>
      <div class="">
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
          <el-form-item label="就诊卡号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="费用">
            <el-select v-model="form.region" placeholder="请选择费用类型">
              <el-option label="自费" value="shanghai"></el-option>
              <el-option label="医保" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="看诊时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="既往史">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <div>
            <el-form-item label="诊断"  > 
              <el-input
                type="textarea"
                style="width:800px"
                v-model="form.desc"
                :rows="3"
                
              ></el-input>
            </el-form-item>
          </div>
          <el-divider></el-divider>
          <div class="medParent">
            <!-- <el-form-item label="R">
              <el-input type="textarea" v-model="form.desc" ></el-input>
            </el-form-item> -->
            <h2>R</h2>
            <el-button
              class="open openMed"
              type="primary"
              plain
              @click="dialogFormVisible = true"
              >开药</el-button
            >
              <!-- 开的药品 表格 -->
            <div class="tab">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="药品名称" width="180">
                </el-table-column>
                <el-table-column prop="name" label="用法" width="180">
                </el-table-column>
                <el-table-column prop="address" label="规格"> </el-table-column>
              </el-table>
            </div>
          </div>
          <el-divider></el-divider>
          <!-- 尾部发药人 -->
          <div class="Dispensing">
            <el-form-item label="医师">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="药品金额">235.2元 </el-form-item>
            <div>
              <el-form-item label="审核药师">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="取药护士">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </div>
          </div>

          <!-- 提示 -->
          <el-divider></el-divider>
          <h5>1、处方当天有效,过期作废</h5>
          <h5>2、取药时请仔细核对清单，点齐药品</h5>
          <h5>3、依《中华人民共和国药品管理法》，药品一经发出，一律不得退换</h5>
        </el-form>
        <el-dialog title="开药" :visible.sync="dialogFormVisible">
          <div class="putMed">
            <el-form :model="form">
              <el-form-item label="药品名称">
                <el-input size="medium" placeholder="输入关键字搜索" />
              </el-form-item>

              <div>
                <el-form-item label="用法">
                  <el-input
                    type="textarea"
                    v-model="form.desc"
                    :rows="2"
                  ></el-input>
                </el-form-item>

                <el-form-item label="规格">
                  <el-input
                    type="textarea"
                    v-model="form.desc"
                    :rows="2"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
      <div class="btn flex justify-center">
        <el-button class="open" type="primary" plain>打印</el-button>
        <el-button class="open" type="primary" plain>确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      activeIndex: "1",
      activeIndex2: "1",
      dialogFormVisible: false,
      forms: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss">
.mainpage {
  width: 70%;
  height: 700px;
  margin: 400px auto 0;
  .preHead {
    width: 100%;
    // height: 350px;
    padding: 50px;
    background: white;
    h1 {
      color: rgb(31, 129, 110);
      margin-bottom: 80px;
    }
    h2 {
      color: rgb(31, 129, 110);
    }
    .putMed {
      margin-left: 100px;
    }
    .medParent {
      position: relative;
      .tab{
        margin-bottom: 80px;
      }
    }
    .open {
      background: rgba(32, 159, 133, 1);
      color: rgba(255, 255, 255, 1);
    }
    .openMed {
      position: absolute;
      top:0;
      right: 0;
    }
    .Dispensing {
      margin-top: 50px;
    }
  }
}
</style>