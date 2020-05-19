<!-- 放款笔数 -->
<template>
	<div class="BigDiv">
		<div class="firstDiv">
			<div class="titlediv">
				<span>统计图</span>
			</div>
			<div style="text-align: center;color: #559ff0;font-size: 13px;"><span style="font-size: 27px;font-weight: bold;">700</span>次</div>
			<div class="main" ref="chart" style="width: 100%;height: 400px;"></div>
		</div>
		<div class="secondDiv">
			<div class="titlediv" style="background: white;margin: 8px 12px;border: none;">
				<span style="color: #333333;font-size: 14px;">借款成功的总次数</span>
				<input type="button" value="导出数据">
			</div>
			<div style="margin: 0px 30px;">
				<el-table :data="tableData" stripe style="width: 100%;" row-key="id" border default-expand-all
				 show-summary :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
					<el-table-column prop="date" label="日期" sortable width="250">
					</el-table-column>
					<el-table-column prop="amount1" label="委托放款" width="380" align=right>
					</el-table-column>
					<el-table-column prop="amount2" label="线下放款" align=right>
					</el-table-column>
				</el-table>
			</div>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import echarts from "echarts";
	import TabBar from "../../components/TabBar"
	export default {
		data() {
			return {
				option: {
					color: ['#559ff0', '#aacf44'],
					height: '303',
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['委托放款', '线下放款'],
						top: '380',
					},
					grid: {
						left: '1.5%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['2-1', '', '2-3', '', '2-5', '', '2-7', '', '2-9', '', '2-11', '', '2-13', '', '2-15', '', '2-17', '',
							'2-19', '', '2-21', '', '2-23', '', '2-25', '', '2-27'
						],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: '委托放款',
							type: 'bar',
							stack: 'bar',
							barWidth: '41%',
							data: ['', 590, 390, 390, 390, 385, 350, 390, 390, 330, 385, 420, 390, 390, 390, 420, 397, 390, 390, 390, 385,
								397, 390, 390, 310, 385, 300
							]
						},
						{
							name: '线下放款',
							type: 'bar',
							stack: 'bar',
							barWidth: '41%',
							data: ['', 220, 168, 178, 150, 147, 142, 150, 147, 164, 150, 160, 181, 150, 147, 300, 150, 225, 181, 150, 147,
								181, 150, 147, 181, 150, 110
							]
						}
					]
				},
				tableData: [{
					id: 1,
					date: '2-26(一)',
					amount1: '222',
					amount2: '222',
				}, {
					id: 2,
					date: '2-25(日)',
					amount1: '211',
					amount2: '211',
				}, {
					id: 3,
					date: '2-24(六)',
					amount1: '181',
					amount2: '181',
				}, {
					id: 4,
					date: '2-23(五)',
					amount1: '188',
					amount2: '188',
				},{
					id: 5,
					date: '2-22(四)',
					amount1: '123',
					amount2: '135',
				},{
					id: 6,
					date: '2-21(三)',
					amount1: '148',
					amount2: '154',
				},{
					id: 7,
					date: '2-20(二)',
					amount1: '234',
					amount2: '206',
				},{
					id: 8,
					date: '2-19(一)',
					amount1: '214',
					amount2: '170',
				}, {
					id: 9,
					date: '2-18(日)',
					amount1: '331',
					amount2: '210',
				}, {
					id: 10,
					date: '2-17(六)',
					amount1: '198',
					amount2: '178',
				}, {
					id: 11,
					date: '2-16(五)',
					amount1: '262',
					amount2: '265',
				}]
			}
		},
		mounted() {
			var myChart = echarts.init(this.$refs.chart)
			myChart.setOption(this.option);
		},
		methods: {
			load(tree, treeNode, resolve) {
				setTimeout(() => {
					resolve([{
						id: 31,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}, {
						id: 32,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}])
				}, 1000)
			},
			getSummaries(param) {
				const {
					columns,
					data
				} = param;
				const sums = [];
				columns.forEach((column, index) => {
					if (index === 0) {
						sums[index] = '总价';
						return;
					}
					const values = data.map(item => Number(item[column.property]));
					if (!values.every(value => isNaN(value))) {
						sums[index] = values.reduce((prev, curr) => {
							const value = Number(curr);
							if (!isNaN(value)) {
								return prev + curr;
							} else {
								return prev;
							}
						}, 0);
						sums[index] += ' 元';
					} else {
						sums[index] = 'N/A';
					}
				});

				return sums;
			}
		},
		components:{
			TabBar
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
		margin-bottom: 30px;
	}
	.titlediv input{
		float: right;margin-top: 8px;margin-right: 14px;background: white;
		border: 1px #cccccc solid;outline: none;cursor: pointer;color: #666666;padding: 3px 5px;
	}
	.titlediv span {
		display: inline-block;
		color: #666666;
		margin: 12px 0px 0px 14px;
		font-size: 13px;
	}

	.secondDiv {
		background-color: white;
		margin: 20px 60px 188px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 13px;
	}
</style>
