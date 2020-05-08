<template>
	<div>
		<template>
            <el-steps :active="active1" finish-status="success">
                <el-step title="产品基本信息"></el-step>
                <el-step title="产品参数配置"></el-step>
                <el-step title="申请材料配置"></el-step>
            </el-steps>
        </template>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="产品名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="贷款类型" prop="region">
				<el-select v-model="ruleForm.region" placeholder="请选择">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
				<el-select v-model="ruleForm.region2" placeholder="请选择">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="上传文件" prop="uplota">
				<el-upload
				  class="upload-demo"
				  drag
				  action="https://jsonplaceholder.typicode.com/posts/"
				  multiple>
				  <i class="el-icon-upload"></i>
				  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-form-item>
			<el-form-item label="产品介绍" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<el-form-item label="产品亮点" prop="desc2">
				<el-input type="textarea" v-model="ruleForm.desc2"></el-input>
			</el-form-item>
			<el-form-item label="产品标签" prop="type">
				<el-checkbox-group v-model="ruleForm.type">
					<el-checkbox label="新品" name="type" checked></el-checkbox>
					<el-checkbox label="推荐" name="type"></el-checkbox>
					<el-checkbox label="精品" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="产品介绍" required>
				<el-col :span="11">
					<el-form-item prop="date1">
						<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-form-item prop="date2">
						<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
					</el-form-item>
				</el-col>
			</el-form-item>
			
			<el-form-item label="放款方式" prop="resource">
				<el-radio-group v-model="ruleForm.resource">
					<el-radio label="委托银行放款"></el-radio>
					<el-radio label="线下放款"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<el-form-item label="还款方式" prop="resource2">
				<el-radio-group v-model="ruleForm.resource2">
					<el-radio label="等额本息" checked></el-radio>
					<el-radio label="等本等息"></el-radio>
					<el-radio label="先息后本"></el-radio>
					<el-radio label="一次性还息付本"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="贷款期限" prop="type2">
				<el-checkbox-group v-model="ruleForm.type2">
					<el-checkbox label="1个月" name="type" checked></el-checkbox>
					<el-checkbox label="3个月" name="type"></el-checkbox>
					<el-checkbox label="6个月" name="type"></el-checkbox>
					<el-checkbox label="9个月" name="type"></el-checkbox>
					<el-checkbox label="12个月" name="type"></el-checkbox>
					<el-checkbox label="18个月" name="type"></el-checkbox>
					<el-checkbox label="24个月" name="type"></el-checkbox>
					<el-checkbox label="36个月" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item>
				<el-button style="margin-top: 12px;" @click="next">下一步,产品参数配置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
            // active1:0;
			return {
				activeIndex:'1',
				activeName: 'second',
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
					type2:[]
				},
				rules: {
					name: [{
							required: true,
							message: '产品名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					region2: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change2'
					}],
					uplota:{
						required: true,
						message:'文件上传',
						trigger:'change'
					},
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					type2: [{
						type: 'array',
						required: true,
						message: '请至少选择一个',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					resource2: [{
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写产品介绍',
						trigger: 'blur'
					}],
					desc2: [{
						trigger: 'blur'
                    }]
                }
            };
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
            },
            next() {
                if (this.active1++ > 2) this.active1 = 0;
            }
		}
	};
</script>

<style scoped>
	.el-menu-demo {
		background-color: #D3D3D3;
		color: black;
	}
</style>
