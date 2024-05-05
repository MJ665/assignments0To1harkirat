// to initialize a new project we have to
// npm install -g typescript
// npm init -y
// tsc --init 
// or npx tsc --init

// we can do nodemon index.ts to run this type script files
// also to transpile type script into the js and then run the code we have to run the command 
// tsc -b

console.log("hello")


const  x:Number = 1
console.log(x)


const myGreet = (name:string)=>{
    console.log("hari Om " + name)
}
myGreet("harish")
const myGreet2 = (name:any)=>{
    console.log("hari Om " + name)
}
myGreet2(['harish',23,"Mahesh"])




const sumFunc = (a:number , b:number):number=>{
    return a+b
}
console.log(sumFunc(2,4))


const isLegal  =(age :number):boolean=>{
    if(age >18){return true}
    return false
}
console.log(isLegal(4))











function runAfter1S (fn:()=>void){
    setTimeout (fn, 1000)
}
runAfter1S(function(){
    console.log("hi there")
})







const func2 = (a: number, b: number): number => {
    return a * b;
};

const func1 = (myFunc: (a: number, b: number) => number, a: number, b: number, callback: (result: number) => void): void => {
    setTimeout(() => {
        const result = myFunc(a, b) + myFunc(a, b); // Calculate the result
        callback(result); // Pass the result to the callback
    }, 1000); // 1-second delay
};

// Using a callback to handle the asynchronous result
func1(func2, 2, 3, (result) => {
    console.log("The result after this is " + result);
});









const func3 = async () => {
    // Function that multiplies two numbers
    const func2 = (a: number, b: number): number => {
      return a * b;
    };
  
    // Function that returns a Promise after a timeout
    const func1 = (myFunc: (a: number, b: number) => number, a: number, b: number): Promise<number> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Calculate the sum of two myFunc results
          const result = myFunc(a, b) + myFunc(a, b);
          resolve(result); // Resolve with the calculated result
        }, 1000); // 1-second delay
      });
    };
  
    // Correct usage of await with a Promise
    const result = await func1(func2, 2, 3);
    console.log("The result after this is " + result);
  };
  
  func3();
  














































  



















  
// this is violating the DRY principal do not repeat your self
interface User {
    
    firstName :string,
    lastName:string,
    age:number,
    email?:string // this is a optional argument the user can pass and cannnot pass it
}
function isLegal1 (user:User):boolean{
    if (user.age>18){
         return true
    }else {return false}
}

function greet (user:User):void{
    console.log("hi there "+ user.firstName)
}

greet({firstName:"harkirat",lastName:"singh",age:20})

























interface Person {
    name:string;
        age:number;
    greet(phrase:string):void // Line a
}
class Employee implements Person { // Line. b
    name:string ;
    age :number;
    constructor(n:string, a:number){
        this.name = n
        this.age= a
    }
    greet(phrase: string): void {
        console.log(`${phrase}.  ${this.name}`)
    }
}
class Manager1 { // Line c
    name:string ;
    age :number;
    constructor(n:string, a:number){
        this.name = n
        this.age= a
    }
    greet(phrase: string): void {
        console.log(`${phrase}.  ${this.name}`)
    }
}
class Manager2 implements Person { // Line d
    name:string ;
    age :number;
    constructor(n:string, a:number){
        this.name = n
        this.age= a
    }
    greet(phrase: string): void {
        console.log(`${phrase}.  ${this.name}`)
    }
}
// class Manager3 implements Person { // Line e
//     name:string ;
//     age :number;
//     constructor(n:string, a:number){
//         this.name = n
//         this.age= a
//     }

// }
const e = new Employee ("harkirat",22)
console.log(e.name)
e.greet("hello......")

interface User6 {age:number}
interface Manager6 extends User6 {name:number}
interface Employee6 extends User6 {name:string}

// interview question
// what is difference between interfaces class and types in type script

// what is meaning of implements Person
// try to give a detailied explanation with example



