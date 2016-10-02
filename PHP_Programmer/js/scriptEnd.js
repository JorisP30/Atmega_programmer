function refresh() {
  takeAtm();
  $("#id_selectAtm").val($atmSelected.text());
  takeAtmInfo(getSelectedAtm());
  loadFile();
  setArgsForAction();
} 
