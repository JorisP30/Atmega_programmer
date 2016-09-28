<?php
if (!isset($_GET["file"]) || empty($_GET["file"])) {
  exit;
}
?>
<div>
  <p>Delete <?php echo $_GET["file"];?> ?</p>
  <div class="contentButton">
    <p class="popupButton cancel">Cancel</p>
    <p class="popupButton confirm">Confirm</p>
  </div>
</div>
