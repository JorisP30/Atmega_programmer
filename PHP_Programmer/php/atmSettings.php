<?php
include_once("include.php");
?>
<div>
  <div id="settings">
    <div class="atmList">
        <div class="manageAtmList">
          <p class="add"><img src="/prog/content/icons/add.png"></p>
          <p class="remove"><img src="/prog/content/icons/trash.png"></p>
        </div>
        <div class="list">
        </div>
    </div>
    <div class="amtSettings">
      <form method="post" action="<?php echo $urlSaveAtm;?>">
        <div class="atmSInfo">
          <input type="text" name='atm' hidden>
          <input id="atmName" class="inputatm" name="name" placeholder="Name">
          <textarea class="atmInfo inputatm" name="info" placeholder="Information"></textarea>
        </div>
        <div class="atmSCommande" hidden></div>
      </form>
    </div>
</div>
<div class="atmSFooter">
    <p class="popupButton cancel">Cancel</p>
    <p class="popupButton confirm">Confirm</p>
  </div>
</div>
<script src="<?php echo $urlJs?>settings.js">