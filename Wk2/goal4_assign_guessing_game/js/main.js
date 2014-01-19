/*
 Name: Yolanda Siegrist
 Date: 1/17/14
 Assignment: GUESSING GAME
 */

//Game Variables
(function(){
var guess = Math.floor(Math.random() * 10 + 1);
console.log(guess);
var guesses = 0;

document.querySelector("button").onclick = function guessGame(){
	if(guesses<3){//No more Than 3 Guesses
		
		var num = document.querySelector("#input").value;
		
		guesses++;
		
		if(num == " "){//If Number Is Empty

         document.getElementById("output").innerHTML = "Guess My Magic Number, It's Between 1-10 <br/> Guess "+guesses+" - You Didn't Guess Anything!!";

         return false;

       }else if (num > 10){//If Number Is Greater Than 10

         document.getElementById("output").innerHTML = "Guess My Magic Number, It's Between 1-10 <br/> Guess "+guesses+" - "+num+" Is Too High!! Try Again!";

         return false;

       }else if (num < 1){//If Number Is Less Than 1

         document.getElementById("output").innerHTML = "Guess My Magic Number, It's Between 1-10 <br/> Guess "+guesses+" - "+num+" Is Too Low!! Try Again!";

         return false;

       }else{

         if(num < guess){//If Number Is Less Than Guess 

           document.getElementById("output").innerHTML = "Guess My Magic Number, It's Between 1-10 <br/> Guess "+guesses+" - My Number Is Higher Than "+num;

           return false;

         }else if(num > guess){//If Number Is Greater Than Guess

           document.getElementById("output").innerHTML = "Guess My Magic Number, It's Between 1-10 <br/> Guess "+guesses+" - My Number Is Lower Than "+num;

           return false;

         }else{

           document.getElementById("output").innerHTML = "WINNER!!!!! "+num+" is correct!!!";
		   document.querySelector("button").onclick = "event.cancelBubble = true";
		   document.querySelector("button").innerHTML = "RESET";
		    
		   document.querySelector("button").onclick = function reset(){
			   window.location.reload();
		   }
		   return false;
		 }
		 return false;
	   }
	   
	}else{
		document.getElementById("output").innerHTML = "You've had "+guesses+" guesses - Too Many Guesses, Sorry!";
		document.querySelector("button").onclick = "event.cancelBubble = true";
		document.querySelector("button").innerHTML = "RESET";
		document.querySelector("button").onclick = function reset(){
		    window.location.reload();
       }
       return false;
	}
};


})();