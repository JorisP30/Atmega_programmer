$(function(){

  function toggleWriteButton() {
    if ($selectedFile == null) {
      $("#writeButton").addClass("inactive");
    } else {
      $("#writeButton").removeClass("inactive");
    }
  }

  $(".selectFile p").click(function() {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
      $selectedFile = null;
    } else {
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
      $selectedFile = $(this);
    }
    toggleWriteButton();
  });
  
  function setActionButtonInactive() {
    $.each(actionButtons, function(index, value) {
      $("#" + value).addClass("inactive");
    });
    $("#writeButton").addClass("inactive");
  }
  
  function setActionButtonActive() {
    toggleWriteButton();
    $.each(actionButtons, function(index, value) {
      $("#" + value).removeClass("inactive");
    });
  }

  $("#writeButton").click(function() {
    if ($("#writeButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($(this).attr("commande") + " " + $selectedFile.attr("absoluteFile"));
    setActionButtonInactive();
    sendAction($(this).attr("url"), {file : $selectedFile.attr("absoluteFile")});
    setActionButtonActive();
  });

  $("#readButton").click(function() {
    if ($("#readButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($(this).attr("commande"));
    setActionButtonInactive();
    sendAction($(this).attr("url"), {});
    setActionButtonActive();
  });

  $("#removeButton").click(function() {
    if ($("#removeButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($(this).attr("commande"));
    setActionButtonInactive();
    sendAction($(this).attr("url"), {});
    setActionButtonActive();
  });
});