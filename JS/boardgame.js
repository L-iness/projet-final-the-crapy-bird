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
		var debut = Math.floor(Math.random()*(10-Char[1]));
		
		for(var i = 0; i < Char[1]; i++)
		{
			//suivre les coordonnées "Char[1]" fois
			if(select<10)
			{
				C.push([select,debut+i]);
			}
			else
			{
				C.push([debut+i,select-10]);
			}
		}
	return C;
}



function toutGenerer()
{
	var tableau=[];
	for(var i = 0; i < tabDePerso.length; i++) // pour chaque char :
	{
		var valide = false;
		while(valide!=true)
		{
			var coords = generer1(tabDePerso[i]); // on en genere un nouveau
			valide = true;
			// il faut tester si les coords se chevauchent et si oui recommencer
			for (var j = 0 ; j < coords.length ; j++)
			{
				for(var k = 0 ; k < tableau.length ; k++)
				{
					for(var l = 0 ; l < tableau[k].length ; l++)
					{
						if(coords[j][0]==tableau[k][l][0] && coords[j][1]==tableau[k][l][1])
						{
							//erreur chevauchement
							valide = false;
						}
					}
				}
			}
		}
		// pas de chevauchement 
		tableau.push(coords);
	}// on recommence pour le suivant


	return tableau;
}



function verification(t,Coord) // verifie si Coord est compris dans t
{
	for(var i = 0; i < t.length; i++)
	{
		for(var j = 0; j < t[i].length; j++)
		{
			if (t[i][j][0]==Coord[0] & t[i][j][1]==Coord[1])
			{
				return [i,j];
			}
		}
	}
	return [1000,1000]; // si non, renvoit une erreur (valeur impossible)
}



function persoTab()
{
	var tableau = toutGenerer();
	for(var i = 0; i < tableau.length; i++)
	{
		for(var j = 0; j < tableau[i].length; j++)
		{
			tableau[i][j] = true;
		}
	}
	return tableau;
}


function afficher(coords,bool)
{
	var x = coords[0];
	var y = coords[1];
	var cellnb = 1 + x + y*10; 																		// ou 2 suivant si le innerHTML revoit du kk
	var input = document.getElementById("tableau").innerHTML;
	var tab = input.split("bgcolor=\"#"); // chaque case : "0000FF....."
	for (var i = 1; i < tab.length; i++) {
		tab[i] = ["bgcolor=\"#",tab[i]].join("");
		console.log(tab[i]);
	}
	//alert(tab[cellnb]);
	if (bool==true)
	{
		tab[cellnb].replace(/0000FF/gi,"00FF00");
	}
	else
	{
		tab[cellnb].replace(/0000FF/gi,"FF0000");
	}
	//alert(tab[cellnb]);
	var sortie = tab.join("");  // on prend un tableau : ["a","b","c"] --> "abc"
	document.getElementById("tableau").innerHTML = sortie;
}



function persoEnVie(tab)
{
	var S = "";
	for(var i = 0; i < tab.length; i++)  // pour chaque perso
	{
		var b = false;
		for(var j = 0; j < tab[i].length; j++)// on verifie si il est mort
		{
			if(tab[i][j]==true)
			{
				b = true;
			}
		}
		if(b==true) // et on l'affiche
		{
			 S = [S, tabDePerso[i][0], " is alive.\n"].join("");
		}
		else
		{
			S = [S,tabDePerso[i][0]," is dead.\n"].join("");
		}
	}
	alert(S);
}


function tester(coords)
{

	if(coupsjoue<=nbcoups)
	{
		var test = verification(persos,coords);
		if(test[0] == 1000 & test[1] == 1000) // si il y a erreur :
		{
			alert("Oh ! Missed !");
			afficher(coords,true);
			coupsjoue += 1;
		}
		else									// sinon :
		{
			booleens[test[0]][test[1]] = false;
			afficher(coords,false);
			alert("Yeah, on its face !");
		}
		persoEnVie(booleens);
		alert("You still have"+coupsjoue+" !")
	}
	else
	{
		alert("No more poo !");
	}

}

