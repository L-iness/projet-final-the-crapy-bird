function Joueur (){
    this.nom = "";
    this.perso1 = [];
    this.nbessai = 0;
    this.Type = [];
}

function NouveauJoueurNom(Joueur){ 
    var answer = false; //variable answer qui prend la valeur false
    while (answer == false){ //tant que answer est false
        var nom = prompt("Enter your nom :"); //nouvelle variable nom 
        if (nom == null){ //si nom == null (rien)
            alert("Nope ..."); // on alerte l'utilisateur que sa réponse est incorrecte
            answer = false; //la réponse est donc false
        }
        else if (nom == ""){ //sinon si nom est égale à autre chose
            alert("Nope ..."); // on alerte l'utilisateur que sa réponse est incorrecte
            answer = false; // la réponse est donc fausse
        }
        else{ 
            Joueur.nom = nom; //le nom du joueur prend le nom qu'a rentré l'utilisateur
        }
    }
}

function NouveauJoueurType (Joueur) {
    var answer2 = false;
    if Joueur.nom = nom { //si le nom du joueur est correct
        var Type = prompt("Enter your breed (pigeon or seagull) :") // création variable Type 
        if (Type == "pigeon"){ //si Type == "pigeon"
            alert("Wow what a big pigeon you are !"); //on alerte le joueur que sa réponse a bien été prise en compte
            answer2 = true; //booléen : la réponse est vraie
        }
        else if (Type == "seagull"){ // sinon si Type == "seagull"
            alert("Fly little white Type ! Fly!"); // on alerte l'utilisateur que sa réponse a bien été prise en compte
            answer2 = true; //booléen : la réponse est vraie
        }
        else { 
            if (Type == null){ // si Type == null (rien)
                alert("Nope ..."); // on alert l'utilisateur que le nom n'est pas correct
                answer2 = false; // la réponse est alors fausse
            }
            else { 
                alert("Nope..."); // si l'utilisateur entre autre chose, on l'avertit que c'est faux
                answer2 = false; //la réponse est donc fausse
            }
        }
    }
}

function NewJoueur (Joueur){ 
    if ((answer == true) && (answer2 == true)) { //si answer et answer2 sont vraies
        alert("Welcome"+Joueur.nom+"! You are a "+Joueur.Type+". As you know, you are at war with the Parisians who abuse you! Avenge yourself! Here we go!") //on alerte l'utilisateur
    }
    else {
        answer = false; //sinon on dit que answer et answer2 sont fausses et on recommence avec les deux fonctions ci-dessus
        answer2 = false;
    }
}

Computer.perso1 = Jeu(); 
