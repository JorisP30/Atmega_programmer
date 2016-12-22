<?php
include_once("include.php");
if (!isset($_POST["atm"]) || empty($_POST["atm"])) {
  exit;
}
date_default_timezone_set('UTC');
$atm = $_POST["atm"];

$data_flash = $absolutePathAtm."/".$atm."/".$atmFolders[1]."/data_flash.txt";
$progName = $urlProgramPy."/".$progPyName["read"];
$command = "sudo python ".$progName." ".$data_flash." ".$_POST["args"];
$return = shell_exec($command);

$filename = $atm."/".$atmFolders[1]."/console_output.txt";
file_put_contents($absolutePathAtm."/".$filename, $return);
echo "Write result in console_output.txt and data_flash.txt";
?>
