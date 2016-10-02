function setArgsForAction() {
  $atm = getSelectedAtm();
  $.getJSON("/prog/php/atmArgs.php?atm=" + $atm, function(data) {
    $args = "";
    $.each(data, function(key, val) {
      $args += val.name + " " + val.value + " ";
    });
    $("div[args]").attr("args", $args);
  }).fail(function() {
    $("div[args]").attr("args", "");
  });
}

$(function(){
  
  function sendAction(url, arg) {
    $.post(url, arg, function (data) {
      writeInConsole(data);
      setActionButtonActive();
    });
  }
  
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
  function writeButton($this) {
    if ($("#writeButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($this.attr("command") + " " + $this.attr("args") + $selectedFile.attr("absoluteFile"));
    setActionButtonInactive();
    sendAction($this.attr("url"), {file : $selectedFile.attr("absoluteFile")});
  }
  function readButton($this) {
    if ($("#readButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($this.attr("command") + " " + $this.attr("args"));
    setActionButtonInactive();
    sendAction($this.attr("url"), {});
  }
  function eraseButton($this) {
    if ($("#removeButton").hasClass("inactive")) {
      return;
    }
    writeCommandeInConsole($this.attr("command") + " " + $this.attr("args"));
    setActionButtonInactive();
    sendAction($this.attr("url"), {});
  }

  $("#writeButton").click(function() {
    writeButton($(this));
  });
  $("#readButton").click(function() {
    readButton($(this));
  });
  $("#removeButton").click(function() {
    eraseButton($(this));
  });

  $('#id_selectAtm').change(function() {
    setArgsForAction();
  });
  setArgsForAction();

  $("body").keypress(function(event) {
    switch (event.which) {
      case 114:
      readButton($("#readButton"));
      break;
      case 101:
      eraseButton($("#removeButton"));
      break;
      case 119:
      writeButton($("#writeButton"));
      break;
      default:
      break;
    }
  });
});