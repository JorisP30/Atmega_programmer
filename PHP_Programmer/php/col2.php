<?php
  include_once("include.php");
?>
<div class="col">
    <div class="manageFile"><p class="addFile button">ADD</p><p class="refreshFile button">REFRESH</p><p class="removeFile button" data-popup="<?php echo $urlConfirmRemove;?>" data-popup-get="">REMOVE</p></div>
    <form id="upload" method="post" action="" enctype="multipart/form-data">
      <input id="fileupload" type="file" name="files[]" multiple>
      <input type="submit" value="Upload">
    </form>
    <div class="FileListing">
      <div id="selectFileOnglet"><p class="selected" data-bind=".selectFile">Files</p><p data-bind=".readFile">Read</p></div>
      <div class="selectFile fileView" readatmfile="<?php echo $urlReadAtmFile; ?>"></div>
      <div class="readFile fileView" hidden></div>
    </div>
    <div id="console" class="outputShell">
    </div>
    <div id="author">G.Spaur &copy; 2016</div>
  </div> 
