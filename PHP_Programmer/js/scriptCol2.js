$(function(){

  $selectFile = $(".selectFile");

  function printAtmFile(atm) {
    $selectFile.addClass("fileLoad");
    $selectFile.html("");
    $.post($selectFile.attr("readatmfile"), {atm : atm}, function (data) {
      $selectFile.html(data);
      $selectFile.removeClass("fileLoad");
    });
  }

  $('#id_selectAtm').change(function(){
    var atm = $(this).val();
    printAtmFile(atm);
  });
  printAtmFile(getSelectedAtm());
}); 
