// console.log("coucou");

// const bidule = "truc"; //impossible a modif apres

// let truc ="truc"; //var normal


// // undefined(var pas definie)  null. 

// let objet ={a:'b'} ;//objet a qui a la valeur b
// objet.a ='truc';
// let tab = ['a','b'];//tableau

// function test(){

// 	return 'test';

// }
// // let truc = function (){

// // }
// // let truc = function truc(){


// // }
// // let truc = () => {


// // }

// console.log(test());//return undefined si vide

// for (let i = Things.length - 1; i >= 0; i--) {
	
// }

// let chose = true;

// while(chose === true){
// 	// === compart en plus e type de la var
// }


// function factorial(n){

	

// 	if(n != 1 && n > 0){

// 		n= n * factorial((n-1));

// 	}

// 	return n;

// }

// console.log(factorial(5));

let tab= [null, null, null, null, null, null, null, null, null];
let joueur=0;
let win=0;
let temps=10;


function myTableClick( id )

{

	if (win==0) {

	if(tab[id[1]-1] == null){

		
		write(id);


	}
	else
		console.log("case pas libre");
	
	}
} 

function write( nbr ){


	console.log("case libre");
		tab[nbr[1]-1] = joueur;

		switch(joueur){

			case 0: joueur =1;
					document.getElementById(nbr).innerHTML = "X";
					break;
			case 1: joueur =0;
					document.getElementById(nbr).innerHTML = "O";
					break;

		}
		console.log(joueur);

		

		console.log(tab[0] + " " + tab[1] + " " + tab[2]);
		console.log(tab[3] + " " + tab[4] + " " + tab[5]);
		console.log(tab[6] + " " + tab[7] + " " + tab[8]);

		winner();

}

function winner(){

	

	if(tab[0] == tab[1] && tab[1] == tab[2] && tab[0] != null && tab[1] != null && tab[2] != null){

		

		document.getElementById('win').innerHTML = document.getElementById('c1').innerHTML + " est vainqueur";
		win=1;

	}
	else if(tab[3] === tab[4] && tab[4] === tab[5] && tab[3] != null && tab[4] != null && tab[5] != null){

		document.getElementById('win').innerHTML = document.getElementById('c4').innerHTML + " est vainqueur";
		win=1;

	}
	else if(tab[6] === tab[7] && tab[7] === tab[8] && tab[6] != null && tab[7] != null && tab[8] != null){

		document.getElementById('win').innerHTML = document.getElementById('c7').innerHTML + " est vainqueur";
		win=1;

	}
	else if(tab[0] === tab[3] && tab[3] === tab[6] && tab[0] != null && tab[3] != null && tab[6] != null){

		document.getElementById('win').innerHTML = document.getElementById('c1').innerHTML + " est vainqueur";
		win=1;

	}
	else if(tab[1] === tab[4] && tab[4] === tab[7] && tab[1] != null && tab[4] != null && tab[7] != null){

		document.getElementById('win').innerHTML = document.getElementById('c2').innerHTML + " est vainqueur";
		win=1;

	}
	else if(tab[2] === tab[5] && tab[5] === tab[8] && tab[2] != null && tab[5] != null && tab[8] != null){

		document.getElementById('win').innerHTML = document.getElementById('c3').innerHTML + " est vainqueur";
		win=1;

	}
	else if(tab[0] === tab[4] &&  tab[4] === tab[8] && tab[0] != null && tab[4] != null && tab[8] != null){

		document.getElementById('win').innerHTML = document.getElementById('c1').innerHTML + " est vainqueur";
		win=1;

	}
	else if(tab[2] === tab[4] && tab[4] === tab[6] && tab[2] != null && tab[4] != null && tab[6] != null){

		document.getElementById("win").innerHTML = document.getElementById('c3').innerHTML + " est vainqueur";
		win=1;

	}
	else if (tab[0] != null && tab[1] != null && tab[2] != null && tab[3] != null && tab[4] != null && tab[5] != null && tab[6] != null && tab[7] != null && tab[8] != null){

		document.getElementById("win").innerHTML = "pas de vainqueur";
		win=1;

	}


	console.log(win);
	}







