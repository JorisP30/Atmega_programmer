$atmSelected = null;

function loadAtmForm() {
  $atm = $atmSelected.html();
  $(".amtSettings input[name='name']").val($atm);
  $.post("/php/atmInfo.php?atm="+$atm,  function(data) {
    $(".amtSettings textarea").val(data);
  });
  $("input[name='atm']").attr("value", $atm);
  $.getJSON("/php/atmArgs.php?atm=" + $atm, function(data) {
    $.each(data, function(key, val) {
      $("input[name='"+key+"']").val(val.value);
    });
  }).fail(function() {
    $(".atmSCommand input").val("");
  });
}

function takeAtmS() {
  $.ajax({
      type: 'POST',
      url: "/php/getAtm.php?format=p",
      async: false,
      success: function(data) {
        $(".atmList .list").html(data);
      }
    });
}

$(function(){
  takeAtmS();
  $(".atmList .list p").each(function() {
    $this = $(this);
    if ($this.text() == getSelectedAtm()) {
      $atmSelected = $this;
      $this.addClass("selected");
    }
  });
  $(".atmList .list p").click(function() {
    $(".atmList .list p.selected").removeClass("selected");
    $(this).addClass("selected");
    $atmSelected = $(".atmList .list p.selected");
    loadAtmForm();
  });
  $atmSelected = $(".atmList .list p.selected");
  loadAtmForm();

  $(".manageAtmList .add").click(function() {
    $atmSelected = null;
    $(".atmList .list p.selected").removeClass("selected");
    $(".amtSettings input[name='name']").val("");
    $(".amtSettings textarea").val("");
    $("input[name='atm']").attr("value", "");
    $(".atmSCommand input").val("");
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
  $(".amtSettings").keydown(function(e) {
    e.stopPropagation();
  });

  $(".atmSCommand input").keyup(function() {
    if (!$.isNumeric(this.value) && this.value != "") {
      notification($inputNumberError, 10);
    }
  });

  /* ONGLET */
  $(".atmScmd p").click(function() {
    $toHide = $(".atmScmd p.selected").attr("data-bind");
    $("." + $toHide).hide();
    $(".atmScmd p.selected").removeClass("selected");
    $(this).addClass("selected");
    $toShow = $(this).attr("data-bind");
    $("." + $toShow).show();
  });
});