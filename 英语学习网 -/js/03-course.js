
//英语课程轮播
(function(){
	var ul = document.querySelector('.center').querySelector('ul');
	var lis = ul.querySelectorAll('li');
	var left  = document.querySelector('.left');
	var imgs  =left.querySelectorAll('img');
	for( var i = 0 ; i < lis.length ; i++){
		// 添加索引
		lis[i].setAttribute('index',i);
		
		// 鼠标移入事件
		lis[i].addEventListener('mouseover',function(){
			// 停止轮播
			clearInterval(timer);
			// 将灰色图片换为彩色图片
			this.children[0].style.display = 'block';
			this.children[1].style.display = 'none';
			// 将左侧所有图片隐藏并显示对应索引的图片
			for( var i = 0 ; i < imgs.length; i++){
				imgs[i].style.display = 'none';
			}
			imgs[this.getAttribute('index')].style.display = 'block'
		})
		
		// 鼠标移出事件
		lis[i].addEventListener('mouseout',function(){
			// 开启定时器
			timer = setInterval(fn,2000);
			
			// 将彩色图片换为灰色
			this.children[0].style.display = 'none';
			this.children[1].style.display = 'block';
			
			
			for( var i = 0 ; i < imgs.length; i++){
				imgs[i].style.display = 'none';
			}
			imgs[this.getAttribute('index')].style.display = 'block'
		})
	}
	var num = 0;
	//自动轮播设置
	var timer = setInterval(fn,2000)
	function fn(){
		num ++;
		if( num >= imgs.length){
			num = 0;
		}
		for( var i = 0 ; i < imgs.length; i++){
				imgs[i].style.display = 'none';
			}
				imgs[num].style.display = 'block'
	}
	//设置悬浮在图片上时停止轮播
	left.addEventListener('mouseover',function(){
				clearInterval(timer);
			})
	left.addEventListener('mouseout',function(){
				timer = setInterval(fn,2000);
			})
}())
