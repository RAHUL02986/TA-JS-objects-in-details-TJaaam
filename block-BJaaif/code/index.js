/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
    greet : function (){
    console.log(`Hello`) ;
   }
  }


// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/
// Create a function `personFromPersonStore` 
// that takes as input a `name` and an `age`.
//  When called, the function will create person 
//  objects using the `Object.create` method on the `
//  personStore` object. And return the object with
//   age and name.
let methods={
  greet(){
console.log("Hello");
  }
}

function personFromPersonStore(name, age) {
  let obj = Object.create(methods);
  obj.name = name;
  obj.age = age;
  return obj;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// Create a function `PersonConstructor`
//  that uses the `this` keyword to save a single
//   property onto its scope called `greet`. `greet`
//    should be a function that logs the string 'hello'.

function PersonConstructor() {
   this.greet = function(){
    console.log("hello");
  }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
let obj = new PersonConstructor();
obj.name= name;
obj.age = age ;
return obj;
}

var mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
function PersonConstructor() {
  this.greet = function(){
   console.log("hello");

 }
 this.introduce = function(){
  console.log('Hi, my name is Mike');
 }

}


mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// Create a class `PersonClass`. 
// `PersonClass` should have a constructor
//  that is passed an input of `name` and saves
//   it to a property by the same name. `PersonClass`
//    should also have a method called `greet` that logs
//     the string 'hello'.

class PersonClass {
  constructor(name) {
this.name = name;

  }
greet(){
  console.log("hello");
}

}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/
// Create a class `DeveloperClass` 
// that creates objects by extending
//  the `PersonClass` class. In addition
//   to having a `name` property and `greet`
//    method, `DeveloperClass` should have an 
//    `introduce` method. When called, `introduce`
//     should log the string 'Hello World,
//      my name is [name]'.

class DeveloperClass{
  constructor(name){
  this.name = name;
  }
  greet(){
    console.log("hello");
  }
   introduce(){
    console.log(`Hello World, my name is ${this.name} `);
   }

}

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
  let obj = userFactory(name,score);
  Object.setPrototypeOf(obj, adminFunctionStore);
  obj.type = "Admin";
  return obj;
}

adminFunctionStore.sharePublicMessage = function() {
  console.log(`Welcome User`);
}


/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
