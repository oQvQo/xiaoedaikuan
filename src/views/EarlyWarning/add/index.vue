<!-- 新增贷后预警 -->
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

      <el-form-item label="预警阶段" prop="region5">
        <el-select v-model="ruleForm.region5" placeholder="请选择">
          <el-option label="三天" value="OneDays"></el-option>
          <el-option label="七天" value="SevenDays"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间" required>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>

      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="一次"></el-radio>
          <el-radio label="每天一次"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource2">
          <el-radio label="10:00"></el-radio>
          <el-radio label="14:00"></el-radio>
          <el-radio label="18:00"></el-radio>
          <el-radio label="22:00"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="接收成员" prop="region6">
        <el-select v-model="ruleForm.region6" placeholder="请选择" @change="item=>sz.push(item)">
          <el-option label="小熊" value="小熊"></el-option>
          <el-option label="小张" value="小张"></el-option>
          <el-option label="小蒋" value="小蒋"></el-option>
          <el-option label="小李" value="小李"></el-option>
        </el-select>
        <br>
        <span v-for="(item,index) in sz" :key="index" @click="sz.splice(sz.findIndex(e=>e===item),1)">{{item}} </span>
      </el-form-item>

      <el-form-item label="是否启用" prop="delivery">
        <el-switch v-model="ruleForm.delivery" active-color="#333334" inactive-color="#d3d3d3"></el-switch>
        <br />
        <span>{{ruleForm.delivery?'打开':'关闭'}}</span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">返回</el-button>
      </el-form-item>
    </el-form>
    <tabBar></tabBar>
  </div>
</template>

<script>
export default {
  data() {
     
    return {
      sz:[],
      num: 1,
      ruleForm: {
        name: "",
        region: "",
        region2: "",
        region3: "",
        region4: "",
        region5: "",

        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        resource2: "",
        desc: "",
        num: 1
      },

      rules: {
        delivery: { required: true },
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [{ message: "请选择", trigger: "change" }],
        region2: [{ message: "请选择", trigger: "change" }],
        region3: [{ message: "请选择", trigger: "change" }],
        region4: [{ message: "请选择", trigger: "change" }],
        region5: [{ required: true, message: "请选择", trigger: "change" }],
        region6: [{ required: true, message: "请选择", trigger: "change" }],
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
        resource: [{ required: true, message: "请选择", trigger: "change" }],
        resource2: [{ required: true, message: "请选择", trigger: "change" }]
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
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
</style>