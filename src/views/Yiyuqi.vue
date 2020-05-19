<!-- 已逾期 -->
<template>
	<div class="cuishoujilu sgun">
		<div v-if="ck==1">
			<div class="top">
				<img src="../../public/cuishouimage/1.png">
				<span>首页/催收管理/已逾期列表</span>
				
			</div>
			<div class="sousuo">
				<input type="text" placeholder="姓名/手机号">
				<input type="text" placeholder="借款编号">
				<input type="text" placeholder="合同号">
				<select>
					<option>风险分类</option>
					<option>正常类</option>
					<option>关注类</option>
					<option>次级类</option>
					<option>可疑类</option>
					<option>损失类</option>
				</select>
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
						<td>逾期本金</td>
						<td>逾期利息</td>
						<td>借款管理费</td>
						<td>货款类型</td>
						<td class="xiangdui">
							本期还款日
							<div class="jiedui">
								1
							</div>
						</td>
						<td>逾期天数</td>
						<td class="xiangdui">
							风险分类
							<div class="jiedui">
								2
							</div>
						</td>
						<td>催收次数</td>
						<td>状态</td>
						<td>操作</td>
					</tr>
					<tr v-for="item in kehu" :key="item.id">
						<td><input type="checkbox"></td>
						<td>{{item.jieid}}</td>
						<td>{{item.name}}</td>
						<td>{{item.hetong}}</td>
						<td>{{item.qishu}}</td>
						<td>{{item.yubenjin}}</td>
						<td>{{item.yulixi}}</td>
						<td>{{item.guanlifei}}</td>
						<td>{{item.leixing}}</td>
						<td>
							<div>{{item.huankuanri}}</div>
							<div style="color: red;">{{item.yiyuqi}}</div>
						</td>
						<td>{{item.tianshi}}</td>
						<td>{{item.fenlei}}</td>
						<td>{{item.cishu}}</td>
						<td>{{item.zhuantai}}</td>
						<td><a @click="chakan">查看</a><a @click="banli">催收办理</a></td>
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
		<!-- 逾期查看 -->
		<div v-else-if="ck==2" class="huibei">
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
						<td>{{zhi.yinghuan}}</td>
						<td>{{zhi.shijihuankuan}}</td>
						<td style="color: #666;">{{zhi.benjin}}</td>
						<td>{{zhi.lixi}}</td>
						<td>{{zhi.guanlifei}}</td>
						<td>{{zhi.zonge}}</td>
						<td>{{zhi.jianmian}}</td>
						<td>{{zhi.yuqits}}</td>
						
						<template v-if="zhi.zhuantai==='已逾期'">
							<td style="color: red;">{{zhi.zhuantai}}</td>
						</template>
						<template v-else>
							<td>{{zhi.zhuantai}}</td>
						</template>
						
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
				  <el-button type="info" @click="fanhui">返回</el-button>
				</el-row>
			</div>
		</div>
		
		<!-- 催收办理 -->
		<div v-else class="huibei banli">
			<div class="kehu">
				(客户【张某某】还款信息)
			</div>
			<div class="xinxi">
				<table cellspacing="0">
					<tr class="cuhui">
						<td colspan="4">贷款信息</td>
					</tr>
					<tr>
						<td class="juzhong">客户:</td>
						<td><input type="text" value="张某某"></td>
						<td class="juzhong">货款类型:</td>
						<td>
							<select>
								<option>个人信用</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="juzhong">借款编号:</td>
						<td>100001</td>
						<td class="juzhong">合同号:</td>
						<td>2018011510000152001</td>
					</tr>
					<tr>
						<td class="juzhong">当前逾期期数:</td>
						<td>
							<input type="text" value="1/12">
							<a href="">查看还款信息》》</a>
						</td>
						<td class="juzhong">逾期本金:</td>
						<td><input type="text" value="1585.00">元</td>
					</tr>
					<tr>
						<td class="juzhong">逾期利息:</td>
						<td><input type="text" value="166.00">元</td>
						<td class="juzhong">借款管理费:</td>
						<td><input type="text" value="0.00">元</td>
					</tr>
					<tr>
						<td class="juzhong">本期还款日:</td>
						<td><input type="text" value="2018-12-18"></td>
						<td class="juzhong">逾期天数:</td>
						<td><input type="text" value="5">元</td>
					</tr>
					<tr>
						<td class="juzhong">逾期风险等级:</td>
						<td>正常类</td>
						<td class="juzhong">催收次数:</td>
						<td>1</td>
					</tr>
				</table>
			</div>
			<!-- 催收处理 -->
			<div class="chuli">
				<div class="cuititle">
					催收处理
				</div>
				<div class="chuneiro">
					<table cellpadding="5">
						<tr>
							<td><span style="color: red;">*</span>催收方式：</td>
							<td>
								<el-row>
								  <el-button type="info" plain>预催收</el-button>
								  <el-button type="info" plain>电话催收</el-button>
								  <el-button type="info" plain>上门/外访</el-button>
								  <el-button type="info" plain>诉讼</el-button>
								</el-row>
							</td>
						</tr>
						<tr>
							<td><span style="color: red;">*</span>还款提醒：</td>
							<td>
								<table cellpadding="5" cellspacing="10">
									<tr>
										<td>通知方式:</td>
										<td colspan="2">
											<el-checkbox>系统推送</el-checkbox>
											<el-checkbox>短信</el-checkbox>
											<el-checkbox>邮件</el-checkbox>
										</td>
									</tr>
									<tr>
										<td>使用模板:</td>
										<td colspan="2"><el-input placeholder="请输入内容"></el-input></td>
									</tr>
									<tr>
										<td>提醒周期:</td>
										<td>
											<el-radio v-model="radio" label="1">一次</el-radio>
											<el-radio v-model="radio" label="2">到期前每天一次</el-radio>
										</td>
									</tr>
									<tr>
										<td>发送时间:</td>
										<td colspan="2"><el-radio v-model="radio1" label="1">立即发送</el-radio></td>
									</tr>
									<tr>
										<td></td>
										<td colspan="2">
											<el-radio v-model="dingshi" label="1">定时发送</el-radio>
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
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="tixing">
				<el-row>
				  <el-button type="info" @click="fanhui">返回</el-button>
				</el-row>
			</div>
		</div>
		<div class="bottom">
			Copyright &copy;2018深圳市xxxx金融科技有限公司，All Right Reserved.
		</div>
	</div>
