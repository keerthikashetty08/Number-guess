var msg1 =document.getElementById("message1");
var msg2 =document.getElementById("message2");
var msg3 =document.getElementById("message3");

var answer=Math.floor(Math.random()*100) +1;
var no_of_guesses = 0;
var guessed_nums= [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess<1 || user_guess>100)
    alert("Please enter number from 1-100 ");
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+=1;

        if(user_guess<answer){
            msg1.textContent=" you are guess bit lesser than my guess  :(";
            msg2.textContent=" No. of guesses :"+no_of_guesses;
            msg3.textContent="Guessed numbers are :"+guessed_nums;

        }
        else if(user_guess> answer){
            msg1.textContent=" Your guess is bit greater than my guess :(";
            msg2.textContent=" No. of guesses :"+no_of_guesses;
            msg3.textContent="Guessed numbers are :"+guessed_nums;
        }
        else{
            msg1.textContent=" Hurray!!!..You win   :) "
            msg2.textContent=" No. of guesses :"+no_of_guesses;
            msg3.textContent="Guessed numbers are :"+guessed_nums;
        }
    }
}