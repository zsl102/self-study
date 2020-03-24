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
	var search = document.querySelector(".search_text");
	// console.log(inputNode);
	// 获取文本框
	//获取焦点
	search.onfocus = function(){
		// 当文本内容是 请输入搜索内容时  清空value
		if(search.value == "请输入搜索内容"){
			// console.log(search.value);
			search.value = "";
			search.style.color = "000";		
		}
	}
	// 失去焦点
	search.onblur = function(){
		// 当文本内容不是 原内容  就给value
		if(search.value != "请输入搜索内容"){
			search.value = "请输入搜索内容";
			search.style.color = "#CCC";
		}
	} 
})()
// banner的轮播图片
// 用js把图片放背景给banner里的标签
	// 获取bannerCarousel标签
	var bannerCarousel =document.querySelector(".bannerCarousel");
	// console.log(bannerCarousel);
	
	// 获取ul标签
	var bannerCarouselUl = document.querySelector(".bannercarousel_bt_ul");
	// console.log(bannerCarouselUl);
	
	// 获取ol标签
	var bannerCarouselOlList = document.querySelector(".bannercarousel_bt_ol").getElementsByTagName("li");
	// console.log(bannerCarouselOl);
	
	// console.log(bannerCarouselOlList)
	// 获取左侧的按钮
	var bannerCarouselBtLeft = document.querySelector(".bannercarousel_bt_left");
	// console.log(bannerCarouselBtLeft);
	
	// 获取右侧的按钮
	var bannerCarouselBtRight = document.querySelector(".bannercarousel_bt_right");
	// console.log(bannerCarouselBtRight);
	
	// var bannerCarouselWidth = bannerCarousel.offsetWidth; // 获取bannerCarousel相框的宽度
	
	// var ulWidth = bannerCarouselUl.clientWidth;  // 获取ul的宽度
	var index = 0; //默认小按钮的索引是从0开始的
	var timer;   //定义的定时器，方便清除

	function change(num) {
		bannerCarouselUl.style.marginLeft = -1200*num+"px";
		for(let i = 0; i<5;i++){
			bannerCarouselOlList[i].setAttribute("class","");
		}
		bannerCarouselOlList[num].className = "on";
		index = num;
	}
	function autoPlay() {
		index++;
		if(index == 5){
			index = 0;
		}
		change(index);  //调用change函数   将index传入
	}
	var timer = setInterval(autoPlay,1000);  //定义timer  定时器每隔1000毫秒调用一次autoPlay函数，实现自动轮播
	bannerCarousel.onmouseover = function(){ //鼠标滑上清除定时器
		clearInterval(timer);   //清除定时器
	}
	bannerCarousel.onmouseout = function(){ // 鼠标移出，定时器启动
		timer = setInterval(autoPlay,1000)
	}
	for(let i = 0; i < 5; i++){
		bannerCarouselOlList[i].onmouseover = function(){
			change(i);
		}
	}
	bannerCarouselBtLeft.onclick = function(){
		index = index-1;
		if(index == -1){
			index = 4;
			change(index);
		}else{
			change(index);
		}
	}
	bannerCarouselBtRight.onclick = function(){
		index = index+1;
		if(index == 5){
			index = 0;
			change(index);
		}else{
			change(index);
		}
	}