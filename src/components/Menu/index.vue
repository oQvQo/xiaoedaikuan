<!--  -->
<template>
  <div class="scroll">
    <div class="top clear">
      <span>
        <strong>Dashboard</strong>
      </span>
      <ul>
        <li>星期五</li>
        <li>农历11月初五</li>
        <li>@时间</li>
      </ul>
    </div>
    <ul class="center-ul">
      <li>
        <img src="../../assets/img/menuImg/topOne.png" alt />
        <div class="center-ul-wenzi">
          <p>借款申请总数</p>
          <p>200</p>
        </div>
      </li>
      <li>
        <img src="../../assets/img/menuImg/topTwo.png" alt />
        <div class="center-ul-wenzi">
          <p>放款总额</p>
          <p>¥5000.00</p>
        </div>
      </li>
      <li>
        <img src="../../assets/img/menuImg/topThree.png" alt />
        <div class="center-ul-wenzi">
          <p>还款总额</p>
          <p>¥5000.00</p>
        </div>
      </li>
      <li>
        <img src="../../assets/img/menuImg/topFour.png" alt />
        <div class="center-ul-wenzi">
          <p>近七天放款总额</p>
          <p>¥50000.00</p>
        </div>
      </li>
    </ul>
    <div class="nav nav-one">
      <p class="nav-title">待处理事件</p>
      <div class="nav-one-nav">
        <ul>
          <li>
            <span>待处理贷款申请</span>
            <span>(10)</span>
          </li>
          <li>
            <span>待复审贷款</span>
            <span>(10)</span>
          </li>
          <li>
            <span>代授信贷款</span>
            <span>(10)</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>待处理贷款申请</span>
            <span>(10)</span>
          </li>
          <li>
            <span>待复审贷款</span>
            <span>(10)</span>
          </li>
          <li>
            <span>代授信贷款</span>
            <span>(10)</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav nav-two">
      <p class="nav-title">运营快捷入口</p>
      <div class="nav-two-nav">
        <ul>
          <li>
            <img src="../../assets/img/menuImg/navOne.png" alt />
            <span>贷款申请</span>
          </li>
          <li>
            <img src="../../assets/img/menuImg/navTwo.png" alt />
            <span>还款登记</span>
          </li>
          <li>
            <img src="../../assets/img/menuImg/navThree.png" alt />
            <span>用户管理</span>
          </li>
          <li>
            <img src="../../assets/img/menuImg/navFour.png" alt />
            <span>贷款统计</span>
          </li>
          <li>
            <img src="../../assets/img/menuImg/navFive.png" alt />
            <span>贷后跟踪</span>
          </li>
          <li>
            <img src="../../assets/img/menuImg/navSix.png" alt />
            <span>文章管理</span>
          </li>
          <li>
            <img src="../../assets/img/menuImg/navSeven.png" alt />
            <span>催收管理</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-three">
      <div class="nav nav-three-one">
        <p class="nav-title">用户访问</p>
        <ul>
          <li>
            <span>100</span>
            <span>今日访问</span>
          </li>
          <li>
            <span>400</span>
            <span>昨日访问</span>
          </li>
          <li>
            <span>1800</span>
            <span>本周访问</span>
          </li>
          <li>
            <span>15000</span>
            <span>本月访问</span>
          </li>
        </ul>
      </div>
      <div class="nav nav-three-two">
        <p class="nav-title">用户总览</p>
        <ul>
          <li>
            <span>100</span>
            <span>今日新增</span>
          </li>
          <li>
            <span>200</span>
            <span>昨日新增</span>
          </li>
          <li>
            <span>1000</span>
            <span>本周新增</span>
          </li>
          <li>
            <span>5000</span>
            <span>本月借款人数</span>
          </li>
        </ul>
      </div>
    </div>
    <br />
    <div class="nav nav-four">
      <p class="nav-title">借款统计</p>
    </div>
    <div class="nav nav-five">
      <p class="nav-title">放款统计</p>
    </div>
    <div class="nav nav-six">
      <p class="nav-title">
        操作记录
        <a>更多</a>
      </p>
      <div class="nav-six-nav">
        <ul>
          <li>
            <a>'admin'在[产品工厂]-[贷款产品配置]中进行了添加产品设置</a>
          </li>
          <li>
            <a>'admin'在[产品工厂]-[贷款产品配置]中进行了贷款审核操作</a>
          </li>
        </ul>
      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "../../components/TabBar";
export default {
  name: "Menu",
  components: {
    TabBar
  }
};
</script>

