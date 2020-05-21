<template>
  <div id="app">
    <div class="left">
      <div class="top">
        <img src="../public/img/xiaotuOne.png" alt />
        <span>
          <strong>xx小额贷款系统</strong>
        </span>
      </div>
      <div class="bottom">
        <div class="center-title">
          <span>全部分类</span>
          <img src="../public/img/xiaotuThree.png" />
        </div>
        <div class="center-nav" id="center-nav">
          <ul>
            <li>
              <span>
                <a href="/homePage">首页面板</a>
              </span>
            </li>
            <li>
              <span>产品工厂</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul>
                <li>
                  <router-link to="/cailiaoguanli">贷款材料管理</router-link>
                </li>
                <li>
                  <router-link to="/chanpinguanli">贷款产品管理</router-link>
                </li>
                <li>
                  <router-link to="/chanpinshenhe">贷款产品审核</router-link>
                </li>
                <li>
                  <router-link to="/hetongmuban">合同模板管理</router-link>
                </li>
                <li>
                  <router-link to="/shouxinguanli">准入授信管理</router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>财务管理</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul>
                <li>
                  <router-link to="/bankAccount">银行账户管理</router-link>
                </li>
                <li>
                  <router-link to="/bankLiu">银行流水录入</router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>系统权限</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul>
                <li>
                  <router-link to="/qxbumen">部门管理</router-link>
                </li>
                <li>
                  <router-link to="/qxjuese">角色管理</router-link>
                </li>
                <li>
                  <router-link to="/qxyuangong">员工管理</router-link>
                </li>
                <li>
                  <router-link to="/qxkefu">客服管理</router-link>
                </li>
                <li>
                  <router-link to="/qxshuju">数据库管理</router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>催收管理</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul>
                <li>
                  <router-link to="/cjilu">催收记录</router-link>
                </li>
                <li>
                  <router-link to="/daoqi">即将到期</router-link>
                </li>
                <li>
                  <router-link to="/yiyuqi">已逾期</router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>贷前管理</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul>
                <li>
                  <router-link to="/weishouli">未受理</router-link>
                </li>
                <li>
                  <router-link to="/shouxinguanlichakan">准入授信管理</router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>贷后管理</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul style="margin:0">
                <li>
                  <router-link to="/daihoujiancha">贷后检查</router-link>
                </li>
                <li>
                  <router-link to="/daikuanjiexiang">贷款结项</router-link>
                </li>
                <li>
                  <router-link to="/lilvbiangeng">利率变更</router-link>
                </li>
                <li>
                  <router-link to="/tiqianhuankuanchakan">提前还款办理</router-link>
                </li>
                <li>
                  <router-link to="/querenhuankuan">还款管理</router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>贷中管理</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul style="margin:0">
                <li>
                  <router-link to="/daihoujiancha">贷后检查</router-link>
                </li>
                <li>
                  <router-link to="/daikuanjiexiang">贷款结项</router-link>
                </li>
                <li>
                  <router-link to="/lilvbiangeng">利率变更</router-link>
                </li>
                <li>
                  <router-link to="/tiqianhuankuan">提前还款办理</router-link>
                </li>
                <li>
                  <router-link to="/querenhuankuan">还款管理</router-link>
                </li>
              </ul>
            </li>
             <li>
              <span>数据分析</span>
              <img src="../public/img/xiaotuSeven.png" />
              <ul style="margin:0">
                <li>
                  <router-link to="/one">贷款统计</router-link>
                </li>
                <li>
                  <router-link to="/two">贷款产品分析</router-link>
                </li>
                <li>
                  <router-link to="/three">放款笔数</router-link>
                </li>
                <li>
                  <router-link to="/four">用户统计</router-link>
                </li>
                <li>
                  <router-link to="/querenhuankuan">还款管理</router-link>
                </li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <span>
          <strong>菜单名称</strong>
        </span>
        <ul>
          <li>
            <img src="../public/img/xiaotuFour.png" alt />
            <span>admin</span>
          </li>
          <li>
            <img src="../public/img/xiaotuFive.png" alt />
          </li>
          <li>
            <img style="padding-top: 10px;" src="../public/img/xiaotuSix.png" alt />
          </li>
        </ul>
      </div>
      <keep-alive> 
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
// $(".center-nav li span").click(function(){
//   var index =$(this).index;
//   $(".center-nav li > ul >").show();
//   $(".center-nav li > ul >").eq().hide();
// });
</script>

<style>
#center-nav ul li a{
  color: #000;
  text-decoration: none;
}
#center-nav ul li a:hover{
  color: #f00;
}
.center-nav li > ul {
  margin: 10px 0px -19px 0px;
  padding: 0px;
  box-sizing: border-box;
}
.center-nav li > ul > li {
  width: 100%;
  /* height: 50px;
  line-height: 50px; */
  border: 1px solid #f2f2f2;
  line-height: 40px;
  list-style: none;
  padding-left: 70px;
  box-sizing: border-box;
  background: url(../public/img/erjitubiao1.png) no-repeat 50px 15px;
}

body {
  margin: 0px;
}
/* #app {
  height: 400px;
} */
.left {
  position: absolute;
  width: 16%;
  left: 0px;
  top: 0px;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.left .top {
  width: 100%;
  background: #f2f2f2;
  padding: 10px 20px;
  height: 52px;
  box-sizing: border-box;
}
.left .top span {
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 3px;
}
.left .top * {
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
}
.left .bottom {
  flex: 1;
  width: 100%;
  height: 500px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}
.left .bottom .center-title {
  width: 100%;
  border-bottom: 1px #e4e4e4 solid;
  padding: 14px 1px 15px 20px;
  font-size: 14px;
}
.left .bottom .center-title * {
  vertical-align: middle;
}
.left .bottom .center-title img {
  float: right;
}
.left .bottom > .center-nav {
  flex: 1;
}
.left .bottom .center-nav > ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.left .bottom .center-nav > ul > li {
  border-bottom: 1px #f2f2f2 solid;
  background: url(../public/img/xiaotuTwo.png) no-repeat 20px 22px;
  padding: 17px 0px 17px 0px;
  cursor: pointer;
  font-size: 14px;
}
.left .bottom .center-nav > ul li > span {
  margin-left: 40px;
}
.left .bottom .center-nav > ul > li li span {
  margin-left: 10px;
}
.left .bottom .center-nav > ul li img {
  float: right;
  margin-top: 7px;
}
.right {
  position: absolute;
  left: 270px;
  top: 0px;
  width: 1088px;
  bottom: 0;
}
.right .top {
  height: 52px;
  box-sizing: border-box;
  padding: 0px 15px;
  border-bottom: 2px #f2f2f2 solid;
}
.right .top * {
  vertical-align: middle;
  white-space: nowrap;
}
.right .top span {
  margin-top: 11px;
  display: inline-block;
}
.right .top ul {
  float: right;
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.right .top ul li {
  display: inline-block;
  padding: 0px 10px 0px 12px;
}
.right .top ul li li a {
  cursor: pointer;
}
.right .top ul li img {
  cursor: pointer;
}
.right .top ul li span {
  color: #999999;
}
.center-title ul li a {
  color: black;
}
</style>
