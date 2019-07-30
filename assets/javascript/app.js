//set array with different questions
//and the answers


//setting questions with class tag 
$(".timer").text("Time Remaining: "); 
$(".q1").text("What is the sunshine state?"); 
$(".q2").text("What is the world's longest river?"); 
$(".q3").text("What chess piece can only move diagonally?"); 
$(".q4").text("When did the Cold War end?"); 
$(".q5").text("Where would you find the Sea of Tranquility?"); 
$(".q6").text("What is the capital city of Spain?"); 


var incorrectAns = 0; 
var correctAns = 0; 
var timeLeft = 60; 

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


//set the time
var downloadTimer = setInterval(function(){
    $(".timer").text("Time remaining: " + timeLeft + " seconds"); 
    timeLeft -= 1; 

    if(timeLeft <= 0){
        clearInterval(downloadTimer);
        $(".timer").text("Time over!"); 
    }
}, 1000); 

//userAnswer matches the correct answer
function showResults(){
    //get the selected radio button value 
 
    for(var i=0; i< allQuestions[i].answers.length; i++){
    if($(".radio").checked === true){
        if(this.value === allQuestions[i-1].correctAnswer){
            correctAns++; 
            console.log("correct ans"); 
        }else{
            incorrectAns++; 
            console.log("wrong!"); 
        }
    }
}
}

//show results when submit is clicked
$("#submit").on("click", showResults())
    console.log("submitted");  



// for(var i=0; i< 6; i++){
//     var radios = $(".selector" + i); 
//     for(var j=0; j < radios.length; j++){
//         var radio = radios[j];
//         if(radio.value === "correct" && radio.checked){
//             correctAmt++; 
//         }else {
//             alert("wrong"); 
//         }
//     }
// }








