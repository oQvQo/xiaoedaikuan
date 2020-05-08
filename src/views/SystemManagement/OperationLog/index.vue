<template>
  <div>
    操作人员：
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    <el-button type="info">查询</el-button>
    <div>
      <br />
      <i class="glyphicon glyphicon-th-list"></i>数据列表
      <div class="right" style="margin-left:450px;margin-top:100px">
        清除日志
        <el-select v-model="value" placeholder="选择清楚的日期">
          <el-option
            v-for="item in options2"
            :key="item.value2"
            :label="item.label"
            :value="item.value2"
          ></el-option>
        </el-select>
        <el-button>确定</el-button>
      </div>
    </div>
    <br>
    <el-table :data="tableData" height="450" border style="width: 100%">
      <el-table-column prop="date" label="编号" width="180"></el-table-column>
      <el-table-column prop="time" label="操作时间" width="180"></el-table-column>
      <el-table-column prop="user" label="操作人员" width="180"></el-table-column>
      <el-table-column prop="ip" label="IP" width="180"></el-table-column>
      <el-table-column prop="rizhi" label="操作日志"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      style="margin-left:500px"
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
          label: "admin"
        },
        {
          value: "选项2",
          label: "user01"
        }
      ],
      value: "",
      value1: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
       options2: [{
          value2: '选项1',
          label: '2018-07-03 14:36:21'
        }],
        value2: '',
      tableData: [
        {
          date: "1000001",
          time: "2018-07-03 14:36:21",
          user: "admin",
          ip:'118.118.118.115',
          rizhi:'编辑会员账号：小熊'
        },
        {
           date: "1000001",
          time: "2018-07-03 14:36:21",
          user: "admin",
          ip:'118.118.118.115',
          rizhi:'编辑会员账号：小熊'
        },
        {
           date: "1000001",
          time: "2018-07-03 14:36:21",
          user: "admin",
          ip:'118.118.118.115',
          rizhi:'编辑会员账号：小熊'
        },
        {
          date: "1000001",
          time: "2018-07-03 14:36:21",
          user: "admin",
          ip:'118.118.118.115',
          rizhi:'编辑会员账号：小熊'
        },
        {
          date: "1000001",
          time: "2018-07-03 14:36:21",
          user: "admin",
          ip:'118.118.118.115',
          rizhi:'编辑会员账号：小熊'
        },
        {
           date: "1000001",
          time: "2018-07-03 14:36:21",
          user: "admin",
          ip:'118.118.118.115',
          rizhi:'编辑会员账号：小熊'
        },
        {
          date: "1000001",
          time: "2018-07-03 14:36:21",
          user: "admin",
          ip:'118.118.118.115',
          rizhi:'编辑会员账号：小熊'
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>