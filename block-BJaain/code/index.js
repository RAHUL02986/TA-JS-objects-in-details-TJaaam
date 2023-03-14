console.log(this.document === document); // true

// ------------

console.log(this === window); //true

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //false

// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); //simple function call
        //true

// ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); // function invocation
// true

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); //{someMethod: ƒ}someMethod: ƒ ()[[Prototype]]: Object


// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person1 = new Person('John', 'Reed');
person1.displayName(); // Name : John Reed
let person3 = new Person('Paul', 'Adams');
person3.displayName(); // Name : Paul Adams

// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // false
let fun1 = user.foo1;
fun1(); // true
user.foo1(); // flase

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // 81

var retrieveX = obj.getX;
retrieveX(); // 9

var boundGetX = retrieveX.bind(obj);
boundGetX(); // 81

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function (){
    console.log(`Name : ${this.firstName} ${this.lastName}`);
  };

}

let personOne = new Person('John', 'Reed');
personOne.displayName(); // John Reed
let persontwo = new Person('Paul', 'Adams');
persontwo.displayName(); // Paul Adams

personOne.displayName.call(persontwo); // name : Paul Adams

// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);


obj.getThis();

// Not a function
obj.getThis.call(a);

// cant read properties of undefiend.
obj.getThis2();

// not a function
obj.getThis2.call(a);

// Error
obj.getThis3();

// not a function
obj.getThis4();
//not a function

// -------------

let personal = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

personal.greet(); // hello, Jay

let greet = personal.greet;
greet(); // hello,

// -------------

let name = 'Jay Global';
let person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // Jay Details
console.log(person.print()); // Jay Person

let name1 = person.print;
let name2 = person.details;

console.log(name1()); // undefiend
console.log(name2.print()); // Jay Details

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()();// Error

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); // window
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // object.doubleArrow();

      // this inside of outerFn doubleArrow()
      // {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
      // {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
      // {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
      // {data: Array(3), dataDouble: Array(3), double: ƒ, doubleArrow: ƒ}
      // [2, 4, 6]
      return item * 2;
    });
  },
};

object.double();
object.doubleArrow();

// --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); //Bob

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // 2

// --------------

const calls = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

calls.says(); // Hey, mom just called

// -----------------

const called = {
  caller: 'mom',
  says:function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCal = called.says;

newCal();//Hey, undefined just called.

 // 

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // undefiend called, too!
