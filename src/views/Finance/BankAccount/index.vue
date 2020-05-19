<!-- 银行 -->
<template>
	<div class="BigDiv">
		
		<Header v-show="trueTitle" title="/财务管理/银行账户管理"></Header>
		<Header v-show="AddTitle" title="/财务管理/银行账户管理/添加"></Header>
		<Header v-show="EditTitle" title="/财务管理/银行账户管理/编辑"></Header>
		
		<BankAccount v-show="flageOne" v-bind:flage="flage" v-on:to="edit($event)" v-on:go="aedit($event)"></BankAccount>
		<AppEdit v-show="flage" v-bind:flage="flageOne" v-on:back="backGo($event)"></AppEdit>
		
		<TabBar></TabBar>
	</div>
	
</template>

<script>
	import Header from "@/components/Header"
	import BankAccount from "@/components/BankAccount"
	import TabBar from "@/components/TabBar"
	import AppEdit from "@/components/BankAccountAppEdit"
	export default{
		name:"ViewBankAccount",
		components:{
			BankAccount,
			Header,
			TabBar,
			AppEdit
		},
		data(){
			return{
				flage:false,
				flageOne:true,
				trueTitle:true,
				AddTitle:false,
				EditTitle:false
			}
		},
		methods:{
			aedit:function(msg){
				this.flage=msg
				this.flageOne=false
				this.AddTitle=true
				this.trueTitle=false
				this.EditTitle=false
			},
			edit:function(msg){
				this.flage=msg
				this.flageOne=false
				this.EditTitle=true
				this.trueTitle=false
				this.AddTitle=false
			},
			backGo:function(msg){
				this.flage=false
				this.flageOne=msg
				this.EditTitle=false
				this.trueTitle=true
				this.AddTitle=false
			}
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
