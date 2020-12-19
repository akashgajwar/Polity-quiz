var readlineSync = require('readline-sync');
var chalk= require('chalk');
var player = readlineSync.question(chalk.red("What is your Name? "));
console.log(chalk.blue("Namaste "+ player));
var answer = readlineSync.question(chalk.green("would you like to play polity quiz, "+ player+"? "));

var score = 0;
if(answer ==="yes"){
  function play(question,answer){
  var userAnswer = readlineSync.question(chalk.blue(question));

  if (userAnswer === answer){
    console.log(chalk.green("you are right"));
    score++;
  }else{
    console.log(chalk.green("Wrong Answer!"));
  }

  console.log(chalk.yellow("Your current score is " + score));
  }

  var highScore=[
    {name:"Deepak", score:5},{name:"Kritesh",score:4},{name:"Aman",score:3},
  ]
  


  var questions = [{question:"Q1.Who is PM of India ", answer:"Narendra Modi"},{
  question:"Q2.Who is President of India ", answer:"Ram Nath Kovind"}, {question:"Q3.Who is Home Minister of India ", answer:"Amit Shah"},{question:"Q4.Who is Defence Minister of India ", answer:"RajNath Singh"},{question:"Q5.Who is Finance Minister of Inida ", answer:"Nirmala Sitharaman"}
  ]
  for (var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
  }

  console.log(chalk.green("Your final score is " + score));

  console.log(chalk.blue("highscore holder is " + highScore[0].name))
  console.log(chalk.red("And the high score is " + highScore[0].score))

  console.log(chalk.green("Thanks "+ player + " for participating!!"));
}
else{
  console.log(chalk.red("Hope to se you again " +player+"!"))
}