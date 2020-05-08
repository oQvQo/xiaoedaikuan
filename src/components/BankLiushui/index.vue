<template>
	<div>
		<div class="headerDiv">
			<div>
				
			</div>
			<div>
				
			</div>
		</div>
		<div class="nav">
			<div class="nav-title">
				<span><strong>数据列表</strong></span>
				<div class="nav-title-nav">
					<input type="button" value="摘要分类管理">
					<input type="button" value="录入">
					<input type="button" value="打印">
					<input type="button" value="导出">
				</div>
			</div>
			<div class="nav-table">
				<table border="1px" cellspacing="1" cellpadding="0">
					<tr>
						<th width="100px">日期</th>
						<th width="100px">凭证号</th>
						<th width="120px">摘要</th>
						<th width="100px">转出/转入</th>
						<th width="125px">借方发生额</th>
						<th width="125px">贷方发生额</th>
						<th width="160px">发生帐户</th>
						<th width="145px">帐户户名</th>
						<th>备注</th>
						<th width="140px">操作</th>
					</tr>
					<tr>
						<td>2018/01/01</td>
						<td>0</td>
						<td>本息还款</td>
						<td>转入</td>
						<td>130,564.00</td>
						<td>0.00</td>
						<td>6228888888888888</td>
						<td>深圳市51贷款有限公司</td>
						<td></td>
						<td>
							<a>编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button>
						</td>
					</tr>
					<tr>
						<td>2018/01/01</td>
						<td>0</td>
						<td>提前还款手续费</td>
						<td>转出</td>
						<td>0.00</td>
						<td>485.25</td>
						<td>6228888888888888</td>
						<td>深圳市51贷款有限公司</td>
						<td></td>
						<td>
							<a>编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button>
						</td>
					</tr>
					<tr>
						<td>2018/01/01</td>
						<td>0</td>
						<td>本金还款</td>
						<td>转入</td>
						<td>530,564.05</td>
						<td>0.00</td>
						<td>6228888888888888</td>
						<td>深圳市51贷款有限公司</td>
						<td></td>
						<td>
							<a>编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button>
						</td>
					</tr>
					<tr>
						<td>2018/01/01</td>
						<td>0</td>
						<td>利息还款</td>
						<td>转入</td>
						<td>130,564.00</td>
						<td>0.00</td>
						<td>6228888888888888</td>
						<td>深圳市51贷款有限公司</td>
						<td></td>
						<td>
							<a>编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button>
						</td>
					</tr>
					<tr>
						<td>2018/01/01</td>
						<td>0</td>
						<td>发放贷款</td>
						<td>转出</td>
						<td>0.00</td>
						<td>480000.00</td>
						<td>6228888888888888</td>
						<td>深圳市51贷款有限公司</td>
						<td></td>
						<td>
							<a>编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button>
						</td>
					</tr>
					<tr>
						<td>2018/01/01</td>
						<td>0</td>
						<td>提现手续费</td>
						<td>转入</td>
						<td>130,564.00</td>
						<td>0.00</td>
						<td>6228888888888888</td>
						<td>深圳市51贷款有限公司</td>
						<td></td>
						<td>
							<a>编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button>
						</td>
					</tr>
					<tr>
						<td>2018/01/01</td>
						<td>0</td>
						<td>罚息</td>
						<td>转出</td>
						<td>0.00</td>
						<td>130,564.00</td>
						<td>6228888888888888</td>
						<td>深圳市51贷款有限公司</td>
						<td></td>
						<td>
							<a>编辑</a>
							<el-button type="text" @click="open"><a>删除</a></el-button>
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
		name:"BankLiushui",
		methods:{
			open() {
			        this.$confirm('确定要删除该条银行流水吗????????????????????????删除后帐户余额会重新计算', '删除确认', {
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
	.headerDiv{
		background-color: white;
		height: 50px;
		margin: 0px 22px 25px;
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
		font-size: 15px;
		background: #999999;color: white;
		border: none;border-radius: 3px;
		padding: 5px 20px 5.5px;
	}
	.nav .nav-title .nav-title-nav input:nth-of-type(2){
		background: #333333;color: white;
		font-size: 16px;
		border: none;border-radius: 3px;
		padding: 4px 22px 6px;
		margin-right: 7px;
	}
	.nav .nav-title .nav-title-nav input:nth-of-type(3){
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
	.nav .nav-table table tr td:nth-of-type(5){
		color: #003399;
	}
	.nav .nav-table table tr td:nth-of-type(6){
		color: #f24844;
	}
	.nav .nav-table table tr td:nth-of-type(8){
		line-height: 30px;
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
