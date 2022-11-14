<?php
$tel = $_POST['fio'];
$tel = htmlspecialchars($fio);
$tel = urldecode($fio);
$tel = trim($fio);
if (mail("tomashevich.kseniya@bk.ru", "Заявка c сайта", "тел:".$tel.".","From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>