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
//     quizDemo.getCorrectAnswer(){
//         return quizDemo.options[quizDemo.correctAnswerIndex];
//     }
//     quizDemo.isAnswerCorrect (index) {
//         return index === quizDemo.correctAnswerIndex;
//     };
//     return quizDemo;
// }
// const testData = quiz('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);




//convert the function to use `this` keyword

function quiz(title,options,correctAnswer){

    let quizDemo = {};
    quizDemo.title  = title;
    quizDemo.options = options;
    quizDemo.correctAnswerIndex = correctAnswer;
    quizDemo.getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];

    };
    quizDemo.isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    };
    return quizDemo;
}
const testDat = quiz('where is the capital of Jorden', ['Amaan','Tashkent','kuwait city', 'Nairobi'], 1);