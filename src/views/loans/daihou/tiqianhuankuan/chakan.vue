<!-- 提前还款查看 -->
<template>
  <div>
    <div class="zuo">提前还款</div>
    <div class="clear">
      <ul class="clear ul you">
        <li class="zuo">
          初审
          <span class="span">1</span>
        </li>
        <li class="zuo">
          复审
          <span class="span">2</span>
        </li>
        <li class="zuo">
          终审
          <span class="span">3</span>
        </li>
        <li class="zuo">
          放款
          <span class="span">4</span>
        </li>
        <li class="zuo">
          还款
          <span class="span">5</span>
        </li>
        <li class="zuo wc">完成</li>
        <li class="zuo" id="dyin">
          <i class="el-icon-printer"></i> 打印
        </li>
        <li class="zuo" id="fhui">
          <i class="el-icon-arrow-left"></i> 返回
        </li>
      </ul>
    </div>

    <div class="div">
      <div class="subtitle">（客户【张某某】还款信息）</div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="期限" width="60"></el-table-column>
          <el-table-column prop="Repayment" label="应还款日"></el-table-column>
          <el-table-column prop="ActualRepayment" label="实际还款日"></el-table-column>
          <el-table-column prop="principal" label="本金"></el-table-column>
          <el-table-column prop="interest" label="利息"></el-table-column>
          <el-table-column prop="management" label="管理费"></el-table-column>
          <el-table-column prop="PenaltyInterest" label="罚息"></el-table-column>
          <el-table-column prop="ChangeFee" label="变更费"></el-table-column>
          <el-table-column prop="Early" label="提前还款费" width="60"></el-table-column>
          <el-table-column prop="TotalRepayment" label="还款总额"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="DaysOverdue" label="逾期天数"></el-table-column>
          <el-table-column prop="PenaltyReduction" label="罚息减免"></el-table-column>
          <el-table-column prop="Remarks" label="备注">
            <el-input v-model="Remarks" placeholder></el-input>
          </el-table-column>
          <el-table-column prop="FinancialNotes" label="财务备注">
            <el-input v-model="FinancialNotes" placeholder></el-input>
          </el-table-column>
          <el-table-column prop="operating" label="操作"></el-table-column>
        </el-table>
      </div>
    </div>

    <div class="div">
      <table class="table">
        <tr>
          <td>提前还款方式：</td>
          <td>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>期数：</td>
          <td>
            <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>提前还款总额：</td>
          <td>
            <el-input v-model="input2" placeholder="请输入内容" class="input"></el-input>元
          </td>
          <td>提前还款费：</td>
          <td>
            <el-input v-model="input3" placeholder="请输入内容" class="input"></el-input>元
          </td>
          <td>实际还款日期：</td>
          <td>
            <el-date-picker v-model="time" type="date" placeholder="选择日期"></el-date-picker>
          </td>
        </tr>
        <tr>
          <td>是否收取剩余利息：</td>
          <td>
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </td>
          <td>收取金额：</td>
          <td>
            <el-input v-model="input4" placeholder="请输入内容" class="input"></el-input>元
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>备注</td>
          <td colspan="5">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
          </td>
        </tr>
        <tr>
          <td></td>
          <td colspan="5">
            <el-button type="info">提交确认</el-button>
            <el-button type="info">返回</el-button>
          </td>
        </tr>
      </table>
    </div>

    <div class="div">
      <table class="table">
        <tr>
          <th colspan="4">贷款信息</th>
        </tr>

        <tr>
          <td>客户姓名：</td>
          <td>
            郭某某
            <a href right>客户资料档案></a>
          </td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>贷款类型：</td>
          <td>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value2"
                :label="item.label"
                :value="item.value2"
              ></el-option>
            </el-select>
          </td>
          <td>贷款类型：</td>
          <td>
            <el-select v-model="value3" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value3"
                :label="item.label"
                :value="item.value3"
              ></el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td>贷款用途：</td>
          <td colspan="3">
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>

        <tr>
          <td>还款方式：</td>
          <td>
            <el-select v-model="value4" placeholder="请选择">
              <el-option
                v-for="item in options4"
                :key="item.value4"
                :label="item.label"
                :value="item.value4"
              ></el-option>
            </el-select>
          </td>
          <td>借款期限：</td>
          <td>
            <el-select v-model="value5" placeholder="请选择">
              <el-option
                v-for="item in options5"
                :key="item.value5"
                :label="item.label"
                :value="item.value5"
              ></el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td>申请金额：</td>
          <td>
            <el-input v-model="input5" placeholder="请输入内容" class="input"></el-input>元
          </td>
          <td>审批金额：</td>
          <td>
            <el-input v-model="input6" placeholder="请输入内容" class="input"></el-input>元
          </td>
        </tr>

        <tr>
          <td>合同金额：</td>
          <td>
            <el-input v-model="input7" placeholder="请输入内容" class="input"></el-input>元
          </td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <th colspan="4">费用信息</th>
        </tr>

        <tr>
          <td>保证金率</td>
          <td>
            <el-input v-model="input8" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td>服务费：</td>
          <td>
            <el-input v-model="input9" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>年化率：</td>
          <td>
            <el-input v-model="input10" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td>担保费：</td>
          <td>
            <el-input v-model="input11" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>提前还款：</td>
          <td>
            <el-input v-model="input12" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td>月利息：</td>
          <td>
            <el-input v-model="input13" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>月管理费：</td>
          <td>
            <el-input v-model="input14" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td>滞纳金：</td>
          <td>
            <el-input v-model="input15" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <th colspan="4">还款银行资料</th>
        </tr>

        <tr>
          <td>还款账户户名：</td>
          <td>
            <el-input v-model="input16" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td>还款银行开户行：</td>
          <td>
            <el-input v-model="input17" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>还款银行开户地:</td>
          <td>
            <el-select v-model="value6" placeholder="请选择">
              <el-option
                v-for="item in options6"
                :key="item.value6"
                :label="item.label"
                :value="item.value6"
              ></el-option>
            </el-select>
            <el-select v-model="value7" placeholder="请选择">
              <el-option
                v-for="item in options7"
                :key="item.value7"
                :label="item.label"
                :value="item.value7"
              ></el-option>
            </el-select>
            <el-select v-model="value8" placeholder="请选择">
              <el-option
                v-for="item in options8"
                :key="item.value8"
                :label="item.label"
                :value="item.value8"
              ></el-option>
            </el-select>
          </td>
          <td>支行名称：</td>
          <td>
            <el-input v-model="input18" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>银行账号：</td>
          <td>
            <el-input v-model="input19" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td>确认还款银行账号：</td>
          <td>
            <el-input v-model="input20" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>代扣协议状态</td>
          <td>未签代扣协议</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
