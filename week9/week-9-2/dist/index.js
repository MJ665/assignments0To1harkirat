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
