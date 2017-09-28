<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="vendor/jquery-3.1.1.min.js"></script>
	<script>
		$(document).click(function(){
			$.ajax({
			      type: 'GET',
			      url: 'assets/develop.php',
			      processData: false,
			      contentType: false,
			      success: function (data, msg) {
			        console.log(msg);
			        image_ids = JSON.parse(data);
			      },
			      error: function(xhr, status, msg) {
			        console.log(status);
			        console.log(msg);
			      }
			    });	
		});
	</script>
</head>
<body>
	
</body>
</html>