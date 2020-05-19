<template>
	<div class="BigDiv">
		<div class="firstDiv">
			<div class="titlediv">
				<span>新用户增张图</span>
			</div>
			<div id="mian" ref="chart" style="width: 100%;height: 300px;"></div>
			<div class="dd"><span></span>新用户增长</div>
		</div>
		<div class="secondDiv">
			<div class="titlediv">
				<span>绑卡与实名认证用户数</span>
			</div>
			<div ref="chart1" id="main1" style="width: 100%;height: 400px;margin-top: 50px;"></div>
		</div>
		<div class="thirdDiv">
			<div class="titlediv">
				<span>新增借款用户数</span>
			</div>
			<div id="mian" ref="chart2" style="width: 100%;height: 350px;"></div>
			<div class="dd"><span style="background-color: #5daeff;"></span>借款成功的触发用户数</div>
		</div>
	</div>
</template>

<script>
	import echarts from "echarts";
	export default{
		data(){
			return{
				option:{
					color:'#72c3bc',
				    xAxis: {
						type: 'category',
						boundaryGap: false,
				        data: ['2017-07-01', '2017-07-04', '2017-07-07', '2017-07-10', '2017-07-13', '2017-07-16', '2017-07-19','2017-07-22','2017-07-25','2017-07-28','2017-07-31','2017-07-01','2017-07-01','2017-07-01','2017-07-01','2017-07-31','']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
				        data: [0,0, 932, 20, 934, 934, 440, 340,1720,932, 660, 934, 600, 370, 1320,80],
						type: 'line',
				    }]
				},
				option1: {
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data: ['实名认证数', '绑卡用户数']
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: ['1-28', '1-30', '2-1', '2-3', '2-5', '2-7', '2-9']
				    },
				    yAxis: {
				        type: 'value',
				        axisLabel: {
				            formatter: '{value}'
						},
						
				    },
				    series: [
				        {
				            name: '实名认证数',
							type: 'line',
							symbol: 'circle',  //实心点
							symbolSize: 15,  
							color:'#72c3bc',
				            data: [1100, 1100, 1500, 1300, 1200, 1300, 1000],
				            // markPoint: {
				            //     data: [
				                    // {type: 'max', name: '最大值'},
				                    // {type: 'min', name: '最小值'}
				                // ]
				            // },
				            markLine: {
				                data: [
				                    {type: 'average', name: '平均值'}
				                ]
				            }
				        },
				        {
				            name: '绑卡用户数',
							type: 'line',
							color:'orange',
							symbol: 'circle',  //实心点
							symbolSize: 15,  
				            data: [240, 20, 500, 150, 330, 250, 700],
				            // markPoint: {
				            //     data: [
				            //         {name: '周最低', value: 2, xAxis: 1, yAxis: 1.5}
				            //     ]
				            // },
				            markLine: {
				                data: [
				                    {type: 'average', name: '平均值'},
				                    [{
				                        symbol: 'none',
				                        x: '90%',
				                        yAxis: 'max'
				                    }, {
				                        symbol: 'circle',
				                        label: {
				                            position: 'start',
				                            formatter: '最大值'
				                        },
				                        type: 'max',
				                        name: '最高点'
				                    }]
				                ]
				            }
				        }
				    ]
				},
				option2:{
					color:'#5daeff',
				    xAxis: {
				        type: 'category',
				        data: ['1-28', '1-30', '2-1', '2-3', '2-5', '2-7', '2-9','2-11', '2-13', '2-15', '2-17', '2-19', '2-21', '2-23','']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
						symbol: 'circle',  //实心点
						symbolSize: 15,  
				        data: [1200, 932, 920, 934, 450, 440, 340,320,260, 440, 230, 600, 370, 454,333],
				        type: 'line'
				    }]
				},
			}
		},
		mounted(){
			var myChart = echarts.init(this.$refs.chart)
			myChart.setOption(this.option);
			var myChart1 = echarts.init(this.$refs.chart1)
			myChart1.setOption(this.option1);
			var myChart2 = echarts.init(this.$refs.chart2)
			myChart2.setOption(this.option2);
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
	.secondDiv{
		background-color: white;
		margin: 33px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 43px;
	}
	.thirdDiv {
		background-color: white;
		margin: 33px 60px 0px 90px;
		border: 1px #e4e4e4 solid;
		padding-bottom: 33px;
	}
	.dd{
		text-align: center;color: #333333;font-size: 14px;margin-top: 10px;
	}
	.dd *{
		vertical-align: middle;
	}
	.dd span{
		width: 28px;height: 2.5px;background-color: #1abc9c;display: inline-block;margin-right: 10px;margin-bottom: 4px;
	}
</style>
