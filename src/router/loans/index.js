//产品工厂
export default [
	//贷后管理 
	//贷后检查
	{
		path: '/daihoujiancha',
		component: () => import('../../views/loans/daihou/daihoujiancha')
	},
	//贷款结项
	{
		path: '/daikuanjiexiang',
		component: () => import('../../views/loans/daihou/daikuanjiexiang')
	},
	//利率变更
	{
		path: '/lilvbiangeng',
		component: () => import('../../views/loans/daihou/lilvbiangeng')
	},
	//提前还款办理
	{
		path: '/tiqianhuankuan',
		component: () => import('../../views/loans/daihou/tiqianhuankuan')
	},
	//还款管理
	{
		path: '/querenhuankuan',
		component: () => import('../../views/loans/daihou/querenhuankuan')
	},

	//贷前管理-贷款申请管理
	//未受理 weishouli
	{
		path: '/weishouli',
		component: () => import('../../views/loans/daihou/weishouli')
	},
	//已通过
	{
		path: '/yitongguo',
		component: () => import('../../views/loans/daihou/yitongguo')
	},
]