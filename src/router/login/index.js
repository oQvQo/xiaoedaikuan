//产品工厂
export default [
	//贷款材料管理
	{
		path:'/login',
		component:()=>import('../../views/login'),
		meta: { requiresAuth: true }
	},
]

