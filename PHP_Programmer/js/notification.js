
function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

$contentDivclass = "notificationContentDiv";

function closeNotification(id) {
  $notification = $("#" + id);
  $notification.fadeOut(500, function() {
    $notification.remove();
  });
}

function notification($content, $animationTime) {
  $animationTime = (typeof $animationTime === 'undefined') ? 5000 : $animationTime * 1000;

  let id = uniqId();
  $notificationContentDiv = 
  "<div id='"+id+"' class='"+ $contentDivclass +"' style='position:fixed; z-index:999;'></div>";
  $("body").append($notificationContentDiv);
  $notification = $("#" + id);
  $notification.hide();
  $notification.html($content);
  $notification.css("bottom", "-"+$notification.outerHeight(true)+"px");
  $notification.show();
  $notification.animate({
    bottom:  "2%"
  }, 1000);
  setTimeout(function() {
    closeNotification(id);
  }, $animationTime);
  $notification.click(function() {
    closeNotification(id);
  });
} 

function notificationByUrl($url) {
  $.post($url, function(data) {
    notification(data);
  });
}