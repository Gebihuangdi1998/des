
require('./modules/banner')
require('./modules/header')
	
	
	var timer = null;
	var index = 0;
	var $olist = $("ol li");
	timer = setInterval(fn , 2000);
	function fn(){
		index++;
		if(index == $olist.length){
			index = 0;
		}
		$olist.eq(index).fadeIn(1500).siblings().fadeOut(500)

	}
//	var navi = document.getElementById("navi").children();
//	var list = navi[i].children;
//	for(var i = 0 ; i < navi[i].length;i++){
//		list.onclick = function(){
//			alert()
//		}
//	}
console.log("ssss")
