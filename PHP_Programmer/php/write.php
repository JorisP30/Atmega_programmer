<?php
include_once("include.php");
$progName = $urlProgramPy."/".$progPyName["write"];
$command = "sudo python ".$progName." ".$_POST["args"]." ".$_POST["file"];
echo $command;
$return = shell_exec($command);
echo $return;
?>
