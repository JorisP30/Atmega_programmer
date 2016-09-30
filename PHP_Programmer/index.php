<?php
  include_once("php/include.php");
?>
<!DOCTYPE html>

<html>

<head>
	<meta charset="utf-8">
	<title>IHM Programmateur</title>
	<link rel="shortcut icon" href="content/icons/processor.png" />
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/popup.css">
      <link rel="stylesheet" href="css/settings.css">
	
	<script src="js/jquery-3.1.1.min.js"></script>
	<script src="js/jQuery-File-Upload-9.12.5/js/vendor/jquery.ui.widget.js"></script>
	<script src="js/jQuery-File-Upload-9.12.5/js/jquery.iframe-transport.js"></script>
	<script src="js/jQuery-File-Upload-9.12.5/js/jquery.fileupload.js"></script>
	<script src="js/popup.js"></script>
</head>

<body>
<div class="progressUploadFile"></div>
	<?php
		include("php/col1.php");
		include("php/col2.php");
		include("php/col3.php");
	?>
	<div id="jorisLogo"><img src="content/icons/joris.png"></div>
	<div id="uploadDD"><img src="content/icons/download.png"></div>
	<script src="js/script.js"></script>
	<script src="js/scriptCol1.js"></script>
	<script src="js/scriptCol2.js"></script>
	<script src="js/scriptCol3.js"></script>
	<script src="js/uploadFile.js"></script>
	<script src="js/dragDropFile.js"></script>
</body>

</html>