let tour_paire = true;
let game_history = [];
let nbr_partie = 0;


	



for (let i = 0 ; i < document.getElementsByTagName("li").length; i++) {
	document.getElementsByTagName("li")[i].addEventListener("click", update_board);

}


function update_board(e){
	e.preventDefault();

	if(e.target.innerHTML.length == 0){
		tour_paire ? e.target.innerHTML='X' : e.target.innerHTML='O';
		check_winner();
		tour_paire = !tour_paire;		
	}

	check_null();

}


function check_winner(){

	let win = false;

	const wining_board = 

	[[0, 1, 2],
	 [3, 4, 5], 
	 [6, 7, 8],
	 [0, 3, 6], 
	 [1, 4, 7],
	 [2, 5, 8], 
	 [0, 4, 8],
	 [2, 4, 6]]

	 for(let l=0;l<wining_board.length;l++){
	 	for(let c=0;c<wining_board[l].length;c++){

	 		if(tour_paire){
	 			if(document.getElementsByTagName("li")[wining_board[l][c]].innerHTML == 'X'){
	 				win = true;

	 			}
	 			else{
	 				win = false;
	 				break;
	 			}

	 		}
	 		else{
	 			if(document.getElementsByTagName("li")[wining_board[l][c]].innerHTML == 'O'){
	 				win = true;
	 			}
	 			else{
	 				win = false;
	 				break;
	 			}

	 		}


	 	}
	 	if(win){
	 		break;
	 	}
	 }

	 if (win){
	 	if(tour_paire){
	 		alert("Le joueur X gagne!");

	 	}
	 	else{
	 		alert("Le joueur O gagne!")
	 	}

		button_save();
		resetBoard();
	 }
}

function button_save(){
	var completed_board = [];
	var board = document.getElementsByClassName("board")[0];


	for(let i = 0; i< document.getElementsByTagName("li").length;i++){
		completed_board.push(document.getElementsByTagName("li")[i].innerHTML);
	}

	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Revenir sur la partie n° : " + (nbr_partie + 1);
	btn.value = nbr_partie;
	btn.className = "btn btn-lg btn-primary";
	btn.style.borderWidth = "5px" ;

	btn.addEventListener("click", remplirBoard);
	game_history.push(completed_board);
	board.appendChild(btn);
	nbr_partie ++;


}

function remplirBoard(e){
	
	var fill = game_history[e.target.value];
	document.getElementsByClassName("board")[0].addEventListener("dblclick",resetBoard);
	for(i=0;i<document.getElementsByTagName("li").length;i++){

		document.getElementsByTagName("li")[i].innerHTML = fill[i];

	}




}

function resetBoard(){

	document.getElementsByClassName("board")[0].removeEventListener("dblclick",resetBoard);

	for(let i = 0; i< document.getElementsByTagName("li").length;i++){

		document.getElementsByTagName("li")[i].innerHTML = "";

	}
	tour_paire = true;
}

function check_null(){

	let isNull = false;

	for(i=0;i<document.getElementsByTagName("li").length;i++){
		if(document.getElementsByTagName("li")[i].innerHTML == "X" || document.getElementsByTagName("li")[i].innerHTML == "O" ){
			isNull = true;
		}
		else{
			isNull = false;
			break;
		}
	}
	if (isNull){
		alert("Egalite!")
		button_save();
		resetBoard();
	}
}


