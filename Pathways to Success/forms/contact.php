<?php
require _DIR_.'/vendor/autoload.php'; // Include the Composer autoload file

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

// Replace this with your Firebase project credentials file path
$serviceAccount = ServiceAccount::fromJsonFile(_DIR_.'login-2efba-firebase-adminsdk-ngcnt-8c56637b0c.json');

$firebase = (new Factory)
    ->withServiceAccount($serviceAccount)
    ->withDatabaseUri('https://login-2efba-default-rtdb.firebaseio.com')
    ->create();

$firestore = $firebase->getFirestore();

// Replace 'form_submissions' with your desired collection name
$collection = $firestore->collection('form_submissions');

$data = [
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'subject' => $_POST['subject'],
    'message' => $_POST['message'],
];

$collection->add($data);

// Echo a response indicating success or failure
echo json_encode(['success' => true]); // You can customize the response as needed
?>