<?php
/* URL */
  $urlBase = "/prog";
  $urlErase = $urlBase."/php/erase.php";
  $urlRead = $urlBase."/php/read.php";
  $urlWrite = $urlBase."/php/write.php";
  $urlConfirmRemove = $urlBase."/php/confirmRemove.php";
  $urlRemove = $urlBase."/php/removeFile.php";
  $urlSettings = $urlBase."/php/atmSettings.php";
  $urlSaveAtm = $urlBase."/php/saveAtm.php";
  $urlJs = $urlBase."/js/";
  $urlBaseAtm = $urlBase."/atm";

  $absolutePathAtm = $_SERVER["DOCUMENT_ROOT"].$urlBaseAtm;
  $urlReadAtmFile = $urlBase."/php/readatmfile.php?folder=files";
  $urlReadAtmRead = $urlBase."/php/readatmfile.php?folder=read";
  $fileInfoAtm = ".info.html";
  $fileArgsAtm = ".args.json";
  $atmFolders = array("files", "read");

  $urlIcons=$urlBase."/content/icons/";
  /* ATM */
  $atmArgs = array(
    "mem" => array(
      "title" => "Size of flash memory", 
      "name" => "-m", 
      "value"=> ""), 
    "nbWord" => array(
      "title" => "Number of words", 
      "name" => "-w", 
      "value" => ""
      )
    );
?> 
