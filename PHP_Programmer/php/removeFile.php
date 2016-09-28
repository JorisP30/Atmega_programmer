<?php
include_once("include.php");
if (!isset($_GET["file"]) || empty($_GET["file"])) {
  exit;
}
if (valideStr($_GET["file"])) {
  exit;
}
$absoluteFile = $_SERVER["DOCUMENT_ROOT"].$_GET["file"];
unlink($absoluteFile);
echo $absoluteFile;
?> 
