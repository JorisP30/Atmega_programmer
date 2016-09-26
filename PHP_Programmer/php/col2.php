<?php
  include_once("include.php");
?>
<div class="col">
    <div class="reachFile">ADD FILE</div>
    <form id="upload" method="post" action="" enctype="multipart/form-data">
      <input id="fileupload" type="file" name="files[]" multiple>
      <input type="submit" value="Upload">
    </form>
    <div class="selectFile" readatmfile="<?php echo $urlReadAtmFile; ?>">
    </div>
    <div id="console" class="outputShell">
    </div>
  </div> 
