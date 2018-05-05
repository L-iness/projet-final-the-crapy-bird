function Player (){
    this.name = "";
    this.caracter = [];
    this.try = 0;
    this.bird = [];
}

function NewPlayerName(Player){
    var answer = false;
    while (answer == false){
        var name = prompt("Enter your name :");
        if (name == null){
            alert("Nope ...");
            answer = false;
        }
        else if (name == ""){
            alert("Nope ...");
            answer = false;
        }
        else{
            Player.name = name;
        }
    }
}

function NewPlayerBird (Player) {
    if Player.name = name {
        var bird = prompt("Enter your breed (pigeon or seagull) :")
        if (bird == "pigeon"){
            alert("Wow what a big pigeon you are !");
            answer = true;
        }
        else if (bird == "seagull"){
            alert("Fly little white bird ! Fly!");
            answer = true;
        }
        else {
            if (bird == null){
                alert("Nope ...");
                answer = false;
            }
            else {
                alert("Nope...");
                answer = false;
            }
        }
    }
}

function NewPlayer (Player){
    if (answer = true) {
        alert("Welcome"+Player.name+", you are a "+Player.bird+". As you know, you are at war with the Parisians who abuse you! Avenge yourself! Here we go!")
    }
    else {
        answer = false;   
    }
}

Computer.caracter = CaracterStart();