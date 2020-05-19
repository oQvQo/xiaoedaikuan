<!-- 数据分析-用户统计 -->
<template>
  <div>
    <div id="main" style="width: 1200px;height:400px;"></div>
    <div id="main2" style="width: 1200px;height:400px;"></div>
    <div id="main3" style="width: 1200px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      // 第一个折线统计图
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2017-07-01",
            "2017-07-04",
            "2017-07-07",
            "2017-07-10",
            "2017-07-13",
            "2017-07-16",
            "2017-07-19",
            "2017-07-22",
            "2017-07-25",
            "2017-07-28",
            "2017-07-31"
          ]
        },
        yAxis: {
          type: "value",
          data: [0, 2, 4, 6, 8, 10, 12]
        },
        series: [
          {
            type: "line",
            itemStyle: {
              color: "#00b3d8"
            },
            data: [0,0,6,6,4,4,0,6,2,2,11,3,1,0,3,3,5,8,1,1,4,5,4,4,2,0,1,3]
          }
        ]
      },
      // 第二个折线统计图
      option2: {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      // 第三个折线统计图
      option3: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.option);
    var myChart2 = echarts.init(document.getElementById("main2"));
    myChart2.setOption(this.option2);
    var myChart3 = echarts.init(document.getElementById("main3"));
    myChart3.setOption(this.option3);
  }
};
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>