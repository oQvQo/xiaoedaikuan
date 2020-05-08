<template>
	<div class="go">
		<div class="nav">
			<div class="nav-title">
				<span><strong>数据列表</strong></span>
				<div class="nav-title-nav">
					<input v-on:click="appANDedit" type="button" value="添加">
					<input type="button" value="打印">
					<input type="button" value="导出">
				</div>
			</div>
			<div class="nav-table">
				<table border="1px" cellspacing="1" cellpadding="0">
					<tr>
						<th width="160px">帐号</th>
						<th width="145px">帐户名称</th>
						<th>开户银行</th>
						<th width="190px">开户行</th>
						<th width="75px">币种</th>
						<th>帐户类型</th>
						<th width="100px">收入</th>
						<th width="90px">支出</th>
						<th>更新日期</th>
						<th>状态</th>
						<th width="140px">操作</th>
					</tr>
					<tr>
						<td>6225 8888 8888 8888</td>
						<td>杭州市蚂蚁小额贷款<span class="td-br"></span>有限公司</td>
						<td>招商银行</td>
						<td>杭州市招商银行于花路支行</td>
						<td>人民币</td>
						<td>基本账户</td>
						<td>48,584.00</td>
						<td>0.00</td>
						<td>2018-12-16</td>
						<td>使用中</td>
						<td>
							<a v-on:click="appANDeditOne">编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button><br>
							<a>帐户明细</a>
						</td>
					</tr>
					<tr>
						<td>6225 8888 8888 8888</td>
						<td>杭州市蚂蚁小额贷款<span class="td-br"></span>有限公司</td>
						<td>招商银行</td>
						<td>杭州市招商银行于花路支行</td>
						<td>人民币</td>
						<td>基本账户</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>2018-12-16</td>
						<td>已停用</td>
						<td>
							<a v-on:click="appANDeditOne">编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button><br>
							<a>帐户明细</a>
						</td>
					</tr>
					<tr>
						<td>6225 8888 8888 8888</td>
						<td>杭州市蚂蚁小额贷款<span class="td-br"></span>有限公司</td>
						<td>招商银行</td>
						<td>杭州市招商银行于花路支行</td>
						<td>人民币</td>
						<td>专业帐户</td>
						<td>8,888,888.00</td>
						<td>0.00</td>
						<td>2018-12-16</td>
						<td>使用中</td>
						<td>
								<a v-on:click="appANDeditOne">编辑</a>
								<el-button type="text" @click="open"><a>删除</a></el-button><br>
								<a>帐户明细</a>
							</td>
						
					</tr>
					<tr>
						<td>6225 8888 8888 8888</td>
						<td>杭州市蚂蚁小额贷款<span class="td-br"></span>有限公司</td>
						<td>招商银行</td>
						<td>杭州市招商银行于花路支行</td>
						<td>人民币</td>
						<td>专业帐户</td>
						<td>48,584.00</td>
						<td>0.00</td>
						<td>2018-12-16</td>
						<td>使用中</td>
						<td>
							<a v-on:click="appANDeditOne">编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button><br>
							<a>帐户明细</a>
						</td>
					</tr>
					<tr>
						<td>6225 8888 8888 8888</td>
						<td>杭州市蚂蚁小额贷款<span class="td-br"></span>有限公司</td>
						<td>招商银行</td>
						<td>杭州市招商银行于花路支行</td>
						<td>人民币</td>
						<td>辅助帐户</td>
						<td>0.00</td>
						<td>0.00</td>
						<td>2018-12-16</td>
						<td>使用中</td>
						<td>
							<a v-on:click="appANDeditOne">编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button><br>
							<a>帐户明细</a>
						</td>
					</tr>
					<tr>
						<td>6225 8888 8888 8888</td>
						<td>杭州市蚂蚁小额贷款<span class="td-br"></span>有限公司</td>
						<td>招商银行</td>
						<td>杭州市招商银行于花路支行</td>
						<td>人民币</td>
						<td>辅助帐户</td>
						<td>8,888,888.00</td>
						<td>0.00</td>
						<td>2018-12-16</td>
						<td>未使用</td>
						<td>
							<a v-on:click="appANDeditOne">编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button><br>
							<a>帐户明细</a>
						</td>
					</tr>
				</table>
			</div>
			<div class="nav-fenye clear">
				<el-pagination class="el-fenye"
				  background
				  layout="prev, pager, next"
				  :total="500">
				</el-pagination>
			</div>
			<br>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"BankAccount",
		data(){
			return{
				
			}
		},
		props:["flage"],
		methods:{
			appANDedit:function(){
				this.$emit("go","false")
			},
			appANDeditOne:function(){
				this.$emit("to","false")
			},
			open() {
			        this.$confirm('确定要删除该条数据吗?', '删除确认', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$message({
			            type: 'success',
			            message: '删除成功!'
			          });
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消删除'
			          });          
			        });
			}
		}
	}
