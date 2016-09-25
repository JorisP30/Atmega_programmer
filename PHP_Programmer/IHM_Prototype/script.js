$(document).ready(function(){
	$console = $(".outputShell");
	$selectedFile = null;
	var actionButtons = ["readButton", "removeButton"];
	
	function getSelectedAtm() {
		var selectAtm = document.getElementById("id_selectAtm");
		var atm = selectAtm.options[selectAtm.selectedIndex].value;
		return atm;
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
	
	function toggleWriteButton() {
		if ($selectedFile == null) {
			$("#writeButton").addClass("inactive");
		} else {
			$("#writeButton").removeClass("inactive");
		}
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
	
	function writeInConsole($str) {
		$console.append("<p>" + $str + "</p>");
		var console = document.getElementById("console");
		console.scrollTop = console.scrollHeight;
	}
	
	function writeCommandeInConsole($cmd) {
		writeInConsole("[" + getSelectedAtm() + "]> " + $cmd);
	}
	
	$("#writeButton").click(function() {
		if ($("#writeButton").hasClass("inactive")) {
			return;
		}
		writeCommandeInConsole($(this).attr("commande") + " " + $selectedFile.attr("absoluteFile"));
		setActionButtonInactive();
		setTimeout(function() {
			writeInConsole("Done");
			setActionButtonActive();
		}, 1000);
	});
	$("#readButton").click(function() {
		if ($("#readButton").hasClass("inactive")) {
			return;
		}
		writeCommandeInConsole($(this).attr("commande"));
		setActionButtonInactive();
		setTimeout(function() {
			writeInConsole("Done");
			setActionButtonActive();
		}, 1000);
	});
	$("#removeButton").click(function() {
		if ($("#removeButton").hasClass("inactive")) {
			return;
		}
		writeCommandeInConsole($(this).attr("commande"));
		setActionButtonInactive();
		setTimeout(function() {
			writeInConsole("Done");
			setActionButtonActive();
		}, 1000);
	});
});