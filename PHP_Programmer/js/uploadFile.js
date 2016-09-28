$(document).ready(function(){
	$(".addFile").click(function() {
		$("#fileupload").click();
	});
	$("#fileupload").change(function() {
		//$("#upload").submit();
	});
	$("#fileupload").fileupload({
        add: function(e, data) {
          data.url = '/prog/php/upload.php?atm=' + getSelectedAtm();
          data.submit();
        },
        done: function (e, data) {
            loadFile();
        }
	});
});