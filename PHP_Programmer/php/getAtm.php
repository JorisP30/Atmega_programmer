<?php
include_once("include.php");
$format = "option";
if (isset($_GET["format"]) && !empty($_GET["format"])) {
  $format = $_GET["format"];
}
$dir = $absolutePathAtm;
$files = scandir($dir);
$rep = "";
for ($i = 2; $i < count($files); ++$i) {
  if ($files[$i][0] != '.') {
    $rep .= "<".$format.">".$files[$i]."</".$format.">";
  }
}
echo $rep;
?>
 
