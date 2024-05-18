//     the way the function looks very ugly when the number of arguments grow 


// example

// interface User {
//     id:string;
//     name:string;
//     age :number;
//     email:string;
//     password:string
// }

// interface updateProps{
    
    //     name:string;
    //     age :number;
    //     email:string;
    //     password:string
// }

// function updateUser(updatedProps : updateProps){


// }









// so what we cna do is that we can use generics and pick api of the ts

// Pick helps to take some properties from an interface or a type and then use it to create other type so that dry principal wound not be violated
// interface User{
//     id:string ;
//     name :string ;
//     age : number;
//     password:string ;
//     email:string ;
// }
//  type updatedPorps = Pick <User , 'name'|'age'|'email'>
// function updateUser (updatedPorps :updatedPorps){
// // db call
// }








// partial makes all properties of a type optional creating a type whith the same properties but each marked as optional

// interface User{
//     id:string ;
//     name :string 
//     age : number;
//     password:string ;
//     email:string ;
// }
//  type updatedPorps = Pick <User , 'name'|'age'|'email'>
//  type updatedPorpsOptional = Partial <updatedPorps >
// function updateUser (updatedPorps :updatedPorpsOptional){
// // db call
// }









// readonly

const a = [1,2,3]
a[0]=23 // we get no error

// const userName:string = "harkirat"
// userName [2]="e" // we get a n error


// if we change an value inside of a or some object then we dont get an error
//  we are not re assisgning the whold thing we are only re assigning small part of the bigger thing


// type User = {
//     readonly name :string,
//     readonly age :number
// }
// const user:User = {
//     name:"jhon",
//     age :21
// }
// user.name= "new Jhon" // hence we are now getting the error of the readonly




// type User = {
//      name :string,
//      age :number
// }
// const user:Readonly<User> = {
//     name:"jhon",
//     age :21
// }
// user.name= "new Jhon" // hence we are now getting the error of the readonly






















// Records and Maps

// Ugly syntax

// type UserAge = { 
//     [key:string]:number
// }
// const users:UserAge= {
//     "ras@qd1":21,  
//     "ras@qd2":22
    
// }


// record is a method of the typescript so the javascrips does not understand it
// type Users = Record <string, {age :number; name :string}>
// const users:Users = { 
//     "ras@qd1":{age :21, name :"harkirat"},
//     "ras@qd2":{age :22, name :"harkirat2"},

// }



// map is the concept of the javascript and it is like we use in c++

const users = new Map ()
users.set(    "ras@qd1",{age :21, name :"harkirat"})
