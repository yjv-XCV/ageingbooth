<?php

$dir = './../imgs/aged/';

$files = scandir($dir, 1);

foreach ($files as $key => $value) {
	$files[$key] = 'imgs/aged/' . $value;
}

echo json_encode($files);