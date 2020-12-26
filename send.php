<?php
$errors = '';
$myemail = 'danielkamanda28@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['surname']) ||
   empty($_POST['email']) ||
   empty($_POST['telephone']) ||
   empty($_POST['arrival_date']) ||
   empty($_POST['departure_date']) ||
   empty($_POST['arrival_date']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$surname = $_POST['surname'];
$email_address = $_POST['email'];
$telephone = $_POST['telephone'];
$arrival_date = $_POST['arrival_date'];
$departure_date = $_POST['departure_date'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Email: $email_address\n Telephone \n $telephone \n"
"Arrival Date: $arrival_date\n Departure Date \n $departure_date";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: index.html');
}
?>