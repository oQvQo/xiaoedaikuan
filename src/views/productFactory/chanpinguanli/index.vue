<template>
	<div>
		<el-select v-model="value" placeholder="贷款类型">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="value1" placeholder="状态">
			<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<el-button>查看</el-button>

		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="产品编号" width="180">
			</el-table-column>
			<el-table-column prop="name" label="产品名称" width="180">
			</el-table-column>
			<el-table-column prop="address" label="贷款类型">
			</el-table-column>
			<el-table-column prop="value11" label="标签">
				<template slot-scope="scope">
					<el-switch active-color="#333334" inactive-color="#d3d3d3"
					inactive-text="新品:"
					v-model="scope.row.status">
					</el-switch>
					<br />
					<el-switch active-color="#333334" inactive-color="#d3d3d3"
					inactive-text="推荐:"
					v-model="scope.row.status1">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column prop="number" label="排序" width="180">
			</el-table-column>
			<el-table-column prop="zt" label="状态" width="180">
				<template slot-scope="scope">
					<span v-html="scope.row.zt"></span>
				</template>
			</el-table-column>
			<el-table-column prop="caozuo" label="操作" width="180">
			</el-table-column>
		</el-table>
		<TabBar></TabBar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '个人信用',

				}],
				options1: [{
					value: '选项1',
					label: '发布中'
				}, {
					value: '选项2',
					label: '已审核'
				}, {
					value: '选项3',
					label: '未审核'
				}, {
					value: '选项4',
					label: '审核不通过'
				}, {
					value: '选项5',
					label: '已下架'
				}],
				tableData: [{
					date: '100001',
					name: '高薪贷',
					address: '个人信用',
					zi: '新品',
					value11: false,
					number:'1',
					zt:'发布中<br/>下架',
					caozuo:'查看 编辑'
				}, {
					date: '100002',
					name: '才薪贷',
					address: '个人信用',
					zi: '新品',
					value11: false,
					number:'2',
					zt:'已审核<br/>上架',
					caozuo:'查看 编辑 删除'
				}, {
					date: '100003',
					name: '保薪贷',
					address: '个人信用',
					zi: '新品',
					value11: false,
					number:'3',
					zt:'未审核',
					caozuo:'查看 编辑 提审 删除'
				}, {
					date: '100004',
					name: '室薪贷',
					address: '个人信用',
					zi: '新品',
					value11: false,
					number:'4',
					zt:'审核不通过',
					caozuo:'查看 编辑 提审 删除'
				}, {
					date: '100005',
					name: '室薪贷',
					address: '个人信用',
					zi: '新品',
					value11: false,
					number:'5',
					zt:'已下架<br/>上架',
					caozuo:'查看 编辑 删除'
				}],
				value: '',
				value1: '',
				value11: false,
			}
		},
		methods: {
			a() {
				this.value11 = true
				console.log(1)
			}
		}
	}
</script>

<style scoped>

</style>
