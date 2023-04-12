// 获取事件源
			var times = document.querySelector('.times').querySelectorAll('li');
			console.log(times);
			var tables = document.querySelector('.table').querySelectorAll('table');
			console.log(tables);
			// 循环注册事件
			for( var i = 0; i < times.length; i ++){
				times[i].setAttribute('index',i);
				times[i].onmouseover = function (){
					for( var i = 0; i < times.length; i ++){
							tables[i].style.display = 'none';
						}
					tables[this.getAttribute('index')].style.display = 'block';
				}
				times[i].onmouseout = function (){
					for( var i = 0; i < times.length; i ++){
							tables[i].style.display = 'none';
						}
					tables[this.getAttribute('index')].style.display = 'block';
				}
			}