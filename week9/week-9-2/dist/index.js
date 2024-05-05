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
