<?php
include_once("include.php");
if (empty($_POST["name"]) || empty($_POST["info"])) {
  exit;
}
if (empty($_POST["atm"])) {
  mkdir($absolutePathAtm."/".$_POST["name"]);
  echo "création : ".$absolutePathAtm."/".$_POST["atm"];
} else {
  rename($absolutePathAtm."/".$_POST["atm"], $absolutePathAtm."/".$_POST["name"]);
}
file_put_contents($absolutePathAtm."/".$_POST["name"]."/".$fileInfoAtm, trim($_POST["info"]));
?> 
