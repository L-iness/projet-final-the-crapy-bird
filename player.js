function player (){
    this.name = "";
    this.birds = [];
    this.test = 0;
}

function GenerateNewPlayer(player){
    var answer=false;
    }
    answer = false;
    while (answer == false){
        var name = prompt("Player : Entrer your name");
        if (name == null){
            alert("Incorrect !");
            answer = false;
        }
        else if (name == ""){
            alert("Incorrect !");
            answer = false;
        }
        else{
            player.name = name;
            answer = true;
        }
    }
    player.birds = GenerateCaractereStart();
}

function GenerateCaractereStart(){
    var first_caractere="Le Parisien", Second_caractere="La Parisienne et sa Poussette", third_caractere="La Voiture Parisienne", forth_caractere="Les Touristes", fifth_caractere="La Sortie Scolaire"; 
    var lngCaractere = new Array();
    lngCaractere[first_caractere]=1;
    lngCaractere[second_caractere]=2;
    lngCaractere[third_caractere]=3;
    lngCaractere[forth_caractere]=4;
    lngCaractere[fifth_caractere]=5;
}