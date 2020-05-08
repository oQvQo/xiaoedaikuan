//产品工厂
export default [
	//登录日志
	{
		path:'/LogInLog',
		component:()=>import('../../views/SystemManagement/LogInLog')
	},
	//操作日志
	{
		path:'/OperationLog',
		component:()=>import('../../views/SystemManagement/OperationLog')
	}

]