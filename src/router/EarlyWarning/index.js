// 贷后预警
export default [
	{
		path:'/EarlyWarningShow',
		component:()=>import('../../views/EarlyWarning/show')
    },
    {
		path:'/EarlyWarningAdd',
		component:()=>import('../../views/EarlyWarning/add')
    },
]