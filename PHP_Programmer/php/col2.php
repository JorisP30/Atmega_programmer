<?php
  include_once("include.php");
?>
<div class="col">
    <div class="reachFile">ADD FILE</div>
    <form id="upload" method="post" action="" enctype="multipart/form-data">
      <input id="fileupload" type="file" name="files[]" multiple>
      <input type="submit" value="Upload">
    </form>
    <div class="selectFile">
      <p absoluteFile="/absolute/directory/file1">Fichier 1</p>
      <p absoluteFile="/absolute/directory/file2">Fichier 2</p>
      <p absoluteFile="/absolute/directory/file3">Fichier 3</p>
      <p absoluteFile="/absolute/directory/file4">Fichier 4</p>
    </div>
    <div id="console" class="outputShell">
    </div>
  </div> 
