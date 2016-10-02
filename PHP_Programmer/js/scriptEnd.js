function refresh() {
  takeAtm();
  if ($atmSelected != null) {
    $("#id_selectAtm").val($atmSelected.text());
  }
  takeAtmInfo(getSelectedAtm());
  loadFile();
  setArgsForAction();
} 
