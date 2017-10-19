// 标题关于我们
let item=document.querySelector('.itemus');
let itemusli=document.querySelector('.b');
itemusli.onmouseover=function(){
	item.style.display="block";
}
itemusli.onmouseout=function(){
	item.style.display="none";
}
////////////////////////////////////////////////////////////////////////
//banner
let bannerimg=document.getElementsByClassName('banner1')[0];
let bannerimgli=bannerimg.getElementsByTagName('li');
let dian=document.getElementsByClassName('dian')[0];
let dianli=dian.getElementsByTagName('li');
let banner=document.getElementsByClassName('banner')[0];
let lefts=document.getElementsByClassName('banner-left')[0];
let rights=document.getElementsByClassName('banner-right')[0];
let imgw=parseInt(window.getComputedStyle(bannerimg,null).width);
/*now--(0,0)-(-img,0)
  next--(imgs,0)-(0,0)
*/
let flag=true;
let t=setInterval(move,3000);
let now=0;
let next=0;
function move(){
	  next++;
	  if(next==bannerimgli.length){
	     next=0;
	  }
	  dianli[now].style.background="#a2a2a2";
	  dianli[next].style.background='#f1f1f1';
	  // bannerimgli[next].style.left=imgw+'px';
	  bannerimgli[next].style.left=`${imgw}px`;
	  animate(bannerimgli[now],{left:-imgw});
	  animate(bannerimgli[next],{left:0},function(){
	    flag=true;
	  });
	  now=next;
}
function movel(){
	  next--;
	  if(next<0){
	     next=bannerimgli.length-1;
	  }
	  dianli[now].style.background="#a2a2a2";
	  dianli[next].style.background='#f1f1f1';
	  // bannerimgli[next].style.left=imgw+'px';
	  bannerimgli[next].style.left=`${-imgw}px`;
	  animate(bannerimgli[now],{left:imgw});
	  animate(bannerimgli[next],{left:0},function(){
	    flag=true;
	  });
	  now=next;
}
//鼠标移入之后停止，移除继续
	banner.onmouseover=function(){
	    clearInterval(t);
	}
	banner.onmouseout=function(){
	    // move();
	   t=setInterval(move,3000); 
	}
//banner点
	for(let i=0;i<dianli.length;i++){
	 dianli[i].onclick=function(){
	  if(now==i){return}
		dianli[now].style.background="#a2a2a2";
		dianli[i].style.background='#f1f1f1';
		bannerimgli[i].style.left=`${imgw}px`;
		animate(bannerimgli[now],{left:-imgw});
		animate(bannerimgli[i],{left:0});
		now=next=i; 
		}
	}
//左右箭头
	rights.onclick=function(){
	if(!flag){
	   return;
	}
	move()
	flag=false;
	}

	lefts.onclick=function(){
	if(!flag){
	   return;
	}
	movel()
	flag=false;
	}
////////////////////////////////////////////////////////////


