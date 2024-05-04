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