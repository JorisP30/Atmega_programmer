<?php
  include_once("include.php");
?>
<div class="col border">
    <div title="SHIFT+R" command="read" args="" id="readButton" url="<?php echo $urlRead; ?>"class="lectureButton button">
      read
    </div>
    <div title="SHIFT+E" command="erase" args="" url="<?php echo $urlErase; ?>" id="removeButton" class="suppressionButton button">
      erase
    </div>
    <div title="SHIFT+W" command="write" args="" id="writeButton" url="<?php echo $urlWrite; ?>" class="ecrireButton button inactive">
      write
    </div>
</div> 
