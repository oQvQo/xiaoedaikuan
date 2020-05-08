<template>
	<div class="qxbumen">
		<!-- 一级 -->
		<div v-if="xian">
			<!-- 一 -->
			<div class="bumentitle">
				<div>
					<img src="../../public/cuishouimage/1.png"><span>首页/权限/客服管理</span>
				</div>
				<div>
					<img src="../../public/qxxitongimage/1.png">刷新
				</div>
			</div>
			<!-- 二 -->
			<ul class="jilu">
				<li>
					<img src="../../public/qxxitongimage/2.png"/>
					<div>
						<div>历史接待次数</div>
						<div>200</div>
					</div>
				</li>
				<li>
					<img src="../../public/qxxitongimage/3.png"/>
					<div>
						<div>历史接待人数</div>
						<div>200</div>
					</div>
				</li>
				<li>
					<img src="../../public/qxxitongimage/4.png"/>
					<div>
						<div>今日接待次数</div>
						<div>200</div>
					</div>
				</li>
				<li>
					<img src="../../public/qxxitongimage/5.png"/>
					<div>
						<div>今日接待人数</div>
						<div>200</div>
					</div>
				</li>
			</ul>
			<!-- 三 -->
			<div class="bumentitle lie">
				<div>
					<img src="../../public/img/xiaotuTwo.png">数据类表
				</div>
				<div>
					添加
				</div>
			</div>
			<!-- 四 -->
			<div class="table">
				<el-table :data="tableData" border style="width: 100%">
				    <el-table-column fixed prop="cuser" label="成员账号" width="150"> </el-table-column>
					
				    <el-table-column prop="cname" label="客服昵称" width="120"> </el-table-column>
					
				    <el-table-column prop="shouji" label="手机号" width="120"> </el-table-column>
					
				    <el-table-column prop="qq" label="QQ号" width="120"> </el-table-column>
					
				    <el-table-column prop="shijian" label="添加时间" width="200"> </el-table-column>
					
				    <el-table-column prop="denglu" label="最后登录"  width="200"> </el-table-column>
					
				    <el-table-column prop="qiyong" label="是否启用"  width="120">
						<el-switch v-model="value" active-color="#000" inactive-color="#666"> </el-switch>
					</el-table-column>
					
				    <el-table-column fixed="right" label="操作" width="145">
				      <template slot-scope="scope">
				        <el-button type="text" size="small" @click="ckjilu">查看记录</el-button>
				        <el-button type="text" size="small" @click="update">编辑</el-button>
				        <el-button type="text" size="small">删除</el-button>
				      </template>
				    </el-table-column>
				  </el-table>
			</div>
			<!-- 五 -->
			<div class="block">
				<div>共10页/100条数据</div>
			    <div><el-pagination background layout="prev, pager, next" :total="1000"></el-pagination></div>
			</div>

		</div>
		
		<div class="ckjilu" v-if="chakan">
			<div class="chakantitle">当前客服:小熊</div>
			<table cellpadding="0" cellspacing="0">
				<tr>
					<td>历史接待次数</td>
					<td>历史接待人数</td>
					<td>今日接待次数</td>
					<td>今日接待人数</td>
				</tr>
				<tr>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
				</tr>
			</table>
			<div class="tab">
				<el-tabs type="border-card">
				  <el-tab-pane label="今天">
					  <ul class="jintian">
						  <li>
							  <ul>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
								  <li>
									  <img src="../../public/qxxitongimage/6.png">
									  <div>
										  <div>小熊</div>
										  <div>开始时间:2018-08-10 11:40:03  结束时间:2018-08-10 11:50:55</div>
									  </div>
								  </li>
							  </ul>
							  <div class="di">
								  <span><img src="../../public/qxxitongimage/7.png"></span>
								  <span><img src="../../public/qxxitongimage/9.png"></span>
								  <span><img src="../../public/qxxitongimage/10.png"></span>
								  <span><img src="../../public/qxxitongimage/8.png"></span>
							  </div>
						  </li>
						  <li>
							  <div class="yuanjiao">2018-08-10 10:47:42</div>
							  <!-- 信息 -->
							  <div class="xinxi">
								  <div class="huise">小优 2018-08-10 10:47:42</div>
								  <div>您好!小熊很高兴为你服务~活动期间咨询人数较多，请您耐心等待</div>
							  </div>
							  <div class="xinxi">
								  <div class="huise">小优 2018-08-10 10:47:42</div>
								  <div>您好!请问有什么可以帮到你。</div>
							  </div>
							  <div class="xinxi">
								  <div class="huise">大梨 2018-08-10 10:47:42</div>
								  <div>什么时候可以发货？</div>
							  </div>
							  <div class="xinxi">
								  <div class="huise">小优 2018-08-10 10:47:42</div>
								  <div>您好!麻烦将你的订单编号提供给小优，小优帮你核实一下。</div>
							  </div>
							  <div class="xinxi">
								  <div class="huise">小优 2018-08-10 10:47:42</div>
								  <div>您好!小熊很高兴为你服务~活动期间咨询人数较多，请您耐心等待</div>
							  </div>
							  <div class="xinxi">
								  <div class="huise">小优 2018-08-10 10:47:42</div>
								  <div>您好!请问有什么可以帮到你。</div>
							  </div>
							  <div class="xinxi">
								  <div class="huise">大梨 2018-08-10 10:47:42</div>
								  <div>什么时候可以发货？</div>
							  </div>
							  <div class="xinxi">
								  <div class="huise">小优 2018-08-10 10:47:42</div>
								  <div>您好!麻烦将你的订单编号提供给小优，小优帮你核实一下。</div>
							  </div>
							  
							  <div class="di daochu">
								<div>
									  <img src="../../public/cuishouimage/2.png">导出
								</div>
								<div>
									<el-time-select v-model="value1" 
									:picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
									  placeholder="选择时间">
									</el-time-select>
								</div>
								<div>
									<el-input v-model="input" placeholder="请输入内容"></el-input>
								</div>
								<div>
									<span><img src="../../public/qxxitongimage/7.png"></span>
									<span><img src="../../public/qxxitongimage/9.png"></span>
									<span><img src="../../public/qxxitongimage/10.png"></span>
									<span><img src="../../public/qxxitongimage/8.png"></span>
								</div>
							  </div>
						  </li>
					  </ul>
				  </el-tab-pane>
				  <el-tab-pane label="最近一周">最近一周</el-tab-pane>
				  <el-tab-pane label="最近一个月">最近一个月</el-tab-pane>
				  <el-tab-pane label="全部">全部</el-tab-pane>
				</el-tabs>
			</div>
		</div>
		
		<!-- 二级 -->
		<div class="bianji" v-if="erji">
			<div class="bjtitle">
				<div>添加服务</div>
				<div @click="guanbi">X</div>
			</div>
			
			<div class="bjneiro">
				<table cellpadding="5" cellspacing="5">
					<tr>
						<td><span style="color: red;">*</span>客服名称:</td>
						<td><el-input v-model="kname"></el-input></td>
					</tr>
					<tr>
						<td>QQ号:</td>
						<td><el-input v-model="qq"></el-input></td>
					</tr>
					<tr>
						<td><span style="color: red;">*</span>成员账号:</td>
						<td>
							<select>
								<option>选择部门</option>
								<option>风控部</option>
								<option>贷后部</option>
							</select>
							<select>
								<option>选择成员</option>
								<option>小红</option>
								<option>小明</option>
								<option>小王</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>备注信息:</td>
						<td>
							<el-input type="textarea" :rows="3" placeholder="请输入内容"  v-model="textarea">
							</el-input>
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
	
		
		<div class="bottom">
			Copyright &copy;2018深圳市xxxx金融科技有限公司，All Right Reserved.
			<span @click="hui">d</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"qxkefu",
		data(){
			return{
				xian:true,
				erji:false,
				value:true,
				value1:'',
				input:'',
				chakan:false,
				kname:'',
				qq:'',
				textarea:'',
				tableData: [
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					},
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					},
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					},
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					},
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					},
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					},
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					},
					{
					  cuser: 'user',
					  cname: '小熊',
					  shouji:'18888888888',
					  qq: '88888888',
					  shijian: '2018-08-05 15:47:44',
					  denglu: '2018-08-05 15:47:44',
					  qiyong: true
					}
				]
			}
		},
		methods:{
			update(){
				this.erji = true
			},
			guanbi(){
				this.erji = false
			},
			ckjilu(){
				this.xian = false
				this.chakan = true
			},
			hui(){
				this.xian = true
				this.chakan = false
			}
		}
	}
