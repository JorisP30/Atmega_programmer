$selectFile = $(".selectFile");

function printAtmFile(atm) {
  $selectFile.addClass("fileLoad");
  $selectFile.html("");
  $.post($selectFile.attr("readatmfile"), {atm : atm}, function (data) {
    $selectFile.html(data);
    $selectFile.removeClass("fileLoad");
  });
}
function loadFile() {
  var atm = getSelectedAtm();
  printAtmFile(atm);
  $selectedFile = null;
  toggleWriteButton();
}

$(function(){
  $('#id_selectAtm').change(function(){
    loadFile();
  });
  printAtmFile(getSelectedAtm());

  $(".refreshFile").click(function() {
    loadFile();
  });

  $(".removeFile.button").click(function() {
    if ($selectedFile == null) {
      return;
    }
    $this = $(this);
    $this.attr("data-popup-get", "file=" + $selectedFile.attr("absoluteFile"));
    openPopup($this);
  });
}); 
