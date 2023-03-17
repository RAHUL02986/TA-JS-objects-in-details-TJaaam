// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

class Animal{
    constructor(location,noOfLegs){
        this.location = location;
        this.noOfLegs = noOfLegs;
    }
    eat(){
        alert `I live in ${this.location} and I can eat`;
    }
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.noOfLegs}`;
    }
}

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

class Dog extends Animal{
    constructor(location,noOfLegs,name, color){
        super(location,noOfLegs);
        this.name = name;
        this.color = color;
    }
    bark(){
        alert `I am ${this.name} and I can bark 🐶`;
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }

}

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`


class cat extends Animal{
    constructor( location,noOfLegs,name, colorOfEyes){
        super(location,this.noOfLegs);
    }

    meow(){
        alert `I am ${this.name}and I can do mewo meow 😹 `;
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColorOfEyes;
        return this.colorOfEyes;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.colorOfEyes}. I can also do meow meow`;
    }


}