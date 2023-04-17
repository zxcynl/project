	
//	四张小图片轮播
	(function(){
			var ul = document.querySelector('.show-bd').querySelector('ul');
			ul.innerHTML += ul.innerHTML
			var num = 0;
			var timer = setInterval(fn,20);
			function fn(){
				num ++;
				// 设置当ul移动了980像素时重置 translateX的值
				if(num >= 980){
					num = 0;
				}
				ul.style.transform = 'translateX(-' + num + 'px)';
			}
			ul.addEventListener('mouseover',function(){
				//清除定时器
				clearInterval(timer);
			})
			ul.addEventListener('mouseout',function(){
				//开启定时器
				timer = setInterval(fn,20);
			})
		}())