// Check Off Specific ToDos by Clicking
$("li").click(function(){
	$(this).toggleClass("completed");
})

//Click on X to delete Todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})