// // My Type Script Notes



// // creating a custom type

// // type numArr = number[] | string[]
// // // OR
// // type numArr = (number | string)[]
// // // OR
// type numArr = Array<number> | Array<string>


// // creating arr which is a variable using that custom type
// const myFunc = (arr:numArr):number | string=>{
// return arr[0]
// }
// let myArr1:number []=[1,2,3,4,5]
// let myArr2:string []=["asd","234","ere"]
// console.log( myFunc(myArr1))
// console.log( myFunc(myArr2))





// // when i will hover on the myFunc(myArr2) and suppose i have to do .toLowerCase operation after the output comes
// // it will give me a error that 
// // toLowerCase is not a function for type 
// // number | string


// // the function should automatically identify that weather the return is string or number and should act accordingly

// // the type script should identify 
// // if input is string output is string 
// // if input is number output is number 



// // bad ugly solution





// let myFuncNum =(arr:number []):number  =>{
// return arr[0]
// }
// let myFuncStr=(arr:string[]):string=>{
//     return arr[0]
// }


// const myArr1 : number[]=[1,2,34,4,5,6,7]
// const myArr2 : string[]=["234r","sdfasdfas","asdfas"]
// console.log(myFuncNum(myArr1))
// console.log(myFuncStr(myArr2))



// Optimal Solution using generics`

type User={
    name:string,
    age:number
}
const myFunc=<T>(arr:T[]):T=>{
    return arr[0]
}
const myArr1:number[]=[1,3,4,5,6,6]
const myArr2:string[]=["hrt","23423","asdfasdf","asdfwerw"]
console.log(myFunc<number>(myArr1))
console.log(myFunc<string>(myArr2))

console.log(myFunc<User>([{name:"harkirat",age:23},{name:"raju",age:25},]))






