function complete_mail() { 
        $_POST['first-name'] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 30); 
        $_POST['last-name'] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 30);
        $_POST['phone'] =  substr(htmlspecialchars(trim($_POST['tel'])), 0, 30); 
        $_POST['email'] =  substr(htmlspecialchars(trim($_POST['email'])), 0, 50); 
        // если не заполнено поле "Имя" - показываем ошибку 0 
        if (empty($_POST['name'])) 
             output_err(0); 
        // если неправильно заполнено поле email - показываем ошибку 1 
        if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $_POST['email'])) 
             output_err(1); 
        // создаем наше сообщение 
        Имя отправителя:'.$_POST['first-name'].' 
        Фамилия отправителя:'.$_POST['last-name'].' 
        Контактный телефон:'.$_POST['phone'].' 
        Контактный email:'.$_POST['email'].' 
        // $to - кому отправляем 
        $to = 'kvadrat-rnd@yandex.ru'; 
        // $from - от кого 
        $from=$_POST['email']; 
        mail($to,"Заказ по работе", "Cообщение:", "From:".$from); 
        echo 'Спасибо! Ваше письмо отправлено.'; 
} 
 
function output_err($num) 
{ 
    $err[0] = 'ОШИБКА! Не введено имя.'; 
    $err[1] = 'ОШИБКА! Неверно введен e-mail.'; 
    $err[2] = 'ОШИБКА! Не введено сообщение.'; 
    echo '<p>'.$err[$num].'</p>'; 
    show_form(); 
    exit(); 
} 
 
if (!empty($_POST['submit'])) complete_mail(); 
else show_form(); 
?>