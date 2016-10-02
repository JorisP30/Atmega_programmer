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

function checkArgumentMissingError($button) {
  if ($button.attr("args") == "") {
    notification($argumentMissingError, 10);
  }
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

  function buttonAction($this) {
    if ($this.hasClass("inactive")) {
      return;
    }
    checkArgumentMissingError($this);
    writeCommandeInConsole($this.attr("command") + " " + $this.attr("args") + "");
    setActionButtonInactive();
    sendAction($this.attr("url"), {});
  }
  function writeButton($this) {
    if ($this.hasClass("inactive")) {
      notification($selectedFileError, 10);
      return;
    }
    checkArgumentMissingError($this);
    writeCommandeInConsole($this.attr("command") + " " + $this.attr("args") + $selectFile.text());
    setActionButtonInactive();
    sendAction($this.attr("url"), {});
  }
  function readButton($this) {
    buttonAction($this);
  }
  function eraseButton($this) {
    buttonAction($this);
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

  $(document).bind('keydown', function(event) {
    if (!event.originalEvent.shiftKey) {
      return;
    }
    switch (event.which) {
      case 82:
      readButton($("#readButton"));
      break;
      case 69:
      eraseButton($("#removeButton"));
      break;
      case 87:
      writeButton($("#writeButton"));
      break;
      default:
      break;
    }
  });
});