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


















function generer1(Bat)
{
	var C = [];
			//generer une coordonnée et un sens
			//generer un random entre 0 et 19 avec :
			// 0-9 : Ligne
			//10-19: colonne
			var select = Math.floor(Math.random()*20);
			// quand on a une ligne / col
			// choisir un point de start
			var start = Math.floor(Math.random()*(10-Bat.size));
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



function genererTout()
{
	var tab=[];
	for(var i = 0; i < batTab.length; i++)
	{
		var coords = generer1(batTab[i]);
		// il faut tester si les coords se chevauchent et si oui recommencer
		tab.append(coords);
	}
	return tab;
}



function verifier(batTab,Coord)
{
	for(var i = 0; i < batTab.length; i++)
	{
		for(var j = 0; j < batTab[i].length; j++)
		{
			if (batTab[i][j]==Coord)
			{
				return [i,j];
			}
		}
	}
	return [1000,1000];
} 

function BTab(tab)
{
	for(var i = 0; i < tab.length; i++)
	{
		for(var j = 0; j < tab[i].length; j++)
		{
			tab[i][j] = true;
		}
	}
	return tab;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////A deplacer dans un autre fichier////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var bateaux = genererTout();
var booleens = BTab(bateaux);

//...

var coo = [3,5];
var test = verifier(bateaux,coo);
if(test != [1000,1000])
{
	booleens[test[0]][test[1]] = false;
	alert("Yeah, on its face !");
}
else
{
	alert("Oh ! Missed !"); 
}


