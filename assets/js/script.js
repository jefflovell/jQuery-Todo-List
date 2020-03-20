// Check Off Specific ToDos by Clicking
$("li").click(function(){
	//if li gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn black
		console.log("it's gray");
	}
	//else
		//turn gray
	$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
});