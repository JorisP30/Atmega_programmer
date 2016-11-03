<?php
include_once("include.php");
$argsForm = "";
foreach ($atmArgs as $key => $value) {
  $argsForm .= "<p><span>".$key."</span>".$value["title"]."</p>";
  $argsForm .= "<input type='text' name='".$key."' placeholder='".$key."'>";
}
?>
<div>
  <div id="settings">
    <div class="atmList">
        <div class="manageAtmList">
          <p class="add"><img src="/content/icons/add.png"></p>
          <p class="remove"><img src="/content/icons/trash.png"></p>
        </div>
        <div class="list">
        </div>
    </div>
    <div class="amtSettings">
      <form method="post" action="<?php echo $urlSaveAtm;?>">
        <div class="atmScmd"><p class="selected" data-bind="atmSInfo">Information</p><p data-bind="atmSCommand">Command</p></div>
        <div class="atmSInfo">
          <input type="text" name='atm' hidden>
          <input id="atmName" class="inputatm" name="name" placeholder="Name">
          <textarea class="atmInfo inputatm" name="info" placeholder="Information"></textarea>
        </div>
        <div class="atmSCommand" hidden><?php echo $argsForm; ?></div>
      </form>
    </div>
</div>
<div class="atmSFooter">
    <p class="popupButton cancel">Cancel</p>
    <p class="popupButton confirm">Confirm</p>
  </div>
</div>
<script src="<?php echo $urlJs?>settings.js">