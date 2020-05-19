<!-- 登录日志 -->
<template>
  <div>
    <el-input v-model="input" placeholder="手机号" class="input"></el-input>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="请选择"
      end-placeholder="请选择"
    ></el-date-picker>
    <el-button type="info">查询</el-button>
    <el-table :data="tableData" height="450" border style="width: 100%">
      <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
      <el-table-column prop="time" label="时间" width="180"></el-table-column>
      <el-table-column prop="ip" label="IP" width="180"></el-table-column>
      <el-table-column prop="diqu" label="地区" width="180"></el-table-column>
      <el-table-column prop="liulanqi" label="浏览器"></el-table-column>
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
  data() {
    return {
      input: "",
      value1: "",
      tableData: [
        {
          phone: "18888888888",
          time: "2018-07-03 14:36:21",
          ip: "183.14.135.1",
          diqu: "广东省深圳市",
          liulanqi: "Firefox 45"
        },
        {
          phone: "18888888888",
          time: "2018-07-03 14:36:21",
          ip: "183.14.135.1",
          diqu: "广东省深圳市",
          liulanqi: "Firefox 45"
        },
        {
          phone: "18888888888",
          time: "2018-07-03 14:36:21",
          ip: "183.14.135.1",
          diqu: "广东省深圳市",
          liulanqi: "Firefox 45"
        },
        {
          phone: "18888888888",
          time: "2018-07-03 14:36:21",
          ip: "183.14.135.1",
          diqu: "广东省深圳市",
          liulanqi: "Firefox 45"
        },
        {
          phone: "18888888888",
          time: "2018-07-03 14:36:21",
          ip: "183.14.135.1",
          diqu: "广东省深圳市",
          liulanqi: "Firefox 45"
        },
        {
          phone: "18888888888",
          time: "2018-07-03 14:36:21",
          ip: "183.14.135.1",
          diqu: "广东省深圳市",
          liulanqi: "Firefox 45"
        },
        {
          phone: "18888888888",
          time: "2018-07-03 14:36:21",
          ip: "183.14.135.1",
          diqu: "广东省深圳市",
          liulanqi: "Firefox 45"
        }
      ]
    };
  }
};
</script>

<style scoped>
.input {
  width: 200px;
}
</style>