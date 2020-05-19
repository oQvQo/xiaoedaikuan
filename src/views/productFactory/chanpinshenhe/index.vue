<!-- 产品审核 -->
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
			<el-table-column label="标签">
				<template slot-scope="scope">
					<span v-html="scope.row.value11"></span>
				</template>
			</el-table-column>
			<el-table-column prop="number" label="排序" width="180">
			</el-table-column>
			<el-table-column prop="zt" label="状态" width="180">
			</el-table-column>
			<el-table-column prop="caozuo" label="操作" width="180">
			</el-table-column>
		</el-table>
		<div class="block right">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage4"
				:page-sizes="[100, 200, 300, 400]"
				:page-size="100"
				layout="total, sizes, prev, pager, next, jumper"
				:total="400">
			</el-pagination>
		</div>
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
					value11: '新品：是<br/>推荐：是',
					number:'1',
					zt:'发布中',
					caozuo:'查看 审核'
				}, {
					date: '100002',
					name: '才薪贷',
					address: '个人信用',
					zi: '新品',
					value11: '新品：是<br/>推荐：是',
					number:'2',
					zt:'已审核',
					caozuo:'查看 审核'
				}, {
					date: '100003',
					name: '保薪贷',
					address: '个人信用',
					zi: '新品',
					value11: '新品：是<br/>推荐：是',
					number:'3',
					zt:'未审核',
					caozuo:'查看 审核'
				}, {
					date: '100004',
					name: '室薪贷',
					address: '个人信用',
					zi: '新品',
					value11: '新品：是<br/>推荐：是',
					number:'4',
					zt:'审核不通过         ',
					caozuo:'查看 审核'
				}, {
					date: '100005',
					name: '室薪贷',
					address: '个人信用',
					zi: '新品',
					value11: '新品：是<br/>推荐：是',
					number:'5',
					zt:'已下架',
					caozuo:'查看 审核'
				}],
				value: '',
				value1: '',
				currentPage1: 5,
				currentPage2: 5,
				currentPage3: 5,
				currentPage4: 4
			}
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<style scoped>
	
</style>
