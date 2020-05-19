<!-- 银行2 -->
<template>
	<div class="BigDiv">
		<Header title="/财务管理/银行账户管理/银行流水录入"></Header>
		<BankLiushui></BankLiushui>
		<TabBar></TabBar>
	</div>
</template>
<!-- el-icon-date 日历图标from饿了么ui -->
<script>
	import Header from "@/components/Header"
	import TabBar from "@/components/TabBar"
	import BankLiushui from "@/components/BankLiushui"
	
	export default{
		name:'ViewbankLiu',
		components:{
			Header,
			TabBar,
			BankLiushui
		}
	}
</script>

<style scoped>
	.BigDiv{
		background: #f9f9f9;
		width: 1275px;
		overflow: scroll;
		height: 600px;
	}
</style>
