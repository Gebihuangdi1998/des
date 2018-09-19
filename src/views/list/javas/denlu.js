require('./modules/a')
console.log('thi is lit杀手=。-。。。=s')
var h = 168;
	var nav = document.querySelector("#head-tou");
	window.onscroll = function(){
		//获取页面滚走距离
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
		if( sTop > h ){
			nav.style.position = "fixed";
			nav.style.top = 0;
		}else{
			nav.style.position = "static";
		}
	}
	
	var btn = document.querySelector(".banner-bt")
	var btn1 = document.querySelector(".banner-btn")
	btn.onclick = function(){
		btn.parentNode.style.display = "none";
		btn1.parentNode.parentNode.style.display = "block";
	}
	btn1.onclick = function(){
		btn.parentNode.style.display = "block";
		btn1.parentNode.parentNode.style.display = "none";
	}
	$("#navi").delegate( "li","mouseover" ,function(){
		$(this).children(0).css({
			"background-color":"#00aef3",
		}).children(1).css("display","block");
		
		
			//$("#navi").style.background = "#fffff";
	})
	$("#navi").delegate("li","mouseout" ,function(){
		$(this).children(0).css({
			"background-color":"#2b2b2b",
		}).children("p").css("display","none");
		
	})
	
	
	
	var $head = $(".head-p")
		$head.mouseover(function(){
			$(this).children("p").css("display","block");
		}).mouseout(function(){
			$(this).children("p").css("display","none");
		})
		
		
	var $abs = $(".head-tou-b")	
		$abs.mouseover(function(){
			$(this).children(".pp").animate({"scrollTop":0},1000,function(){
			flag = true;
		});
			$(this).children(".pp").css("display","block");
		}).mouseout(function(){
			$(this).children(".pp").css("display","none");
		})

	var $fixed = $(".top") 
		$fixed.click(function(){

		})
	

				


















//字符串转对象
//							arrList = JSON.parse(arrList); //object
//							 var cookieName = arrList[0].username;
//							 var cookiePwd = arrList[0].userPwd;
//							var duname = $("#den-name").val();
//							var dpwd = $("#den-pwd").val();
//							if( cookieName== duname && cookiePwd== dpwd){
//								alert("登陆成功")
//							}else{
//								alert("用户名或密码错误");
//							}
//							
//
							