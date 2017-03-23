var interval;
var questionCounter = 1;
var gameTimer = 0;
var number = 0;

$(document).ready(function() {

	
		var questions = {
						ask:[{inq :"What is the name of the second 'Toejam and Earl' game?", 
									answer1:"Pump Up the Funk!", 
									answer2:"Mission to Earth", 
									answer3:"Panic on Funkotron", 
									answer4:"It's just 'Toejam and Earl 2'", 
									correctAnswer:"Panic on Funkotron",
									questionBio:"This is the sequel to the original 'ToeJam and Earl' game for Sega Genesis. In the first 'ToeJam and Earl' game you had to find all twenty-five ship pieces. In this game you must capture all the Earthlings using Trap-o-Matic jars and send 'em back to Earth."}, 
						     {inq :"What was the third 'Toejam and Earl' game originally going to be called?", 
						     		answer1:"All Funked Up", 
									answer2:"Mission to Funkotron", 
									answer3:"Panic on Funkotron", 
									answer4:"Here Comes the Funk", 
						     		correctAnswer:"All Funked Up",
						     		questionBio:"'All Funked Up' was the original title for the third 'Toejam and Earl' game but some people didn't think it sounded appropriate. The name that was then picked was 'Mission to Earth'. Although, if you look at the ending to the game (when they're doing their rap for the Earthlings) you can see posters in the back that still say 'All Funked Up.'"},
							 {inq :"What is the name of Toejam and Earl's short, green friend in the second 'Toejam and Earl' game?", 
							 		answer1:"Lewanda", 
									answer2:"Flamey", 
									answer3:"Fansworth", 
									answer4:"Peabo", 
							 		correctAnswer:"Peabo",
							 		questionBio:"Peabo has three eyes and often gets the hiccups when he gets nervous. Flarney and Lewanda are the names of two of their other friends (Flarney is the blue one with two heads who often gets in arguments with himself and Lewanda is the red female alien who is the love interest of ToeJam). I made up Farnsworth."}, 
							 {inq :"Who is the female alien Toejam is attracted to in the second 'Toejam and Earl' game?", 
							 		answer1:"Sharla", 
									answer2:"Bloona", 
									answer3:"Lewanda", 
									answer4:"Latisha", 
							 		correctAnswer:"",
							 		questionBio:"Lewanda is the red alien that both ToeJam and Earl are attracted to. Once you beat the game, Lewanda will ask to go out with ToeJam or Earl (depending on who you are playing as). If you beat the game with both characters, Lewanda's twin cousin Sharice comes and asks to go out with Earl. Sharla and Bloona are both characters in 'Panic on Funkotron' but Latisha is the main female in 'Mission to Earth.'"},
							 {inq :"Which of these Earthlings is not in 'Toejam and Earl'?", 
							 		answer1:"The Wiseman in the Carrot Suit", 
									answer2:"Santa Clause", 
									answer3:"Photographer", 
									answer4:"The Wizard", 
							 		correctAnswer:"Photographer",
							 		questionBio:"Santa Clause is often in random places and if you sneak up on him, you'll scare the presents out of him (literally). The Wiseman in the Carrot Suit is on some levels and will identify presents for you. The Wizard lurks around nearly every level and for a buck, he'll heal you. The photographer doesn't make an appearance until 'ToeJam and Earl: Panic on Funkotron' and 'ToeJam and Earl III: Mission to Earth.'"}, 
							 {inq :"The two modes in 'Toejam and Earl' are Random World and Perfect World.", 
							 		answer1:"True", 
									answer2:"False", 
							 		correctAnswer:"False",
							 		questionBio:"The modes are actually Random World and Fixed World. In Fixed World, everything is the same every time, all the ship pieces, exit elevators, and presents are in the same spot each time you play. In Random World, it's different every time you play, which makes it harder to find the ship pieces and exit elevators."},
							 {inq :"What is the real name of the Anti-Funk in 'Mission to Earth'?", 
							 		answer1:"Frank", 
									answer2:"Luke", 
									answer3:"Mark", 
									answer4:"James",
							 		correctAnswer:"James", 
							 		questionBio:"Lamont the Funkopotomas reveals that his name is James in one of his cut-scenes. Then later, the Anti-Funk keeps calling himself James and it's quite humorous. He says 'You must now bow down to James.. I mean the Anti-Funk!'"}, 
							 {inq :"What do you use to capture Earthlings in the second game?", 
							 		answer1:"Little blue balls", 
									answer2:"Garbage bags", 
									answer3:"Backpacks", 
									answer4:"Jars",
							 		correctAnswer:"Jars", 
							 		questionBio:"In the opening movie to 'Panic on Funkotron' ToeJam and Earl are revealed to be the ones who brought the Earthlings to Funkotron. ToeJam goes over the plans to Earl about what they are gonna do to get rid of the Earthlings. He says that they'll use Trap-o-Matic Jars to catch them. Certain Earthlings require you throw more Jars at them, but you can also get Super Jars which capture an Earthling in one hit."},
							 {inq :"What do you have to collect for Lamont the Funkapotumus in 'Mission to Earth'?", 
							 		answer1:"Funk", 
									answer2:"Ship pieces", 
									answer3:"CDs", 
									answer4:"Vinyls", 
							 		correctAnswer:"Vinyls", 
							 		questionBio:"This is the Bio for question 9 - enjoy this Michael"}, 
							 {inq :"The Wahinis (Hula Dancers) do damage to you.", 
							 		answer1:"True", 
									answer2:"False", 
							 		correctAnswer:"", 
							 		questionBio:"They dance causing you to dance with them so other Earthlings can come attack you. Therefore, they don't neccessarily do any damge to you, but they do make you vulnerable."}],
		}//------END questions---------	
		

		//  The decrement function.
	    function decrement() {

	      //  Decrease number by one.
	      number--;

	      //  Show the number in the #show-number tag.
	      $("#show-number").html("<h2>" + number + "</h2>");


	      //  Once number hits zero...
	      if (number === 0) {

	        //  ...run the stop function.
	        stop();

	        //  Alert the user that time is up.
	        alert("Time Up!");
	      }
	    }//END decrement

		//  The stop function
	        function stop() {

		      //  Clears our intervalId
		      //  We just pass the name of the interval
		      //  to the clearInterval function.
		      clearInterval(intervalId);
	while questionCounter <10 and gameTimer < (100 * 1000) {

		//dsiplays the question in the question div
		$('#question').innerHTML(question.ask[])
		    }	
		questionCounter+=1;
	}//END While loop
});
//--------------------GAME LOGIC----------------	};
//LOAD START PAGE background HTML --- DO logic and loops After HTML LOADS - 
//LISTEN for start button to click 
	//after stat click load GAME PAGE VIDEO background
//LOOP through 10 questions
		//after answer -- display whether User got right answer
		//wiat some SECONDS until NEXT questions
//END game after 10 questions


//	---------------------TESTING AREA------------------------
console.log(questions.ask[9].inq);
console.log(questions.ask[9].answer1);
console.log(questions.ask[9].answer2);
console.log(questions.ask[9].answer3);
console.log(questions.ask[9].answer4);
console.log(questions.ask[9].correctAnswer);
console.log(questions.ask[9].questionBio);

console.log(questions.ask[0].inq);
console.log(questions.ask[0].answer1);
console.log(questions.ask[0].answer2);
console.log(questions.ask[0].answer3);
console.log(questions.ask[0].answer4);
console.log(questions.ask[0].correctAnswer);
console.log(questions.ask[0].questionBio);

