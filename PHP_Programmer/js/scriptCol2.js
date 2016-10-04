$selectFile = $(".selectFile");

function printAtmFile(atm) {
  $selectFile.addClass("fileLoad");
  $selectFile.html("");
  $.post($selectFile.attr("readatmfile"), {atm : atm}, function (data) {
    $selectFile.html(data);
    $selectFile.removeClass("fileLoad");
    if ($selectedFile == null) {
      return;
    }
    $oldSelectedFile = $("[absoluteFile='"+$selectedFile.attr("absoluteFile")+"']");
    if (!$oldSelectedFile.length) {
      $selectedFile = null;
    } else {
      $selectedFile = $oldSelectedFile;
      $selectedFile.addClass("selected");
    }
    toggleWriteButton();
  });
}
function loadFile() {
  var atm = getSelectedAtm();
  printAtmFile(atm);
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
      notification($selectedFileError, 10);
      return;
    }
    $this = $(this);
    $this.attr("data-popup-get", "file=" + $selectedFile.attr("absoluteFile"));
    openPopup($this);
  });
}); 

$(".selectFile").dblclick(function(event) {
    $this = $(event.target);
    if (!$this[0].hasAttribute("absoluteFile")) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    window.open($this.attr("absoluteFile"), "_blank");
});

$(".selectFile").click(function(event) {
    $this = $(event.target);
    if (!$this[0].hasAttribute("absoluteFile")) {
      return;
    }
    if ($this.hasClass("selected")) {
      $this.removeClass("selected");
      $selectedFile = null;
    } else {
      $("p[absoluteFile].selected").removeClass("selected");
      $this.addClass("selected");
      $selectedFile = $this;
    }
    toggleWriteButton();
});
$("#selectFileOnglet p").click(function(event) {
  $dataToHide = $("#selectFileOnglet .selected").attr("data-bind");
  $("#selectFileOnglet .selected").removeClass("selected");
  $($dataToHide).hide();
  $this = $(this);
  $this.addClass("selected");
  $dataToSow = $this.attr("data-bind");
  $($dataToSow).show();
});