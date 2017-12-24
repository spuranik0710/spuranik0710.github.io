<?php
	
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		
		$to = 'shrutipuranik0710@gmail.com'; 
		$subject = 'Message from Contact Demo ';
		
		$body ="From: $name\n E-Mail: $email\n Message:\n $message";

		mail($to, $subject, $message, $body);
		echo "Message has been sent.";
		
?>

