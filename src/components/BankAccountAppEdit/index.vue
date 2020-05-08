<template>
	<div class="aeBig">
		<div class="clear">
			<ul>
				<li>
					<div><span>*</span><span>帐户名称:</span></div>
					<input type="text" placeholder="请输入对公帐户名称">
				</li>
				<li>
					<div><span>*</span><span>帐号:</span></div>
					<input type="text" placeholder="请输入银行帐号">
				</li>
				<li>
					<div><span>*</span><span>开户银行:</span></div>
					<select><option>请选择银行</option></select>
				</li>
				<li>
					<div><span>*</span><span>开户银行名称:</span></div>
					<input type="text" placeholder="请输入开户行名称">
				</li>
				<li>
					<div><span>*</span><span>币种:</span></div>
					<select><option>人民币</option></select>
				</li>
				<li>
					<div><span>*</span><span>开户银行:</span></div>
					<select><option>基本帐户</option></select>
				</li>
				<li>
					<div><span></span><span>是否启用:</span></div>
					<el-switch
						  style="display: inline-block"
						  v-model="value1"
						  active-color="#000000"
						  inactive-color="#9f9f9f"
						  active-text="开启"
						  inactive-text="关闭">
					</el-switch>
				</li>
			</ul>
			
		</div>
		<div class="IButton">
			<input v-on:click="tijiao" type="submit" value="提交">
			<input v-on:click="fanhui" type="button" value="返回">
		</div>
	</div>
</template>

<script>
	export default{
		name:"AppEdit",
		data() {
		    return {
		      value1: true
		    }
		},
		methods:{
			tijiao(){
				this.$emit("back","false")
				// if值不为空什么的,自己加
				alert("提交成功")
			},
			fanhui(){
				this.$emit("back","false")
			}
		}
	}
</script>

<style scoped>
	.clear::after{
		content: "";
		display: block;
		clear: both;
	}
	.aeBig{
		background-color: white;
		margin: 0px 20px 66px;
		padding-bottom: 111px;
	}
	ul{
		list-style: none;float: left;
		margin-left: 30px;
	}
	ul li{
		text-align: right;
		line-height: 50px;
	}
	ul li:last-of-type{
		margin-right: 150px;margin-top: 20px;
	}
	ul li:last-of-type *{
		vertical-align: middle;
	}
	.IButton{
		margin-left: 240px;
	}
	.IButton input{
		width: 150px;
		height: 35px;
		margin-right: 35px;
		color: white;
		outline: none;
		cursor: pointer;		
		border-radius: 3px;
	}
	.IButton input:first-of-type{
		background: #333333;
		border: none;
	}
	.IButton input:last-of-type{
		background-color: #666666;
		border: none;
	}
	
	ul li div{
		display: inline-block;
		font-size: 14px;
		margin-right: 10px;
	}
	ul li div span:first-of-type{
		color: #f24844;
	}
	ul li div span:last-of-type{
		color: #666666;
	}
	ul li select{
		width: 275.5px;
		font-size: 15px;
		color: #666666;
		border: 1px #e4e4e4 solid;
		border-radius: 2px;
		height: 35px;
		padding-left: 6px
	}
	ul li input{
		width: 273px;
		border: 1px #e4e4e4 solid;
		border-radius: 2px;
		height: 32px;
	}
	ul li input::placeholder{
		color: #cccccc;
		font-size: 15px;
		padding-left: 9px;
	}
</style>
