<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="贷款编号：" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="100001" value="shanghai"></el-option>
          <el-option label="100001" value="beijing"></el-option>
        </el-select>
        <br />
        <span>收款人姓名:张某某 贷款期限:24期 贷款金额：48000元 贷款金额：365000 还款方式：等额本息</span>
      </el-form-item>

      <el-form-item label="借款利率：" prop="input">
        <el-input v-model="ruleForm.input" class="input"></el-input>%
      </el-form-item>

      <el-form-item label="调整后利率：" prop="input2">
        <el-input v-model="ruleForm.input2" class="input"></el-input>%
      </el-form-item>

      <el-form-item label="变更类型：" prop="input3">
        <el-input v-model="ruleForm.input3" class="input"></el-input>
      </el-form-item>

      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item label="" prop="">
          <el-button type="info">返回</el-button>
      </el-form-item>
    </el-form>
    <TabBar></TabBar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        region: "",
        input: "",
        input2: "",
        input3: "",
        desc:""
      },
      rules: {
        input: [
          { message: "请输入活动名称", trigger: "blur" }
          //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        input2: [
          { message: "请输入活动名称", trigger: "blur" }
          //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        input3: [
          { message: "请输入活动名称", trigger: "blur" }
          //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        desc: [{ message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.input {
  width: 20%;
}
</style>