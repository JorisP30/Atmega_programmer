<?php
include_once("include.php");
if (!isset($_GET["atm"]) || empty($_GET["atm"])) {
  exit;
}
$file = $absolutePathAtm."/".$_GET["atm"]."/".$fileInfoAtm;
echo trim(file_get_contents($file));
?>
