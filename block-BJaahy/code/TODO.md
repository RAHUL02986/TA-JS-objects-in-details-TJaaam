# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

- Create another method named `calcArea` that will return the area of the square.

- Create a getter method named `area` that will return area of the square.

- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

- Check the `area` getter method on both square.

- Check the `isEqual` method and pass the two instance you 
created above.
```js
class Square {
    constructor (side) {
        this._width = side;
        this._height = side;
        this.numberOfTimes = 0;
    }
    description() {
        alert (`The square is ${this._width} x ${this._height}`)
    }
    calcArea() {
        return this._width * this._height;
    }
    get area() {
        this.nuberOfTime++;
        if(this.area >= 4){
            alert(`Upper Limit Reached!`)
        } else {
            return this.width * this.height;
        }
       return this.width * this.height
    }
    set area(value) {
        let side = Math.sqrt(value);
        this.width = side;
        this.height = side;
    }
    static isEqual(a, b) {
        return a.area === b.area;
    }
}

```

## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
```js
class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
}
```

- Create a getter method named `fullName` that will return the full name of the person.
```js
class User{
    constructor(firstName, lastName){
        this._first = firstName;
        this._last = lastName;
    }
    get fullName(){
        this._fullName = ` ${this._first} ${this._last}`;
        return this._fullName;
    }
}
```

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
```js
class User{
    constructor(firstName, lastName){
        this._first = firstName;
        this._last = lastName;
    }
    get fullName(){
        this._fullName = ` ${this._first} ${this._last}`;
        return this._fullName;
    }
    set fullName(name){
        if(name.length <5){
            alert (`Full name should be more than 5 characters`);
        }else{
            this._first = name.split(" ")[0];
            this._last = name.split(" ")[1];
            this._first = firstName;
            this._last = lastName;

        }
    }
}
```


- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
```js
class User{
    constructor(firstName, lastName){
        this._first = firstName;
        this._last = lastName;
    }
    get fullName(){
        this._fullName = ` ${this.
        _first} ${this._last}`;
        return this._fullName;
    }
    set fullName(name){
        if(name.length <5){
            alert (`Full name should be more than 5 characters`);
        }else{
            this.first = name.split(" ")[0];
            this.last = name.split(" ")[1];
            this.first = firstName;
            this.last = lastName;

        }
    }
    nameContains(str){
        return `${this.first} ${this.last}.contains(str)`;
    }
}
```

- Create two instance of the `User` class
```js
let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Snow");

```

- Check by using the `fullName` setter method with name bigger than 5 characters.
```js
user1.fullName;
user.fullName;
```

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method
```js
user1.nameContains("a");
user1.nameContains("z");
```