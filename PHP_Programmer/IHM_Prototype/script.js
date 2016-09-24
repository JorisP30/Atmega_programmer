$(document).ready(function(){
	$selectedFile = null;
    $(".selectFile p").click(function() {
		if ($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			$selectedFile = null;
		} else {
			$(".selected").removeClass("selected");
			$(this).addClass("selected");
			$selectedFile = $(this);
		}
		toggleWriteButton();
	});
	
	function toggleWriteButton() { //hello joris
		if ($selectedFile == null) {
			$("#writeButton").addClass("inactive");
		} else {
			$("#writeButton").removeClass("inactive");
		}
	}
	
	$("#writeButton").click(function() {
		
	});
	$("#readButton").click(function() {
		
	});
	$("#removeButton").click(function() {
		
	});
});