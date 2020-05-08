<template>
	<div class="shuju">
		<!-- 一级 -->
		<div>
			<!-- 一 -->
			<div class="bumentitle">
				<div>
					<img src="../../public/cuishouimage/1.png"><span>首页/权限/操作日志</span>
				</div>
				<div>
					<img src="../../public/qxxitongimage/1.png">刷新
				</div>
			</div>
			<!-- 二 -->
			<div class="bumentitle lie">
				<div>
					<img src="../../public/img/xiaotuTwo.png">数据类表
				</div>
				<div @click="beifen">
					开始备份
				</div>
			</div>
			<!-- 三 -->
			<div class="table">
				<el-table :data="tableData" border style="width: 100%;">
				    <el-table-column fixed prop="wname" label="备份文件名" width="300"></el-table-column>
					
				    <el-table-column prop="banbenhao" label="版本号" width="200"></el-table-column>
					
				    <el-table-column prop="daxiao" label="大小(字节)" width="200"></el-table-column>
					
				    <el-table-column prop="shijian" label="备份时间" width="250"></el-table-column>
					
				    <el-table-column fixed="right" label="操作" width="200">
				      <template slot-scope="scope">
				        <el-button type="text" size="small">恢复</el-button>
				        <el-button type="text" size="small">删除</el-button>
				      </template>
				    </el-table-column>
				</el-table>
			</div>
		</div>
	
	
		<!-- 开始备份 -->
		<div class="bianji" v-if="erji">
			<div class="bjtitle">
				<div>备份数据库</div>
				<div @click="guanbi">X</div>
			</div>
			<div class="neiro">
				<img src="../../public/qxxitongimage/11.png">
				<el-row>
					<el-button type="info">开始备份</el-button>
				</el-row>
				<div>
					备份过程中请不要关闭窗口，备份时间大概需要5分钟，请耐心等待
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
		name:"qxshuju",
		data(){
			return{
				erji:false,
				tableData: [
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					},
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					}
				]
			}
		},
		methods:{
			guanbi(){
				this.erji = false
			},
			beifen(){
				this.erji = true
			}
		}
	}
</script>

<style scoped>
	.shuju{
		width: 100%;
		height: 606px;
		overflow: scroll;
	}
	.qxbumen{
		width: 100%;
		height: 606px;
		overflow: scroll;
		background:#f9f9f9;
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
	.lie{
		height: 50px;
		background: #f3f3f3;
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
		left: 35%;
		width: 40%;
		z-index: 5;
		height: 300px;
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
	.neiro{
		width: 50%;
		margin: 20px auto;
		text-align: center;
	}
	.neiro>img{
		margin-bottom: 15px;
	}
	.neiro>div{
		margin-top: 15px;
	}
</style>
