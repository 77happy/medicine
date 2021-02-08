<template>
  <div>
    <div class="flex justify-center align-center">
      <div class="operAll flex justify-center">
        <div class="operBack">
          <div class="flex justify-center" style="margin-top: 40px">
            <h1>xxx医院手术规划单</h1>
          </div>
          <!-- 表单整体 -->
          <div class="operForm">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="80px"
              class="demo-ruleForm"
              :inline="true"
            >
              <el-form-item label="科室" prop="room">
                <el-input v-model="ruleForm.room"></el-input>
              </el-form-item>
              <el-form-item label="住院号" prop="rid">
                <el-input v-model="ruleForm.rid"></el-input>
              </el-form-item>
              <el-form-item label="计划时间" required>
                <el-col :span="11">
                  <el-form-item prop="time" >
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="ruleForm.time"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="timeDetail">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="ruleForm.timeDetail"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <div>
                <el-form-item label="术前诊断" prop="beforeJud">
                  <el-input
                    type="textarea"
                    v-model="ruleForm.beforeJud"
                    style="width: 950px"
                    :rows="4"
                  ></el-input>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="拟施行的手术名称" prop="operName">
                  <el-input type="textarea" v-model="ruleForm.operName"></el-input>
                </el-form-item>
                <el-form-item label="可能出现的问题与对策情况" prop="operPro">
                  <el-input
                    type="textarea"
                    v-model="ruleForm.operPro"
                    style="width: 700px"
                    :rows="3"
                  ></el-input>
                </el-form-item>
              </div>
              <el-divider></el-divider>
              <el-table :data="operJudge" style="width: 100%">
                <el-table-column fixed="left" label="情况评估" prop="situation">
                </el-table-column>
                
                <el-table-column label="是" width="80">
                  <template slot-scope="scope">
                     <el-radio v-model='ruleForm[scope.row.key]' label='是'  >
                       {{''}}
                     </el-radio>
                  </template>
                 
                </el-table-column>
                <el-table-column label="否" width="80">
                  <template slot-scope="scope">
                     <el-radio v-model='ruleForm[scope.row.key]' label='否'   >
                       {{''}}
                     </el-radio>
                  </template>
                </el-table-column>
              </el-table>
              <el-divider></el-divider>
              <el-form-item label="监督评价" prop="docAdvice">
                <el-input
                  type="textarea"
                  v-model="ruleForm.docAdvice"
                  style="width: 950px"
                  :rows="6"
                ></el-input>
              </el-form-item>
              <el-form-item label="负责人">
                <el-input v-model="ruleForm.abiliPerson"></el-input>
              </el-form-item>
              <div class="btn flex justify-center">
                <el-button class="open" type="primary" plain>打印</el-button>
                <el-button class="open" type="primary" plain @click="operSub"
                  >提交</el-button
                >
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag:true,
      agree:"是",
      operJudge: [
        {
          key:'evidence',
          situation: "手术指证是否合理"
        },
        {
          key:'danger',
          situation: "是否进行风险评估"
        },
        {
          situation: "是否输血前评估",
          key:'blood',
        },
        {
          situation: "是否有术者术前查看患者相关情况",
          key:'docEvent',
        },
        {
          situation: "是否签署知情同意书",
          key:'agree',
        },
      ],
      ruleForm: {
        room: "",
        rid: "", //住院号
        time: "",
        timeDetail: "",
        beforeJud: "", //术前诊断
        operName: "",
        operPro: "", //可能出现的问题与对策情况
        evidence: "", //手术指证是否合理
        danger: "",
        blood: "",
        docEvent: "", //是否有术者术前查看患者相关情况
        agree: "",
        docAdvice: "",
        abiliPerson: "",
      },
      rules: {
        room: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
   
    operSub() {
      
      // 提交到数据库
      this.$http.post("/operation/addOperation", this.ruleForm).then((res) => {
        if (res.code == 1) {
          alert("已经将处方单存入数据库");
          // console.log(111)
          // this.$router.push("../docotor");
        } else {
          alert("存储失败！");
        }
      });
    },
    submitForm(formroom) {
      this.$refs[formroom].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formroom) {
      this.$refs[formroom].resetFields();
    },
  },
};
</script>

<style lang="scss">
.operAll {
  width: 100%;
  height: 100%;
  margin: 100px auto 0;
  .operBack {
    background: white;
    width: 80%;
    height: 1300px;
    .operForm {
      margin: 0 130px;
    }
    .open {
      background: rgba(32, 159, 133, 1);
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>