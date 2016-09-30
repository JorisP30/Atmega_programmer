$atmSelected = null;

function loadAtmForm() {
  $(".amtSettings input[name='name']").val($atmSelected.html());
  $.post("/prog/php/atmInfo.php?atm="+$atmSelected.html(),  function(data) {
    $(".amtSettings textarea").val(data);
  });
  $("input[name='atm']").attr("value", $atmSelected.html());
  console.log($("input[name='atm']"));
}

function takeAtmS() {
  $.ajax({
      type: 'POST',
      url: "/prog/php/getAtm.php?format=p",
      async: false,
      success: function(data) {
        $(".atmList .list").html(data);
      }
    });
}

$(function(){
  takeAtmS();
  $(".atmList .list p").click(function() {
    $(".atmList .list p.selected").removeClass("selected");
    $(this).addClass("selected");
    $atmSelected = $(".atmList .list p.selected");
    loadAtmForm();
  });
  $(".atmList .list p").first().addClass("selected");
  $atmSelected = $(".atmList .list p.selected");
  loadAtmForm();

  $(".manageAtmList .add").click(function() {
    $atmSelected = null;
    $(".atmList .list p.selected").removeClass("selected");
    $(".amtSettings input[name='name']").val("");
    $(".amtSettings textarea").val("");
    $("input[name='atm']").attr("value", "");
  });

  $(".popupButton.cancel").click(closePopup);
  $(".popupButton.confirm").click(function() {
    $form = $(".amtSettings form");
    $.ajax({
      type: 'POST',
      url: $form.attr("action"),
      async: false,
      data: $form.serialize(),
      success: function(data) {
        refresh();
        closePopup();
      }
    });
  });
});