</script>

<style scoped>
	ul{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	.qxbumen{
		width: 100%;
		height: 606px;
		overflow: scroll;
	}
	.cell{
		text-align: center;
	}
	.bumentitle{
		width: 100%;
		height: 60px;
		padding: 0 20px;
		background:#f9f9f9;
		padding-top: 1%;
		box-sizing: border-box;
	}
	.bumentitle>div:first-child{
		float: left;
	}
	.bumentitle>div:last-child{
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
	.jilu{
		width: 100%;
		height: 100px;
		background: #f9f9f9;
	}
	.jilu>li{
		float: left;
		width: 23%;
		height: 90px;
		cursor: pointer;
		padding: 1.5% 5%;
		margin-right: 2%;
		background: white;
		box-sizing: border-box;
		border: 1px solid #ECECEC;
	}
	.jilu>li:last-child{
		margin-right: 0;		
	}
	.jilu>li>div{
		display: inline-block;
		margin-left: 5%;
	}
	.lie{
		height: 50px;
		background: #f3f3f3;
	}
	.block{
		margin: 2% 0px;
		text-align: right;
	}
	.block>div{
		display: inline-block;
	}
	.bottom{
		width: 100%;
		height: 100px;
		line-height: 100px;
		color: #666666;
		text-align: center;
		background: #f9fafc;
		border-top: 1px solid #ECECEC;
	}
	
	/* 编辑 */
	.bianji{
		position: fixed;
		top: 20%;
		left: 30%;
		width: 45%;
		z-index: 5;
		height: 430px;
		background: white;
		box-shadow: #666 0px 0px 20px;
	}
	.bjtitle{
		width: 100%;
		height: 60px;
		padding: 0 20px;
		line-height: 60px;
		background: #f2f2f2;
		box-sizing: border-box;
	}
	.bjtitle>div{
		color: #666;
		font-size: 20px;
		font-weight: bold;
	}
	.bjtitle>div:first-child{
		float: left;
	}
	.bjtitle>div:last-child{
		float: right;
		cursor: pointer;
	}
	.bjneiro{
		width: 100%;
		height: 300px;
		padding: 0 15%;
		box-sizing: border-box;
		border-bottom: 1px solid #999;
	}
	.bjneiro tr>td:first-child{
		text-align: right;
	}
	.bjneiro tr>td:last-child{
		width: 80%;
	}
	.bjneiro select{
		width: 150px;
		height: 34px;
		color: #7f7e7e;
		margin-right: 1%;
		border-radius: 2px;
		display: inline-block;
		border: 1px solid #e4e4e4;
	}
	.bjbottom{
		float: right;
		margin-top: 2%;
		margin-right: 10%;
	}
	
	
	/* 查看记录 */
	.ckjilu{
		width: 100%;
		background: white;
	}
	.chakantitle{
		width: 100%;
		height: 40px;
		color: #666;
		font-size: 14px;
		text-indent: 20px;
		line-height: 40px;
		background: #f3f3f3;
	}
	.ckjilu>table{
		width: 95%;
		margin: 20px auto;
	}
	.ckjilu>table>tr:first-child>td{
		background: #f9fafc;
		font-weight: bold;
	}
	.ckjilu>table>tr>td{
		width: 20%;
		height: 40px;
		color: #666;
		text-align: center;
		line-height: 40px;
		background: white;
		border: 1px solid #e4e4e4;
	}
	.tab{
		width: 95%;
		height: 650px;
		margin: 40px auto;
	}
	.jintian>li{
		width: 49.5%;
		height: 600px;
		float: left;
		border: 1px solid #ECECEC;
	}
	.jintian>li:first-child li{
		padding: 5px;
		height: 70px;
		cursor: pointer;
		border-bottom: 1px solid #ECECEC;
		box-sizing: border-box;
	}
	.jintian>li:first-child li:hover{
		background: #ECECEC;
	}
	.jintian>li:first-child li>img{
		float: left;
		margin-left: 3%;
		margin-right: 3%;
	}
	.jintian>li:first-child li>div{
		font-size: 13px;
		float: left;
		margin-top: 5px;
	}
	.jintian>li:first-child li>div>div:last-child{
		color: #666;
		margin-top: 10px;
	}
	
	.yuanjiao{
		width: 30%;
		height: 25px;
		font-size: 13px;
		line-height: 25px;
		text-align: center;
		background: #f2f2f2;
		margin: 20px auto;
		color: #9999a5;
		border-radius: 15px;
	}
	.xinxi{
		font-size: 12px;
		margin: 20px 0px 0px 50px;
	}
	.huise{
		color: #999;
		margin-bottom: 3px;
	}
	.di{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: right;
		background: #f9fafc;
	}
	.di>span{
		margin-right: 10px;
		display: inline-block;
	}
	.daochu span{
		margin-right: 10px;
		display: inline-block;
	}
	.daochu{
		text-align: left;
		margin-top: 13%;
		border-top: 1px solid #ECECEC;
	}
	.daochu>div{
		display: inline-block;
	}
	.daochu>div:first-child{
		width: 60px;
		height: 30px;
		color: #999;
		padding: 0 5px;
		font-size: 14px;
		line-height: 30px;
		background: white;
		border-radius: 5px;
		box-sizing: border-box;
		border: 1px solid #ECECEC;
	}
</style>
