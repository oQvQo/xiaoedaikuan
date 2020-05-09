// 贷后预警
export default [
    {
		path:'/EarlyWarningAdd',
		component:()=>import('../../views/EarlyWarning/add')
	},
	{
		path:'/EarlyWarning',
		component:()=>import('../../views/EarlyWarning')
	}
]