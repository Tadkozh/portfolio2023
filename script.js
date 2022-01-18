//Attention, ce n'est pas du JS natif, mais du jQuery

$(function(){

    $('#contact-form').submit(function(e){

        e.preventDefault(); // pour que index ne passe pas le relais au fichier php
                            // js va reprendre les infos récupérées par le fichier php, puis agir en conséquence en injectant du html dans index
        $('.comments').empty(); //Vider les messages d'erreur à chaque rechargement
        var postdata =  $('#contact-form').serialize(); //Pour récupérer les infos dans le php

        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: postdata,
            dataType: 'json',
            success: function(result){

                if(result.isSuccess){ // = true implicite - si tout s'est bien passé
 
                    $("#contact-form").prepend("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    //message de remerciement. 
                    //Problème, si j'envoie plusieurs messages sans avoir rechargé, les messages de remerciements s'accumulent. Ce n'était pas le cas avant AJAX
                    $("#contact-form")[0].reset(); // on vide tous les champs

                }else{
                    $("#name + .comments").html(result.nameError); //messages d'erreur pour chaque champs en cas de problème
                    $("#email + .comments").html(result.emailError);
                    $("#message + .comments").html(result.messageError);
                }

            }

        });

    });

});