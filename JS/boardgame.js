/**



{generer les bateaux}


{faire n fois :}
		{demander une case}
		verifier si le batteau est touché      {/détruit}
		{l'afficher (web)}


--------X-------->
[0,0,0,0,0,0,0,0,0,0]  |  
[0,0,0,0,0,0,A,A,A,0]  |  
[0,0,0,0,0,0,0,B,0,0]  |  
[0,0,0,0,0,0,0,B,0,0]  |  
[0,0,0,0,0,0,0,0,0,0]  Y 
[0,0,0,0,0,0,0,0,0,0]  |  
[0,0,0,1,1,1,1,1,0,0]  |  
[0,0,0,0,0,0,0,0,0,0]  |  
[0,0,0,0,0,0,0,0,0,0]  |  
[0,0,0,0,0,0,0,0,0,0]  \/ 

[x,y]



coord = [
[[0,0],[0,1]],
[[0,0],[0,0]],
[[0,0],[0,0]],
[[0,0],[0,0]],
[[0,0],[0,0]]
]

touche = [
[True,False],
[True,True],
[True,True],
[True,True],
[True,True]
]



/**/






function generate(Char)
{
	var C = [];
			//generer une coordonnée et un sens
			//generer un random entre 0 et 19 avec :
			// 0-9 : Ligne
			//10-19: colonne
			var select = Math.floor(Math.random()*20);
			// quand on a une ligne / col
			// choisir un point de start
			var start = Math.floor(Math.random()*(10-Char.size));
		for(var i = 0; i < Bat.size; i++)
		{
			//suivre les coordonées "size" fois
			if(select<10)
			{
				C.append([select,start+i]);
			}
			else
			{
				C.append([start+i,select-10]);
			}
		}
		return C;
}



function generateAll()
{
	var array=[];
	for(var i = 0; i < charArray.length; i++)
	{
		var coords = generer1(charArray[i]);
		// il faut tester si les coords se chevauchent et si oui recommencer
		array.append(coords);
	}
	return array;
}



function verification(charArray,Coord)
{
	for(var i = 0; i < charArray.length; i++)
	{
		for(var j = 0; j < charArray[i].length; j++)
		{
			if (charArray[i][j]==Coord)
			{
				return [i,j];
			}
		}
	}
	return [1000,1000];
} 

function charArray(array)
{
	for(var i = 0; i < array.length; i++)
	{
		for(var j = 0; j < array[i].length; j++)
		{
			array[i][j] = true;
		}
	}
	return array;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////A deplacer dans un autre fichier////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var characters = generateAll();
var booleens = charArray(characters);

//...

var coo = [3,5];
var test = verifier(characters,coo);
if(test != [1000,1000])
{
	booleens[test[0]][test[1]] = false;
	alert("Yeah, on its face !");
}
else
{
	alert("Oh ! Missed !"); 
}


