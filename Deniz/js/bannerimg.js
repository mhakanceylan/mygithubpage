function Slider() {
	$(".mainback").delay(300).fadeIn(1000);
	$(".mainback1").delay(300).fadeIn(1000);
	$(".banner #1").hide().fadeIn(1000);
	$(".banner #1").delay(4000).fadeOut(1000);
	var sc =$(".banner img").size();
	var count = 2;
	setInterval(function(){
	$(".banner #"+count).hide().fadeIn(1000);
	$(".banner #"+count).delay(4000).fadeOut(1000);
		if(count==sc){
			count=1;
		}else{
			count=count +1;
		}
	}, 6000);
}