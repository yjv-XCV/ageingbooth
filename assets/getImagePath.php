<?php

$dir = './../imgs/original/';

$files = scandir($dir, 1);

foreach ($files as $key => $value) {
	$files[$key] = 'imgs/original/' . $value;
}

echo json_encode($files);