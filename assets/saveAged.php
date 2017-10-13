<?php
// exit;
$filename = $_POST['fname'];
$folder = './../imgs/aged/';

$info = pathinfo($filename);
if (
    $info["extension"] == 'jpeg' ||
    $info["extension"] == 'png'
) {
    move_uploaded_file($_FILES['data']['tmp_name'], $folder . $filename);
}