const cityOptions = [
  "日常生活消费",
  "提高生活质量",
  "购物",
  "教育支出",
  "医疗",
  "保险",
  "资金周转",
  "其他"
];
export default {
  data() {
    return {
      textarea: "",
      tableData: [
        {
          date: "1", //期限
          Repayment: "2018-01-15", //应还款日
          ActualRepayment: "", //实际还款日
          principal: "1000.00", //本金
          interest: "152.00", //利息
          management: "0.00", //管理费
          PenaltyInterest: "0.00", //罚息
          ChangeFee: "0.00", //变更费
          Early: "0.00", //提前还款费
          TotalRepayment: "1152.00", //还款总额
          status: "", //状态
          DaysOverdue: "0", //逾期天数
          PenaltyReduction: "0.00", //罚息减免
          Remarks: "", //备注
          FinancialNotes: "", //财务备注
          operating: "" //操作
        },
        {
          date: "1", //期限
          Repayment: "2018-01-15", //应还款日
          ActualRepayment: "", //实际还款日
          principal: "1000.00", //本金
          interest: "152.00", //利息
          management: "0.00", //管理费
          PenaltyInterest: "0.00", //罚息
          ChangeFee: "0.00", //变更费
          Early: "0.00", //提前还款费
          TotalRepayment: "1152.00", //还款总额
          status: "", //状态
          DaysOverdue: "0", //逾期天数
          PenaltyReduction: "0.00", //罚息减免
          Remarks: "", //备注
          FinancialNotes: "", //财务备注
          operating: "" //操作
        },
        {
          date: "1", //期限
          Repayment: "2018-01-15", //应还款日
          ActualRepayment: "", //实际还款日
          principal: "1000.00", //本金
          interest: "152.00", //利息
          management: "0.00", //管理费
          PenaltyInterest: "0.00", //罚息
          ChangeFee: "0.00", //变更费
          Early: "0.00", //提前还款费
          TotalRepayment: "1152.00", //还款总额
          status: "", //状态
          DaysOverdue: "0", //逾期天数
          PenaltyReduction: "0.00", //罚息减免
          Remarks: "", //备注
          FinancialNotes: "", //财务备注
          operating: "" //操作
        }
      ],
      options: [
        {
          value: "选项1",
          label: "全部提前还清"
        },
        {
          value: "选项2",
          label: "部分提前还清"
        }
      ],
      value: "",

      options2: [
        {
          value2: "选项1",
          label: "个人信用"
        }
      ],
      value2: "",

      options3: [
        {
          value3: "选项1",
          label: "个人信用"
        }
      ],
      value3: "",

      options4: [
        {
          value4: "选项1",
          label: "等额本息"
        }
      ],
      value4: "",

      options5: [
        {
          value5: "选项1",
          label: "48个月"
        }
      ],
      value5: "",

      options6: [
        {
          value6: "选项1",
          label: "广东省"
        }
      ],
      value6: "",

      options7: [
        {
          value7: "选项1",
          label: "深圳市"
        }
      ],
      value7: "",

      options8: [
        {
          value8: "选项1",
          label: "福田区"
        }
      ],
      value8: "",

      checkAll: false,
      checkedCities: ["日常生活消费", "提高生活质量"],
      cities: cityOptions,
      isIndeterminate: true,
      radio: "1",

      input: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",
      input12: "",
      input13: "",
      input14: "",
      input15: "",
      input16: "",
      input17: "",
      input18: "",
      input19: "",
      input20: "",

      time: ""
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style scoped>
#dyin,
#fhui {
  background-color: #fff;
  color: #333;
  padding: 1rem 2rem;
  margin: 0 1rem;
  border: #ccc 0.1rem solid;
}
#dyin {
  margin-left: 3rem;
}
.ul li {
  padding: 1rem 2rem;
  background-color: #333334;
  color: #fff;
  position: relative;
}
.ul .wc {
  background-color: #ccc;
  color: #333333;
}
.span {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #fff;
  color: #333;
  text-align: center;
  position: absolute;
  top: 1.2rem;
  left: 6.5rem;
  z-index: 99;
}
.subtitle {
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
}
.input {
  width: 80%;
}
.table tr td {
  padding: 1rem;
}
.table th {
  background-color: #cccccc;
  padding: 1rem;
}
.div {
  border-bottom: solid #cccccc 0.1rem;
  margin: 1rem 0 2rem 0;
}
</style>