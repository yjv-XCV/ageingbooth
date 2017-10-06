<?php
// exit;
$filename = $_POST['fname'];
$folder = './../imgs/original/';

$info = pathinfo($filename);
if (
    $info["extension"] == 'jpeg' ||
    $info["extension"] == 'png'
) {
    move_uploaded_file($_FILES['data']['tmp_name'], $folder . $filename);
}