</template>

<script>
	export default{
		name:'yiyuqi',
		data(){
			return{
				panduan:false,
				ck:1,
				radio: 0,
				radio1: 0,
				fasong:0,
				dingshi:0,
				value: '',
				kehu:[
					{
						id:1,
						jieid:'100001',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yubenjin:'0.00',
						yulixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-01-15',
						yiyuqi:'已逾期',
						tianshi:'3',
						fenlei:'正常类',
						cishu:'1',
						zhuantai:'还款中'
					},
					{
						id:2,
						jieid:'100002',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yubenjin:'0.00',
						yulixi:'48000',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-01-15',
						yiyuqi:'已逾期',
						tianshi:'31',
						fenlei:'关注类',
						cishu:'1',
						zhuantai:'还款中'
					},
					{
						id:3,
						jieid:'100003',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yubenjin:'0.00',
						yulixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-01-15',
						yiyuqi:'已逾期',
						tianshi:'61',
						fenlei:'次级类',
						cishu:'1',
						zhuantai:'还款中'
					},
					{
						id:4,
						jieid:'100004',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yubenjin:'0.00',
						yulixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-01-15',
						yiyuqi:'已逾期',
						tianshi:'91',
						fenlei:'可疑类',
						cishu:'1',
						zhuantai:'还款中'
					},
					{
						id:5,
						jieid:'100005',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yubenjin:'0.00',
						yulixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-01-15',
						yiyuqi:'已逾期',
						tianshi:'121',
						fenlei:'损失类',
						cishu:'1',
						zhuantai:'还款中'
					},
					{
						id:6,
						jieid:'100006',
						name:'老朱',
						hetong:'2018101501520005',
						qishu:'1/12',
						yubenjin:'0.00',
						yulixi:'1250.00',
						guanlifei:'0.00',
						leixing:'个人信用',
						huankuanri:'2018-01-15',
						yiyuqi:'已逾期',
						tianshi:'8',
						fenlei:'正常类',
						cishu:'1',
						zhuantai:'还款中'
					}
				],
				ckxinxi:[
					{
						qixian:1,
						yinghuan:'2018-01-15',
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
						shijihuankuan:'',
						benjin:'1000.00',
						lixi:'152.00',
						guanlifei:'0.00',
						zonge:'1152.00',
						jianmian:'0.00',
						yuqits:'3',
						zhuantai:'已逾期',
						tijiaoren:'',
						shijian:'',
						beizhu:'',
						yijian:'',
						shenheren:''
					},
					{
						qixian:3,
						yinghuan:'2018-03-15',
						shijihuankuan:'',
						benjin:'1000.00',
						lixi:'152.00',
						guanlifei:'0.00',
						zonge:'1152.00',
						jianmian:'-',
						yuqits:'0',
						zhuantai:'未到还款日',
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
			chakan(){
				this.ck = 2
			},
			banli(){
				this.ck = 3
			},
			fanhui(){
				this.ck = 1
			}
		}
	}
</script>

<style scoped>
	.bianhong{
		color: red;
	}
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
	.biaoge>table>tr>td:nth-of-type(1){
		width: 0.5%;
	}
	.biaoge>table>tr>td:last-child{
		width: 5%;
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
	.biaoge>table>tr>td{
		width: 3%;
		height: 60px;
		color: #666;
		font-size: 13px;
		text-align: center;
		border: 1px solid #e4e4e4;	
		background: #fff;	
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
		width: 55%;
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
	.huibei .biaoge td{
		width: 6%;
	}
	.huibei .biaoge>table>tr>td:nth-of-type(1) {
	    width: 3%;
	}
	.banli>.kehu{
		padding-bottom: 20px;
		box-sizing: border-box;
		background: white;	
	}
	.banli>.xinxi{
		width: 100%;
		background: white;
		padding-bottom: 30px;
		box-sizing: border-box;
	}
	.banli>.xinxi>table{
		width: 80%;
		margin: 0px auto;
	}
	.banli{
		background: #f9f9f9;
	}
	
	.banli>.chuli{
		width: 100%;
		background: white;
		padding-bottom: 30px;
		box-sizing: border-box;
	}
	.chuli{
		margin-top: 20px;
	}
	.cuititle{
		width: 95%;
		height: 30px;
		margin: 0 auto;
		line-height: 30px;
		text-align: center;
		border-bottom: 1px solid #ECECEC;
	}
	.chuneiro{
		width: 80%;
		margin: 0 auto;
	}
	.chuneiro td>table{
		border: 1px solid #ececec;
	}
</style>
