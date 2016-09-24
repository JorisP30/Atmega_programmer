$(document).ready(function(){
	$selectedFile = null;
    $(".selectFile p").click(function() {
		$selectedFile = $(this);
		toggleWriteButton();
		$(this).addClass("selected");
	});
	
	function toggleWriteButton() {
		if ($selectedFile == null) {
			$("#writeButton").addClass("inactive");
		} else {
			$("#writeButton").removeClass("inactive");
		}
	}
});