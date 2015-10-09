function selectStep(sayi){
	$(".content").hide();
	$("#content"+sayi).show();
	if(sayi==3){
		$(".content").hide();
		$(".banner").fadeOut(250);
		$("#content3").fadeIn(250);
	}else{
			$(".banner").fadeIn(1000);
			$("#content3").fadeOut(100);
	}
	
}