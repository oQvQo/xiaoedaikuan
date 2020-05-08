<template>
	<div class="cuishoujilu sgun">
		<div v-if="ck">
			<div class="top">
				<img src="../../public/cuishouimage/1.png">
				<span>首页/催收管理/即将到期列表</span>
				
			</div>
			<div class="sousuo">
				<input type="text" placeholder="姓名/手机号">
				<input type="text" placeholder="借款编号">
				<input type="text" placeholder="合同号">
				<div class="chaxun">
					<el-row>
						<el-button type="info" size="small">查询</el-button>
					</el-row>
				</div>
			</div>
			<div class="biaoge">
				<div>
					<span>数据列表</span>
					<button>导出</button>
				</div>
				<table cellpadding="0" cellspacing="0">
					<tr>
						<td>
							<input type="checkbox" disabled>
						</td>
						<td>借款编号</td>
						<td>姓名</td>
						<td>合同号</td>
						<td>当前期数</td>
						<td>应收本金</td>
						<td>应收利息</td>
						<td>借款管理费</td>
						<td>货款类型</td>
						<td class="xiangdui">
							本期还款日
							<div class="jiedui">
								1
							</div>
						</td>
						<td>提醒次数</td>
						<td>状态</td>
						<td>操作</td>
					</tr>
					<tr v-for="item in kehu" :key="item.id">
						<td><input type="checkbox"></td>
						<td>{{item.jieid}}</td>
						<td>{{item.name}}</td>
						<td>{{item.hetong}}</td>
						<td>{{item.qishu}}</td>
						<td>{{item.yingbenjin}}</td>
						<td>{{item.yinglixi}}</td>
						<td>{{item.guanlifei}}</td>
						<td>{{item.leixing}}</td>
						<td>
							<div>{{item.huankuanri}}</div>
							<div class="chense">{{item.tishi}}</div>
						</td>
						<td>{{item.cishu}}</td>
						<td>{{item.zhuangtai}}</td>
						<td><a @click="chakan">查看</a><a @click="daoqitixing">到期提醒</a></td>
					</tr>
				</table>
				<div class="fenye">
					<div>
						<input type="checkbox">全选
					</div>
					<div class="fenyeleixing">
						<span>共10页/100条数据</span>
						<div>
							左
						</div>
						<div class="hei">1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
						<div>...</div>
						<div>50</div>
						<div>
							右
						</div>
						<span class="huise">跳至</span>
						<div>1</div>
						<span class="huise">页</span>
					</div>
				</div>
		</div>
		</div>
		<!-- 到期查看 -->
		<div v-else class="huibei">
			<div class="kehu">
				(客户【张某某】还款信息)
			</div>
			<div class="biaoge">
				<table cellpadding="0" cellspacing="0">
					<tr>
						<td>期限</td>
						<td>应还款日</td>
						<td>实际还款日</td>
						<td>本金</td>
						<td>利息</td>
						<td>管理费</td>
						<td>还款总额</td>
						<td>减免金额</td>
						<td>逾期天数</td>
						<td>状态</td>
						<td>提交人</td>
						<td>提交时间</td>
						<td>还款备注</td>
						<td>审核意见</td>
						<td>审核人</td>
						<td>操作</td>
					</tr>
					<tr v-for="zhi in ckxinxi" :key="zhi.qishu">
						<td>{{zhi.qixian}}</td>
						<td>
							<div>{{zhi.yinghuan}}</div>
							<div style="color: red;">{{zhi.daoqi}}</div>
						</td>
						<td>{{zhi.shijihuankuan}}</td>
						<td>{{zhi.benjin}}</td>
						<td>{{zhi.lixi}}</td>
						<td>{{zhi.guanlifei}}</td>
						<td>{{zhi.zonge}}</td>
						<td>{{zhi.jianmian}}</td>
						<td>{{zhi.yuqits}}</td>
						<td>{{zhi.zhuantai}}</td>
						<td>{{zhi.tijiaoren}}</td>
						<td>{{zhi.shijian}}</td>
						<td>{{zhi.beizhu}}</td>
						<td>{{zhi.yijian}}</td>
						<td>{{zhi.shenheren}}</td>
						<td></td>
					</tr>
				</table>
			</div>
			<div class="xinxi">
				<table cellspacing="0">
					<tr class="cuhui">
						<td colspan="4">贷款信息</td>
					</tr>
					<tr>
						<td class="juzhong">客户姓名:</td>
						<td>郭某某 <a href="#" class="kehuziliao">客户资料档案</a></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td class="juzhong">货款性质:</td>
						<td>
							<select>
								<option>个人</option>
							</select>
						</td>
						<td class="juzhong">贷款类型:</td>
						<td>
							<select>
								<option>信用</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="juzhong">货款用途:</td>
						<td colspan="3">
							<el-checkbox>日常生活消费</el-checkbox>
						</td>
					</tr>
					<tr>
						<td class="juzhong">还款方式:</td>
						<td>
							<select>
								<option>等额本息</option>
							</select>
						</td>
						<td class="juzhong">借款期限</td>
						<td>
							<select>
								<option>48个月</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="juzhong">申请金额</td>
						<td><input type="text" value="500000">元</td>
						<td class="juzhong">审批金额</td>
						<td><input type="text" value="480000">元</td>
					</tr>
					<tr>
						<td class="juzhong">合同金额</td>
						<td><input type="text" value="480000">元</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr class="cuhui">
						<td colspan="4">费用信息</td>
					</tr>
					<tr>
						<td class="juzhong">综合利率:</td>
						<td><input type="text" value="15%"></td>
						<td class="juzhong">服务费:</td>
						<td><input type="text" value="0.0(0.00元)"></td>
					</tr>
					<tr>
						<td class="juzhong">管理费:</td>
						<td><input type="text" value="0.0%(每月0.00元)"></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr class="cuhui">
						<td colspan="4">银行信息</td>
					</tr>
					<tr>
						<td class="juzhong">开户行:</td>
						<td>
							<select>
								<option>中国银行</option>
							</select>
						</td>
						<td class="juzhong">户名:</td>
						<td><input type="text" value="张茉茉"></td>
					</tr>
					<tr>
						<td class="juzhong">开户地:</td>
						<td>
							<select>
								<option>广东省 深圳市 福田区</option>
							</select>
						</td>
						<td class="juzhong">支行名称</td>
						<td><input type="text" value="开户行支行名称"></td>
					</tr>
					<tr>
						<td class="juzhong">银行账号:</td>
						<td><input type="text" value="6225 8888 8888 8888"></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</div>
			<div class="tixing">
				<el-row>
				  <el-button type="info" @click="chakan">到期提醒</el-button>
				</el-row>
			</div>
		</div>
		<!-- 尾部 -->
		<div class="bottom">
			Copyright &copy;2018深圳市xxxx金融科技有限公司，All Right Reserved.
		</div>
		<!-- 到期提醒 -->
		<div class="daoqitixingdiv" v-show="erjixianshi">
			<div class="daoqitixingdivtop">
				<h2>即将到期提醒(客户 张某某)</h2>
				<h2 @click="guanbi">X</h2>
			</div>
			<div class="daoqitixingdivcontent">
				<table cellpadding="5" cellspacing="5">
					<tr>
						<td>通知方式：</td>
						<td>
							<el-checkbox>系统推送</el-checkbox>
						</td>
						<td>
							<el-checkbox>短信</el-checkbox>
						</td>
						<td>
							<el-checkbox>邮件</el-checkbox>
						</td>
					</tr>
					<tr>
						<td>使用模板：</td>
						<td colspan="3">
							<el-input placeholder="模板:即将到期提醒模板"></el-input>
						</td>
					</tr>
					<tr>
						<td>提醒周期：</td>
						<td><el-radio v-model="radio" label="1">一次</el-radio></td>
						<td colspan="2"><el-radio v-model="radio" label="2">到期前每天一次</el-radio></td>
					</tr>
					<tr>
						<td>发送时间：</td>
						<td><el-radio v-model="fasong" label="1">立即发送</el-radio></td>
					</tr>
					<tr>
						<td></td>
						<td><el-radio v-model="dingshi" label="1">定时发送</el-radio></td>
						<td colspan="2">
							<el-time-select
							  v-model="value"
							  :picker-options="{
							    start: '08:30',
							    step: '00:15',
							    end: '18:30'
							  }"
							  placeholder="选择时间">
							</el-time-select>
						</td>
					</tr>
				</table>
				<ul>
					<li>
						<el-row>
						  <el-button plain @click="guanbi">取消</el-button>
						</el-row>
					</li>
					<li>
						<el-row>
						  <el-button type="info">确定</el-button>
						</el-row>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'daoqi',
		data(){
			return{
				ck:true,
				radio: 0,
				fasong:0,
				dingshi:0,
				value: '',
				erjixianshi:false,
				kehu:[
					{
						id:1,
						jieid:'100001',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:2,
						jieid:'100002',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'48000',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:3,
						jieid:'100003',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:4,
						jieid:'100004',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:5,
						jieid:'100005',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					},
					{
						id:6,
						jieid:'100006',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yingbenjin:'0.00',
						yinglixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-12-15',
						tishi:'即将到期',
						cishu:'1',
						zhuangtai:'还款中'
					}
				],
				ckxinxi:[
					{
						qixian:1,
						yinghuan:'2018-01-15',
						daoqi:'',
						shijihuankuan:'2018-01-15',
						benjin:'1000.00',
						lixi:'152.00',
						guanlifei:'0.00',
						zonge:'1152.00',
						jianmian:'0.00',
						yuqits:'0',
						zhuantai:'已还款',
						tijiaoren:'操作人员A',
						shijian:'2018-01-15',
						beizhu:'客户已转账',
						yijian:'已核实',
						shenheren:'操作人员B'
					},
					{
						qixian:2,
						yinghuan:'2018-02-15',
						daoqi:'',
						shijihuankuan:'2018-02-15',
						benjin:'1000.00',
						lixi:'152.00',
						guanlifei:'0.00',
						zonge:'1152.00',
						jianmian:'0.00',
						yuqits:'0',
						zhuantai:'已还款',
						tijiaoren:'系统',
						shijian:'2018-02-15',
						beizhu:'银行代扣',
						yijian:'',
						shenheren:''
					},
					{
						qixian:3,
						yinghuan:'2018-03-15',
						daoqi:'即将到期',
						shijihuankuan:'',
						benjin:'1000.00',
						lixi:'152.00',
						guanlifei:'0.00',
						zonge:'1152.00',
						jianmian:'-',
						yuqits:'0',
						zhuantai:'未还款',
						tijiaoren:'-',
						shijian:'-',
						beizhu:'',
						yijian:'',
						shenheren:''
					}
				]
			}
		},
		methods:{
			daoqitixing(){
				this.erjixianshi= true
			},
			guanbi(){
				this.erjixianshi= false
			},
			chakan(){
				this.ck = !this.ck
			}
		}
	}
