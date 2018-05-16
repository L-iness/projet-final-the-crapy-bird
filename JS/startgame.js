function Game(){
    var Player = new Player();
    var Computer;
    NewPlayer(Player);

    alert(+Player.name+" lands on a roof. He observes the moving life of Paris. Taken in hatred, he decides to launch an attack on these evil Parisians.");
    alert("He spotted in a park a Car parked on a pedestrian crossing in front of the park, a Parisian bobo and a Parisienne with a stroller strolling around, a class picnicing, and Tourists taking photos.")
    alert("It's your turn to play "+Player.name+"! Blindly in the polluted sky of Paris, try to touch and scare off these evil Parisians!")
    StartGame(Player, Computer);
}

function Winner(Player, Computer){
	var totaltry = 20;
    if (Player.try > totaltry){
        alert("You failed, "+Player.name+". The Parisians are stronger than you !");
    }
    else if(Player.try < totaltry){
        alert(+Player.name+", you win ! ")
    }
    else{
        alert("Any winner today ... . "+Player.name+", try again later.");
    }
    alert("Do you want to play again?")
}