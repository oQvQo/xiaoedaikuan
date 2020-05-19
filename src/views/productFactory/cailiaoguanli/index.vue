<!-- 贷款材料管理 -->
<template>
  <div>
    <p class="clear">
      <span>数据列表</span>
      <span style="cursor: pointer;" @click="$router.push('adddaikuancailiao')">新增</span>
    </p>
    <table>
      <tr>
        <td>材料名称</td>
        <td>材料类型</td>
        <td>附件上传数量</td>
        <td>材料状态</td>
        <td>排序值</td>
        <td>更新时间</td>
        <td>操作</td>
      </tr>
      <tr>
        <td>工作证明</td>
        <td>附件</td>
        <td>2</td>
        <td>使用中</td>
        <td>0</td>
        <td>2018-12-01</td>
        <td>
          <a href>查看</a>
          <a href>编辑</a>
          <a href>禁用</a>
          <a href>删除</a>
        </td>
      </tr>
      <tr>
        <td>银行流水证明</td>
        <td>附件</td>
        <td>2</td>
        <td>未使用</td>
        <td>100</td>
        <td>2018-12-01</td>
        <td>
          <a href>查看</a>
          <a href>编辑</a>
          <a href>禁用</a>
          <a href>删除</a>
        </td>
      </tr>
      <tr>
        <td>保单证明</td>
        <td>附件</td>
        <td>2</td>
        <td>未使用</td>
        <td>100</td>
        <td>2018-12-01</td>
        <td>
          <a href>查看</a>
          <a href>编辑</a>
          <a href>禁用</a>
          <a href>删除</a>
        </td>
      </tr>
      <tr>
        <td>房产证明</td>
        <td>附件</td>
        <td>2</td>
        <td>未使用</td>
        <td>100</td>
        <td>2018-12-01</td>
        <td>
          <a href>查看</a>
          <a href>编辑</a>
          <a href>禁用</a>
          <a href>删除</a>
        </td>
      </tr>
      <tr>
        <td>学历证明</td>
        <td>附件</td>
        <td>2</td>
        <td>未使用</td>
        <td>100</td>
        <td>2018-12-01</td>
        <td>
          <a href>查看</a>
          <a href>编辑</a>
          <a href>禁用</a>
          <a href>删除</a>
        </td>
      </tr>
      <tr>
        <td>其他证明</td>
        <td>附件</td>
        <td>2</td>
        <td>未使用</td>
        <td>100</td>
        <td>2018-12-01</td>
        <td>
          <a href>查看</a>
          <a href>编辑</a>
          <a href>禁用</a>
          <a href>删除</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: #333334;
  font-weight: bold;
}
p {
  background-color: #ece9e9;
  padding: 0.3125rem;
}
p > span {
  font-size: 0.75rem;
  padding: 0.3125rem;
}
p > span:last-of-type {
  background-color: #333334;
  color: white;
  padding: 0.3125rem 1.25rem;
}
table {
  color: #333334;
  text-align: center;
  width: 1150px;
  font-size: 0.8125rem;
}
table > tr:first-of-type > td {
  font-weight: bold;
}
td {
  padding: 0.625rem 0.9375rem;
  font-size: 0.875rem;
}
td > a {
  padding: 0.625rem;
  font-size: 0.875rem;
}
.clear{
	display: flex;
	justify-content: space-between;
}
</style>
