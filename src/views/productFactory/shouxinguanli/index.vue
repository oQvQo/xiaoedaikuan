<!-- 授信管理 -->
<template>
  <div>
    <el-input v-model="input" placeholder="姓名" class="el-input"></el-input>
    <el-input v-model="number" placeholder="手机号" class="el-input"></el-input>
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
        <el-table-column label="借款编号" width="100">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="110"></el-table-column>
        <el-table-column prop="time" label="申请日期" width="110"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="130"></el-table-column>
        <el-table-column prop="edu" label="申请额度" width="110"></el-table-column>
        <el-table-column prop="huankuan" label="还款方式" width="110"></el-table-column>
        <el-table-column prop="jiekuan" label="借款期限" width="110"></el-table-column>
        <el-table-column prop="leixing" label="贷款类型" width="110"></el-table-column>
        <el-table-column prop="zt" label="状态" width="110">
          <template slot-scope="scope">
            <span v-html="scope.row.zt"></span>
          </template>
        </el-table-column>
        <el-table-column prop="firsttime" label="初审时间" width="110"></el-table-column>
        <el-table-column prop="first" label="初审人员" width="110"></el-table-column>
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
      number:"",
      tableData: [
        {
          date: "1000001",
          name: "老朱",
          time: "2018-12-15 12:35:18",
          phone: "13888888888",
          edu: "500000",
          huankuan: "基本信息",
          jiekuan: "12",
          leixing: "个人信用",
          zt: "复审驳回<br/>审核详情",
          firsttime: "2018-12-15 14:35:18",
          first: "张某某",
          cz: "查询"
        },
        {
          date: "1000001",
          name: "老朱",
          time: "2018-12-15 12:35:18",
          phone: "13888888888",
          edu: "500000",
          huankuan: "基本信息",
          jiekuan: "12",
          leixing: "个人信用",
          zt: "复审驳回<br/>审核详情",
          firsttime: "2018-12-15 14:35:18",
          first: "张某某",
          cz: "查询"
        },
        {
          date: "1000001",
          name: "老朱",
          time: "2018-12-15 12:35:18",
          phone: "13888888888",
          edu: "500000",
          huankuan: "基本信息",
          jiekuan: "12",
          leixing: "个人信用",
          zt: "等待初审",
          firsttime: "2018-12-15 14:35:18",
          first: "张某某",
          cz: "查询"
        },
        {
          date: "1000001",
          name: "老朱",
          time: "2018-12-15 12:35:18",
          phone: "13888888888",
          edu: "500000",
          huankuan: "基本信息",
          jiekuan: "12",
          leixing: "个人信用",
          zt: "等待初审",
          firsttime: "2018-12-15 14:35:18",
          first: "张某某",
          cz: "查询"
        },
        {
          date: "1000001",
          name: "老朱",
          time: "2018-12-15 12:35:18",
          phone: "13888888888",
          edu: "500000",
          huankuan: "基本信息",
          jiekuan: "12",
          leixing: "个人信用",
          zt: "等待初审",
          firsttime: "2018-12-15 14:35:18",
          first: "张某某",
          cz: "查询"
        },
        {
          date: "1000001",
          name: "老朱",
          time: "2018-12-15 12:35:18",
          phone: "13888888888",
          edu: "500000",
          huankuan: "基本信息",
          jiekuan: "12",
          leixing: "个人信用",
          zt: "等待初审",
          firsttime: "2018-12-15 14:35:18",
          first: "张某某",
          cz: "查询"
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