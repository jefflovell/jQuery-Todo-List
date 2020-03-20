// Check Off Specific ToDos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Create Todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//set value to an empty string
		$(this).val("");
		// create a new li and add to ul (using append())
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

//Toggle the form input
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});