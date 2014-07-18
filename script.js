$(document).ready(function() {

	//what does this do?  It takes a value over 10 and converts it to a face card
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?  It gives each random number a suite assignment (hearts, diamonds, spades, or clubs)
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck

	function shuffle(array) {
 		var m = array.length, t, i;

  	// While there remain elements to shuffle…
  		while (m) {

    // Pick a remaining element…
    	i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    	t = array[m];
    	array[m] = array[i];
    	array[i] = t;
	}

  	return array;
	}
	
	shuffle(deck);
	

	//divide out the cards into the two arrays
	
	var cards_player_1 = deck.splice(0,26);
	var cards_player_2 = deck
	var winner, loser;

	// WORKS UP TO THIS POINT!
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(player1draw,player2draw) {

		if(player1draw.number > player2draw.number){
			var winningcard = 'cards_player_1';
			var losingcard = 'cards_player_2';
			console.log('winner is ' + winner + ' loser is ' + loser);
			return winningcard;
		} else if(player1draw.number === player2draw.number){
			winner = 'tie'
			console.log(winner)
			return false;
		} else {
			winner = 'cards_player_2';
			loser = 'cards_player_1';
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		pull the cards
		winner = war(cards_player_1[0],cards_player_2[0])
		//who was the winner
		//was it false?
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});