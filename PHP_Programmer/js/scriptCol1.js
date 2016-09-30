$(document).ready(function(){
	var selectAtm = document.getElementById("id_selectAtm");
	
	$('#id_selectAtm').change(function(){
		hideAllAtmInfo();
		showAtmInfo($(this).val());
	});
	
	function hideAllAtmInfo() {
		$(".infoAtm").hide();
	}
	
	function showAtmInfo(atm) {
		$("#info_" + atm).show();
	}
	
	hideAllAtmInfo();
	showAtmInfo(selectAtm.options[selectAtm.selectedIndex].value);

	$("img.setting").click(function() {
	    $this = $(this);
	    $this.attr("data-popup-get", "atm=" + getSelectedAtm());
	    openPopup($this);
	  });
});