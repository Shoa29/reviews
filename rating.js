
$(document).ready(function(){
  var maxLength = 200;
  console.log("ready is working");
	$(".fb-text").each(function(){
    var myStr = $(this).text();
    console.log(myStr);
		if($.trim(myStr).length > maxLength){
			var newStr = myStr.substring(0, maxLength);
			var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
			$(this).empty().html(newStr);
			$(this).append(' <a href="javascript:void(0);" style="color:grey;" class="read-more">read more...</a>');
			$(this).append('<span class="more-text">' + removedStr + '</span>');
		}
	});
	$(".read-more").click(function(){
		$(this).siblings(".more-text").contents().unwrap();
    $(".card").css("height", "500px");
		$(this).remove();
	});
});