</script>

<style scoped>
	.go{
		width: 1266px;
	}
	.nav{
		margin: 0px 20px;
		width: 1220px;
		background-color: white;
		margin-bottom: 200px;
	}
	.nav .nav-title{
		border: 1px #e4e4e4 solid;
		background: #f3f3f3;
		padding: 13px 25px 18px;
	}

	.nav .nav-title>span{
		display: inline-block;
		font-size: 15px;padding-top: 3px;box-sizing: border-box;
	}
	.nav .nav-title .nav-title-nav{
		float: right;
	}
	.nav .nav-title .nav-title-nav input{
		cursor: pointer;
		outline: none;
		margin-left: 25px;
	}
	.nav .nav-title .nav-title-nav input:first-of-type{
		background: #333333;color: white;
		border: none;border-radius: 3px;
		padding: 6px 20px 6px;
	}
	.nav .nav-title .nav-title-nav input:nth-of-type(2){
		background: url(../../assets/img/menuImg/nav-titleOne.png) no-repeat 10px 6.5px;
		border: 1px solid #cccccc;background-color: white;
		padding: 5.5px 15px 5.5px 35px;color: #666666;
	}
	.nav .nav-title .nav-title-nav input:last-of-type{
		background: url(../../assets/img/menuImg/nav-titleTwo.png) no-repeat 10px 6.5px;
		border: 1px solid #cccccc;background-color: white;
		padding: 5.5px 15px 5.5px 35px;color: #666666;
	}
	.nav .nav-table{
		height: 888px;
	}
	.nav .nav-table table{
		border: 1px solid #e4e4e4;
		border-collapse:collapse;
		width: 100%;text-align: center;
		color: #666666;		
	}
	.nav .nav-table table tr th{
		background-color: #f9fafc;
		height: 59px;font-size: 15px;
	}
	.nav .nav-table table tr td{
		background-color: white;height: 66px;font-size: 15px;
	}
	.nav .nav-table table tr td:last-of-type a{
		margin: 0px 10px;
		cursor: pointer;
		color: black;
		font-size: 15px;
	}
	.nav .nav-table table tr td:last-of-type a:hover{
		text-decoration: underline;
	}
	.nav .nav-table table tr td:last-of-type a:active{
		color: skyblue;
		user-select: none;
	}
	/* 改变td中最后三个的颜色 */
	.nav .nav-table table tr td:last-of-type{
		color: #333333;
		user-select: none;
	}
	.nav .nav-table table tr td:nth-of-type(9){
		color: #333333;
	}
	.nav .nav-table table tr td:nth-of-type(10){
		color: #333333;
	}
	.td-br{
		display: block;height: 10px;
	}
	
	.nav .nav-fenye{
		background: #fdfdfe;
		border: 1px #e4e4e4 solid;
		padding: 10px 0px;
		
	}
	.nav .nav-fenye .el-fenye{
		float: right;
	}
	.clear::after{
		display: block;
		content: "";
		clear: both;
	}
</style>
