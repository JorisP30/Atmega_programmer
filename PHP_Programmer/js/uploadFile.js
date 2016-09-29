$(document).ready(function(){
	$(".addFile").click(function() {
		$("#fileupload").click();
	});
	$("#fileupload").fileupload({
        add: function(e, data) {
          data.url = '/prog/php/upload.php?atm=' + getSelectedAtm();
          data.submit();
        },
        progressall: function(e, data) {
          var progress = parseInt(data.loaded / data.total * 100, 10);
          $('.progressUploadFile').show();
          $('.progressUploadFile').css('width', progress + '%');
        },
        done: function (e, data) {
            loadFile();
            setTimeout(function() {
              $('.progressUploadFile').fadeOut(2000);
            }, 500);
        }
	});
});