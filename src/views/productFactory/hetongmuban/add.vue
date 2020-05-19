<!-- 新增合同模板 -->
<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="合同模板编号：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="合同模板名称：" prop="name2">
        <el-input v-model="ruleForm.name2"></el-input>
      </el-form-item>
      <el-form-item label="适用贷款类别：" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="个人" value="geren"></el-option>
          <el-option label="企业" value="qiye"></el-option>
        </el-select>
        <el-select v-model="ruleForm.region2" placeholder="请选择">
          <el-option label="信用" value="xinyong"></el-option>
          <el-option label="分期" value="fenqi"></el-option>
          <el-option label="保险" value="baoxian"></el-option>
          <el-option label="融资租赁" value="rongzi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="标签说明">
        <!-- <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="ruleForm.textarea"></el-input> -->
        <table>
          <tr>
            <td>
              贷款产品类别：$Loan_Product_Sort$
              贷款产品名称：$Loan_Product_Name$
              合同编号：$Contract_No$<br/>	
              还款金额：$Repayment_Amount$
              待还金额：$Remanent_Amount$	
              贷款编号：$Loan_Id$<br/>	
              贷款名称：$Loan_Name$
              贷款期限：$Loan_Term$
              还款期数：$Repayment_Nubmer$<br/>	
              贷款人姓名：$Borrower_Name$
              贷款人手机号：$Borrower_Phone_Number$
              贷款人身份证：$Borrower_Identity$<br/>	
            </td>
          </tr>
        </table>
      </el-form-item>
	  <el-form-item label="合同内容" prop="textarea">
		  <el-input></el-input>
	  </el-form-item>
      <el-form-item>
        <el-button style="margin-top: 12px;" @click="next">下一步,产品参数配置</el-button>
      </el-form-item>
    </el-form>
	<tabBar></tabBar>	xxxxxxxxxxxxx	
  </div>
</template>

<script>
export default {
  data() {
    // active1:0;
    return {
      activeIndex: "1",
      activeName: "second",
      ruleForm: {
        name: "",
        name2: "",
        region: "",
        region2: "",
        resource: ""
        // textarea: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "产品名称",
            trigger: "blur"
          },
          {
            // min: 3,
            // max: 5,
            message: "请输入编号",
            trigger: "blur"
          }
        ],
        name2: [
          {
            required: true,
            message: "请输入合同名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        region: [
          {
            required: true,
            message: "请选择活动区域",
            trigger: "change"
          }
        ],
        region2: [
          {
            required: true,
            message: "请选择活动区域",
            trigger: "change2"
          }
        ],
        resource: [
          {
            trigger: "change"
          }
        ]
        // textarea: ""
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    next() {
      if (this.active1++ > 2) this.active1 = 0;
    }
  }
};
</script>

<style scoped>
.el-menu-demo {
  background-color: #d3d3d3;
  color: black;
}
.input {
  width: 500px;
}
</style>
