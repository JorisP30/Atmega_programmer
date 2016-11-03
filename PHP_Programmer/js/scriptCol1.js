function takeAtmInfo(atm) {
	$.post("/php/atmInfo.php?atm="+atm, function(data) {
		$(".infoAtm").html(data);
	});
}

function takeAtm() {
	$.ajax({
		type: 'POST',
		url: "/php/getAtm.php?format=option",
		async: false,
		success: function(data) {
			$("#id_selectAtm").html(data);
		}
	});
}

$(document).ready(function(){
	takeAtm();
	$('#id_selectAtm').change(function(){
		takeAtmInfo(getSelectedAtm());
	});
	takeAtmInfo(getSelectedAtm());

	$("img.setting").click(function() {
	    $this = $(this);
	    $this.attr("data-popup-get", "atm=" + getSelectedAtm());
	    openPopup($this);
	  });
});