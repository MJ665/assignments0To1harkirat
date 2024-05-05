"use strict";
// to initialize a new project we have to
// npm install -g typescript
// npm init -y
// tsc --init 
// or npx tsc --init
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// we can do nodemon index.ts to run this type script files
// also to transpile type script into the js and then run the code we have to run the command 
// tsc -b
console.log("hello");
const x = 1;
console.log(x);
const myGreet = (name) => {
    console.log("hari Om " + name);
};
myGreet("harish");
const myGreet2 = (name) => {
    console.log("hari Om " + name);
};
myGreet2(['harish', 23, "Mahesh"]);
const sumFunc = (a, b) => {
    return a + b;
};
console.log(sumFunc(2, 4));
const isLegal = (age) => {
    if (age > 18) {
        return true;
    }
    return false;
};
console.log(isLegal(4));
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
runAfter1S(function () {
    console.log("hi there");
});
const func2 = (a, b) => {
    return a * b;
};
const func1 = (myFunc, a, b, callback) => {
    setTimeout(() => {
        const result = myFunc(a, b) + myFunc(a, b); // Calculate the result
        callback(result); // Pass the result to the callback
    }, 1000); // 1-second delay
};
// Using a callback to handle the asynchronous result
func1(func2, 2, 3, (result) => {
    console.log("The result after this is " + result);
});
const func3 = () => __awaiter(void 0, void 0, void 0, function* () {
    // Function that multiplies two numbers
    const func2 = (a, b) => {
        return a * b;
    };
    // Function that returns a Promise after a timeout
    const func1 = (myFunc, a, b) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Calculate the sum of two myFunc results
                const result = myFunc(a, b) + myFunc(a, b);
                resolve(result); // Resolve with the calculated result
            }, 1000); // 1-second delay
        });
    };
    // Correct usage of await with a Promise
    const result = yield func1(func2, 2, 3);
    console.log("The result after this is " + result);
});
func3();
function isLegal1(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hi there " + user.firstName);
}
greet({ firstName: "harkirat", lastName: "singh", age: 20 });
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase}.  ${this.name}`);
    }
}
class Manager1 {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase}.  ${this.name}`);
    }
}
class Manager2 {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase}.  ${this.name}`);
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
const e = new Employee("harkirat", 22);
console.log(e.name);
e.greet("hello......");
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
const teamLead5 = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
function filteredUsers(users) {
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
    },]));
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
