<?php
include_once("include.php");
$progName = $urlProgramPy."/".$progPyName["erase"];
$command = "sudo python ".$progName;
$return = shell_exec($command);
echo $return;
?>
