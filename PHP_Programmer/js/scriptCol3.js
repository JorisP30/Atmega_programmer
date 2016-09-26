$(function(){
  
  function sendAction(url, arg) {
    $.post(url, arg, function (data) {
      writeInConsole(data);
      setActionButtonActive();
    });
  }

  $(".selectFile").click(function(event) {
    $this = $(event.target);
    if (!$this[0].hasAttribute("absoluteFile")) {
      return;
    }
    if ($this.hasClass("selected")) {
      $this.removeClass("selected");
      $selectedFile = null;
    } else {
      $(".selected").removeClass("selected");
      $this.addClass("selected");
      $selectedFile = $this;
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
  });

  $("#readButton").click(function() {
    if ($("#readButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($(this).attr("commande"));
    setActionButtonInactive();
    sendAction($(this).attr("url"), {});
  });

  $("#removeButton").click(function() {
    if ($("#removeButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($(this).attr("commande"));
    setActionButtonInactive();
    sendAction($(this).attr("url"), {});
  });
});