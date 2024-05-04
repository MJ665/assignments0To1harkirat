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

