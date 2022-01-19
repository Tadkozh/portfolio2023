<?php

    $array = array("name" => "", "email" => "", "message" => "", 
    "nameError" => "", "emailError" => "", "messageError" => "", "isSuccess" => false);
    // J'initialise les variables à string vide 
    // On va passer un seul objet au AJAX. On va encoder cet array avec les résultat du travail du php en json, qu'on va repasser au AJAX
    // Ca oblige à changer tous les noms de variables dans ce fichier

    $emailTo = "tad.kozh.bihan@free.fr";


    if ($_SERVER["REQUEST_METHOD"] == "POST") // Une fois le bouton submit envoyé, je récupère les données
    {
        $array["name"] = verifyInput($_POST["name"]); // anciennement $name
        $array["email"] = verifyInput($_POST["email"]);
        $array["message"] = verifyInput($_POST["message"]);
        $array["isSuccess"] = true;
        $emailText = "";

        if(empty($array["name"])){
            $array["nameError"] = "A qui ai-je l'honneur?";
            $array["isSuccess"] = false;
        } 
        else 
            $emailText .= "Nom : {$array["name"]}\n"; //accolades en plus pour garder la concaténation

        if(!isEmail($array["email"])){
            $array["emailError"] = "Pour vous répondre...";
            $array["isSuccess"] = false;
        } 
        else 
            $emailText .= "Email : {$array["email"]}\n";

        if(empty($array["message"])){
            $array["messageError"] = "Que puis-je pour vous?";
            $array["isSuccess"] = false;
        } 
        else 
            $emailText .= "Message : {$array["message"]}\n";

        if($array["isSuccess"]){
            $headers = "From: {$array["name"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}";
            mail($emailTo, "Un message de portfolio.infodocbib.net", $emailText , $headers); //envoi de l'email
        }

        echo json_encode($array); // Renvoyer au JS tout le travail réalisé par php

    }

    function isEmail($var){
        return filter_var($var, FILTER_VALIDATE_EMAIL);
    }

    function verifyInput($var) {
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);
        return $var;
    }

?>
