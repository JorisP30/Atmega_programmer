$divUploadDD = $("#uploadDD");
$(document).on("dragenter", "body", function(e) {
  e.preventDefault();
  $divUploadDD.show();
  return false;
});
$(document).on('dragleave', '#uploadDD', function(e) {
  e.preventDefault();
  $divUploadDD.hide();
  return false;
});
$('#fileupload').bind('fileuploaddrop', function (e, data) {
  $divUploadDD.hide();
});