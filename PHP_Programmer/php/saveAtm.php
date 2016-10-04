<?php
include_once("include.php");

if (empty($_POST["name"]) || empty($_POST["info"])) {
  exit;
}
$atmPath = $absolutePathAtm."/".$_POST["name"];
if (empty($_POST["atm"])) {
  mkdir($atmPath);
  foreach ($atmFolders as $value) {
    mkdir($atmPath."/".$value);
  }
  echo "création : ".$atmPath;
} else {
  rename($absolutePathAtm."/".$_POST["atm"], $atmPath);
}
file_put_contents($atmPath."/".$fileInfoAtm, trim($_POST["info"]));

$postArray = $_POST;
$atm = $_POST["name"];

$jsonTab = $atmArgs;
foreach ($jsonTab as $key => $value) {
  $jsonTab[$key]["value"] = trim($postArray[$key]);
}
$jsonContent = json_encode($jsonTab);
file_put_contents($absolutePathAtm."/".$atm."/".$fileArgsAtm, $jsonContent);
?> 
