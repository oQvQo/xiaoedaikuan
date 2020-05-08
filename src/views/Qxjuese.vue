<template>
	<div class="qxbumen">
		<!-- 一级 -->
		<div v-if="xian">
			<!-- 一 -->
			<div class="bumentitle">
				<div>
					<img src="../../public/cuishouimage/1.png"><span>首页/权限/角色管理</span>
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
				<div @click="add">
					添加
				</div>
			</div>
			<!-- 三 -->
			<div class="table">
				<el-table :data="tableData" border style="width: 100%;">
				    <el-table-column fixed prop="jname" label="角色名称" width="350"></el-table-column>
					
				    <el-table-column prop="jmiaoshu" label="角色描述" width="350"></el-table-column>
					
				    <el-table-column prop="shijian" label="添加时间" width="300"></el-table-column>
					
				    <el-table-column fixed="right" label="操作" width="200">
				      <template>
				        <el-button type="text" size="small" @click="shezhi">权限设置</el-button>
				        <el-button type="text" size="small">编辑</el-button>
				        <el-button type="text" size="small">删除</el-button>
				      </template>
				    </el-table-column>
				  </el-table>
			</div>
		</div>
		
		<!-- 权限管理 -->
		<div class="qxguanli" v-else>
			<div class="qxguanlititle">
				当前角色:风控经理
			</div>
			<ul>
				<li class="soujin"><el-checkbox>产品工厂</el-checkbox></li>
				<li class="soujin1">
					<el-checkbox>合同模板配置</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>新增</el-checkbox>
					<el-checkbox>编辑</el-checkbox>
					<el-checkbox>启用/禁用</el-checkbox>
					<el-checkbox>导出</el-checkbox>
					<el-checkbox>删除</el-checkbox>
				</li>
				<li class="soujin1">
					<el-checkbox>货款材料管理</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>新增</el-checkbox>
					<el-checkbox>编辑</el-checkbox>
					<el-checkbox>启用/禁用</el-checkbox>
					<el-checkbox>导出</el-checkbox>
					<el-checkbox>删除</el-checkbox>
				</li>
				<li class="soujin1">
					<el-checkbox>货款材料管理</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>新增</el-checkbox>
					<el-checkbox>编辑</el-checkbox>
					<el-checkbox>启用/禁用</el-checkbox>
					<el-checkbox>删除</el-checkbox>
				</li>
				<li class="soujin1">
					<el-checkbox>货款材料管理</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>审核</el-checkbox>
				</li>
				<li class="soujin">
					<el-checkbox>借贷中心</el-checkbox>
				</li>
				<li class="soujin1">
					<el-checkbox>贷前管理</el-checkbox>					
				</li>
				<li class="soujin2">
					<el-checkbox>准入授信管理</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>初审</el-checkbox>
					<el-checkbox>初审</el-checkbox>
					<el-checkbox>导出</el-checkbox>
				</li>
				<li class="soujin2">
					<el-checkbox>准入授信管理</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>复审</el-checkbox>
					<el-checkbox>导出</el-checkbox>
				</li>
				<li class="soujin1"><el-checkbox>贷中管理</el-checkbox></li>
				<li class="soujin2">
					<el-checkbox>产品授信</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>终审</el-checkbox>
					<el-checkbox>导出</el-checkbox>
				</li>
				<li class="soujin2">
					<el-checkbox>合同管理</el-checkbox>
					<el-checkbox>查看</el-checkbox>
					<el-checkbox>合同管理</el-checkbox>
					<el-checkbox>提交放款审批</el-checkbox>
					<el-checkbox>导出</el-checkbox>
				</li>
			</ul>
			<div class="quanbu">
				<el-checkbox>选择全部</el-checkbox>
			</div>
			<div class="baocun">
				<el-button type="info" @click="shezhi">保存</el-button>
			</div>
			<div class="bottom">
				Copyright &copy;2018深圳市xxxx金融科技有限公司，All Right Reserved.
			</div>
		</div>
		
		<!-- 添加  二级-->
		<div class="bianji" v-if="panduan">
			<div class="bjtitle">
				<div>添加角色</div>
				<div @click="guanbi">X</div>
			</div>
			
			<div class="bjneiro">
				<table cellpadding="5" cellspacing="5">
					<tr>
						<td><span style="color: red;">*</span>角色名称:</td>
						<td><el-input v-model="jsnane"></el-input></td>
					</tr>
					<tr>
						<td>角色描述:</td>
						<td>
							<el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="jsmiaoshu"></el-input>
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

	</div>
</template>

<script>
	export default{
		name:"qxjuese",
		data(){
			return{
				xian:true,
				// jsnane:'',
				// jsmiaoshu:'',
				panduan:false,
				// value:true,
				tableData: [
					{
					  jname: '风控部经理',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					},
					{
					  jname: '贷前文员',
					  jmiaoshu: '暂无描述',
					  shijian: '2018-08-05 15:47:44'
					}
				]
			}
		},
		methods:{
			add(){
				this.panduan = true
			},
			guanbi(){
				this.panduan = false
			},
			shezhi(){
				this.xian = !this.xian
			}
		}
	}
</script>

<style scoped>
	.el-table__header td{
		background-color: #000066;
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
	
	
	
	.bianji{
		position: fixed;
		top: 20%;
		left: 30%;
		width: 45%;
		z-index: 5;
		height: 350px;
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
		height: 220px;
		padding: 0 20%;
		box-sizing: border-box;
		border-bottom: 1px solid #999;
	}
	.bjbottom{
		float: right;
		margin-top: 2%;
		margin-right: 10%;
	}
	
	
	
	/* 权限管理 */
	.qxguanli{
		width: 100%;
		height: 600px;
		overflow: scroll;
		background:#f9f9f9;
	}
	.qxguanlititle{
		width: 100%;
		height: 40px;
		color: #999;
		text-indent: 20px;
		line-height: 40px;
		background: #f3f3f3;
	}
	.qxguanli{
		background: white;
	}
	.qxguanli ul{
		margin: 0;
		padding: 0;
	}
	.qxguanli li{
		height: 40px;
		line-height: 40px;
		list-style: none;
		border-bottom: 1px solid #ECECEC;
	}
	.qxguanli li:first-child{
		border-top: 1px solid #ECECEC;
		margin-top: 5px;
	}
	.soujin{
		text-indent: 10px;
	}
	.soujin1{
		padding-left: 6%;
		box-sizing: border-box;
	}
	.soujin2{
		padding-left: 10%;
		box-sizing: border-box;
	}
	.quanbu{
		width: 95%;
		margin: 0 auto;
		height: 50px;
		line-height: 50px;
		margin-top: 2%;
		background: #f9fafc;
		text-align: center;
		border: 1px solid #e4e4e4;
	}
	.baocun{
		text-align: center;
		margin: 5% 0;
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
</style>
