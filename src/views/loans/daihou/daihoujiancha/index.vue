<!-- 贷后检查 -->
<template>
  <div>
    <el-input v-model="input" placeholder="姓名" class="el-input"></el-input>
    <el-input v-model="input" placeholder="手机号" class="el-input"></el-input>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-date-picker v-model="value1" type="daterange" start-placeholder="请选择" end-placeholder="请选择"></el-date-picker>
    <el-button type="info">查询</el-button>
    <div class="div">
      <p>数据列表</p>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="报告编号" width="100">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="bh" label="借款编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="jine" label="合同金额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="qixian" label="借款期限" show-overflow-tooltip></el-table-column>
        <el-table-column prop="leixing" label="贷款类型" show-overflow-tooltip></el-table-column>
        <el-table-column prop="fangshi" label="还款方式" show-overflow-tooltip></el-table-column>
        <el-table-column prop="time" label="贷后检查时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="jiancha" label="检查方式" show-overflow-tooltip></el-table-column>
        <el-table-column prop="why" label="检查原因" show-overflow-tooltip></el-table-column>
        <el-table-column prop="yijian" label="贷后处理意见" show-overflow-tooltip></el-table-column>
        <el-table-column prop="jianyi" label="贷后建议" show-overflow-tooltip></el-table-column>
        <el-table-column prop="cz" label="操作" show-overflow-tooltip></el-table-column>
      </el-table>

      <div class="block dw">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "ALT201812181528964",
          bh:"100001",
          name: "老朱",
          jine: "480000",
          qixian: "12",
          leixing: "个人信用",
          fangshi: "等本等息",
          time: "2018-12-18",
          jiancha: "电话检查",
          why: "首次检查",
          yijian: "正常贷款",
          jianyi: "客户资信较好，信用稳定",
          cz: "查看"
        },
        {
          date: "ALT201812181528964",
          bh:"100001",
          name: "老朱",
          jine: "480000",
          qixian: "12",
          leixing: "个人信用",
          fangshi: "等本等息",
          time: "2018-12-18",
          jiancha: "电话检查",
          why: "首次检查",
          yijian: "正常贷款",
          jianyi: "客户资信较好，信用稳定",
          cz: "查看"
        },
        {
          date: "ALT201812181528964",
          bh:"100001",
          name: "老朱",
          jine: "480000",
          qixian: "12",
          leixing: "个人信用",
          fangshi: "等本等息",
          time: "2018-12-18",
          jiancha: "电话检查",
          why: "首次检查",
          yijian: "正常贷款",
          jianyi: "客户资信较好，信用稳定",
          cz: "查看"
        },
        {
          date: "ALT201812181528964",
          bh:"100001",
          name: "老朱",
          jine: "480000",
          qixian: "12",
          leixing: "个人信用",
          fangshi: "等本等息",
          time: "2018-12-18",
          jiancha: "电话检查",
          why: "首次检查",
          yijian: "正常贷款",
          jianyi: "客户资信较好，信用稳定",
          cz: "查看"
        },
        {
          date: "ALT201812181528964",
          bh:"100001",
          name: "老朱",
          jine: "480000",
          qixian: "12",
          leixing: "个人信用",
          fangshi: "等本等息",
          time: "2018-12-18",
          jiancha: "电话检查",
          why: "首次检查",
          yijian: "正常贷款",
          jianyi: "客户资信较好，信用稳定",
          cz: "查看"
        }
      ],
      multipleSelection: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      options: [
        {
          value: "选项1",
          label: "个人信用"
        }
      ],
      value: "",
      value1: ""
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped>
.el-input {
  width: 150px;
}
.dw {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px 20px;
}
.div {
  background-color: #cccccc;
}
p {
  padding: 10px 10px 5px;
}
</style>