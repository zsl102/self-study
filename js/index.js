// // 产品向上移动2px动画
// // 自执行函数
// (function(){
// // 获取li  是一个数组集合
// 	var list = document.getElementsByClassName('productsSon');
// 	console.log(list);
// 	var marginTop = "-2px";
// 	// for循环  找到每个li
// 	for( i = 0; i<list.length;i++){
// 		list[i].onmouseover = function(){
// 		 	this.style.transform = "translateY("+ marginTop +")";
// 	     	this.style.transition = " all 0.3s";
// 	     	this.style.boxShadow=" 0 5px 5px rgba(0,0,0,0.3)";
// 		}
// 		list[i].onmouseout = function(){
// 			this.style.transform = "translateY(0)";
// 			this.style.boxShadow = "none";
// 		}
// 	}
// })()

(function(){
	var productsFather = document.getElementsByClassName('products-father')[0];
	// console.log(productsFather);
	var list = productsFather.childNodes;
	// console.log(list);
	var marginTop = "-5px";
	// for循环  找到每个li
	for( i = 0; i<list.length;i++){
		list[i].onmouseover = function(){
		 	this.style.transform = "translateY("+ marginTop +")";
	     	this.style.transition = " all 0.3s";
	     	this.style.boxShadow=" 0 5px 5px rgba(0,0,0,0.3)";
		}
		list[i].onmouseout = function(){
			this.style.transform = "translateY(0)";
			this.style.boxShadow = "none";
			this.style.transition = " all 0.3s";
		}
	}
})()



// 封装函数
function transformMove(moveName){
	// 获取 模块中所有 相同className 的元素
	var list = document.getElementsByClassName(moveName);
	// console.log(list);
	// 定义变量
	var marginTop = "-5px";
	// for循环  
	for( i=0;i<list.length;i++){
		list[i].onmouseover = function(){
			// 向上移动5px的动画
			this.style.transform = "translateY("+marginTop+")";
			// 给元素添加 阴影
			this.style.boxShadow = "0 5px 5px rgba(0,0,0,0.3)";
			// 添加过度效果
			this.style.transition = "all 0.3s";
		}
		list[i].onmouseout = function(){
			this.style.transform = "translateY(0)";
			this.style.boxShadow = "none";
		}
	}
}
//调用函数  传参
(function(){
	transformMove("moveTop");
})();