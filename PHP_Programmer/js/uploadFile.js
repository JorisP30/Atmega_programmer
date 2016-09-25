$(document).ready(function(){
	$(".reachFile").click(function() {
		$("#fileupload").click();
	});
	$("#fileupload").change(function() {
		//$("#upload").submit();
	});
	$("#fileupload").fileupload({
		dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        }
	});
});