<style scoped>
.scroll {
  overflow: scroll;
  height: 600px;
  background: #f9f9f9;
  padding: 0px 25px;
}
.clear::after {
  display: block;
  content: "";
  clear: both;
}
.top {
  padding: 17px 0px;
}

.top span strong {
  display: inline-block;
  float: left;
  margin-top: 5px;
}
.top ul {
  list-style: none;
  padding: 6px;
  margin: 0px;
  float: right;
  border: 1px solid #e4e4e4;
  background: white;
}
.top ul li {
  display: inline-block;
  border-right: 1px solid black;
  padding: 0px 5px;
  font-size: 14px;
}
.top ul li:last-of-type {
  border-right: none;
}
.center-ul {
  padding: 0px;
  margin-top: 0px;
  list-style: none;
  white-space: nowrap;
}
.center-ul li {
  display: inline-block;
  border: 1px #e4e4e4 solid;
  background: white;
  height: 111px;
  width: 280px;
  margin-right: 27.5px;
  box-sizing: border-box;
  padding: 30px 20px;
  white-space: nowrap;
  overflow: hidden;
}
.center-ul li * {
  vertical-align: text-bottom;
}
.center-ul li img {
  float: left;
}
.center-ul li:last-of-type {
  margin-right: 0px;
}
.center-ul-wenzi {
  float: left;
  margin-left: 20px;
}
.center-ul-wenzi p:nth-of-type(1) {
  margin: 2px;
  color: #999999;
  font-size: 17px;
}
.center-ul-wenzi p:nth-of-type(2) {
  margin: 2px;
  color: #666666;
  font-size: 19px;
}
.nav {
  border: 1px solid #e4e4e4;
  background: white;
  margin-bottom: 20px;
}
.nav .nav-title {
  margin: 0px;
  border-bottom: 1px solid #e4e4e4;
  height: 48px;
  background: #f3f3f3;
  color: #666666;
  box-sizing: border-box;
  padding: 13px 22px;
  font-weight: bold;
  width: 100%;
}
.nav-one {
  width: 1200px;
  height: 222px;
}
/* .nav-one .nav-one-nav {
} */
.nav-one .nav-one-nav ul {
  list-style: none;
  padding: 0px;
  margin: 10px 0px 0px 22px;
  float: left;
  overflow: hidden;
  height: 150px;
}
.nav-one .nav-one-nav ul li {
  border-bottom: 1px solid #f2f2f2;
  width: 333px;
  padding: 13px 15px 12px 20px;
  font-size: 14px;
}
.nav-one .nav-one-nav ul li span:first-of-type {
  color: #666666;
}
.nav-one .nav-one-nav ul li span:last-of-type {
  float: right;
}
.nav-two {
  width: 1200px;
  height: 222px;
}
.nav-two .nav-two-nav ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
  white-space: nowrap;
}
.nav-two .nav-two-nav ul li {
  display: inline-block;
  text-align: center;
  margin: 33px 36.5px;
}
.nav-two .nav-two-nav ul li span {
  margin-top: 16px;
  display: block;
  font-size: 15px;
  color: #666666;
}
.nav-three {
  width: 1200px;
  height: 222px;
}
.nav-three .nav-three-one {
  width: 590px;
  height: 100%;
  float: left;
}
.nav-three .nav-three-two {
  width: 590px;
  height: 100%;
  float: right;
}
.nav-three ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
  white-space: nowrap;
}
.nav-three ul li {
  display: inline-block;
  text-align: center;
  margin: 40px 0px 0px 80px;
}
.nav-three ul li:first-of-type {
  margin: 40px 0px 0px 45px;
}
.nav-three ul li span {
  display: block;
  color: #666666;
}
.nav-three ul li span:nth-of-type(1) {
  font-size: 30px;
}
.nav-three ul li span:nth-of-type(2) {
  margin-top: 10px;
  font-size: 14px;
}
.nav-four {
  width: 1200px;
  height: 400px;
}
.nav-five {
  width: 1200px;
  height: 400px;
}
.nav-six {
  width: 1200px;
  height: 400px;
  margin-bottom: 70px;
}
.nav-six .nav-six-nav ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.nav-six .nav-six-nav ul li {
  color: #666666;
  border-bottom: 1px solid #f2f2f2;
  line-height: 47px;
  padding-left: 55px;
}
.nav-six .nav-six-nav ul li a:hover {
  cursor: pointer;
  text-decoration: underline;
}
.nav-six .nav-title a {
  font-weight: 300;
  cursor: pointer;
  float: right;
  font-size: 14px;
  display: inline-block;
  margin-top: 3px;
}
.nav-six .nav-title a:hover {
  text-decoration: underline;
}
</style>
