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

// 盒子移动动画
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

// input 
(function(){
	// 获取搜索框节点
	var inputNode = document.getElementsByClassName("search")[0];
	// console.log(inputNode);
	// 获取文本框
	var search = inputNode.childNodes[0];
	// console.log(search);
	//获取焦点
	search.onfocus = function(){
		// 当文本内容是 请输入搜索内容时  清空value
		if(search.value == "请输入搜索内容"){
			console.log(search.value);
			search.value = "";		
		}
	}
	// 失去焦点
	search.onblur = function(){
		// 当文本内容不是 原内容  就给value
		if(search.value != "请输入搜索内容"){
			search.value = "请输入搜索内容";
		}
	} 
})()
// banner的轮播图片
// 用js把图片放背景给banner里的标签
	// 获取bannerCarousel 这个元素 
	var bannerCarousel = document.getElementsByClassName("bannerCarousel");
	// 获取ul标签
	var bannerCarouselUl = bannerCarousel[0].childNodes[1];
	// 获取ul的宽度
	var ulWidth = bannerCarouselUl.clientWidth;
	// console.log(ulWidth);
	// 获取一个li的宽度
	var moveX = "1200px";
	function run(){
		bannerCarouselUl.style.left = "-50px";
	}