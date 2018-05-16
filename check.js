function OccupiedBoxes(character){
    var ok_boxes = false;
    while (ok_boxes == false){
        var chaineboxes =prompt("Please enter the boxes occupied by your "+Character.name.+" by separating the boxes with (lenght: "+Character.size+" boxes)").toUpperCase();
        var ArrayBoxes = chaineCases.split(";");


        if (FreeBoxes(ArrayBoxes) == false){
            alert("Warning ! These boxes are occupied.");
            ok_boxes = false;
        }

        else if ((VerifyAllCoordinates(ArrayBoxes)) && (ArrayBoxes.length == Character.size)){
            character.PlugBoxes = ArrayBoxes;
            PlugBoxes(ArrayBoxes);
            alert("The position of "+Character.name+" is saved !");
            ok_boxes = true;
        }
        else if((VerifyAllCoordinates()) == false) && (ArrayBoxes.length == Character.lenght){
            alert("You entered the wrong coordinates, the letters go from A to J and the numbers from 1 to 10, a coordinate is written as LetterNumber (example: A1)");
            ok_boxes = false;
        }
        else{
            alert ("Attention, you did not use the correct number of boxes ("+Character.size+")");
            ok_boxes = false;
        }
    }
}
