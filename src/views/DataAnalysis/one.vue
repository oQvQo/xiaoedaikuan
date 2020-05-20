<!-- 贷款统计 -->
<template>
	<div class="BigDiv">
		<Header title="/数据分析/贷款统计"></Header>
		<div class="firstDiv">
			<div class="titlediv">
				<span>数据列表</span>
			</div>
			<div class="clear">
				<div class="tableDiv">
					<table border="1px" cellspacing="1" cellpadding="0">
						<tr>
							<th>浏览人数</th>
							<th>贷款人数</th>
							<th>申请贷款数</th>
							<th>有效贷款数</th>
						</tr>
						<tr>
							<td>1888</td>
							<td>235</td>
							<td>643</td>
							<td>130</td>
						</tr>
						<tr>
							<th>审批未通过人数</th>
							<th>放款人数</th>
							<th>放款金额</th>
							<th>平均贷款金额</th>
						</tr>
						<tr>
							<td>55</td>
							<td>180</td>
							<td>￥1905871.71</td>
							<td>￥15285.99</td>
						</tr>
					</table>
				</div>
				<div style="float: left;">
					<div id="main" style="width: 333px;height: 270px;"></div>
				</div>
			</div>
			<div id="main2" style="width: 1000px;height: 400px;margin-left: 40px;"></div>
		</div>
		<div class="secondDiv">
			<div class="titlediv">
				<span>新老客户贷款构成</span>
			</div>
			<div class="clear">
				<div style="float: left;">
					<div id="mian3" ref="chart" style="width: 450px;height: 333px;margin: 5px 0px 0px 20px;"></div>
				</div>
				<div class="newoldUser">
					<ul>
						<li><span></span><span>新客户</span></li>
						<li><span></span><span>老客户</span></li>
					</ul>
					<table border="1px" cellspacing="1" cellpadding="0">
						<tr>
							<th></th>
							<th>贷款金额</th>
							<th>较前一月</th>
							<th>贷款人数</th>
							<th>较前一月</th>
						</tr>
						<tr>
							<td>新客户</td>
							<td>￥1970700.49</td>
							<td>↑4.73%</td>
							<td>30</td>
							<td>↓-92.00%</td>
						</tr>
						<tr>
							<td>老客户</td>
							<td>￥0.00</td>
							<td>/</td>
							<td>42</td>
							<td>↑2000%</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="thirdDiv">
			<div class="titlediv">
				<span>贷款走势数据</span>
			</div>
			<div id="mian4" ref="chart1" style="width: 93%;height: 400px;margin: 0px 40px;"></div>
		</div>
		<div class="fourthDiv">
			<div class="titlediv">
				<span>贷款省份分布</span>
			</div>
			<div class="clear">
				<div class="echarts" style="float: left;">
					<div :style="{height:'400px',width:'90%',border:'1px #f7f7f7 solid'}" ref="myEchart"></div>
					<!-- <img src="../../../public/img/shuju.png" alt="" style="position: relative;bottom: 0px;left: 80px;"> -->
				</div>
				
				<div class="ulCN">
					<ul>
						<li><span>省份</span><span>贷款金额</span></li>
						<li><span>广东省</span><span>41万</span><span></span></li>
						<li><span>山西省</span><span>3.88万</span><span></span></li>
						<li><span>未知地域</span><span>1.86万</span><span></span></li>
					</ul>
				</div>
			</div>
			<div style="margin: 80px 25px 0px;">
				<table border="1px" cellspacing="1" cellpadding="0">
					<tr>
						<th>省份</th>
						<th>贷款金额</th>
						<th>较前一月</th>
						<th>贷款人数</th>
						<th>较前一月</th>
					</tr>
					<tr>
						<td>广东省</td>
						<td>8085.25万</td>
						<td>↑4.73%</td>
						<td>589</td>
						<td>↑4.73%</td>
					</tr>
					<tr>
						<td>山西省</td>
						<td>580.63万</td>
						<td>↑4.73%</td>
						<td>260</td>
						<td>↑4.73%</td>
					</tr>
					<tr>
						<td>北京市</td>
						<td>485.58万</td>
						<td>↑4.73%</td>
						<td>158</td>
						<td>↑4.73%</td>
					</tr>
					<tr>
						<td>上海市</td>
						<td>100万</td>
						<td>↑4.73%</td>
						<td>99</td>
						<td>↑4.73%</td>
					</tr>
					<tr>
						<td>湖南省</td>
						<td>100万</td>
						<td>↓-92.00%</td>
						<td>58</td>
						<td>↓-92.00%</td>
					</tr>
				</table>
			</div>
			
		</div>
		<div class="fiveDiv">
			<div class="titlediv">
				<span>贷款金额分布</span>
			</div>
			<div id="mian5" ref="chart2" style="width: 88%;height: 420px;margin: 0px 60px;"></div>
			<div class="dd"><span></span>贷款金额分布</div>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import echarts from "echarts";
	import Header from "../../components/Header"
	import TabBar from "../../components/TabBar"
	// import 'E:/HBuilderX.2.6.1.20200226/项目/xiaodaikuan/node_modules/echarts/map/js/china.js' // 引入中国地图数据
	import 'F:/Y2/项目/xiaoedaikuan/node_modules/echarts/map/js/china.js' // 引入中国地图数据

	export default {
		components:{
			TabBar,
			Header
		},
		name: "DaiKuanTongJi",
		props: ["userJson"],
		data() {
			return {
				chart: null,
				option: {
					color:['#ff7978','#66beb6','#fdc074'],
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c}"
					},
					series: [{
						name: '漏斗图',
						type: 'funnel',
						left: '1%',
						top: 20,
						//x2: 80,
						bottom: 60,
						width: '100%',
						height: '70%',
						// height: {totalHeight} - y - y2,
						min: 0,
						max: 100,
						minSize: '0%',
						maxSize: '100%',
						sort: 'descending',
						gap: 2,
						label: {
							show: true,
							position: 'inside'
						},

						itemStyle: {
							borderColor: '#fff',
							borderWidth: 1,
						},
						emphasis: {
							label: {
								fontSize: 20,

							},

						},
						data: [{
								value: 60,
								name: '浏览',
							},
							{
								value: 40,
								name: '贷款'
							},
							{
								value: 20,
								name: '放款'
							}
						]
					}]
				},
				option2: {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['放款金额', '贷款转化率(%)', '贷款人数', '直接访问', '搜索引擎'],
						top: 10
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['2017-07-01', '2017-07-05', '2017-07-09', '2017-07-13', '2017-07-17', '2017-07-21', '2017-07-25',
							'2017-07-29', '2017-08-02'
						]
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '放款金额',
							type: 'line',
							color:'orange',
							stack: '总量',
							data: [100, 50, 150, 26, 76, 93, 28, 20, 70]
						},
						{
							name: '贷款转化率(%)',
							type: 'line',
							color:'#a200ff',
							stack: '总量2',
							data: [126, 167, 24, 78, 58, 76, 98, 71, 35]
						},
						{
							name: '贷款人数',
							type: 'line',
							color:'#00eaff',
							stack: '总量3',
							data: [53, 123, 43, 176, 28, 56, 143, 65, 20]
						},
						{
							name: '直接访问',
							type: 'line',
							color:'#ff008a',
							stack: '总量4',
							data: [1134, 200, 800, 334, 700, 330, 2138, 1000, 900]
						},
						{
							name: '搜索引擎',
							color:'#01d94d',
							type: 'line',
							stack: '总量5',
							data: [820, 0, 1134, 120, 780, 200, 1320, 610, 1600]
						}
					]
				},
				option3: {
					color:['#ff7878','#68c1b8'],
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '75%',
						center: ['50%', '55%'],
						data: [{
								value: 435,
								name: '新客户'
							},
							{
								value: 310,
								name: '老客户'
							},

						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				},
				option4: {
					color:['#ff7878','#9d9d9d'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true,
						width: '90%'
					},
					xAxis: [{
						type: 'category',
						data: ['02-01', '', '02-04', '', '02-08', '', '02-12', '', '02-16', '', '02-20', '', '02-24', '', '02-28']
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: '搜索引擎',
							type: 'bar',
							data: [862, 0, 1018, 0, 700, 0, 1026, 0, 1679, 0, 1600, 0, 1570, 0, 200],
							markLine: {
								lineStyle: {
									type: 'solid'
								}
							}
						},
						{
							type: 'line',
							data: [862, 935, 1018, 855, 700, 860, 1026, 1333, 1679, 1640, 1600, 1585, 1570, 900, 200],
						},
					]
				},
				option5: {
				    color: ['#ff7878'],
				    height: '350',
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: ['0-50元', '51-100元', '101-200元', '201-500元', '501-1000元', '1001-5000元', '5001-10000元','10001元以上'],
				            axisTick: {
				                alignWithLabel: true
				            }
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value'
				        }
				    ],
				    series: [
				    
				        {
				            name: '直接访问',
				            type: 'bar',
				            barWidth: '40%',
				            data: [7,3,3,6,6,3,2,3]
				        }
				    ]
				}
			}
		},
		mounted() {
			var myChart = echarts.init(document.getElementById("main"));
			myChart.setOption(this.option);
			var myChart2 = echarts.init(document.getElementById("main2"));
			myChart2.setOption(this.option2);
			var myChart3 = echarts.init(this.$refs.chart);
			myChart3.setOption(this.option3);
			var myChart4 = echarts.init(this.$refs.chart1);
			myChart4.setOption(this.option4);
			this.chinaConfigure();
			var myChart5 = echarts.init(this.$refs.chart2);
			myChart5.setOption(this.option5);
		},
		beforeDestroy() {
			if (!this.chart) {
				return;
			}
			this.chart.dispose();
			this.chart = null;
		},
		methods: {
			chinaConfigure() {
				console.log(this.userJson)
				let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
				window.onresize = myChart.resize;
				myChart.setOption({ // 进行相关配置
					backgroundColor: "white",
					tooltip: {}, // 鼠标移到图里面的浮动提示框
					dataRange: {
						show: false,
						min: 0,
						max: 1000,
						text: ['High', 'Low'],
						realtime: true,
						calculable: true,
						color: ['orangered', 'yellow', '#1200ff','#adcdef'],
						
					},
					geo: { // 这个是重点配置区
						map: 'china', // 表示中国地图
						roam: true,
						label: {
							normal: {
								show: true, // 是否显示对应地名
								textStyle: {
									color: 'rgba(0,0,0,0.4)',
								}
							}
						},
						itemStyle: {
							normal: {
								borderColor: 'white',
								color: '#aad5ff'
							},
							emphasis: {
								areaColor: null,
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								shadowBlur: 20,
								borderWidth: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					},
					series: [{
							type: 'scatter',
							coordinateSystem: 'geo' // 对应上方配置
						},
						{
							name: '贷款金额(万)', // 浮动框的标题
							type: 'map',
							geoIndex: 0,
							data: [{
								"name": "广东",
								"value": 41,
							}, {
								"name": "山西",
								"value": 3.88
							}, {
								"name": "未知地域",
								"value": 1.86
							}]
						}
					]
				})
			}
		}
	}
</script>

<style scoped>
	.clear::after {
		content: "";
		display: block;
		clear: both;
	}

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
		padding-bottom: 40px;
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

	.tableDiv {
		float: left;
		margin: 22px 22px 0px 36px;
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

	.secondDiv {
		background-color: white;
		margin: 40px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 40px;
	}

	.newoldUser {
		float: left;
		width: 566px;
		height: 222px;
		margin: 88px 0px 0px 20px;
	}

	.newoldUser ul {
		list-style: none;
		width: 555;
		padding: 0px;
		margin: 0px auto 50px;
		text-align: center;
	}

	.newoldUser ul li {
		display: inline-block;
		margin: 0px 50px;
	}

	.newoldUser ul li * {
		vertical-align: middle;
	}

	.newoldUser ul li span:first-of-type {
		display: inline-block;
		border-radius: 52%;
		width: 14.5px;
		height: 13.5px;
		margin-top: 2px;
		margin-right: 7px;
	}

	.newoldUser ul li:first-of-type span:first-of-type {
		background: #ff7878;
	}

	.newoldUser ul li:nth-of-type(2) span:first-of-type {
		background: #68c1b8;
	}

	.newoldUser ul li span:last-of-type {
		font-size: 13px;
	}

	.thirdDiv {
		background-color: white;
		margin: 40px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 33px;
	}

	.fourthDiv {
		background-color: white;
		margin: 40px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 45px;
	}
	.ulCN{
		float: left;width: 433px;height: 200px;margin-top: 30px;
	}
	.ulCN ul{
		list-style: none;
		width: 100%;
		padding-left: 0px;
		margin-top: 0px;
		color: #434343;
		line-height: 43px;
		font-size: 14px;
	}
	.ulCN ul li{
		border-top: 1px #ededf0 solid;
	}
	.ulCN ul li:first-of-type{
		background: #f4f5f9;
		border-top: none;
	}
	.ulCN ul li span{
		display: inline-block;
		padding-left: 14px;
	}
	.ulCN ul li span:first-of-type{
		width: 95px;
		text-align: left;
	}
	.ulCN ul li span:nth-of-type(2){
		width: 70px;
		text-align: right;
	}
	.ulCN ul li:nth-of-type(2) span:last-of-type{
		width: 188px;height: 11px;background-color: #44b549;
		margin-left: 25px;
	}
	.ulCN ul li:nth-of-type(3) span:last-of-type{
		width: 10px;height: 11px;background-color: #44b549;
		margin-left: 25px;
	}
	.ulCN ul li:nth-of-type(4) span:last-of-type{
		width: 0px;height: 11px;background-color: #44b549;
		margin-left: 25px;
	}
	.fiveDiv{
		background-color: white;
		margin: 40px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 40px;
		margin-bottom: 50px;
	}
	.dd{
		text-align: center;color: #333333;font-size: 14px;margin-top: 10px;
	}
	.dd *{
		vertical-align: middle;
	}
	.dd span{
		width: 28px;height: 2.5px;background-color: #ff7978;display: inline-block;margin-right: 10px;margin-bottom: 4px;
	}
</style>
