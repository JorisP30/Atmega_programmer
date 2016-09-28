$(function() {
  $(".popupButton.cancel").click(closePopup);
  $(".popupButton.confirm").click(function() {
    $.post($(this).attr("url"), {}, closePopup);
  });
}); 
