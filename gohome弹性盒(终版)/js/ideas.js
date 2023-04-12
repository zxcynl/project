// 获取事件源
			var ideas = document.querySelector('.ideas');
			var text = ideas.querySelector('textarea');
			var btn = ideas.querySelector('button');
			var ul = ideas.querySelector('ul');
			
			console.log(text);
			console.log(btn);
			console.log(ul);
			// 事件类型
			btn.onclick = function (){
				if(text.value == ''){
					alert('您的输入为空，请重新输入');
				}else{
					var li = document.createElement('li');
				li.innerHTML = text.value + "<a href='javascript:;'>删除<a>";
				ul.insertBefore(li,ul.children[0]);/*设置在最前方*/
				text.value = '';
				var as = ul.querySelectorAll('a');
				for( var i = 0; i < as.length; i ++){
					as[i].onclick = function(){
						
					ul.removeChild(this.parentNode);
					}
				}
				}
				
			}