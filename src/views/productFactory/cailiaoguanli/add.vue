<!-- 新增贷款材料 -->
<template>
  <div>
    <div class="toubu clear">
      <span>新增贷款材料</span>
      <span @click="$router.go(-1)" style="cursor: pointer;">
        <i class="glyphicon glyphicon-menu-left"></i>返回
      </span>
    </div>
    <div class="nr">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td>
            <span>*</span>材料名称
          </td>
          <td>
            <input type="text" name id value class="bor" />
            <br />
            <span>请认真填写材料名称，此项将会显示在借款产品页面</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>*</span>材料类型
          </td>
          <td>
            <select class="bor select">
              <option value="fj" selected="selected">附件</option>
              <option value="zj">主件</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <span>*</span>附件上传需求
          </td>
          <td>
            <input type="number" name="元素名称" min="1" max step="1" class="bor" value="1" />张
            <br />
            <span>用户最少需要上传的附件张数，建议根据实际情况填写</span>
          </td>
        </tr>
        <tr>
          <td>排序值</td>
          <td>
            <input type="text" name="元素名称" placeholder="0~100" class="bor" />
            <br />
            <span>用户提交材料时，显示的材料顺序，排序值越大越靠前</span>
          </td>
        </tr>
        <tr>
          <td>是否启用</td>
          <td>
            <input type="radio" name="xz" id value="yes" checked="checked" />是
            <input type="radio" name="xz" id value="no" />否
          </td>
        </tr>
        <tr>
          <td>
            <span>*</span>材料描述
          </td>
          <td>
            <textarea rows="15" cols="100" placeholder="请对材料要求进行简要描述,以便借款人正确上传相关材料"></textarea>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="submit">提交</button>
          </td>
        </tr>
      </table>
      <tabBar></tabBar>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
body {
  background-color: #f0f0f0;
}
.bor {
  border: 0.0625rem #ece9e9 solid;
  padding: 0.625rem;
  margin: 0.3125rem;
  width: 9.375rem;
}
tr > td {
  padding: 0.625rem;
}
tr > td:first-of-type {
  text-align: right;
}
tr > td:first-of-type > span {
  color: red;
}
tr > td:last-of-type > span {
  font-size: 0.75rem;
  color: #9e9f9e;
}
.select {
  width: 10.625rem;
  border: 0.0625rem solid #333333;
}
button {
  background-color: #333334;
  color: white;
  padding: 0.3125rem 0.9375rem;
  border: 0;
}
.toubu {
  margin-bottom: 0.9375rem;
  background-color: white;
}
.toubu > span:first-of-type {
  font-size: 1.125rem;
  font-weight: bold;
}
.toubu > span:last-of-type {
  font-size: 0.875rem;
  color: #555555;
  float: right;
  border: 0.0625rem solid #cacaca;
  padding: 0.3125rem 1.25rem;
}
.nr {
  background-color: white;
}
</style>
