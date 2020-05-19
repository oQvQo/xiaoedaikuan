<!-- 头部吧 -->
<template>
	<div class="header">
		<i class="el-icon-s-home"></i><span>首页</span><span>{{title}}</span>
	</div>
</template>

<script>
	export default{
		name:"Header",
		props:{
			title:{
				type:String,
				default:''
			}
		}
	}
</script>

<style scoped>
	.header{
		height: 57px;box-sizing: border-box;padding: 15px 20px;font-size: 14px;
	}
	.header i{
		font-size: 20px;margin-right: 5px;
	}
	.header *{
		vertical-align: bottom;
	}
</style>
