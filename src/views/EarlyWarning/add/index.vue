<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="预警名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="贷款类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="个人" value="peoper"></el-option>
          <el-option label="企业" value="enterprise"></el-option>
        </el-select>
        <el-select v-model="ruleForm.region2" placeholder="请选择">
          <el-option label="等额本息" value="debx"></el-option>
          <el-option label="等额等息" value="dedx"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="贷款产品" prop="region">
        <el-select v-model="ruleForm.region3" placeholder="请选择">
          <el-option label="工薪贷" value="Salary"></el-option>
          <el-option label="悦薪贷" value="HappySalary"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="贷款五级分类" prop="region">
        <el-select v-model="ruleForm.region4" placeholder="请选择">
          <el-option label="一" value="one"></el-option>
          <el-option label="二" value="two"></el-option>
          <el-option label="三" value="three"></el-option>
          <el-option label="四" value="four"></el-option>
          <el-option label="五" value="five"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="预警阶段" prop="region">
        <el-select v-model="ruleForm.region5" placeholder="请选择">
          <el-option label="三天" value="OneDays"></el-option>
          <el-option label="七天" value="SevenDays"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>

      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [{ message: "请选择", trigger: "change" }],
        region2: [{ message: "请选择", trigger: "change" }],
        region3: [{ message: "请选择", trigger: "change" }],
        region4: [{ message: "请选择", trigger: "change" }],
        region5: [{ required: true, message: "请选择", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
</style>