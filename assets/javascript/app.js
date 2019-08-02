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
    correctAnswer: "Florida",
    correctLabel: "0"
    }, 

    {
    question: "What is the world's longest river?", 
    answers: ["Ganges", "Amazon", "Nile"], 
    correctAnswer: "Amazon",
    correctLabel: "1"
    }, 

    {
    question: "What chess piece can only move diagonally?", 
    answers: ["Bishop", "Queen", "Knight" ], 
    correctAnswer: "Bishop",
    correctLabel: "0"
    },

    {
    question: "When did the Cold War end?", 
    answers: ["1991", "1980", "1985"], 
    correctAnswer: "1991",
    correctLabel: "0"
    },

    {
    question: "Where would you find the Sea of Tranquility?", 
    answers: ["Jupiter", "The Moon", "Russia"], 
    correctAnswer: "The Moon",
    correctLabel: "1"
    },

    {
    question: "What is the capital city of Spain?", 
    answers: ["Madrid", "Seville", "Barcelona"], 
    correctAnswer: "Madrid",
    correctLabel: "0"
    }
]; 

$(document).ready(function(){
    $(".restart").hide(); 
function showQuestion(qno){
    $("#question").show(); 
    $(".button").show(); 
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
    document.querySelector('input[name="choice"]:checked').checked = false; 
    counter++; 
    showQuestion(counter); 
}); 
$(".restart").on("click", function(){

    $("#question").hide(); 
    $(".restart").hide(); 
    incorrectAns =0; 
    correctAns =0; 
    //hide everything
    //then run 
    counter =0; 
    showQuestion(counter); 
    $("#endGame").empty(); 

});
$(".button").on("click", function() {
    if(counter === 6){
        gameOver();
    }else{
        questionOver();
    }
}); 
//set the time
function timerSet() {
    $(".timer").text("Time Remaining: " + timeLeft + " seconds"); 
    timeLeft -= 1; 
    if(timeLeft <= 0){
        clearInterval(interval);
        $(".timer").text("Time over!"); 

    }
}
function questionOver(){
    var newButton = $("<button>");
    newButton.text("Next Question"); 
    $("#next").empty();  
    $("#next").append(newButton); 

    $("input[type='radio']:checked").each(function() {
        var idVal = $(this).attr("value");
        console.log('ID VAL', idVal)

        if (idVal === allQuestions[counter].correctLabel) {
            console.log('CORRECT!'); 
            var endDiv = $("<div>"); 
            var endP = $("<p>").html("<h1>Your Answer is...</h1>");
            endDiv.append(endP); 
            var corrDiv = $("<div>"); 
            var corrP = $("<p>").text("Correct(:");
            corrDiv.append(corrP);
            $("#question").empty();
            $("#question").append(endDiv); 
            $("#question").append(corrDiv); 
            correctAns++; 
        }else{
            console.log('WRONG');
            var endDiv = $("<div>"); 
            var endP = $("<p>").html("<h1>Your Answer is...</h1>");
            endDiv.append(endP); 
            var incDiv = $("<div>"); 
            var incP = $("<p>").text("Incorrect ):");
            incDiv.append(incP); 
            $("#question").empty();
            $("#question").append(endDiv); 
            $("#question").append(incDiv); 
            incorrectAns++; 
        }
    });
}

function gameOver(qno){
    var endDiv = $("<div>"); 
    var endP = $("<p>").html("<h1>GAME OVER!!</h1>");
    endDiv.append(endP); 

    var incDiv = $("<div>"); 
    var incP = $("<p>").text("Incorrect Answers: " + incorrectAns);
    incDiv.append(incP); 

    var corrDiv = $("<div>"); 
    var corrP = $("<p>").text("Correct Answers: " + correctAns);
    corrDiv.append(corrP); 

    // $("#question").empty();
    $("#question").hide()


    // $("#question").append(endDiv); 
    // $("#question").append(incDiv); 
    // $("#question").append(corrDiv); 

    $("#endGame").append(endDiv); 
    $("#endGame").append(incDiv); 
    $("#endGame").append(corrDiv); 

    $(".button").hide(); 
    $("#next").empty();
    $(".timer").empty(); 
    $(".restart").show(); 
}
});















