//银行流水
export default [
	{
		path:'/bankLiu',
		component:()=>import('../../views/Finance/BankTwo')
	},
	{
		path:'/bankAccount',
		component:()=>import('../../views/Finance/BankAccount'),
		// children:[
		// 	{
		// 		path:'appEdit',
		// 		component:()=>import('../../components/BankAccountAppEdit')
		// 	}
			
		// ]
	}
]