<template>
  <div class="mainpage flex justify-center align-center">
    <div class="preHead">
      <div class="flex justify-center"><h1>xxx医院门诊处方笺</h1></div>
      <div class="">
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
          <el-form-item label="就诊卡号">
            <el-input v-model="form.pid"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.patientName"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.patientOld"></el-input>
          </el-form-item>
          <el-form-item label="费用">
            <el-select v-model="form.priceType" placeholder="请选择费用类型">
              <el-option label="自费" value="shanghai"></el-option>
              <el-option label="医保" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="看诊时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.time"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.timeDetail"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="既往史">
            <el-input type="textarea" v-model="form.history"></el-input>
          </el-form-item>
          <div>
            <el-form-item label="诊断">
              <el-input
                type="textarea"
                style="width: 800px"
                v-model="form.diagnosis"
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
                <el-table-column prop="medName" label="药品名称" width="180">
                </el-table-column>
                <el-table-column prop="medSpeci" label="用法" width="180">
                </el-table-column>
                <el-table-column prop="medDose" label="规格"> </el-table-column>
                <el-table-column prop="price" label="价格"> </el-table-column>
              </el-table>
            </div>
          </div>
          <el-divider></el-divider>
          <!-- 尾部发药人 -->
          <div class="Dispensing">
            <el-form-item label="医师">
              <el-input v-model="form.docotor"></el-input>
            </el-form-item>
            <el-form-item label="药品金额">{{ priceTotal }}元 </el-form-item>
            <div>
              <el-form-item label="审核药师">
                <el-input v-model="form.med"></el-input>
              </el-form-item>
              <el-form-item label="取药护士">
                <el-input v-model="form.nurse"></el-input>
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
            <el-form :model="medForm">
              <el-form-item label="药品名称">
                <el-autocomplete
                  class="inline-input"
                  v-model="medForm.medName"
                  value-key="name"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入内容"
                  :trigger-on-focus="false"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-form-item>

              <div>
                <el-form-item label="用法">
                  <el-input
                    type="textarea"
                    v-model="medForm.medSpeci"
                    :rows="2"
                    style="width: 500px"
                  ></el-input>
                </el-form-item>

                <el-form-item label="规格">
                  <el-input
                    type="textarea"
                    v-model="medForm.medDose"
                    :rows="2"
                    style="width: 500px"
                  ></el-input>
                </el-form-item>
                <el-form-item label="价格">
                  <el-input :disabled="true" v-model="medForm.price"></el-input>
                </el-form-item>
              </div>
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button @click="openMed">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="btn flex justify-center">
        <el-button class="open" type="primary" plain>打印</el-button>
        <el-button class="open" type="primary" plain @click="addPrescri"
          >确认</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pid: "",
        patientName: " ",
        patientOld: "",
        time: "",
        history: "",
        priceType: "",
        diagnosis: "",
        docotor: "",
        price: "",
        medList:[],//药品列表
        timeDetail: "",
      },
      activeIndex: "1",
      activeIndex2: "1",
      dialogFormVisible: false,

      medForm:{//开药的表单项，单个药品
         mid: "",
         price:'',
          medName: "",
          medSpeci: "",
          medDose: "",
      },

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
      tableData: [],
      medicines: [],
      state1: "",
      medName: "",
    };
  },

  //vue的一个重要属性 计算属性computed 当页面data变动时触发所有计算项
  computed: {
    //注意，被计算的属性不能出现在data里面 也就是computed和data里面只能存在一个priceToatal 如果都写了会报错就是了
    //总价格 里面涉及了一个页面数据项tabledata 所以当tabledata有更新的时候 pricetotal会自动重新计算
    priceTotal() {
      let total = 0;
      for (let i = 0; i < this.tableData.length; i++) {
        //由于我们每一项里面的price是一个字符串 我们需要利用parseFloat把它转成小数数字进行累加
        total += parseFloat(this.tableData[i].price);
      }
      return total;
    },
  },

  methods: {
    onSubmit() {
      // console.log("submit!");
    },
    //开药下拉点击某项将该项药品信息赋值给form
    handleSelect(data) {
      console.log("点击选中的药品信息", data);
      this.medForm.mid = data.mid;
      this.medForm.price = data.price;
    },
    // 将页面中处方单的信息传给后端
    addPrescri() {
      // console.log(this.form,this.priceTotal,this.tableData)
      this.form.total=this.priceTotal;
      //由于后端post传输我们定的是formdta，不允许传参对象里面嵌套对象或者数组，所有我们这里对需要的数组转成json字符串，后端得到json字符串后再转回数组
      this.form.medList=JSON.stringify(this.tableData);
      this.$http.post("/prescribing/addPre", this.form).then((res) => {
        if (res.code == 1) {
          alert("已经将处方单存入数据库");
          // console.log(111)
          // this.$router.push("../docotor");
        } else {
          alert("存储失败！");
        }
      });
    },
    // 将开药的字段添加到表格里
    openMed() {
      // this.tableData.push(this.form.medName+this.form.medSpeci+this.form.medDose)
      //上面dom元素里配好v-model 点击按钮后，这里不要直接把this.form整个赋进去了，不知道为什么element会直接绑定掉已有的，一项一项赋值吧
      //dom元素 表格里面的每一项pros也要写对

      this.tableData.push({
        mid:this.medForm.mid,
        medName: this.medForm.medName,
        price: this.medForm.price,
        medSpeci: this.medForm.medSpeci,
        medDose: this.medForm.medDose,
      });
      // console.log(this.form);
      // console.log(this.form, this.tableData);

      // 添加后关闭
      this.dialogFormVisible = false;
    },
    querySearch(queryString, cb) {
      var medicines = this.medicines;
      var results = queryString
        ? medicines.filter(this.createFilter(queryString))
        : medicines;

      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (medicines) => {
        return (
          medicines.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      this.$http.post("/putmed/findMed", {}).then((res) => {
        if (res.code == 1) {
          // console.log(res.data, "findMed");
          this.medicines = res.data;
          // console.log(res.data)
        }
      });
    },
  },
  mounted() {
    this.loadAll();
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
      .tab {
        margin-bottom: 80px;
      }
    }
    .open {
      background: rgba(32, 159, 133, 1);
      color: rgba(255, 255, 255, 1);
    }
    .openMed {
      position: absolute;
      top: 0;
      right: 0;
    }
    .Dispensing {
      margin-top: 50px;
    }
  }
}
</style>