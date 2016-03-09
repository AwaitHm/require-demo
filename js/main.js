require.config({
	baseUrl : "js",           //默认路径
	paths:{                   //自定义名称
		"jquery" : ["jquery-1.11.2.min"],
		"index":["index"],
		"carousel":["owl.carousel"]
	},
	shim:{                    //没有采用AMD规范编写
		'carousel':{
			deps:['jquery'],
			exports:'carousel'
		},
		'index':{
			deps:['jquery','carousel'],  //表明该模块的依赖性
			exports:'index'   //（输出的变量名）
		}
	},
	/*map:{
		'*':{
			'css' : 'css'
		}
	}*/
})
require(["jquery","carousel","index"],function(jquery, index){
	
})


