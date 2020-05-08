<template>
  <div class="qxbumen">
    <!-- 一级 -->
    <div>
      <!-- 一 -->
      <div class="bumentitle">
        <div>
          <img src="../../public/cuishouimage/1.png" />
          <span>首页/权限/部门管理</span>
        </div>
        <div>
          <img src="../../public/qxxitongimage/1.png" />刷新
        </div>
      </div>
      <!-- 二 -->
      <div class="bumentitle lie">
        <div>
          <img src="../../public/img/xiaotuTwo.png" />数据类表
        </div>
        <div @click="add">添加</div>
      </div>
      <!-- 三 -->
      <div class="table">
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column fixed prop="bname" label="部门名称" width="250"></el-table-column>

          <el-table-column prop="zhineng" label="职能描述" width="300"></el-table-column>

          <el-table-column prop="shuliang" label="成员数量" width="150"></el-table-column>

          <el-table-column prop="shijian" label="添加时间" width="250"></el-table-column>

          <el-table-column label="是否启用" width="150">
            <el-switch v-model="value" active-color="#000" inactive-color="#ff4949"></el-switch>
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="100">
            <template>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 编辑 -->
    <div class="bianji" v-if="panduan">
      <div class="bjtitle">
        <div>添加部门</div>
        <div @click="guanbi">X</div>
      </div>

      <div class="bjneiro">
        <table cellpadding="5" cellspacing="5">
          <tr>
            <td>
              <span style="color: red;">*</span>部门名称:
            </td>
            <td>
              <el-input v-model="bmnane"></el-input>
            </td>
          </tr>
          <tr>
            <td>是否启用:</td>
            <td>
              <el-radio v-model="radio" label="1">启用</el-radio>
              <el-radio v-model="radio" label="2">关闭</el-radio>
            </td>
          </tr>
          <tr>
            <td>职能描述:</td>
            <td>
              <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="bmmiaoshu"></el-input>
            </td>
          </tr>
        </table>
      </div>

      <div class="bjbottom">
        <el-row>
          <el-button @click="guanbi">取消</el-button>
          <el-button type="info">确定</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qxbumen",
  data() {
    return {
      radio: "1",
      bmnane: "",
      bmmiaoshu: "",
      panduan: false,
      value: true,
      tableData: [
        {
          bname: "风控部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        },
        {
          bname: "贷后部",
          zhineng: "暂无描述",
          shuliang: 10,
          shijian: "2018-08-05 15:45:44",
          qiyong: true
        }
      ]
    };
  },
  methods: {
    add() {
      this.panduan = true;
    },
    guanbi() {
      this.panduan = false;
    }
  }
};
</script>

<style scoped>
.qxbumen {
  width: 100%;
  height: 606px;
  overflow: scroll;
  background: #f9f9f9;
}
.cell {
  text-align: center;
}
.bumentitle {
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: #f9f9f9;
  padding-top: 1%;
  box-sizing: border-box;
}
.bumentitle > div:first-child {
  float: left;
}
.bumentitle > div:last-child {
  float: right;
  width: 80px;
  height: 30px;
  color: #666;
  cursor: pointer;
  line-height: 30px;
  background: white;
  text-align: center;
  border: 1px solid #cccccc;
}
.lie {
  height: 50px;
  background: #f3f3f3;
}

/* 编辑 */
.bianji {
  position: fixed;
  top: 20%;
  left: 30%;
  width: 45%;
  z-index: 5;
  height: 400px;
  background: white;
  box-shadow: #666 0px 0px 20px;
}
.bjtitle {
  width: 100%;
  height: 60px;
  padding: 0 20px;
  line-height: 60px;
  background: #f2f2f2;
  box-sizing: border-box;
}
.bjtitle > div {
  color: #666;
  font-size: 20px;
  font-weight: bold;
}
.bjtitle > div:first-child {
  float: left;
}
.bjtitle > div:last-child {
  float: right;
  cursor: pointer;
}
.bjneiro {
  width: 100%;
  height: 260px;
  padding: 0 20%;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
.bjbottom {
  float: right;
  margin-top: 2%;
  margin-right: 10%;
}
</style>
