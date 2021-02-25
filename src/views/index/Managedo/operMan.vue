<template>
  <div class="flex justify-center operMan_al align-center">
    <div class="operMan_bg flex justify-center">
      <!-- 去掉aligncenter垂直居中，加一个上内边距 paddingtop -->
      <div>
        <el-table :data="oper_table" border style="width: 100%">
          <el-table-column prop="room" label="科室" width="120">
          </el-table-column>
          <el-table-column prop="rid" label="住院号" width="120">
          </el-table-column>
          <el-table-column prop="time" label="计划时间（年月日" width="120">
          </el-table-column>
          <el-table-column prop="timeDetail" label="计划具体时间" width="120">
          </el-table-column>
          <el-table-column prop="beforeJud" label="术前诊断" width="120">
          </el-table-column>
          <el-table-column prop="operName" label="手术名称" width="120">
          </el-table-column>
          <el-table-column
            prop="operPro"
            label="可能出现的问题与对策情况"
            width="120"
          >
          </el-table-column>
          <el-table-column prop="evidence" label="手术指证是否合理" width="120">
          </el-table-column>
          <el-table-column prop="danger" label="是否进行风险评估" width="120">
          </el-table-column>
          <el-table-column prop="blood" label="是否输血前评估" width="120">
          </el-table-column>
          <el-table-column
            prop="docEvent"
            label="是否有术者术前查看患者相关情况"
            width="120"
          >
          </el-table-column>
          <el-table-column prop="agree" label="是否签署知情同意书" width="120">
          </el-table-column>
          <el-table-column prop="docAdvice" label="监督评价" width="120">
          </el-table-column>
          <el-table-column prop="abiliPerson" label="负责人" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="deleOper(scope.row.rid)" type="text" size="small"
                >删除</el-button
              >
              <el-button
                type="text"
                @click="dialogFormVisible = true"
                size="small"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div>
      <el-dialog title="编辑手术规划" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="住院号" :label-width="formLabelWidth">
            <el-input v-model="form.rid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="计划时间" :label-width="formLabelWidth">
            <el-input v-model="form.time" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="计划具体时间" :label-width="formLabelWidth">
            <el-input
              v-model="form.timeDetail"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="术前诊断" :label-width="formLabelWidth">
            <el-input
              v-model="form.beforeJud"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="手术名称" :label-width="formLabelWidth">
            <el-input
              v-model="form.operName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="可能出现的问题与对策情况"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.operPro" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手术指证是否合理" :label-width="formLabelWidth">
            <el-input
              v-model="form.evidence"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="是否进行风险评估" :label-width="formLabelWidth">
            <el-input v-model="form.danger" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否输血前评估" :label-width="formLabelWidth">
            <el-input v-model="form.blood" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="是否有术者术前查看患者相关情况"
            :label-width="formLabelWidth"
          >
            <el-input
              v-model="form.docEvent"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="是否签署知情同意书"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.agree" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="监督评价" :label-width="formLabelWidth">
            <el-input
              v-model="form.docAdvice"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="负责人" :label-width="formLabelWidth">
            <el-input
              v-model="oper_table.abiliPerson"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",

      oper_table: [{
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
      }],

      form:{
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
      }
    };
  },
  created() {
    this.findOper();
  },
  methods: {
    // 删除选中的一行数据
    deleOper(rid) {
       this.$http
        .post("/operation/delOperation", {
          rid
        })
        .then((res) => {
          if (res.code == 1) {
             this.findOper();
          }
        });
    },
    // 查询手术单
    findOper() {
      this.$http
        .post("/operation/findOperation", {
        })
        .then((res) => {
          if (res.code == 1) {
            this.oper_table = res.data;
          }
        });
    },
  },
};
</script>

<style  lang="scss">
.operMan_al {
  width: 100%;
  height: 120%;

  padding-top: 100px;
  .operMan_bg {
    background: white;
    width: 90%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>