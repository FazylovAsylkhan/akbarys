<?php

  $_POST['name'] = htmlspecialchars(stripslashes($_POST['name']));
  $_POST['email'] = htmlspecialchars(stripslashes($_POST['email']));
  $_POST['message'] = htmlspecialchars(stripslashes($_POST['message']));

  $cv = "";
 
  if (!empty($_POST['mail_file'])){
    $uri = $_POST['mail_file'];
    $uri = str_replace('data:application/pdf;base64,', '', $uri);
    $uri = str_replace(' ', '+', $uri);
    $data = base64_decode($uri);
    $cv = 'cv-'.time().'.pdf';
    $pdf = fopen ($cv,'w');
    fwrite ($pdf,$data);
    fclose ($pdf);
  }
  
  $subj = 'CV from website';
  $mail_to = 'cv@akbarys.kz';

  if(empty($cv)){
    $mess = 'Имя: ' . $_POST['name'] . PHP_EOL . 'E-mail: ' . $_POST['email'] . PHP_EOL . 'Сообщение: ' . $_POST['message'];
    if(!mail($mail_to, $subj, $mess)){
      echo "ERROR"; exit();
    }
    echo 'OK'; exit();
  } else {
    $mess = 'Имя: ' . $_POST['name'] . "<br>" . 'E-mail: ' . $_POST['email'] . "<br>" . 'Сообщение: ' . $_POST['message'];
    send_mail($mail_to, $subj, $mess, $cv);
    
  }

  function send_mail($to, $subj, $html, $path){
    $path2 = '/'.$path;

    $fp = fopen($path,"r");
    if (!$fp){
      echo "ERROR"; exit();
    }
    
    $file = fread($fp, filesize($path));
    fclose($fp);
  
    $boundary = "--".md5(uniqid(time()));
    $headers .= "MIME-Version: 1.0\n";
    $headers .="Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
    $multipart .= "--$boundary\n";
    $multipart .= "Content-Type: text/html; charset=utf-8\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\n\n";
    $multipart .= "$html\n\n";
    $message_part = "--$boundary\n";
    $message_part .= "Content-Type: application/octet-stream\n";
    $message_part .= "Content-Transfer-Encoding: base64\n";
    $message_part .= "Content-Disposition: attachment; filename = \"".$path."\"\n\n";
    $message_part .= chunk_split(base64_encode($file))."\n";
    $multipart .= $message_part."--$boundary--\n";

    if(!mail($to, $subj, $multipart, $headers)){ 
      echo "ERROR"; exit();
    }

    unlink($path);
    echo 'OK'; exit();
  }

?>