/*
here the Line a  in person
we have told each persong has a riight to get greet 
so each person should be have greet function
and every class implementing the person should have greet function


now in employee implements person in LIne b
we have told that the employee class is applied over Persons interface

in Line c we have not told manager 1 we have not told implements person
so it is possible that the manager cannot be a person 

in line d we have told that manager2 implements the person
and a person should have 
name age and greet 
so it is compulsory that manager should have defined variables like name age and greet

in line e we have told manager 3 implements the person but we have removed the code of greet
hence it is giving us the error of 
Class 'Manager3' incorrectly implements interface 'Person'.
  Property 'greet' is missing in type 'Manager3' but required in type 'Person'.ts(2420)
index.ts(227, 5): 'greet' is declared here.
          ^
TSError: ⨯ Unable to compile TypeScript:
src/index.ts:262:7 - error TS2420: Class 'Manager3' incorrectly implements interface 'Person'.
  Property 'greet' is missing in type 'Manager3' but required in type 'Person'.

262 class Manager3 implements Person { // Line e
          ~~~~~~~~

  src/index.ts:227:5
    227     greet(phrase:string):void // Line a
            ~~~~~~~~~~~~~~~~~~~~~~~~~
    'greet' is declared here.

    at createTSError (/opt/homebrew/lib/node_modules/ts-node/src/index.ts:859:12)
    at reportTSError (/opt/homebrew/lib/node_modules/ts-node/src/index.ts:863:19)
    at getOutput (/opt/homebrew/lib/node_modules/ts-node/src/index.ts:1077:36)
    at Object.compile (/opt/homebrew/lib/node_modules/ts-node/src/index.ts:1433:41)
    at Module.m._compile (/opt/homebrew/lib/node_modules/ts-node/src/index.ts:1617:30)
    at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
    at Object.require.extensions.<computed> [as .ts] (/opt/homebrew/lib/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1212:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1028:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12) {
  diagnosticCodes: [ 2420 ]
}

*/



























// TYPES in TS




type User3 = {
    firstName :string,
    lastName :string,
    age :Number
}

interface User4 {
    firstName :string,
    lastName :string,
    age :Number
}


// Interfaces & types are almost similar but the types cannot be applied on the classes but interfacec can be applied on classes
// Interface can be extended in class
// Types we can do Union or intersection or and
// Interface can extend but types cannot example
interface User8 {age:number}
interface Manager8 extends User6 {name:number}
interface Employee8  extends User6 {name:string}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202


type Employee5 = {
    name: string;
    startDate: Date;
  };
  
  type Manager5 = {
    name: string;
    department: string;
  };
  
  type TeamLead5 = Employee5 & Manager5;
  
  const teamLead5: TeamLead5 = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  






  function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));



interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));


interface Manager7 {
    name :string
}
type TechLead7 = {
    id : Number
}
type BothTechLeadManager7  = Manager7 & TechLead7
type OrTechLeadManager7  = Manager7 | TechLead7



















/*
if we have a function with the same name 
or exactly same function in two different files we get an error
why?

to compiler looks at multiple files 
duplicates in any file inside the folder containing the tsconfig shouldnt have same name


*/






























// ENUMS

// type KeyInput = "up"|"down"|"left"|"right"
// function doSomething2(keyPressed:KeyInput){
//     // do something
// }

// doSomething2("up")
// doSomething2("down")
// doSomething2("right")




// when we know that there are limited set of inputs for that particular function then we use enum

enum Direction { "up","down","left","right"}
function doSomething2(keyPressed:Direction){
    // do something
}

doSomething2(Direction.up)
doSomething2(Direction.down)
doSomething2(Direction.left)
doSomething2(Direction.right)

console.log(Direction.up) // ----> 0
console.log(Direction.down) // ----> 1
console.log(Direction.left) // ----> 2
console.log(Direction.right) // ----> 3
// output:
// 0
// 1
// 2
// 3




// Enum is not the concept of Java Scripit 
// why does the console.log output is like 0 1 2 3 
// and so the question what does it become when we transpile it into javascript
// our JS code gets transpilie like this

/* JS Code after transpiiilation from TS to JS
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function doSomething2(keyPressed) {
    // do something
}
doSomething2(Direction.up);
doSomething2(Direction.down);
doSomething2(Direction.left);
doSomething2(Direction.right);
console.log(Direction.up); // ----> 0
console.log(Direction.down); // ----> 1
console.log(Direction.left); // ----> 2
console.log(Direction.right); // ----> 3
// output:
// 0
// 1
// 2
// 3
*/




