    
    
    function timer(intDiff){
    window.setInterval(function(){
     var day=0,
         hour=0,
		 minute=0,
		 second=0,
		 secondSuccess=0;
		 
        if(intDiff > 0){
          day = Math.floor(intDiff / (60 * 60 * 24));
          hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
		  minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
		  second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		  secondSuccess = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
        
		if (minute <= 9) minute = '0' + minute;
		if (second <= 9) second = '0' + second;
		
        $('#day_show').html(day+"天");
        $('#hour_show').html('<s id="h"></s>'+hour+'：');
        $('#minute_show').html('<s></s>'+minute+':');
        $('#minute_await').html('<s></s>'+minute+':');
        $('#second_show').html('<s></s>'+second);
        $('#second_success').html('<s></s>'+secondSuccess);
        
        intDiff--;
        
        if(intDiff<0){
             $('.affirm button').css("background-color","#9A9A9A")
             $('.affirm button').attr("disabled",true)
        }
        }, 1000);
    } 
    $(function(){
       timer(intDiff);
    });		

