<!-- 合同模板 -->
<template>
  <div>
    <el-input v-model="input" placeholder="合同编号" class="el-input"></el-input>
    <el-button type="info" @click="open">搜索</el-button>
    <el-button type="info">
      <router-link to="/addhetongmuban">新增</router-link>
    </el-button>
    <div class="div">
      <p>数据列表</p>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="合同模板编号" width="220">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="leibie" label="合同类别" width="220"></el-table-column>
        <el-table-column prop="zhuangtai" label="合同状态" width="220"></el-table-column>
        <el-table-column prop="time" label="更新时间" width="220"></el-table-column>
        <el-table-column prop="address" label="操作" show-overflow-tooltip></el-table-column>
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
          date: "1000001",
          name: "个人信用贷款合同",
          leibie: "个人信用贷款",
          zhuangtai: "使用中",
          time: "2018-12-01",
          address: "下载 预览"
        }
      ],
      multipleSelection: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
        });
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
.div{
    background-color: #cccccc;
}
p{
    padding: 10px 10px 5px;
}
</style>