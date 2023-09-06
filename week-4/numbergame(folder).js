var msg = document.getElementById("message");

var answer = Math.floor(Math.random()*10) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("txtMyNumber").ariaValueMax;
    if(user_guess < 1 || user_guess >100){
        alert("Please enter a number between 1 and 10.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.txtContent = "Your guess is too low, try again!";
        }
        else if(user_guess > answer){
            msg1.txtContent = "Your guess is too high, try again!";
        }
        else if(user_guess == answer){
            msg1.txtContent = "Congratulations! You picked the correct number!";
        }
    }
}