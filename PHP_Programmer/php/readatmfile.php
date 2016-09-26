<?php
  include_once("constante.php");
  if (!isset($_POST["atm"]) || empty($_POST["atm"])) {
    exit;
  }
  $urlAtmDir = $urlBaseAtm."/".$_POST["atm"];
  $dir = $_SERVER["DOCUMENT_ROOT"].$urlAtmDir;
  $files = scandir($dir);
  $rep = "";
  for ($i = 2; $i < count($files); ++$i) {
    $rep .= "<p absoluteFile='".$urlAtmDir."/".$files[$i]."'>".$files[$i]."</p>";
  }
  echo $rep;
?>
