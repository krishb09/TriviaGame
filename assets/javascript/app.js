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
    counter++; 
    showQuestion(counter); 
    timeLeft = 20; 
    clearInterval(interval);

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
//check if radio button is checked
// function isChecked(){
//         for(var i=0; i<allQuestions[i].correctAnswer; i++){
//             var x = document.getElementById("label"+i).checked;
//             console.log(x);  
//             if(x === allQuestions[i].correctAnswer){
//                 alert("matched");
//             }else{
//                 alert("nope"); 
//             }
//         }   
// }

// function myFunction() {
//     var choice = document.forms[0];
//     // var txt = "";
//     var i;
//     for (i = 0; i < choice.length; i++) {
//     //   if (choice[i].checked) {
//     //     console.log(choice[i]); 
//     //   }
//     var checkedVal = choice[i].checked; 
//         for(var i=0; i<allQuestions.length; i++){
//             if(checkedVal === allQuestions[i].correctAnswer){
//                 alert("yep");
//             }else{
//                 alert("nope"); 
//             }
//         }
//     }
// }

//userAnswer matches the correct answer
// function showResults(){
//     //get the selected radio button value 
//         $("input[type='radio']").on("click", function(){
//             var radioVal = $("input[name='choice']:checked").val();
//         for(var j=0; j<allQuestions.length; j++){
//         var option=document.getElementById("label"+j);
//         // option.innerHTML=allQuestions[qno].answers[j];

//             for(var i=0; i<allQuestions.length; i++){
//                 if(option.innerHTML === allQuestions[i].correctAnswer){
//                     console.log(option); 
//                     alert("yay"); 
//                 }else{
//                     alert("nooo"); 
//                  }
//             }
//         }
        
// }

});















