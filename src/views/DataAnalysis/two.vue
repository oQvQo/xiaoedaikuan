<!-- 贷款产品分析 -->
<template>
	<div class="BigDiv">
		<Header title="/数据分析/贷款产品分析"></Header>
		<div class="firstDiv">
			<div class="titlediv">
				<span>贷款形式占比</span>
			</div>
			<div class="mian" ref="chart" style="width: 100%;height: 300px;margin-top: 39px;"></div>
			<div style="margin: 100px 25px 0px;">
				<table border="1px" cellspacing="1" cellpadding="0">
					<tr>
						<th>贷款形式</th>
						<th>贷款数量</th>
						<th>数量比例</th>
						<th>贷款金额</th>
						<th>金额比例</th>
					</tr>
					<tr>
						<td>个人信用</td>
						<td>100</td>
						<td>20%</td>
						<td>￥10000.00</td>
						<td>20%</td>
					</tr>
					<tr>
						<td>个人抵押</td>
						<td>100</td>
						<td>20%</td>
						<td>￥10000.00</td>
						<td>20%</td>
					</tr>
					<tr>
						<td>个人分期</td>
						<td>100</td>
						<td>20%</td>
						<td>￥10000.00</td>
						<td>20%</td>
					</tr>
					<tr>
						<td>企业信用</td>
						<td>100</td>
						<td>20%</td>
						<td>￥10000.00</td>
						<td>20%</td>
					</tr>
					<tr>
						<td>企业租赁</td>
						<td>100</td>
						<td>20%</td>
						<td>￥10000.00</td>
						<td>20%</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="secondDiv">
			<div class="titlediv">
				<span>产品借贷情况</span>
			</div>
			<div style="margin: 30px 25px 0px;">
				<table border="1px" cellspacing="1" cellpadding="0">
					<tr>
						<th style="width: 290px;">产品名称</th>
						<th>浏览量</th>
						<th>浏览人数</th>
						<th>申请贷款人数</th>
						<th>贷款转化率</th>
						<th>成交贷款笔数</th>
						<th>成交贷款金额</th>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
					<tr>
						<td>产品A</td>
						<td>1000</td>
						<td>1000</td>
						<td>100</td>
						<td>10%</td>
						<td>100</td>
						<td>￥10000.00</td>
					</tr>
				</table>
				<div class="nav-fenye clear">
					<el-pagination class="el-fenye"
					  background
					  layout="prev, pager, next"
					  :total="500">
					</el-pagination>
				</div>
			</div>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import echarts from "echarts";
	import Header from "../../components/Header"
	import TabBar from "../../components/TabBar"
	export default {
		components: {
			Header,
			TabBar
		},
		data() {
			return {
				option: {
					color:['#5daeff','#aacf44','#ff9945','#3ad1c5','#cc3300','#ff0000'],
					title: {
						subtext: '贷款形式',
						right: '363',
						top: '80',
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b} : ({d}%) <br/> 贷款总额 : {c} '
					},
					legend: {
						orient: 'vertical',
						right: '333',
						top: '111',
						data: ['个人抵押', '个人分期', '企业信用', '个人信用','企业抵押','企业租赁'],
						selected:{
							'企业抵押':false,
							'企业租赁':false
						}
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '70%'],
						center: ['26%', '60%'],
						data: [{
								value: 335,
								name: '个人抵押'
							},
							{
								value: 310,
								name: '个人分期'
							},
							{
								value: 330,
								name: '企业信用'
							},
							{
								value: 335,
								name: '个人信用'
							},
							{
								value: 310,
								name: '企业抵押',
							},
							{
								value: 310,
								name: '企业租赁',
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				}
			}
		},
		mounted() {	
			var myChart = echarts.init(this.$refs.chart);
			myChart.setOption(this.option);
		}
	}
</script>

<style scoped>
	.BigDiv {
		background: #f9f9f9;
		width: 1275px;
		overflow: scroll;
		height: 600px;
	}

	.firstDiv {
		background-color: white;
		margin: 20px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 43px;
	}

	.titlediv {
		background: #f3f3f3;
		border-bottom: 1px #e4e4e4 solid;
		height: 43px;
	}

	.titlediv span {
		display: inline-block;
		color: #666666;
		margin: 12px 0px 0px 14px;
		font-size: 13px;
	}
	table {
		border: 1px solid #e5e5e5;
		border-collapse: collapse;
		width: 100%;
		text-align: center;
		font-size: 14px;
	}
	
	table tr th {
		width: 145px;
		color: #666666;
		height: 45px;
		background: #f9fafc;
	}
	
	table tr td {
		color: #666666;
		height: 47px;
	}
	.secondDiv{
		background-color: white;
		margin: 33px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 40px;margin-bottom: 35px;
	}
	.nav-fenye{
		margin-top: 22px;
		background: #fdfdfe;
		border: 1px #e4e4e4 solid;
		padding: 10px 0px;
		
	}
	.nav-fenye .el-fenye{
		text-align: right;
	}
</style>
