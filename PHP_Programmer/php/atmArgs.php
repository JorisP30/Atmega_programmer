<?php
include_once("include.php");
if (!isset($_GET["atm"]) || empty($_GET["atm"])) {
  exit;
}
echo file_get_contents($absolutePathAtm."/".$_GET["atm"]."/".$fileArgsAtm);
?> 
