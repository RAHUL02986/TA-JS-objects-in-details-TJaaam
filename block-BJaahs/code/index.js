// - `title` (title of the question)
// - `options` (array of options)
// - `correctAnswerIndex` (index of the correct option)

// const testData = {
//     title: 'Where is the capital of Jordan',
//     options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex: 1,
//   };
  

// //without object
// let title = 'Where is the capital of Jorden';
// let option = ['Tashkent','Amaan','Kuwait city','Nairobi'];
// let correctAnswerIndex = 1;
// function getcorrectAnswer(){
//     return option[correctAnswerIndex];
// }

// function isAnswerCorrect(index){
//     return index === correctAnswerIndex;

// }


// // orgnaize using object

// let quizDemo ={
//     title : 'Where is the capital of Jorden',
//     option : ['Tashkent','Amaan','Kuwait city','Nairobi'],
//     correctAnswerIndex : 1,
//     getcorrectAnswer(){
//         return quizDemo.option[quizDemo.correctAnswerIndex];

//     },
//     isAnswerCorrect(index){
//         return index === quizDemo.correctAnswerIndex;

//     },
// };

// use a function to create object
// function quiz (title, options, correctAnswer) {
//     let quizDemo = {};
//     quizDemo.title = title;
//     quizDemo.options = options;
//     quizDemo.correctAnswerIndex = correctAnswer;
//     quizDemo.getCorrectAnswer=function(){
//         return quizDemo.options[quizDemo.correctAnswerIndex];
//     }
//     quizDemo.isAnswerCorrect = function(index) {
//         return index === quizDemo.correctAnswerIndex;
//     };
//     return quizDemo;
// }
// const testData = quiz('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);




//convert the function to use `this` keyword

function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    question.isCorrectAnswer = function(index){
        return index === this.correctAnswerIndex;
    };

    question.getCorrectAnswer=function(){
        return this.options[this.correctAnswerIndex];
        
    };
    return question;
};
const firstQuestion = createQuestion('where is the capital of Jorden', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);
