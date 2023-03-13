
     

// let questionMethod = {
//     isAnswerCorrect : function(index){
//      return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer : function(){
//         return this.options[this.correctAnswerIndex];
//     },

// };

// function createQuestion(title, options, correctAnswerIndex){
//     let questions = Object.create(questionMethod);
//     questions.title = title;
//     questions.options = options;
//     questions.correctAnswerIndex = correctAnswerIndex;
//     return questions;
// }
// let firstQuestion =  createQuestion(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion =  createQuestion(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );



//   F.prototype

// function CreateQuestion(title, options, correctAnswerIndex){
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// }

// CreateQuestion.prototype ={
//     isAnswerCorrect : function(index){
//         return index === this.correctAnswerIndex;
//        },
//        getCorrectAnswer : function(){
//            return this.options[this.correctAnswerIndex];
//        },
// }

// let firstQuestion = new CreateQuestion(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion = new CreateQuestion(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );
  


// CLASS/


class Question {
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
    getAnswerCorrect(){
        return this.options[this.correctAnswerIndex];
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  