function Player (){
    this.name = "";
    this.caracter = [];
    this.try = 0;
    this.bird = [];
}

function NewPlayerName(Player){ 
    var answer = false; //variable answer qui prend la valeur false
    while (answer == false){ //tant que answer est false
        var name = prompt("Enter your name :"); //nouvelle variable name 
        if (name == null){ //si name == null (rien)
            alert("Nope ..."); // on alerte l'utilisateur que sa réponse est incorrecte
            answer = false; //la réponse est donc false
        }
        else if (name == ""){ //sinon si name est égale à autre chose
            alert("Nope ..."); // on alerte l'utilisateur que sa réponse est incorrecte
            answer = false; // la réponse est donc fausse
        }
        else{ 
            Player.name = name; //le nom du joueur prend le nom qu'a rentré l'utilisateur
        }
    }
}

function NewPlayerBird (Player) {
    var answer2 = false;
    if Player.name = name { //si le nom du joueur est correct
        var bird = prompt("Enter your breed (pigeon or seagull) :") // création variable bird 
        if (bird == "pigeon"){ //si bird == "pigeon"
            alert("Wow what a big pigeon you are !"); //on alerte le joueur que sa réponse a bien été prise en compte
            answer2 = true; //booléen : la réponse est vraie
        }
        else if (bird == "seagull"){ // sinon si bird == "seagull"
            alert("Fly little white bird ! Fly!"); // on alerte l'utilisateur que sa réponse a bien été prise en compte
            answer2 = true; //booléen : la réponse est vraie
        }
        else { 
            if (bird == null){ // si bird == null (rien)
                alert("Nope ..."); // on alert l'utilisateur que le nom n'est pas correct
                answer2 = false; // la réponse est alors fausse
            }
            else { 
                alert("Nope..."); // si l'utilisateur entre autre chose, on l'invertit que c'est faux
                answer2 = false; //la réponse est donc fausse
            }
        }
    }
}

function NewPlayer (Player){ 
    if ((answer == true) && (answer2 == true)) { //si answer et answer2 sont vraies
        alert("Welcome"+Player.name+"! You are a "+Player.bird+". As you know, you are at war with the Parisians who abuse you! Avenge yourself! Here we go!") //on alerte l'utilisateur
    }
    else {
        answer = false; //sinon on dit que answer et answer2 sont fausses et on recommence avec les deux fonctions ci-dessus
        answer2 = false;
    }
}

Computer.character = CharacterStart(); 
