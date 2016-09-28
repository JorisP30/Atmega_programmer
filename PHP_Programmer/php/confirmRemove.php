<?php
include_once("include.php");
if (!isset($_GET["file"]) || empty($_GET["file"])) {
  exit;
}
?>
<div>
  <p>Delete <?php echo $_GET["file"];?> ?</p>
  <div class="contentButton">
    <p class="popupButton cancel">Cancel</p>
    <p class="popupButton confirm" url="<?php echo $urlRemove."?file=".$_GET["file"];?>">Confirm</p>
  </div>
</div>

<script src="js/popupRemove.js"></script>
