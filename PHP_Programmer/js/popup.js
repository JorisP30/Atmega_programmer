$subDivId = "subDiv";
$contentDivId = "contentDiv";
$subDiv = 
  "<div id='"+ $subDivId +"' style='position:fixed; top:0px; left:0px; z-index:995; background-color:rgba(0,0,0,0.6); width:100%; height:100%'></div>";
$contentDiv = 
  "<div id='"+ $contentDivId +"' style='position:fixed; z-index:999; width:50%; top:10%; left:25%'></div>";

$overflowBody = "";

var closePopup = function() {
  $("#"+$subDivId).remove();
  $("body").css("overflow", $overflowBody);
}

function openPopup(elem) {
  $url = elem.attr("data-popup") + "?" + elem.attr("data-popup-get");
  $body = $("body");
  $body .append($subDiv);
  $.post($url, {},  function(data) {  
    $("#"+$subDivId).append($contentDiv);
    $("#"+$contentDivId).append(data);

    $overflowBody = $body .css("overflow");
    $body .css("overflow", "hidden");

    $("#"+$contentDivId).click(function(e) {
      e.stopPropagation();
    });
    $("#"+$subDivId).click(closePopup);
  });
}

$("[data-popup-auto]").click(function() {
    openPopup($(this));
});
