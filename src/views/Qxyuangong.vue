<template>
	<div class="yuangong">
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
			<!-- 三 -->
			<div class="sousuo">
				输入搜索：<input type="text">
				所属部门：
				<select>
					<option>全部</option>
				</select>
				<el-button type="info">查询</el-button>
			</div>
			<!-- 二 -->
			<div class="bumentitle lie">
				<div>
					<img src="../../public/img/xiaotuTwo.png">数据类表
				</div>
				<div>
					开始备份
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"qxyuangong",
		data(){
			return{
				tableData: [
					{
						wname:'20180810165225.bak',
						banbenhao:'4.0',
						daxiao:'15902208',
						shijian:'2018-08-05 15:47:44'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.yuangong{
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
	.sousuo{
		width: 100%;
	}
	.sousuo select{
		width: 150px;
		height: 34px;
		color: #7f7e7e;
		margin-right: 1%;
		border-radius: 2px;
		border: 1px solid #e4e4e4;
	}
	.sousuo input{
		margin-right: 1%;
		width: 150px;
		color: #7f7e7e;
		padding-left: 1%;
		box-sizing: border-box;
		border: 1px solid #e4e4e4;
		line-height: 30px;
		border-radius: 2px;
	}
</style>
