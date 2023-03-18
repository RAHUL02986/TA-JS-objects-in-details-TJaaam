class Person{
    constructor(name,age,gender){
this.name = name;
this.age = age;
this.gender = gender;
    }
    eat(){
        return `I am ${this.name} and I am eat.`

    }
    sleep(){
        return `Iam ${this.name} and I am sleep.`
    }
    walk(){
        return `I am ${this.name} and I am walk.`
    }
}

class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName = sportsName;
    }
    play(){
        return `I am ${this.name} and i play ${this.sportsName}.`
    }

}

class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(){
        return `I am ${this.name} and i Teaching ${this.instituteName}. `;
    }
}

class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender);
    }
    createArt(){
        return `I am ${this.name} and I create ${this.kind}.`;
    }

}

class Cricketer extends Player{
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender,sportsName);
        this.teamName = teamName;
    }
    playcricket(){
        return ` I am ${this.name} and I play Cricket for ${this.teamName}.`;
    }
}

let rahul = new Person("rahul",25,"male");
console.log(person1);
