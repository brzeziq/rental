<?php

//echo 'Witaj '.$_POST['name'];

$myfile = fopen("rezerwacje.json", "w") or die("Rezerwacja nieudana");
//echo fread($myfile,filesize("get.json"));
echo 'Rezerwacja udana';
$txt = $_POST['kalendarz'];
fwrite($myfile, $txt);
fclose($myfile);

?>