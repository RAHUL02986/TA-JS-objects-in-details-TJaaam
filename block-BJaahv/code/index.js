// using object.create (protopal pattern)


// let projectMethod = {
//  incrementProject :function(val=1){

//     this.noOfProject = this.noOfProject + val;
//     return this.noOfProject;
//  },
//  decrementProject : function(val=1){
//     this.noOfProject = this.noOfProject - val;
//     return this.noOfProject;
//  },



//     changeName(name){
//         this.name = name;
//         return this.name;
//     },
//   getProject() {
//     return noOfProject; 
// },

    
// };


// function createProject(name, id , noOfProject = 0){

//          let detail = Object.create(projectMethod);
//          detail.name= name;
//          detail.id = id;
//          detail.noOfProject = noOfProject;
//          return detail;

// }

// let firstProject = createProject('sameer', 'delta', 4);
// console.log(firstProject.changeName('arya'));
// console.log(firstProject.id = "para");
// console.log(firstProject.incrementProject(10));
// console.log(firstProject.decrementProject(4));





// prototype



// function createProject(name, id , noOfProject = 0){

//          this.name= name;
//          this.id = id;
//          this.project = noOfProject;

// }
// createProject.prototype ={
//     incrementProject : function(val=1){
//         this.project = this.project + val;
//         return this.project;
//     },

// decrementProject : function(val=1){
//     this.project = this.project - val;
//     return this.project;
// },
// changeName : function(name){
//     this.name = name;
//     return this.name;
// },
// };


// let firstProject = createProject('sameer', 'delta', 4);
// // console.log(firstProject.changeName("Arya"));
// // console.log(firstProject.id = "para");
// console.log(firstProject.incrementProject(10));
// console.log(firstProject.decrementProject(4));


//- [ ] Using Pseudoclassical Way



// function User (name, id, noOfProjects) {
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
// }
// User.prototype  = {    
//     getProjects () {
//         return noOfProjects;
//     },
//     changeName(newName) {
//       let prevName = this.name;
//       this.name = newName;
//       return prevName;
//     },
//     incrementProject(value = 1) {
//         this.noOfProjects = this.noOfProjects + value;
//         return this.noOfProjects;
//     },
//     decrementProject(value = 1) {
//         this.noOfProjects = this.noOfProjects - value;
//         return this.noOfProjects;
//     },
// }
// let user1 = new User("Arya", 35, 67);
// let user2 = new User("John", 2, 34);



// []using class

class User{
constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}
getProjects(){
    return this.noOfProjects;
}
changeName(newName){
    this.newName = newName;
    return this.newName;
}

incrementProject(val=1){
    this.noOfProjects = this.noOfProjects + val;
    return this.noOfProjects;
}
decrementProject(val = 1){
    this.noOfProjects = this.noOfProjects - val;
    return this.noOfProjects;

}


}


let user1 = new User("Arya", 35, 67);
let user2 = new User("John", 2, 34);
