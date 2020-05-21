<template>
  <div>
    <div class="div_top">
      <img src="./../../assets/img/login.jpg" alt />小额贷款系统
    </div>
    <div class="bj">
      <div class="div div_body">
          <div class="div_title">
              用户登录
          </div>
        <div class="div_input">
          <img src="./../../assets/img/bj_icon01.jpg" alt class="img" />
          <div>
            <input type="text" placeholder="用户名" class="input" />
          </div>
        </div>
        <div class="div_input2">
          <img src="./../../assets/img/bj_icon02.jpg" alt class="img2" />
          <div>
            <input type="password" placeholder="密码" class="input2" />
          </div>
        </div>
        <div class="div_input3">
          <img src="./../../assets/img/dl_icon03.jpg" alt class="img3" />
          <div>
            <input type="text" placeholder="图形验证码" class="input3" />
          </div>
        </div>
        <div>
            <button value="submit" class="btn">登录</button>
            <img src="./../../assets/img/yzm.jpg" alt="" class="btn_img">
        </div>
      </div>
    </div>
    <TabBar class="buttom"></TabBar>
  </div>
</template>

<script>
export default {
    // $(".login-btn").click(function(){
    // $.cookie("pwd_key",$("#password").val());
    // $.cookie("username",$("#username").val());
    // })
};
</script>

<style scoped>
.div_top{
    position: relative;
    left: 130px;
    top: 10px;
}
.div_top img{
    margin-right: 5px;
}
.buttom{
    position: relative;
    top: 520px;
    left: 130px;
    z-index: 99;
    background: rgba(0, 0, 0, 0);
}
.bj {
    width: 100%;
    background: url(./../../assets/img/beijing.jpg) no-repeat center center;
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 100px;
    width: 1366px;
    height: 538px;
}
.div_title{
    text-align: center;
    font-weight: 1000;
    padding: 20px;
    color: black;
    background-color: rgb(225, 225, 225);
}

.div {
   border-width: 0px;
    position: absolute;
    left: 500px;
    top: 50px;
    width: 350px;
    height: 420px;
    font-size: 16px;
    color: #999999;
    line-height: 20px;
    box-shadow: 0px 0px 10px rgb(49, 49, 49);
}
.div_body{
    border-width: 0px;
    position: absolute;
    width: 350px;
    height: 420px;
    background-color: #fff;
    font-size: 16px;
    color: #999999;
}

.div_input {
  border-width: 0px;
  position: absolute;
  left: 25px;
  top: 90px;
  width: 300px;
  height: 50px;
  display: flex;
  font-family: "FontAwesome", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: transparent;
  text-align: right;
  border: 1px #ccc solid;
}
.img {
  border-width: 0px;
  position: absolute;
  left: 10px;
  top: 10px;
  /* width: 300px;
  height: 50px; */
}
.input {
  position: absolute;
  left: 40px;
  top: 3px;
  width: 215px;
  height: 40px;
  padding: 3px 2px 3px 2px;
  font-family: "微软雅黑", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: normal;
  color: #999999;
  vertical-align: none;
  text-align: left;
  text-transform: none;
  background-color: transparent;
  border-color: transparent;
}

.div_input2 {
  border-width: 0px;
    position: absolute;
    left: 25px;
    top: 170px;
    width: 300px;
    height: 50px;
    display: flex;
    font-family: 'FontAwesome', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    color: transparent;
    text-align: right;
    border: 1px #ccc solid;
}
.img2 {
 border-width: 0px;
    position: absolute;
    left: 10px;
    top: 10px;
    /* width: 300px;
    height: 50px; */
}
.input2 {
  border-width: 0px;
    position: absolute;
    left: 45px;
    top: 3px;
    width: 215px;
    height: 40px;
    display: flex;
    font-family: '微软雅黑', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #999999;
    text-align: left;
}


.div_input3 {
 border-width: 0px;
    position: absolute;
    left: 25px;
    top: 250px;
    width: 205px;
    height: 50px;
    display: flex;
    font-family: 'FontAwesome', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    color: transparent;
    text-align: right;
    border: 1px #ccc solid;
}
.img3 {
 border-width: 0px;
    position: absolute;
    left: 10px;
    top: 13px;
    /* width: 205px;
    height: 50px; */
}
.input3 {
 border-width: 0px;
    position: absolute;
    left: 47px;
    top: 3px;
    width: 147px;
    height: 40px;
    display: flex;
    font-family: '微软雅黑', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #999999;
    text-align: left;
}

.btn{
    border-width: 0px;
    position: absolute;
    left: 25px;
    top: 330px;
    width: 300px;
    height: 50px;
    background: inherit;
    background-color: rgba(102, 102, 102, 1);
    border: none;
    border-radius: 3px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: '微软雅黑', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: #FFFFFF;
}
.btn_img{
    border-width: 0px;
    position: absolute;
    left: 240px;
    top: 253px;
    width: 85px;
    height: 44px;
    display: flex;
}
</style>