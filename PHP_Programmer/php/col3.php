<?php
  include_once("include.php");
?>
<div class="col border">
    <div commande="read" id="readButton" url="<?php echo $urlRead; ?>"class="lectureButton button">
      read
    </div>
    <div commande="erase" url="<?php echo $urlErase; ?>" id="removeButton" class="suppressionButton button">
      remove
    </div>
    <div commande="write" id="writeButton" url="<?php echo $urlWrite; ?>" class="ecrireButton button inactive">
      write
    </div>
</div> 
