<!DOCTYPE html>
<html>
	<head>
		<title>Ageing Booth</title>
		<link rel="stylesheet" href="vendor/reset.css">
		<link rel="stylesheet" href="vendor/semantic.min.css">
		<link rel="stylesheet" href="assets/css/style.css">
		<link rel="stylesheet" href="assets/css/background.css">

		<script src="/vendor/jquery-3.1.1.min.js"></script>
		<script src='/vendor/libs/jquery.min.js'></script>
		<script src="/vendor/semantic.min.js"></script>
		<script src="/vendor/libs/pixi.js"></script>
	    <!-- // <script src='/vendor/libs/model_pca_20_svm.js'></script> -->
	    <!-- // <script src='/assets/js/model_pca_20_svm.js'></script> -->
		<script src='/vendor/libs/utils.js'></script>
		<script src='/vendor/libs/dat.gui.min.js'></script>
		<script src='/vendor/libs/clmtrackr.min.js'></script>
		<script src='/vendor/libs/Stats.js'></script>
		<script src='/vendor/libs/jquery.imgareaselect.pack.js'></script>
		<script src="/assets/js/detectface.js"></script>
		<script src='/assets/js/screensaver.js'></script>
		<script src='/assets/js/backtohome.js'></script>
		<script src="/assets/js/upload_img.js"></script>
		<script src="/assets/js/camera.js"></script>
		<script src='/assets/js/app.js'></script>
		<?php $pagePath = 'assets/views/';?>
	</head>
	<body>
		<div class="background">
			<?php include($pagePath .'background.php') ?>
		</div>
		<section id="sec01">
			<?php include($pagePath .'page01.php');?>
		</section>
		<section id="sec02">
			<?php include($pagePath .'page02.php');?>
		</section>
		<section id="sec03">
			<?php include($pagePath .'page03.php');?>
		</section>
		<section id="sec04">
			<?php include($pagePath .'page04.php');?>
		</section>
		<section id="sec05">
			<?php include($pagePath .'page05.php');?>
		</section>
		<?php include($pagePath .'quitOrNot.php');?>

		<section id="develop" class="active">
			<?php include($pagePath .'develop.php') ?>
		</section>
	</body>
</html>