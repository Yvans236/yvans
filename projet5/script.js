//Definir les variables
var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var lenght = document.getElementById('lenght');

//lorsque l'utilisateur clique sur champ du mot de passe,afficher la boite message
myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}

//lorsque l'utilisateur clique en dehors du champ de mot de passe,masquer la boite message

myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}

//lorsque l'utilisateur commence a tapar quelque chose dns le champ mot de passe

myInput.onkeyup = function(){
    //valider les lettres minuscule
    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        //si le mot de pase contient une lettre minuscule, enleve la classe "invalid et ajouter la classe valid"
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else {
        //si non , enlever la classe "valid" et ajouter la classe "invalid"
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

        //valider les lettres majuscules
        var upperCaseLetters = /[A-Z]/g
        if(myInput.value.match(upperCaseLetters)){
            //si le mot de pase contient une lettre majuscule, enleve la classe "invalid et ajouter la classe valid"
            capital.classList.remove('invalid');
            capital.classList.add('valid');
        }else {
            //si non , enlever la classe "valid" et ajouter la classe "invalid"
            capital.classList.remove('valid');
            capital.classList.add('invalid');
        }
    
        //valider les nombres
        var numbers = /[0-9]/g
        if(myInput.value.match(numbers)){
            //si le mot de pase contient un chiffre, enleve la classe "invalid et ajouter la classe valid"
            number.classList.remove('invalid');
            number.classList.add('valid');
        }else {
            //si non , enlever la classe "valid" et ajouter la classe "invalid"
            number.classList.remove('valid');
            number.classList.add('invalid');
        }

        //valider la longueur

        if(myInput.value.length >= 8){
            //si le mot de pase contient minimum 8 caractères, enlever la classe "invalid et ajouter la classe valid"
            lenght.classList.remove('invalid');
            lenght.classList.add('valid');
        }else {
            //si non , enlever la classe "valid" et ajouter la classe "invalid"
            lenght.classList.remove('valid');
            lenght.classList.add('invalid');
        }
}