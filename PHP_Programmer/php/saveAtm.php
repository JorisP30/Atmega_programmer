<?php
include_once("include.php");

if (empty($_POST["name"]) || empty($_POST["info"])) {
  exit;
}
if (empty($_POST["atm"])) {
  mkdir($absolutePathAtm."/".$_POST["name"]);
  echo "création : ".$absolutePathAtm."/".$_POST["name"];
} else {
  rename($absolutePathAtm."/".$_POST["atm"], $absolutePathAtm."/".$_POST["name"]);
}
file_put_contents($absolutePathAtm."/".$_POST["name"]."/".$fileInfoAtm, trim($_POST["info"]));

$postArray = $_POST;
$atm = $_POST["name"];

$jsonTab = $atmArgs;
foreach ($jsonTab as $key => $value) {
  $jsonTab[$key]["value"] = trim($postArray[$key]);
}
$jsonContent = json_encode($jsonTab);
file_put_contents($absolutePathAtm."/".$atm."/".$fileArgsAtm, $jsonContent);
?> 
