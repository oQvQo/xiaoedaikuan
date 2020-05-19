<!-- 催收记录 -->
<template>
	<div class="cuishoujilu sgun">	
		<div class="top">
			<img src="../../public/cuishouimage/1.png">
			<span>首页/催收管理/催收记录</span>
		</div>
		<div class="sousuo">
			<input type="text" placeholder="姓名/手机号">
			<input type="text" placeholder="借款编号">
			<select>
				<option>催收方式</option>
				<option>预崔收</option>
				<option>电话催收</option>
				<option>外访催收</option>
			</select>
			<div class="block">
			    <el-date-picker
			      v-model="value1"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
			</div>
			<el-button type="info" size="small">信息按钮</el-button>
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
					<td>催收编号</td>
					<td>客户姓名</td>
					<td>借款编号</td>
					<td>逾期天数</td>
					<td>逾期本金</td>
					<td>逾期利息</td>
					<td class="xiangdui">
						风险分类
						<div class="juedui">
							1
						</div>
					</td>
					<td>催收方式</td>
					<td>催收日期</td>
					<td>催收反馈</td>
					<td>还款金额</td>
					<td>实际还款日期</td>
					<td>操作</td>
				</tr>
				<tr v-for="item in kehu" :key="item.id">
					<td><input type="checkbox"></td>
					<td>{{item.cuiid}}</td>
					<td>{{item.name}}</td>
					<td>{{item.jieid}}</td>
					<td>{{item.tian}}</td>
					<td>{{item.benjin}}</td>
					<td>{{item.lixi}}</td>
					<td>{{item.fenxian}}</td>
					<td>{{item.fangshi}}</td>
					<td>{{item.riqi}}</td>
					<td>{{item.fankui}}</td>
					<td>{{item.huankuan}}</td>
					<td>{{item.huankuanriqi}}</td>
					<td @click="yincang"><router-link to="./cuishoujilu/cuierji">查看</router-link></td>
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
				</div>
			</div>
		</div>
		<div class="bottom">
			Copyright &copy;2018深圳市xxxx金融科技有限公司，All Right Reserved.
		</div>
	</div>
</template>

<script>
	export default{
		name:'cuishoujilu',
		data(){
			return{
				kehu:[
					{
						id:1,
						cuiid:'CC10001',
						name:'老朱',
						jieid:'10001',
						tian:'15',
						benjin:'5630.00',
						lixi:'485.00',
						fenxian:'正常类',
						fangshi:'预崔收',
						riqi:'2018-12-15',
						fankui:'客户表示正在想办法筹钱',
						huankuan:'6153.00',
						huankuanriqi:'201812-18'
					},
					{
						id:2,
						cuiid:'CC10001',
						name:'老朱',
						jieid:'10001',
						tian:'51',
						benjin:'5630.00',
						lixi:'485.00',
						fenxian:'关注类',
						fangshi:'电话催收',
						riqi:'2018-12-15',
						fankui:'客户表示正在想办法筹钱，并答应25日一定还钱',
						huankuan:'6153.00',
						huankuanriqi:'201812-18'
					},
					{
						id:3,
						cuiid:'CC10001',
						name:'老朱',
						jieid:'10001',
						tian:'96',
						benjin:'5630.00',
						lixi:'485.00',
						fenxian:'次级类',
						fangshi:'外访催收',
						riqi:'2018-12-15',
						fankui:'客户表示正在想办法筹钱',
						huankuan:'未还',
						huankuanriqi:''
					},
					{
						id:4,
						cuiid:'CC10001',
						name:'老朱',
						jieid:'10001',
						tian:'158',
						benjin:'5630.00',
						lixi:'485.00',
						fenxian:'损失类',
						fangshi:'外访催收',
						riqi:'2018-12-15',
						fankui:'客户表示正在想办法筹钱，并答应25日一定还钱',
						huankuan:'未还',
						huankuanriqi:''
					},
					{
						id:5,
						cuiid:'CC10001',
						name:'老朱',
						jieid:'10001',
						tian:'36',
						benjin:'5630.00',
						lixi:'485.00',
						fenxian:'关注类',
						fangshi:'外访催收',
						riqi:'2018-12-15',
						fankui:'客户表示正在想办法筹钱',
						huankuan:'未还',
						huankuanriqi:''
					},
					{
						id:6,
						cuiid:'CC10001',
						name:'老朱',
						jieid:'10001',
						tian:'180',
						benjin:'5630.00',
						lixi:'485.00',
						fenxian:'损失类',
						fangshi:'外访催收',
						riqi:'2018-12-15',
						fankui:'客户表示正在想办法筹钱，并答应25日一定还钱',
						huankuan:'未还',
						huankuanriqi:''
					}
				],
				pickerOptions: {
				  shortcuts: [{
					text: '最近一周',
					onClick(picker) {
					  const end = new Date();
					  const start = new Date();
					  start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
					  picker.$emit('pick', [start, end]);
					}
				  }]
				},
				value1: ''
			}
		},
		methods:{
			yincang(){
				this.panduan = false
			}
		}
	}
</script>

<style scoped>
	.block{
		display: inline-block;
		margin-right: 1%;
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
	.sousuo>button{
		border: 0;
		padding: 0 10px;
		color: white;
		border-radius: 5px;
		line-height: 30px;
		background: #6b6b6b;
		box-sizing: border-box;
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
		font-size: 12px;
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
	.biaoge>table>tr:nth-of-type(1)>td:nth-of-type(1){
		width: 1%;
	}
	.biaoge>table>tr:nth-of-type(1)>td{
		font-weight: bold;
		background: #f3f3f3;
		height: 40px;
	}
	.biaoge>table>tr>td:nth-of-type(1){
		width: 1%;
	}
	.biaoge>table>tr>td:nth-of-type(11){
		width: 8%;		
	}
	.biaoge>table>tr>td{
		width: 4%;
		height: 50px;
		color: #666;
		font-size: 12px;
		text-align: center;
		border: 1px solid #e4e4e4;	
		background: #fff;	
	}
	.biaoge>table>tr>td>a{
		color: #000000;
		text-decoration: none;
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
		width: 45%;
		float: right;
	}
	.fenyeleixing>div{
		width: 33px;
		height: 23px;
		float: left;
		cursor: pointer;
		margin-top: 3%;
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
	.xiangdui{
		position: relative;
	}
	.juedui{
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
	.sgun{
		overflow: scroll;
		height: 606px;
	}
</style>
