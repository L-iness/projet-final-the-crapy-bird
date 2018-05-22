/**



generer les persos + verif


faire n fois :
		demander une case								
		verifier si le perso est touché/détruit
		l'afficher (web)


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






function generer1(Char)
{
	var C = [];
			//generer une coordonnée et un sens
			//generer un random entre 0 et 19 avec :
			// 0-9 : Ligne
			//10-19: colonne
		var select = Math.floor(Math.random()*20);
			// quand on a une ligne / col
			// choisir un point de debut
		var debut = Math.floor(Math.random()*(10-Char.taille));
		for(var i = 0; i < Char.taille; i++)
		{
			//suivre les coordonnées "taille" fois
			if(select<10)
			{
				C.append([select,debut+i]);
			}
			else
			{
				C.append([debut+i,select-10]);
			}
		}
		return C;
}





function toutGenerer()
{
	var tableau=[];
	for(var i = 0; i < persoTab.length; i++)
	{
		var valide = false;
		while(valide!=true)
		{
			var coords = generer1(persoTab[i]);
			valide = true;
			// il faut tester si les coords se chevauchent et si oui recommencer
			for (var j = 0 ; j < coords.length ; j++)
			{
				for(var k = 0 ; k < tableau.length ; k++)
				{
					for(var l = 0 ; l < tableau[k].length ; l++)
					{
						if(coords[j]==tableau[k][l])
						{
							//erreur chevauchement
							valide = false;
						}
					}
				}
			}
		}
		tableau.append(coords);
	}
	return tableau;
}



function verification(persoTab,Coord)
{
	for(var i = 0; i < persoTab.length; i++)
	{
		for(var j = 0; j < persoTab[i].length; j++)
		{
			if (persoTab[i][j]==Coord)
			{
				return [i,j];
			}
		}
	}
	return [1000,1000];
}



function persoTab(tableau)
{
	for(var i = 0; i < tableau.length; i++)
	{
		for(var j = 0; j < tableau[i].length; j++)
		{
			tableau[i][j] = true;
		}
	}
	return tableau;
}


///////////////////////////////////////// IL FAUT QU'IL Y AIT id="tableau" dans le tableau du jeu (web)
function afficher(coords,bool)
{
	var x = coords[0];
	var y = coords[1];
	var cellnb = 1 + x + y*10; 																		// ou 2 suivant si le innerHTML revoit du kk
	var input = document.getElementById("tableau").innerHTML;
	var tab = input.split("bgcolor=\"#"); // chaque case : "0000FF....."
	if (bool)
	{
		tab[cellnb].replace("0000FF","00FF00");
	}
	else
	{
		tab[cellnb].replace("0000FF","FF0000");
	}
	var sortie = tab.join();  // on prend un tableau : ["a","b","c"] --> "abc"
	document.getElementById("tableau").innerHTML = sortie;
}

function persoEnVie(tab)
{
	var S = "";
	for(var i = 0; i < tab.length; i++)  // pour chaque perso
	{
		var bool = false;
		for(var j = 0; j < tab[i].length; j++)// on verifie si il est mort
		{
			if(tab[i][j]==true)
			{
				bool = true;
			}
		}
		if(bool) // et on l'affiche
		{
			[S, persoTab[i].nom, " alive.\n"].join();
		}
		else
		{
			[S,persoTab[i].nom," dead.\n"].join();
		}
	}
	alert(S);
	// sortie : 
	//		a alive.
	//		b dead.
	//		c dead.
	//		d alive.
}


/*

while(nbcoups>0)
{
	var coo = [3,5];// à recuperer avec le js
	var test = verifier(persos,coo);
	if(test != [1000,1000])
	{
		booleens[test[0]][test[1]] = false;
		afficher(coo,false);
		alert("Yeah, on its face !");
	}
	else
	{
		alert("Oh ! Missed !");
		afficher(coo,true);
		nbcoups -= 1;
	}
	persoEnVie(booleens);
}

*/


var persos = toutGenerer();
var booleens = persoTab(persos);
var nbcoups = 20;
var coupsjoue = 0;


function tester(coords)
{
	if(coupsjoue<=nbcoups)
	{
		var test = verifier(persos,coords);
		if(test != [1000,1000])
		{
			booleens[test[0]][test[1]] = false;
			afficher(coords,false);
			alert("Yeah, on its face !");
		}
		else
		{
			alert("Oh ! Missed !");
			afficher(coords,true);
			nbcoups -= 1;
		}
		persoEnVie(booleens);
	}
	else
	{
		alert("No more poo !");
	}
	coupsjoue += 1;
}

