var incorrectAns = 0; 
var correctAns = 0; 
var timeLeft = 20; 
var counter =0; //track of question
var interval; //for time 
var currentNumber=0; 

//set array with different questions
//and the answers
var allQuestions = [
    {
    question: "What is the sunshine state?", 
    answers: ["Florida", "Rhode Island", "Hawaii"], 
    correctAnswer: "Florida"
    }, 

    {
    question: "What is the world's longest river?", 
    answers: ["Ganges", "Amazon", "Nile"], 
    correctAnswer: "Amazon"
    }, 

    {
    question: "What chess piece can only move diagonally?", 
    answers: ["Bishop", "Queen", "Knight" ], 
    correctAnswer: "Bishop"
    },

    {
    question: "When did the Cold War end?", 
    answers: ["1991", "1980", "1985"], 
    correctAnswer: "1991"
    },

    {
    question: "Where would you find the Sea of Tranquility?", 
    answers: ["Jupiter", "The Moon", "Russia"], 
    correctAnswer: "The Moon"
    },

    {
    question: "What is the capital city of Spain?", 
    answers: ["Madrid", "Seville", "Barcelona"], 
    correctAnswer: "Madrid"
    }
]; 

$(document).ready(function(){
    // startGame(); 

    // function startGame(){
    //     var newButton = $("<button>");
    //     newButton.text("Start"); 
    //     $("#next").empty();  
    //     $("#next").append(newButton); 
    
    // }
    
function showQuestion(qno){
    timerSet(); 

        if(counter === 6){
            gameOver(); 
        }else{

        var quesDiv = $("<div>");
        var questionStore = allQuestions[qno].question; 
        var quesP = $("<p>").text(questionStore);
        quesDiv.append(quesP); 

        for(var j=0; j<allQuestions[qno].answers.length; j++){
            var option=document.getElementById("label"+j);
            option.innerHTML=allQuestions[qno].answers[j];
        }
        var newButton = $("<button>");
        newButton.text("Next Question"); 
        $("#next").empty();  
        $("#next").append(newButton); 

        $("#question").empty(); 
        $("#question").append(quesDiv); 
        interval = setInterval(timerSet, 1000); 
    }
}
showQuestion(counter); 

//need to be able to display next set of questions with same html
$("#next").on("click", function(){
   
    timeLeft = 20; 
    clearInterval(interval);

    console.log("counter: " +counter);
    console.log("value: " + ($("input[name='choice']:checked").val()));
    console.log(allQuestions[counter].correctAnswer);
    if (
      $(!"input[name='choice']:checked").val()) 
      {
      alert("nothing checked");
      // return false;
    } else if($("input[name='choice']:checked").val() === allQuestions[counter].correctAnswer ) {
      alert("match");
    }

    counter++; 
    showQuestion(counter); 
}); 

//set the time
function timerSet() {
    $(".timer").text("Time Remaining: " + timeLeft + " seconds"); 
    timeLeft -= 1; 

    if(timeLeft <= 0){
        clearInterval(interval);
        $(".timer").text("Time over!"); 
        questionOver(); 
         
    }
}



function questionOver(){
    var endDiv = $("<div>"); 
    var endP = $("<p>").html("<h1>Your Answer is...</h1>");
    endDiv.append(endP); 

    //see if it's correct or incorrect
    //display Correct! or Incorrect! 

    var incDiv = $("<div>"); 
    var incP = $("<p>").text("Incorrect Answers: " + incorrectAns);
    incDiv.append(incP); 

    var corrDiv = $("<div>"); 
    var corrP = $("<p>").text("Correct Answers: " + correctAns);
    corrDiv.append(corrP); 

    $("#question").empty();
    $("#question").append(endDiv); 
    $("#question").append(incDiv); 
    $("#question").append(corrDiv); 

    var newButton = $("<button>");
    newButton.text("Next Question"); 
    $("#next").empty();  
    $("#next").append(newButton); 

}

function gameOver(qno){
    var endDiv = $("<div>"); 
    var endP = $("<p>").html("<h1>GAME OVER</h1>");
    endDiv.append(endP); 

    var incDiv = $("<div>"); 
    var incP = $("<p>").text("Incorrect Answers: " + incorrectAns);
    incDiv.append(incP); 

    var corrDiv = $("<div>"); 
    var corrP = $("<p>").text("Correct Answers: " + correctAns);
    corrDiv.append(corrP); 

    $("#question").empty();
    $("#question").append(endDiv); 
    $("#question").append(incDiv); 
    $("#question").append(corrDiv); 

    var newButton = $("<button>");
    newButton.text("Restart Game"); 
    $("#next").empty();  
    $("#next").append(newButton); 
    
}
});















