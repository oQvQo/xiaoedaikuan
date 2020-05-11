<template>
  <div>
    <div class="subtitle">结项信息</div>
    <div>
      <table>
        <tr>
          <td colspan="2">可对该贷款进行评分，有利于用户在平台的信用等级评估</td>
        </tr>
        <tr>
          <td>评分：</td>
          <td>
            <div class="pf">
              <img src="../../../../assets/img/5-1.png" alt />
              <br />5分
              <br />很好
            </div>
            <div class="pf">
              <img src="../../../../assets/img/4-2.png" alt />
              <br />4分
              <br />良好
            </div>
            <div class="pf">
              <img src="../../../../assets/img/3-2.png" alt />
              <br />3分
              <br />一般
            </div>
            <div class="pf">
              <img src="../../../../assets/img/2-2.png" alt />
              <br />2分
              <br />较差
            </div>
            <div class="pf">
              <img src="../../../../assets/img/1-2.png" alt />
              <br />1分
              <br />非常差
            </div>
          </td>
        </tr>
        <tr>
          <td>结项描述:</td>
          <td>
            <el-input type="textarea" :rows="2" placeholder="最多可输入200字" v-model="textarea"></el-input>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <el-button type="info">提交结项</el-button>
            <el-button type="info">返回</el-button>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <div class="subtitle">（客户【张某某】还款信息）</div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="期限" width="60"></el-table-column>
          <el-table-column prop="Repayment" label="应还款日"></el-table-column>
          <el-table-column prop="ActualRepayment" label="实际还款日"></el-table-column>
          <el-table-column prop="principal" label="本金"></el-table-column>
          <el-table-column prop="interest" label="利息"></el-table-column>
          <el-table-column prop="management" label="管理费"></el-table-column>
          <el-table-column prop="TotalRepayment" label="还款总额"></el-table-column>
          <el-table-column prop="ReliefAmount" label="减免金额"></el-table-column>
          <el-table-column prop="DaysOverdue" label="逾期天数" width="60"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="Submitter" label="提交人"></el-table-column>
          <el-table-column prop="SubmitTime" label="提交时间"></el-table-column>
          <el-table-column prop="notes" label="还款备注"></el-table-column>
          <el-table-column prop="AuditOpinion" label="审核意见"></el-table-column>
          <el-table-column prop="Reviewer" label="审核人"></el-table-column>
          <el-table-column prop="operating" label="操作"></el-table-column>
        </el-table>
      </div>
    </div>
    <div>
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
          <td>贷款性质：</td>
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
          <td>贷款性质：</td>
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
        </tr>

        <tr>
          <td>贷款用途：</td>
          <td colspan="3">
            <el-checkbox v-model="checked">日常生活消费</el-checkbox>
          </td>
        </tr>

        <tr>
          <td>还款方式：</td>
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
          <td>借款期限：</td>
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
        </tr>

        <tr>
          <td>申请金额：</td>
          <td>
            <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>元
          </td>
          <td>审批金额：</td>
          <td>
            <el-input v-model="input2" placeholder="请输入内容" class="input"></el-input>元
          </td>
        </tr>

        <tr>
          <td>合同金额：</td>
          <td>
            <el-input v-model="input3" placeholder="请输入内容" class="input"></el-input>元
          </td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <th colspan="4">费用信息</th>
        </tr>

        <tr>
          <td>综合利率：</td>
          <td>
            <el-input v-model="input4" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td>服务费：</td>
          <td>
            <el-input v-model="input5" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>管理费：</td>
          <td>
            <el-input v-model="input6" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <th colspan="4">银行信息</th>
        </tr>

        <tr>
          <td>开户行：</td>
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
          <td>户名：</td>
          <td>
            <el-input v-model="input7" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>开户地:</td>
          <td>
            <el-select v-model="value6" placeholder="请选择">
              <el-option
                v-for="item in options6"
                :key="item.value6"
                :label="item.label"
                :value="item.value6"
              ></el-option>
            </el-select>
          </td>
          <td>支行名称：</td>
          <td>
            <el-input v-model="input8" placeholder="请输入内容" class="input"></el-input>
          </td>
        </tr>

        <tr>
          <td>银行账号：</td>
          <td>
            <el-input v-model="input9" placeholder="请输入内容" class="input"></el-input>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      tableData: [
        {
          date: "1", //期限
          Repayment: "2018-01-15", //应还款日
          ActualRepayment: "2018-01-15", //实际还款日
          principal: "1000.00", //本金
          interest: "152.00", //利息
          management: "0.00", //管理费
          TotalRepayment: "1152.00", //还款总额
          ReliefAmount: "0.00", //减免金额
          DaysOverdue: "0", //逾期天数
          status: "已还款", //状态
          Submitter: "操作人员A", //提交人
          SubmitTime: "2018-01-15", //提交时间
          notes: "客户已转账", //还款备注
          AuditOpinion: "已核实", //审核意见
          Reviewer: "操作人员B", //审核人
          operating: "" //操作
        },
        {
          date: "1", //期限
          Repayment: "2018-01-15", //应还款日
          ActualRepayment: "2018-01-15", //实际还款日
          principal: "1000.00", //本金
          interest: "152.00", //利息
          management: "0.00", //管理费
          TotalRepayment: "1152.00", //还款总额
          ReliefAmount: "0.00", //减免金额
          DaysOverdue: "0", //逾期天数
          status: "已还款", //状态
          Submitter: "操作人员A", //提交人
          SubmitTime: "2018-01-15", //提交时间
          notes: "客户已转账", //还款备注
          AuditOpinion: "已核实", //审核意见
          Reviewer: "操作人员B", //审核人
          operating: "" //操作
        },
        {
          date: "1", //期限
          Repayment: "2018-01-15", //应还款日
          ActualRepayment: "2018-01-15", //实际还款日
          principal: "1000.00", //本金
          interest: "152.00", //利息
          management: "0.00", //管理费
          TotalRepayment: "1152.00", //还款总额
          ReliefAmount: "0.00", //减免金额
          DaysOverdue: "0", //逾期天数
          status: "已还款", //状态
          Submitter: "操作人员A", //提交人
          SubmitTime: "2018-01-15", //提交时间
          notes: "客户已转账", //还款备注
          AuditOpinion: "已核实", //审核意见
          Reviewer: "操作人员B", //审核人
          operating: "" //操作
        }
      ],
      options: [
        {
          value: "选项1",
          label: "个人"
        },
        {
          value: "选项2",
          label: "公司"
        }
      ],
      value: "",

      options2: [
        {
          value2: "选项1",
          label: "信用"
        }
      ],
      value2: "",

      options3: [
        {
          value3: "选项1",
          label: "等额本息"
        }
      ],
      value3: "",

      options4: [
        {
          value4: "选项1",
          label: "48个月"
        }
      ],
      value4: "",

      options5: [
        {
          value5: "选项1",
          label: "中国银行"
        }
      ],
      value5: "",

      options6: [
        {
          value6: "选项1",
          label: "广东省 深圳市 福田区"
        }
      ],
      value6: "",

      checked: true,

      input: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: ""
    };
  }
};
</script>

<style scoped>
.pf {
  display: inline-block;
  margin: 20px;
  text-align: center;
}
.subtitle {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}
.input {
  width: 80%;
}
.table tr td {
  /* margin: 10px; */
  padding: 10px;
}
.table th {
  background-color: #cccccc;
  padding: 10px;
}
</style>