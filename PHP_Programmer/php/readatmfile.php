<?php
  include_once("include.php");
  $folder = "files";
  if (!isset($_POST["atm"]) || empty($_POST["atm"])) {
    exit;
  }
  if (!empty($_GET["folder"]) && valideStr($_GET["folder"])) {
    $folder = $_GET["folder"];
  }
  $urlAtmDir = $urlBaseAtm."/".$_POST["atm"]."/".$folder;
  $dir = $_SERVER["DOCUMENT_ROOT"].$urlAtmDir;
  $files = scandir($dir);
  $rep = "";
  for ($i = 2; $i < count($files); ++$i) {
    $nbL = count(file($dir."/".$files[$i]));
    if ($files[$i][0] != '.') {
      $rep .= "<p absoluteFile='".$urlAtmDir."/".$files[$i]."'>".$files[$i]
      ."<span>".number_format(filesize($dir."/".$files[$i]) / 1000, 2)." Ko ".$nbL."L</span>"
      ."</p>";
    }
  }
  echo $rep;
?>
