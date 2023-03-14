// properties
// - `location`
// - `numberOfLegs`

// methods
// eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


let animalMethod = {
    eat(){
console.log(`I live in ${location} and I can eat`);
    },
    changeLocation(newLocation){
        this.location = newLocation;
    },
 summary (){
    returns `I live in ${location} and I have ${numberOfLegs}`

 },



};

function animal(location, noOfLages) {
    let obj = Object.create(animalMethod);
    obj.location = location;
    obj.legs = noOfLages;
    return obj;
}

// Dog
// Properties:

// - `name`
// - `color`
// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`


let dogMethods ={
    bark() {
        alert( `I am ${this.name} and I can bark 🐶`)

    },
    changeName(newName){
        this.name = newName;
        return newName;
    },
    changeColor(newColor){
        this.color = newColor;
    },
    summary(){
        return (`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    },
};
Object.setPrototypeOf(dogMethods, animalMethod);


function dog(location, noOfLages,name,color){
    let obj = Object.create(dogMethods);
    obj.location = location;
    obj.legs = noOfLages;
    obj.name = name;
    obj.color = color;
    return obj;
}



// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`





let catMethods = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName){
        this.name = newName;
        return newName;
    },
    changeColor(newColor){
        this.color = newColor;
    },
    summary(){
        return (`I am ${this.name} and I am of ${this.colorOfEyes} color. I can also do meow meow `);
    },

    
}
Object.setPrototypeOf(catMethods,animalMethod);
function cat(location, noOfLages, name, colorOfEyes){
    let obj = Object.create(catMethods);
    obj.location = location;
    obj.legs = noOfLages;
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    return obj;
}