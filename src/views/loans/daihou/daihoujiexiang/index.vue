<template>
  <div>
    <div>结项信息</div>
    <div>
      <table>
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
              <br />5分
              <br />很好
            </div>
            <div class="pf">
              <img src="../../../../assets/img/3-2.png" alt />
              <br />5分
              <br />很好
            </div>
            <div class="pf">
              <img src="../../../../assets/img/2-2.png" alt />
              <br />5分
              <br />很好
            </div>
            <div class="pf">
              <img src="../../../../assets/img/1-2.png" alt />
              <br />5分
              <br />很好
            </div>
          </td>
        </tr>
        <tr>
          <td>结项描述:</td>
          <td>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <div>（客户【张某某】还款信息）</div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="Repayment " label="应还款日"></el-table-column>
          <el-table-column prop="ActualRepayment" label="实际还款日"></el-table-column>
          <el-table-column prop="principal" label="本金"></el-table-column>
          <el-table-column prop="interest" label="利息"></el-table-column>
          <el-table-column prop="management " label="管理费"></el-table-column>
          <el-table-column prop="TotalRepayment" label="还款总额"></el-table-column>
          <el-table-column prop="ReliefAmount" label="减免金额"></el-table-column>
          <el-table-column prop="DaysOverdue" label="逾期天数"></el-table-column>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "该笔贷款还款记录很好，没有出现逾期情况",
      tableData: [
        {
          date: "1",//期限
          Repayment: "2018-01-15",//应还款日
          ActualRepayment: "2018-01-15",//实际还款日
          principal: "1000.00",//本金
          interest: "152.00",//利息
          management: "0.00",//管理费
          TotalRepayment: "1152.00",//还款总额
          ReliefAmount: "0.00",//减免金额
          DaysOverdue: "0",//逾期天数
          status: "已还款",//状态
          Submitter: "操作人员A",//提交人
          SubmitTime: "2018-01-15",//提交时间
          notes: "客户已转账",//还款备注
          AuditOpinion: "已核实",//审核意见
          Reviewer: "操作人员B",//审核人
          operating: ""//操作
        },
        {
         date: "1",//期限
          Repayment: "2018-01-15",//应还款日
          ActualRepayment: "2018-01-15",//实际还款日
          principal: "1000.00",//本金
          interest: "152.00",//利息
          management: "0.00",//管理费
          TotalRepayment: "1152.00",//还款总额
          ReliefAmount: "0.00",//减免金额
          DaysOverdue: "0",//逾期天数
          status: "已还款",//状态
          Submitter: "操作人员A",//提交人
          SubmitTime: "2018-01-15",//提交时间
          notes: "客户已转账",//还款备注
          AuditOpinion: "已核实",//审核意见
          Reviewer: "操作人员B",//审核人
          operating: ""//操作
        },
        {
          date: "1",//期限
          Repayment: "2018-01-15",//应还款日
          ActualRepayment: "2018-01-15",//实际还款日
          principal: "1000.00",//本金
          interest: "152.00",//利息
          management: "0.00",//管理费
          TotalRepayment: "1152.00",//还款总额
          ReliefAmount: "0.00",//减免金额
          DaysOverdue: "0",//逾期天数
          status: "已还款",//状态
          Submitter: "操作人员A",//提交人
          SubmitTime: "2018-01-15",//提交时间
          notes: "客户已转账",//还款备注
          AuditOpinion: "已核实",//审核意见
          Reviewer: "操作人员B",//审核人
          operating: ""//操作
        },
        {
          date: "1",//期限
          Repayment: "2018-01-15",//应还款日
          ActualRepayment: "2018-01-15",//实际还款日
          principal: "1000.00",//本金
          interest: "152.00",//利息
          management: "0.00",//管理费
          TotalRepayment: "1152.00",//还款总额
          ReliefAmount: "0.00",//减免金额
          DaysOverdue: "0",//逾期天数
          status: "已还款",//状态
          Submitter: "操作人员A",//提交人
          SubmitTime: "2018-01-15",//提交时间
          notes: "客户已转账",//还款备注
          AuditOpinion: "已核实",//审核意见
          Reviewer: "操作人员B",//审核人
          operating: ""//操作
        }
      ]
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
</style>