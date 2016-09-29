$divUploadDD = $("#uploadDD");
$(document).on("dragenter", "body", function(e) {
  e.preventDefault();
  $divUploadDD.fadeIn(500);
  return false;
});
$(document).on('dragleave', '#uploadDD', function(e) {
  e.preventDefault();
  $divUploadDD.fadeOut(400);
  return false;
});
$('#fileupload').bind('fileuploaddrop', function (e, data) {
  $divUploadDD.fadeOut(400);
});