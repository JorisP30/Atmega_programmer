<?php
  include_once("include.php");

  if (!isset($_GET["atm"])) {
    echo "atm";
    exit;
  }
  $atm = $_GET["atm"];
  if (!valideStr($atm)) {
    exit;
  }
  if (!empty($_FILES["files"]["name"][0])) {
    foreach ($_FILES["files"]["name"] as $k => $value) {
      $filename = $_FILES["files"]["name"];
      if (!valideStr($filename)) {
        exit;
      }
      $absolFile = $absolutePathAtm."/".$atm."/files/".$value;
      move_uploaded_file($_FILES['files']['tmp_name'][$k], $absolFile);
    }
  }
?>