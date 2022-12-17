
// Alert=========================================
let catalog = document.getElementById("catalog");
let btn = document.getElementById("cansel-icon");
btn.addEventListener("click",function(){
    catalog.style.display = "none";
})


// Guess Number================================ 

// randomNumber is Generating
function randomNumber()
{
    let number = Math.floor(Math.random()*20) + 1;
    return number;
}


// variable declarition
let randomNu = randomNumber();
var checkbtn = document.querySelector(".check");
var againbtn = document.querySelector(".again");
var message = document.querySelector(".message");
var numbershow = document.querySelector(".number");
var score = 20;
var scorehtml = document.querySelector(".score");
var highscore = 0;
var highscorehtml = document.querySelector(".highscore");
var propinput = document.querySelector(".guess");


// when click on check button then main logic is execute.
checkbtn.addEventListener("click",()=>{
    var guessNu = Number(document.querySelector(".guess").value);

    // if any value is enter then it is run
    if(guessNu !== 0)
    {
        if(guessNu === randomNu)
        {
            highscore = score;
            message.innerHTML = "🔥 Correct number!";
            highscorehtml.innerHTML = score;
            document.body.style.backgroundColor = "green";
            propinput.style.backgroundColor = "green";
            numbershow.innerHTML = randomNu;
        }
        else if(guessNu > randomNu)
        {
            score = score - 1;
            message.innerHTML = " 📈 Too High";
            scorehtml.innerHTML = score;
        }
        else if(guessNu < randomNu)
        {
            score = score - 1;
            message.innerHTML = " 📉 Too Low";
            scorehtml.innerHTML = score;
        }
    }

})


// when click on again then all elements are reset but highscore is previous one.
againbtn.addEventListener("click",()=>{
    randomNu = randomNumber();
    score = 20;
    scorehtml.innerHTML = score;
    message.innerHTML = "Start Guessing...";
    document.body.style.backgroundColor = "black";
    propinput.style.backgroundColor = "black";
    numbershow.innerHTML = "?";
})
