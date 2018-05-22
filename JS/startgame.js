function Jeu(){
    var Joueur = new Joueur();
    var Computer;
    NewJoueur(Joueur);

    alert(Joueur.name+" lands on a roof. He observes the moving life of Paris. Taken in hatred, he decides to launch an attack on these evil Parisians.");
    alert("He spotted in a park a Car parked on a pedestrian crossing in front of the park, a Parisian bobo and a Parisienne with a stroller strolling around, a class picnicing, and Tourists taking photos.")
    alert("It's your turn to play "+Joueur.name+"! Blindly in the polluted sky of Paris, try to touch and scare off these evil Parisians!")
    StartGame(Joueur, Computer);
}

function Gagnant(Joueur, Computer){
	var totaltry = 20;
    if (Joueur.nbessai > totaltry){
        alert("You failed, "+Joueur.name+". The Parisians are stronger than you !");
    }
    else if(Joueur.nbessai < totaltry){
        alert(+Joueur.name+", you win ! ")
    }
    else{
        alert("Any winner today ... . "+Joueur.name+", try again later.");
    }
    alert("Do you want to play again?")
}