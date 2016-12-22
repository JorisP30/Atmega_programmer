<?php
include_once("include.php");
if (!isset($_POST["atm"]) || empty($_POST["atm"])) {
  exit;
}
date_default_timezone_set('UTC');
$atm = $_POST["atm"];
$filename = $atm."/".$atmFolders[1]."/".date("d-m-Y H:i:s");
file_put_contents($absolutePathAtm."/".$filename, "Retoure de la fonction READ\n");
echo "Write result in ".$filename;
?> 
