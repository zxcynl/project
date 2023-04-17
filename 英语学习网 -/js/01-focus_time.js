
//顶部大图轮播
(function(){
	var focus = document.querySelector('#focus');
	var ul = document.querySelector('#button');
	var imgs = focus.querySelectorAll('img');
//	定时轮播
		var num = 0;
		var timer = setInterval(fn,3000);
		function fn(){
				num++ ;
				if( num == imgs.length){
					num = 0;
				}
				for( var i = 0; i < imgs.length; i++){
					imgs[i].style.display = 'none';
					lis[i].style.backgroundColor = 'white';
				}
				imgs[num].style.display = 'block';
				lis[num].style.backgroundColor = 'deepskyblue';
		}
		
		
			//根据图片数量创建圆点
		for( var i = 0 ;i < imgs.length; i++){
			var li = document.createElement('li');
			ul.appendChild(li);
			var lis = ul.querySelectorAll('li');
//			console.log(lis);
			lis[i].setAttribute('index',i);
			
			//设置小圆点移入时显示对应的颜色和图片
			lis[i].addEventListener('mouseover',function(){
				//清除定时器(鼠标移入时轮播暂停)
				clearInterval(timer);
				
				//将所有图片隐藏，原点变为白色
				for( var i = 0; i < lis.length; i++){
					imgs[i].style.display = 'none';
					lis[i].style.backgroundColor = 'white'
				}
				// 设置对应的li颜色和图片显示
				lis[this.getAttribute('index')].style.backgroundColor = 'deepskyblue';
				imgs[this.getAttribute('index')].style.display = 'block';
			})
			lis[i].addEventListener('mouseout',function(){
					//鼠标移出时开启定时器
					timer = setInterval(fn,3000);
					
			})
		}
		
		
}());
