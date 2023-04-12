// 获取事件源
					var nav = document.querySelector('.right-items');
					var lis = nav.children;
					var downgroup = document.querySelectorAll('.downgroup');
					console.log(downgroup);
					console.log(lis);
					// 事件类型  处理程序
					// 循环注册事件
					for( var j = 0; j < lis.length; j ++){
						// 循环添加类名
						lis[j].setAttribute('index',j);
						lis[j].onmouseover = function (){
							downgroup[this.getAttribute('index')].style.display = 'block';
						}
						lis[j].onmouseout = function (){
							downgroup[this.getAttribute('index')].style.display = 'none';
						}
					}