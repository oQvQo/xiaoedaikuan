<template>
  <div>
    <el-select v-model="value" placeholder="预警阶段">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select v-model="value" placeholder="启用状态">
      <el-option
        v-for="item in options2"
        :key="item.value2"
        :label="item.label"
        :value="item.value2"
      ></el-option>
    </el-select>
    <el-button type="info">查询</el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="编号" width="110"></el-table-column>
      <el-table-column prop="name" label="预警名称" width="110"></el-table-column>
      <el-table-column prop="TypesOf" label="贷款类型" width="110"></el-table-column>
      <el-table-column prop="product" label="借款产品" width="110"></el-table-column>
      <el-table-column prop="stage" label="预警阶段" width="110"></el-table-column>
      <el-table-column prop="days" label="提前预警天数" width="120"></el-table-column>
      <el-table-column prop="cycle" label="预警周期" width="110"></el-table-column>
      <el-table-column prop="time" label="提醒时间" width="110"></el-table-column>
      <el-table-column prop="send" label="发送方式" width="110"></el-table-column>
      <el-table-column prop="value" label="启用状态" width="110">
        <template slot-scope="scope">
          <el-switch active-color="#333334" inactive-color="#d3d3d3" v-model="scope.row.status"></el-switch>
          <br />启用
        </template>
      </el-table-column>
      <el-table-column prop="operating" label="操作"></el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      class="xd"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "即将到期"
        },
        {
          value: "选项2",
          label: "已经逾期的贷款"
        }
      ],
      value: "",

      options2: [
        {
          value2: "选项1",
          label: "启用"
        },
        {
          value2: "选项2",
          label: "禁用"
        }
      ],
      value2: "",

      tableData: [
        {
          date: "EW1001",
          name: "逾期预警",
          TypesOf: "个人信用",
          product: "工薪贷",
          stage: "即将到期",
          days: "3",
          cycle: "每天一次",
          time: "10:00",
          send: "短信",
          value: true,
          operating: "查看 修改"
        },
        {
          date: "EW1001",
          name: "逾期预警",
          TypesOf: "个人信用",
          product: "工薪贷",
          stage: "即将到期",
          days: "3",
          cycle: "每天一次",
          time: "10:00",
          send: "短信",
          value: true,
          operating: "查看 修改"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>

<style scoped>
.xd{
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>