</script>

<style scoped>
	ul{
		padding: 0;
		margin: 0;
	}
	li{
		list-style: none;
	}
	.cuishoujilu{
		width: 100%;
		height: 1000px;
		background: #f9f9f9;		
	}
	.top{
		width: 100%;
		height: 50px;
		padding-left: 1%;
		line-height: 50px;
		box-sizing: border-box;
	}
	.top>img{
		vertical-align: middle;
		margin-right: 2px;
	}
	.top>span{
		font-size: 12px;
	}
	.sousuo{
		width: 95%;
		height: 60px;
		margin: 0 auto;
		padding-left: 1%;
		line-height: 60px;
		background: white;
		box-sizing: border-box;
	}
	.sousuo>span{
		margin-right: 10px;
	}
	.sousuo>select{
		width: 150px;
		height: 34px;
		color: #7f7e7e;
		margin-right: 1%;
		border-radius: 2px;
		border: 1px solid #e4e4e4;
	}
	.sousuo>input{
		margin-right: 1%;
		width: 150px;
		color: #7f7e7e;
		padding-left: 1%;
		box-sizing: border-box;
		border: 1px solid #e4e4e4;
		line-height: 30px;
		border-radius: 2px;
	}
	.chaxun{
		display: inline-block;
	}
	.biaoge{
		width: 95%;
		background: #fff;
		margin: 20px auto;
	}
	.biaoge>div{
		width: 100%;
		height: 50px;
		padding: 0 1%;
		box-sizing: border-box;
		line-height: 50px;
		background: #f3f3f3;
	}
	.biaoge>div>span{
		display: inline-block;
		font-size: 14px;
		float: left;
	}
	.biaoge>div>button{
		float: right;
		color: #666;
		border: 1px solid #cccccc;
		padding-left: 25px;
		box-sizing: border-box;
		margin-top: 1%;
		background: #fff url(../../public/cuishouimage/2.png) no-repeat 4px 2px;
	}
	.biaoge>table>tr:nth-of-type(1)>td:nth-of-type(4){
		color: #666;
	}
	.biaoge>table>tr>td:nth-of-type(4){
		color: #008CD5;
	}
	.biaoge>table>tr:nth-of-type(1)>td{
		font-weight: bold;
		background: #f3f3f3;
		height: 50px;
	}
	.biaoge>table>tr>td:first-child{
		width: 0.5%;
	}
	.biaoge>table>tr>td:last-child{
		width: 5%;
	}
	.biaoge>table>tr>td{
		width: 3%;
		height: 60px;
		color: #666;
		font-size: 13px;
		text-align: center;
		border: 1px solid #e4e4e4;	
		background: #fff;
		padding: 0 2px;
		box-sizing: border-box;
	}
	.biaoge>table>tr>td>a{
		color: #000000;
		display: inline-block;
		margin: 0 2%;
		cursor: pointer;
		text-decoration: none;
	}
	.chense{
		color: #ff5500;
		margin-top: 2%;
	}
	.fenye{
		width: 95%;
		height: 50px;
		line-height: 50px;
		margin: 0 auto;
		border: 1px solid #e4e4e4;
		background: #fff;
		margin-top: 20%;
		margin-bottom: 10px;
	}
	.fenye>div:nth-of-type(1){
		float: left;
	}
	.fenyeleixing{
		width: 60%;
		float: right;
	}
	.fenyeleixing>div{
		width: 33px;
		height: 23px;
		float: left;
		cursor: pointer;
		margin-top: 2%;
		margin-right: 1%;
		line-height: 23px;
		text-align: center;
		border: 1px solid #d7d7d7;
		border-radius: 3px;
	}
	.fenyeleixing>span{
		float: left;
		margin-right: 2%;
		display: inline-block;
	}
	.hei{
		color: #fff;
		border: 0;
		background: #333;
	}
	.bottom{
		margin-top: 8%;
		color: #666666;
		text-align: center;
	}
	.huise{
		color: #999;
	}
	.xiangdui{
		position: relative;
	}
	.jiedui{
		position: absolute;
		top: 0;
		right: 5px;
		width: 15px;
		height: 15px;
		font-size: 12px;
		line-height: 15px;
		font-weight: bold;
		background: #ffff00;
	}
	.daoqitixingdiv{
		width: 50%;
		height: 400px;
		background: #fff;
		position: fixed;
		top: 20%;
		left: 20%;
	}
	.daoqitixingdivtop{
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding: 0 10px;
		background: #ECECEC;
		box-sizing: border-box;
	}
	.daoqitixingdivtop>h2:nth-of-type(1){
		float: left;
		color: #666;
	}	
	.daoqitixingdivtop>h2:nth-of-type(2){
		float: right;
		color: #999;
		cursor: pointer;
	}	
	.daoqitixingdivtop>h2{
		padding: 0;
		margin: 0;
	}
	.daoqitixingdivcontent{
		width: 100%;
		height: 250px;
		border-bottom: 1px solid #999;
	}
	.daoqitixingdivcontent>table{
		margin-top: 5%;
		margin-left: 20%;
	}
	.daoqitixingdivcontent>ul{
		margin-top: 5%;
		margin-right: 5%;
		float: right;
	}
	.daoqitixingdivcontent>ul>li{
		float: left;
		margin: 0 5px;
	}
	.sgun{
		overflow: scroll;
		height: 606px;
	}
	
	
	/* 到期查看 */
	.huibei{
		width: 95%;
		margin: 0 auto;
		padding-bottom: 5%;
		background: white;
		box-sizing: border-box;
	}
	.kehu{
		padding-top: 2%;
		box-sizing: border-box;
		text-align: center;
	}
	.kehuziliao{
		color: #666;
		float: right;
		margin-right: 30%;
		display: inline-block;
	}
	.xinxi{
		width: 80%;
		margin: 0 auto;
	}
	.xinxi>table{
		width: 100%;
		border: 1px solid #e4e4e4;
	}
	.cuhui{
		color: #666;
		font-weight: bold;
		background: #f2f2f2;
	}
	.juzhong{
		width: 15%;
		text-align: center;		
	}
	.xinxi>table>tr>td{
		height: 45px;
		padding-left: 1%;
		box-sizing: border-box;
		border: 1px solid #e4e4e4;
	}
	.xinxi select{
		width: 200px;
		height: 30px;
		color: #7f7e7e;
		margin-right: 1%;
		border-radius: 2px;
		border: 1px solid #e4e4e4;
	}
	
	.xinxi input{
		margin-right: 1%;
		width: 200px;
		color: #7f7e7e;
		padding-left: 1%;
		box-sizing: border-box;
		border: 1px solid #e4e4e4;
		line-height: 30px;
		border-radius: 2px;
	}
	.tixing{
		width: 95%;
		margin-top: 5%;
		text-align: center;
	}
</style>